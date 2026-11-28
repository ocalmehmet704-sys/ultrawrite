// Giris: ortami algila, su ya da yedegi baslat, sonra kagitlari baslat. Hata basmaz.
const doc = document;
const mq = window.matchMedia ? window.matchMedia('(prefers-reduced-motion: reduce)') : null;
let reduced = !!(mq && mq.matches);
const koyuMq = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : null;
const tema = () => {
  const a = doc.documentElement.dataset.theme;
  if (a === 'dark' || a === 'light') return a;
  return koyuMq && koyuMq.matches ? 'dark' : 'light';
};

function webgl2Var() {
  try {
    const c = doc.createElement('canvas');
    const gl = c.getContext('webgl2');
    const ok = !!gl;
    if (gl && gl.getExtension) { const e = gl.getExtension('WEBGL_lose_context'); if (e) e.loseContext(); }
    return ok;
  } catch (e) { return false; }
}

let canvas = doc.getElementById('su');
let api = null;
let kagitApi = null;
let kullanilan = '';

function tazeCanvas() {
  // WebGL baglami almis tuval 2B baglam veremez: ayni nitelikli yeni tuval koy.
  if (!canvas || !canvas.parentNode) return canvas;
  const y = canvas.cloneNode(false);
  canvas.replaceWith(y);
  canvas = y;
  return y;
}

async function yedegeGec() {
  if (kullanilan === 'yedek' || !canvas) return null;
  try {
    if (api && api.dispose) { try { api.dispose(); } catch (e) {} }
    const m = await import('./yedek.js');
    const a = await m.initYedek(tazeCanvas(), { theme: tema(), reduced });
    api = a; kullanilan = 'yedek';
    if (kagitApi && kagitApi.setSu) { try { kagitApi.setSu(a); } catch (e) {} }
    return a;
  } catch (e) { return null; }
}

async function suDene() {
  const zaman = new Promise((_, r) => setTimeout(() => r(new Error('zaman')), 4000));
  let iptal = false;
  const is = (async () => {
    const m = await import('./su.js');
    const a = await m.initSu(canvas, { theme: tema(), reduced });
    if (iptal) { try { a.pause(); } catch (e) {} throw new Error('gec'); }
    return a;
  })();
  is.catch(() => {});
  try {
    const a = await Promise.race([is, zaman]);
    if (!a) throw new Error('bos');
    return a;
  } catch (e) { iptal = true; return null; }
}

function imlec() {
  let son = { x: 0, y: 0, t: 0 }, sonHalka = 0;
  const kagitta = (t) => t && t.closest && t.closest('.kagit');
  window.addEventListener('pointermove', (e) => {
    if (e.pointerType === 'touch' || !api) return;
    const t = performance.now(), dt = Math.max(1, t - son.t);
    const hiz = Math.hypot(e.clientX - son.x, e.clientY - son.y) / dt;
    son = { x: e.clientX, y: e.clientY, t };
    if (hiz < 0.5 && hiz > 0.03 && t - sonHalka > 450 && !kagitta(e.target) && !doc.hidden && !reduced) {
      sonHalka = t;
      try { api.ripple(e.clientX, e.clientY, 0.35); } catch (x) {}
    }
  }, { passive: true });
  window.addEventListener('pointerdown', (e) => {
    if (!api || reduced || kagitta(e.target)) return;
    if (e.target && e.target.closest && e.target.closest('a,button,input,select,textarea,summary,[role=tab]')) return;
    try { api.ripple(e.clientX, e.clientY, e.pointerType === 'touch' ? 0.8 : 0.7); } catch (x) {}
  }, { passive: true });
}

async function basla() {
  if (!canvas) return;
  const gl2 = webgl2Var();
  if (gl2 && !reduced) {
    api = await suDene();
    if (api) kullanilan = 'su';
  }
  if (!api && gl2 && reduced) {
    // reduced: su varsa tek kare
    api = await suDene();
    if (api) { kullanilan = 'su'; try { api.renderStill(); } catch (e) {} }
  }
  if (!api) { if (kullanilan !== 'yedek') { if (gl2) tazeCanvas(); await yedegeGec(); } }
  else {
    canvas.addEventListener('webglcontextlost', (e) => { e.preventDefault(); yedegeGec(); });
    if (reduced) { try { api.renderStill(); } catch (e) {} }
  }

  try {
    const k = await import('./kagit.js');
    kagitApi = await k.initKagit({ su: api || null, reduced });
  } catch (e) { /* sayfa kagitsiz da okunur */ }

  try {
    const mm = await import('./marti.js');
    mm.initMarti({ reduced });
  } catch (e) { /* martisiz da olur */ }

  imlec();

  doc.addEventListener('themechange', (e) => {
    const t = (e.detail && e.detail.theme) || tema();
    if (api) { try { api.setTheme(t); if (reduced) api.renderStill(); } catch (x) {} }
  });
  doc.addEventListener('visibilitychange', () => {
    if (!api) return;
    try { doc.hidden ? api.pause() : api.resume(); } catch (x) {}
  });
  let bekle = false;
  window.addEventListener('scroll', () => {
    if (bekle) return; bekle = true;
    requestAnimationFrame(() => { bekle = false; if (api) { try { api.setScroll(window.scrollY); } catch (x) {} } });
  }, { passive: true });
  if (mq) {
    const f = (e) => { reduced = e.matches; if (api) { try { reduced ? (api.pause(), api.renderStill()) : api.resume(); } catch (x) {} } };
    mq.addEventListener ? mq.addEventListener('change', f) : mq.addListener(f);
  }
  if (doc.hidden && api) { try { api.pause(); } catch (x) {} }
}

try { basla().catch(() => {}); } catch (e) {}
