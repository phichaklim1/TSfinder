// Auto-generated HOSTED build — loads database.xlsx directly (no file picker)
(function(){
  const LAYOUT = [{"type": "title", "label": "Stock symbol", "row": 1, "col": 1, "rowspan": 1, "colspan": 2}, {"type": "field", "label": "Company Name", "row": 2, "col": 1, "rowspan": 1, "colspan": 4}, {"type": "field", "label": "Business details", "row": 3, "col": 1, "rowspan": 1, "colspan": 4}, {"type": "field", "label": "Sector", "row": 4, "col": 1, "rowspan": 1, "colspan": 2}, {"type": "field", "label": "Sector2", "row": 4, "col": 3, "rowspan": 1, "colspan": 2}, {"type": "field", "label": "Website", "row": 5, "col": 1, "rowspan": 1, "colspan": 2}, {"type": "field", "label": "%Dividend Yield", "row": 5, "col": 3, "rowspan": 1, "colspan": 2}, {"type": "field", "label": "Group", "row": 6, "col": 1, "rowspan": 1, "colspan": 2}, {"type": "field", "label": "Price Zone", "row": 6, "col": 3, "rowspan": 1, "colspan": 2}, {"type": "field", "label": "Symbol", "row": 7, "col": 1, "rowspan": 1, "colspan": 2}, {"type": "field", "label": "XD in…day [Bht]", "row": 7, "col": 3, "rowspan": 1, "colspan": 2}, {"type": "section", "label": "งบการเงินเทียบกับ Q ที่แล้ว", "row": 8, "col": 1, "rowspan": 3, "colspan": 1, "color": "#F6D26B"}, {"type": "field", "label": "Asset QoQ% Diff", "row": 8, "col": 2, "rowspan": 1, "colspan": 1}, {"type": "field", "label": "Liabilities QoQ% Diff", "row": 8, "col": 3, "rowspan": 1, "colspan": 1}, {"type": "field", "label": "Equity QoQ% Diff", "row": 8, "col": 4, "rowspan": 1, "colspan": 1}, {"type": "section", "label": "เปรียบเทียบกำไร/ขาดทุน Q ก่อนหน้าและล่าสุด", "row": 11, "col": 1, "rowspan": 1, "colspan": 1, "color": "#F28B82"}, {"type": "field", "label": "Profit or Loss Last Q", "row": 11, "col": 2, "rowspan": 1, "colspan": 1}, {"type": "field", "label": "Profit or Loss in (M.Bht) Last Q", "row": 11, "col": 3, "rowspan": 1, "colspan": 1}, {"type": "field", "label": "EBITDA (M.Bht)", "row": 11, "col": 4, "rowspan": 1, "colspan": 1}, {"type": "section", "label": "ไตรมาสล่าสุด", "row": 12, "col": 1, "rowspan": 1, "colspan": 1, "color": "#F39D4D"}, {"type": "field", "label": "Profit or Loss last year", "row": 12, "col": 2, "rowspan": 1, "colspan": 1}, {"type": "section", "label": "งบกระแสเงินสด", "row": 13, "col": 1, "rowspan": 3, "colspan": 1, "color": "#A7E879"}, {"type": "field", "label": "Cash Flow Quality", "row": 13, "col": 2, "rowspan": 1, "colspan": 1}, {"type": "field", "label": "Operating Cash Flow (M.Baht)", "row": 14, "col": 2, "rowspan": 1, "colspan": 1}, {"type": "field", "label": "Investing Cash Flow (M.Baht)", "row": 14, "col": 3, "rowspan": 1, "colspan": 1}, {"type": "field", "label": "Financing Cash Flow (M.Baht)", "row": 14, "col": 4, "rowspan": 1, "colspan": 1}, {"type": "field", "label": "Net Cash Flow (M.Baht)", "row": 15, "col": 2, "rowspan": 1, "colspan": 3}, {"type": "section", "label": "ราคาและการเปลี่ยนแปลง", "row": 16, "col": 1, "rowspan": 2, "colspan": 1, "color": "#86E1FF"}, {"type": "field", "label": "Prev. Last (Bht)", "row": 16, "col": 2, "rowspan": 1, "colspan": 1}, {"type": "field", "label": "Open (Bht)", "row": 16, "col": 3, "rowspan": 1, "colspan": 1}, {"type": "field", "label": "Last (Bht)", "row": 16, "col": 4, "rowspan": 1, "colspan": 1}, {"type": "field", "label": "% PriceChange", "row": 17, "col": 2, "rowspan": 1, "colspan": 2}, {"type": "field", "label": "% PriceGrowth in 3 days", "row": 17, "col": 4, "rowspan": 1, "colspan": 1}, {"type": "section", "label": "อัตราหมุนเวียน/วอลุ่ม/มูลค่า", "row": 18, "col": 1, "rowspan": 3, "colspan": 1, "color": "#E6E0FF"}, {"type": "field", "label": "TurnoverRatio(%)", "row": 18, "col": 2, "rowspan": 1, "colspan": 1}, {"type": "field", "label": "% Vol Turnover", "row": 18, "col": 3, "rowspan": 1, "colspan": 1}, {"type": "field", "label": "Volume", "row": 18, "col": 4, "rowspan": 1, "colspan": 1}, {"type": "field", "label": "% Vol. growth", "row": 19, "col": 2, "rowspan": 1, "colspan": 1}, {"type": "field", "label": "Value (‘000 Bht)", "row": 19, "col": 3, "rowspan": 1, "colspan": 1}, {"type": "field", "label": "Price Spread change warning", "row": 20, "col": 2, "rowspan": 1, "colspan": 1}, {"type": "section", "label": "มูลค่าต่างๆ", "row": 21, "col": 1, "rowspan": 2, "colspan": 1, "color": "#C8A27B"}, {"type": "field", "label": "P/BV", "row": 21, "col": 2, "rowspan": 1, "colspan": 1}, {"type": "field", "label": "M.Cap (M.Bht)", "row": 21, "col": 3, "rowspan": 1, "colspan": 1}, {"type": "field", "label": "Equity (M.Bht)", "row": 21, "col": 4, "rowspan": 1, "colspan": 1}, {"type": "field", "label": "%FF", "row": 22, "col": 2, "rowspan": 1, "colspan": 1}, {"type": "field", "label": "P/E", "row": 22, "col": 3, "rowspan": 1, "colspan": 1}, {"type": "section", "label": "NVDR", "row": 23, "col": 1, "rowspan": 1, "colspan": 1, "color": "#FFF36E"}, {"type": "field", "label": "NVDR Vol.", "row": 23, "col": 2, "rowspan": 1, "colspan": 2}, {"type": "field", "label": "NVDR Volume (%Buy) since 1/6/65", "row": 23, "col": 4, "rowspan": 1, "colspan": 1}, {"type": "section", "label": "อื่น ๆ", "row": 24, "col": 1, "rowspan": 2, "colspan": 1, "color": "#B7F0FF"}, {"type": "field", "label": "Start date", "row": 24, "col": 2, "rowspan": 1, "colspan": 1}, {"type": "field", "label": "Stock age (Y-M-D)", "row": 24, "col": 3, "rowspan": 1, "colspan": 1}, {"type": "field", "label": "IPO price (Bht)", "row": 24, "col": 4, "rowspan": 1, "colspan": 1}, {"type": "field", "label": "Price Spread", "row": 25, "col": 2, "rowspan": 1, "colspan": 1}, {"type": "field", "label": "Securities Pledged in Margin Accounts (Vol.)", "row": 25, "col": 3, "rowspan": 1, "colspan": 2}];
  const DECIMALS = {"Asset QoQ% Diff": 2, "Liabilities QoQ% Diff": 2, "Equity QoQ% Diff": 2, "Profit or Loss in (MB) Last Q": 2, "Ebitda": 2, "%FF": 2, "TurnoverRatio(%)": 2, "P/E": 2, "%Dividend Yield": 2, "Prev. Last (Bht)": 2, "Open (Bht)": 2, "Last (Bht)": 2, "% PriceChange": 2, "% PriceGrowth in 3 days": 2, "Price Spread change warning": 2, "% Vol Turnover": 2, "Volume": 0, "% Vol. growth": 2, "Value (‘000 Bht)": 2, "NVDR Vol.": 0, "NVDR\nVolume (%Buy) since 1/6/65": 2, "P/BV": 2, "M.Cap (M.Bht)": 2, "Equity (M.Bht)": 2, "IPO price (Bht)": 2, "Price Spread": 2, "Securities Pledged in Margin Accounts\n(Vol.)": 0, "Operating Cash Flow (M.Baht)": 2, "Investing Cash Flow (M.Baht)": 2, "Financing Cash Flow (M.Baht)": 2, "Net Cash Flow (M.Baht)": 2};
  const NEG_RED = new Set(["% PriceChange", "% PriceGrowth in 3 days", "% Vol Turnover", "% Vol. growth", "%Dividend Yield", "%FF", "Asset QoQ% Diff", "EBITDA (M.Bht)", "Equity (M.Bht)", "Equity QoQ% Diff", "Financing Cash Flow (M.Baht)", "IPO price (Bht)", "Investing Cash Flow (M.Baht)", "Last (Bht)", "Liabilities QoQ% Diff", "M.Cap (M.Bht)", "NVDR\nVolume (%Buy) since 1/6/65", "NVDR Vol.", "Net Cash Flow (M.Baht)", "Open (Bht)", "Operating Cash Flow (M.Baht)", "P/BV", "P/E", "Prev. Last (Bht)", "Price Spread", "Price Spread change warning", "Profit or Loss in (M.Bht) Last Q", "Securities Pledged in Margin Accounts\n(Vol.)", "TurnoverRatio(%)", "Value (‘000 Bht)", "Volume"]);

  const statusEl = document.getElementById('status');
  const query  = document.getElementById('query');
  const btn    = document.getElementById('searchBtn');
  const grid   = document.getElementById('grid');
  const big    = document.getElementById('bigtitle');

  let HEADERS=[], DATA=[];

  const norm = s => (s==null?'':String(s)).trim();
  const toNum = v => typeof v==='number'?v: (typeof v==='string'? ((n=Number(v.replace(/,/g,''))), isNaN(n)?null:n):null);
  const excelDate = n => {const ms=(n-25569)*86400*1000; const d=new Date(ms); return isNaN(d.getTime())?null:d;};
  const dayfmt = d => ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'][d.getDay()]+', '+String(d.getDate()).padStart(2,'0')+'/'+String(d.getMonth()+1).padStart(2,'0')+'/'+String(d.getFullYear());
  const symbolHeader = ()=>{for(const k of ['Stock symbol','Symbol','stock symbol','symbol','code','ticker','ชื่อย่อหุ้น']) if(HEADERS.includes(k)) return k; return HEADERS[0]||'';};

  function ensureUrl(s){ if(!s) return null; if(/^https?:\/\//i.test(s)) return s; if(/^www\./i.test(s)) return 'https://'+s; if(/^[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(s)) return 'https://'+s; return null; }

  function format(label, raw){
    if (label.toLowerCase()==='start date'){
      if (typeof raw==='number'){ const d=excelDate(raw); if(d) return {text:dayfmt(d)}; }
      const d=new Date(raw); if(!isNaN(d.getTime())) return {text:dayfmt(d)};
    }
    if (label.toLowerCase()==='website'){
      const u=ensureUrl(norm(raw)); return {html: u? `<a href="${u}" target="_blank" rel="noopener">${norm(raw)}</a>` : '-'};
    }
    const d = DECIMALS[label];
    const n = toNum(raw);
    if (d!=null){
      if (n==null) return {text: norm(raw)||'-'};
      const cls = (NEG_RED.has(label) && n<0) ? 'negative' : '';
      return {text: new Intl.NumberFormat('en-US',{minimumFractionDigits:d,maximumFractionDigits:d}).format(n), cls};
    }
    if (n!=null) return {text: new Intl.NumberFormat('en-US').format(n), cls: (NEG_RED.has(label)&&n<0)?'negative':''};
    return {text: (raw==null||String(raw).trim()==='')?'-':String(raw)};
  }

  function place(div, item){
    div.style.gridColumn = `${item.col} / span ${item.colspan||1}`;
    div.style.gridRow = `${item.row} / span ${item.rowspan||1}`;
  }

  function renderRow(row){
    grid.innerHTML=''; big.textContent = row[symbolHeader()] || '—';
    for(const item of LAYOUT){
      if(item.type==='title') continue;
      const div = document.createElement('div');
      div.className = 'tile' + (item.type==='section'?' section':'');
      if(item.type==='section' && item.color) div.style.background = item.color;
      if(item.type==='field'){
        const raw = row[item.label]; 
        const res = format(item.label, raw);
        const val = res.html ? res.html : escapeHtml(res.text||'-');
        div.innerHTML = `<div class="label">${item.label}</div><div class="value ${res.cls||''}">${val}</div>`;
      }else{
        div.innerHTML = `<div class="label">${item.label}</div>`;
      }
      place(div, item);
      grid.appendChild(div);
    }
  }

  const escapeHtml = s => String(s).replace(/[&<>"']/g, m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;','\'':'&#39;'}[m]));

  function doSearch(){
    const q = norm(query.value).toUpperCase();
    if(!q) return;
    const h = symbolHeader();
    const hit = DATA.find(r => norm(r[h]).toUpperCase()===q);
    if(hit){ renderRow(hit); document.getElementById('result').style.display='block'; }
    else alert('ไม่พบหุ้น: '+q);
  }

  async function loadDatabase(){ 
    try {
      const res = await fetch('database.xlsx', {cache:'no-store'});
      const buf = await res.arrayBuffer();
      const wb = XLSX.read(new Uint8Array(buf), {type:'array'});
      const ws = wb.Sheets[wb.SheetNames[0]];
      const sheet = XLSX.utils.sheet_to_json(ws, {header:1, raw:true, defval:null});
      const hdr = (sheet[0]||[]).map(x=>norm(x));
      HEADERS.splice(0,HEADERS.length,...hdr); DATA.length=0;
      for(let i=1;i<sheet.length;i++){ 
        const row = sheet[i]||[]; 
        if(!row.some(v=>v!=null && String(v).trim()!=='')) continue; 
        const obj={}; 
        for(let j=0;j<hdr.length;j++) obj[hdr[j]] = row[j]; 
        DATA.push(obj); 
      }
      statusEl.textContent = 'โหลดฐานข้อมูลแล้ว: '+DATA.length+' แถว';
      query.focus();
    } catch(err) {
      statusEl.textContent = 'โหลดฐานข้อมูลไม่สำเร็จ: ' + err.message;
    }
  }

  btn.addEventListener('click', doSearch);
  query.addEventListener('keydown', e => { if(e.key==='Enter'){ e.preventDefault(); doSearch(); } });

  loadDatabase();
})();
