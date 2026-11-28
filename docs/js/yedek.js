// Yedek: tepeden bakilmis duz golgeli ucgen mozaigin durgun 2B cizimi.
const PAL = {
  light: { sig: [143, 217, 208], kum: [232, 220, 170], derin: [14, 78, 72], isik: 1 },
  dark: { sig: [44, 84, 120], kum: [60, 92, 120], derin: [8, 18, 44], isik: 0.8 }
};
const mix = (a, b, t) => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t];
function hash(x, y) { const s = Math.sin(x * 127.1 + y * 311.7) * 43758.5453; return s - Math.floor(s); }
function vnoise(x, y) {
  const xi = Math.floor(x), yi = Math.floor(y), xf = x - xi, yf = y - yi;
  const u = xf * xf * (3 - 2 * xf), v = yf * yf * (3 - 2 * yf);
  const a = hash(xi, yi), b = hash(xi + 1, yi), c = hash(xi, yi + 1), d = hash(xi + 1, yi + 1);
  return a + (b - a) * u + (c - a) * v + (a - b - c + d) * u * v;
}
function derinlik(x, y) { return vnoise(x * 0.9, y * 0.9) * 0.65 + vnoise(x * 2.3 + 7, y * 2.3 + 3) * 0.35; }

export async function initYedek(canvas, opts = {}) {
  let theme = opts.theme === 'dark' ? 'dark' : 'light';
  const ctx = canvas.getContext('2d');
  let W = 0, H = 0, raf = 0;
  function ciz() {
    if (!ctx) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    W = window.innerWidth; H = window.innerHeight;
    const pw = Math.round(W * dpr), ph = Math.round(H * dpr);
    if (canvas.width !== pw) canvas.width = pw;
    if (canvas.height !== ph) canvas.height = ph;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const p = PAL[theme];
    const S = Math.max(46, Math.min(W, H) / 11);
    const cols = Math.ceil(W / S) + 2, rows = Math.ceil(H / S) + 2;
    const pts = [];
    for (let j = 0; j <= rows; j++) {
      pts[j] = [];
      for (let i = 0; i <= cols; i++) {
        pts[j][i] = [(i - 0.5 + (hash(i, j) - 0.5) * 0.7) * S, (j - 0.5 + (hash(j + 9, i + 4) - 0.5) * 0.7) * S];
      }
    }
    ctx.fillStyle = `rgb(${p.derin.join(',')})`;
    ctx.fillRect(0, 0, W, H);
    const tri = (a, b, c) => {
      const cx = (a[0] + b[0] + c[0]) / 3, cy = (a[1] + b[1] + c[1]) / 3;
      const d = Math.min(1, Math.max(0, (derinlik(cx / S * 0.5, cy / S * 0.5) - 0.2) / 0.6));
      const sig = mix(p.sig, p.kum, hash(Math.floor(cx), Math.floor(cy)) * 0.6);
      let col = mix(sig, p.derin, Math.pow(d, 0.9));
      // duz golge: yuz egimine gore sag-ust isik
      const nx = (b[1] - a[1]) * (c[0] - a[0]) - (b[0] - a[0]) * (c[1] - a[1]);
      const k = (hash(cx * 0.37, cy * 0.51) - 0.5) * 0.22 + (nx > 0 ? 0.04 : -0.04);
      col = col.map(v => Math.max(0, Math.min(255, v * (1 + k) * p.isik)));
      const s = `rgb(${col.map(Math.round).join(',')})`;
      ctx.fillStyle = s; ctx.strokeStyle = s; ctx.lineWidth = 0.7;
      ctx.beginPath(); ctx.moveTo(a[0], a[1]); ctx.lineTo(b[0], b[1]); ctx.lineTo(c[0], c[1]); ctx.closePath();
      ctx.fill(); ctx.stroke();
    };
    for (let j = 0; j < rows; j++) for (let i = 0; i < cols; i++) {
      const a = pts[j][i], b = pts[j][i + 1], c = pts[j + 1][i], d = pts[j + 1][i + 1];
      if ((i + j) % 2) { tri(a, b, c); tri(b, d, c); } else { tri(a, b, d); tri(a, d, c); }
    }
  }
  const yeniden = () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(ciz); };
  window.addEventListener('resize', yeniden);
  ciz();
  const no = () => {};
  return {
    ripple: no, bubbles: no, foam: no, setScroll: no, pause: no, resume: no,
    renderStill: ciz,
    depthAt: () => 0.5,
    setTheme(t) { theme = t === 'dark' ? 'dark' : 'light'; ciz(); },
    dispose() { window.removeEventListener('resize', yeniden); cancelAnimationFrame(raf); }
  };
}
export default initYedek;
