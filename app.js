/* Thai Stock Finder — HOSTED v2 */
const TSF = (() => {
  const STATUS = () => document.getElementById('status');
  const QUERY = () => document.getElementById('query');
  const BTN = () => document.getElementById('searchBtn');
  const FORM = () => document.getElementById('searchForm');
  const PICK = () => document.getElementById('picker');
  const PICK_WRAP = () => document.getElementById('pickerWrap');
  const CARD = () => document.getElementById('result');
  const OUT_SYMBOL = () => document.getElementById('out-symbol');
  const OUT_META = () => document.getElementById('out-meta');
  const FIELDS = () => document.getElementById('fields');

  let HEADERS=[], DATA=[], ORDER=[], MAP={}, META_DATE='';

  const ZW=/\u200B|\u200C|\u200D|\uFEFF/g;
  const normalize = s => (s==null?'': String(s).normalize('NFKC').replace(ZW,'').trim());
  const normKey = s => normalize(s).toLowerCase().replace(/[\u2018\u2019\u201C\u201D‘’“”]/g,'"').replace(/[(){}\[\]%.,:\/\\\-]/g,' ').replace(/\s+/g,' ').trim();

  function symbolHeader(){
    const pref=['stock symbol','symbol','ticker','code','stock code','ชื่อย่อหุ้น','ชื่อย่อ','ตัวย่อ','รหัสหุ้น','รหัส','สัญลักษณ์'];
    for(const p of pref){ const h=HEADERS.find(h=>normKey(h)===p); if(h) return h; }
    let best=null,score=-1;
    for(const h of HEADERS){
      let seen=0, ok=0;
      for(const row of DATA){ const v=row[h]; if(v==null||String(v).trim()==='') continue; seen++; const s=String(v).toUpperCase().trim(); if(/^[A-Z0-9]{2,6}(\.[A-Z0-9])?(-R)?$/.test(s)) ok++; if(seen>=100) break; }
      const sc = seen? ok/seen : 0; if(sc>score){score=sc; best=h;}
    }
    return best || HEADERS[0] || '';
  }

  async function loadFields(){
    ORDER=[];
    try{
      const res = await fetch('fields.json',{cache:'no-store'});
      if(res.ok){ const j=await res.json(); ORDER = Array.isArray(j.fields)? j.fields.slice(): []; }
    }catch{}
    if(!ORDER.length){
      try{
        const el=document.getElementById('fields-embed');
        if(el){ const j=JSON.parse(el.textContent); ORDER = Array.isArray(j.fields)? j.fields.slice(): []; }
      }catch{}
    }
    if(!ORDER.length) ORDER=HEADERS.slice();
  }

  function buildMap(){
    const list=HEADERS.map(h=>({raw:h,key:normKey(h)}));
    MAP={};
    for(const label of ORDER){
      const k=normKey(label);
      let hit=list.find(x=>x.key===k) || list.find(x=>x.key.includes(k) || k.includes(x.key));
      MAP[label]=hit?hit.raw:null;
    }
  }

  const numberFmt2=new Intl.NumberFormat('en-US',{minimumFractionDigits:2,maximumFractionDigits:2});
  const integerFmt=new Intl.NumberFormat('en-US');
  const explicit2dec=new Set(['prev last bht','pricechange','nvdr volume buy since 1 6 65','ipo price bht']);
  const explicitInt=new Set(['securities pledged in margin accounts vol']);
  const startDateKeys=new Set(['start date']);
  const moneyKeys=['baht','mb','m cap','market cap','value','asset','assets','liabilities','equity','revenue','profit','loss','ebitda','cash','debt','capital','capex','book value'];
  const percentKeys=['%','percent','ratio','yield','turnover','growth','ff','roe','roa','margin'];

  function classifyField(label){
    const k=normKey(label);
    if(startDateKeys.has(k)) return 'startdate';
    if(explicit2dec.has(k)) return '2dec';
    if(explicitInt.has(k)) return 'int';
    if(percentKeys.some(w=>k.includes(w))) return 'percent';
    if(moneyKeys.some(w=>k.includes(w))) return 'money';
    if(/website|site|url/i.test(label)) return 'url';
    return 'other';
  }
  function toNumber(v){
    if(typeof v==='number') return v;
    if(typeof v==='string'){ const s=v.replace(/,/g,'').trim(); const n=parseFloat(s); if(!isNaN(n)) return n; }
    return null;
  }
  function parseExcelDate(n){ const ms=(n-25569)*86400*1000; const d=new Date(ms); return isNaN(d.getTime())?null:d; }
  function parseDate(v){
    if(v==null) return null;
    if(typeof v==='number') return parseExcelDate(v);
    if(typeof v==='string'){
      const s=v.trim(); const m=s.match(/^(\d{1,2})[\/\-.](\d{1,2})[\/\-.](\d{2,4})$/);
      if(m){ let dd=+m[1], mm=+m[2]-1; let yy=+m[3]; if(yy<100) yy=2000+yy; const d=new Date(yy,mm,dd); return isNaN(d.getTime())?null:d; }
      const d2=new Date(s.replace(/ /g,'T')); return isNaN(d2.getTime())?null:d2;
    }
    return null;
  }
  function formatStartDate(v){
    const d=parseDate(v); if(!d) return String(v||'-').trim()||'-';
    const days=['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
    const dd=String(d.getDate()).padStart(2,'0');
    const mm=String(d.getMonth()+1).padStart(2,'0');
    const yy=String(d.getFullYear()).slice(-2);
    return days[d.getDay()]+', '+dd+'/'+mm+'/'+yy;
  }
  function ensureUrl(v){
    const s=String(v||'').trim(); if(!s) return null;
    if(/^https?:\/\//i.test(s)) return s;
    if(/^www\./i.test(s)) return 'https://'+s;
    if(/^[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i.test(s)) return 'https://'+s;
    return null;
  }
  function formatValue(label,v){
    const cls=classifyField(label);
    if(cls==='url'){ const u=ensureUrl(v); return u?{type:'link',href:u,text:String(v).trim()}:{type:'text',text:String(v||'-').trim()||'-'}; }
    if(cls==='startdate') return {type:'text', text: formatStartDate(v)};
    const n=toNumber(v);
    if(cls==='2dec') return {type:'text', text: n==null ? (String(v||'').trim()||'-') : numberFmt2.format(n)};
    if(cls==='int')  return {type:'text', text: n==null ? (String(v||'').trim()||'-') : integerFmt.format(Math.round(n))};
    if(cls==='percent') return {type:'text', text: n==null ? (String(v||'').trim()||'-') : numberFmt2.format(n)};
    if(cls==='money')   return {type:'text', text: n==null ? (String(v||'').trim()||'-') : numberFmt2.format(n)};
    if(n!=null){ if(Math.abs(n)>=1000 && Number.isInteger(n)) return {type:'text', text: integerFmt.format(n)}; return {type:'text', text: String(v)}; }
    return {type:'text', text:(v==null||String(v).trim()==='')?'-':String(v).trim()};
  }

  function render(row){
    const symCol=symbolHeader();
    OUT_SYMBOL().textContent=row[symCol]?String(row[symCol]):'-';
    OUT_META().textContent=META_DATE?('อัปเดตจากชีต: '+META_DATE):'';
    FIELDS().innerHTML='';
    for(const label of ORDER){
      const col=MAP[label];
      const raw=col?row[col]:null;
      const res=formatValue(label,raw);
      const box=document.createElement('div');
      box.className='field';
      if(res.type==='link') box.innerHTML='<div class="label">'+label+'</div><div class="value"><a class="val-link" target="_blank" rel="noopener" href="'+res.href+'">'+res.text+'</a></div>';
      else box.innerHTML='<div class="label">'+label+'</div><div class="value">'+res.text+'</div>';
      FIELDS().appendChild(box);
    }
    CARD().style.display='block';
  }

  function doSearch(){
    const q=normalize(QUERY().value).toUpperCase();
    if(!q){ CARD().style.display='none'; return; }
    const symCol=symbolHeader();
    const hit=DATA.find(r=>normalize(r[symCol]).toUpperCase()===q);
    if(hit){ render(hit); STATUS().textContent='พบ: '+q; }
    else { STATUS().textContent='ไม่พบ: '+q; }
  }

  function wireUI(){
    BTN().addEventListener('click', e=>{ e.preventDefault(); doSearch(); });
    FORM().addEventListener('submit', e=>{ e.preventDefault(); doSearch(); });
    PICK().addEventListener('change', e=>{
      const f=e.target.files && e.target.files[0];
      if(!f){ STATUS().textContent='ยังไม่ได้เลือกไฟล์'; return; }
      STATUS().textContent='กำลังอ่านไฟล์ (อัปโหลดโดยผู้ดูแล)...';
      const r=new FileReader();
      r.onload=async ev=>{
        try{
          const wb=XLSX.read(new Uint8Array(ev.target.result),{type:'array'});
          const ws=wb.Sheets[wb.SheetNames[0]];
          const sheet=XLSX.utils.sheet_to_json(ws,{header:1,raw:true,defval:null});
          let headerRow=0,best=-1;
          for(let r=0;r<Math.min(40,sheet.length);r++){
            const row=sheet[r]||[]; let score=0;
            for(const c of row){ if(typeof c==='string'){ const t=c.trim(); if(t && !/^\d/.test(t)) score++; } }
            if(score>best){best=score;headerRow=r;}
          }
          const rawHeaders=sheet[headerRow]||[];
          HEADERS=rawHeaders.map(h=>normalize(h)).filter(Boolean);
          META_DATE=(sheet[0] && sheet[0][0])?String(sheet[0][0]):'';
          DATA=[];
          for(let r=headerRow+1;r<sheet.length;r++){
            const row=sheet[r]||[];
            if(!row.some(v=>v!=null && String(v).trim()!=='')) continue;
            const obj={};
            for(let i=0;i<HEADERS.length;i++){ obj[HEADERS[i]]=row[i]; }
            DATA.push(obj);
          }
          await loadFields(); buildMap();
          STATUS().textContent='โหลดข้อมูลสำเร็จ: '+DATA.length+' แถว • คอลัมน์รหัสหุ้น: '+symbolHeader();
          QUERY().focus();
        }catch(err){ STATUS().textContent='อ่านไฟล์ไม่สำเร็จ: '+(err && err.message ? err.message : err); }
      };
      r.readAsArrayBuffer(f);
    });
  }

  async function startHosted(){
    wireUI();
    QUERY().focus();
    STATUS().textContent='กำลังโหลดฐานข้อมูลจากเซิร์ฟเวอร์...';
    PICK_WRAP().style.display='none';
    try{
      const res=await fetch('database.xlsx?v='+Date.now(),{cache:'no-store'});
      if(!res.ok) throw new Error('ไม่พบไฟล์ database.xlsx บนเซิร์ฟเวอร์');
      const buf=new Uint8Array(await res.arrayBuffer());
      const wb=XLSX.read(buf,{type:'array'});
      const ws=wb.Sheets[wb.SheetNames[0]];
      const sheet=XLSX.utils.sheet_to_json(ws,{header:1,raw:true,defval:null});
      let headerRow=0,best=-1;
      for(let r=0;r<Math.min(40,sheet.length);r++){
        const row=sheet[r]||[]; let score=0;
        for(const c of row){ if(typeof c==='string'){ const t=c.trim(); if(t && !/^\d/.test(t)) score++; } }
        if(score>best){best=score;headerRow=r;}
      }
      const rawHeaders=sheet[headerRow]||[];
      HEADERS=rawHeaders.map(h=>normalize(h)).filter(Boolean);
      META_DATE=(sheet[0] && sheet[0][0])?String(sheet[0][0]):'';
      DATA=[];
      for(let r=headerRow+1;r<sheet.length;r++){
        const row=sheet[r]||[];
        if(!row.some(v=>v!=null && String(v).trim()!=='')) continue;
        const obj={};
        for(let i=0;i<HEADERS.length;i++){ obj[HEADERS[i]]=row[i]; }
        DATA.push(obj);
      }
      await loadFields(); buildMap();
      STATUS().textContent='โหลดข้อมูลสำเร็จ: '+DATA.length+' แถว • คอลัมน์รหัสหุ้น: '+symbolHeader();
    }catch(err){
      STATUS().textContent='โหลดไฟล์จากเซิร์ฟเวอร์ไม่ได้: '+(err && err.message?err.message:err)+'. คุณยังสามารถอัปโหลดไฟล์ได้ด้านล่าง (เฉพาะผู้ดูแล)';
      PICK_WRAP().style.display='block';
    }
  }

  return { startHosted };
})();
