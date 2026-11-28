// Martilar: tepeden gorulen, kanat cirpan silüetler; golgeleri suya ve kagitlara duser.
// Yalniz gunduz, hareket azaltmada yok, sekme gizliyken durur. Hata basmaz.
const NS = 'http://www.w3.org/2000/svg';
// tepeden martı: govde + iki kanat (kanat ucu hafif geriye kivrik)
const KANAT_SOL = 'M0 0 C-10 -3 -22 -2 -34 4 C-40 7 -46 6 -52 3 C-44 10 -30 10 -16 7 C-8 5 -3 4 0 3 Z';
const KANAT_SAG = 'M0 0 C10 -3 22 -2 34 4 C40 7 46 6 52 3 C44 10 30 10 16 7 C8 5 3 4 0 3 Z';
const GOVDE = 'M0 -12 C3 -10 4 -4 3.5 4 C3 10 1.5 14 0 16 C-1.5 14 -3 10 -3.5 4 C-4 -4 -3 -10 0 -12 Z';

function martiSvg(golge) {
  const g = document.createElementNS(NS, 'g');
  const renk = golge ? 'rgba(8,34,38,.38)' : '#f4f2ec';
  const kanatUcu = golge ? renk : '#3a3f44';
  g.innerHTML =
    `<g class="m-sol"><path d="${KANAT_SOL}" fill="${renk}"/><path d="M-40 6 C-44 7 -48 6 -52 3 C-47 8 -43 9 -38 8 Z" fill="${kanatUcu}"/></g>` +
    `<g class="m-sag"><path d="${KANAT_SAG}" fill="${renk}"/><path d="M40 6 C44 7 48 6 52 3 C47 8 43 9 38 8 Z" fill="${kanatUcu}"/></g>` +
    `<path d="${GOVDE}" fill="${renk}"/>` + (golge ? '' : '<path d="M0 -12 L1.6 -16 L-1.6 -16 Z" fill="#e0a23a"/>');
  return g;
}

export function initMarti(opts = {}) {
  const doc = document;
  if (opts.reduced) return { destroy() {} };
  const svg = doc.createElementNS(NS, 'svg');
  svg.setAttribute('aria-hidden', 'true');
  svg.style.cssText = 'position:fixed;inset:0;width:100%;height:100%;pointer-events:none;z-index:5;overflow:hidden';
  doc.body.appendChild(svg);
  const golgeKat = doc.createElementNS(NS, 'g');
  golgeKat.setAttribute('style', 'filter:blur(4px)');
  const kusKat = doc.createElementNS(NS, 'g');
  svg.appendChild(golgeKat); svg.appendChild(kusKat);

  const SAYI = innerWidth < 760 ? 2 : 3;
  const kuslar = [];
  for (let i = 0; i < SAYI; i++) {
    const k = martiSvg(false), gl = martiSvg(true);
    kusKat.appendChild(k); golgeKat.appendChild(gl);
    kuslar.push({ k, gl, faz: Math.random() * 1000, hiz: 0.028 + Math.random() * 0.018, olcek: 0.95 + Math.random() * 0.4, yon: i % 2 ? -1 : 1, y0: 0.15 + 0.6 * Math.random(), salin: Math.random() * 6 });
  }
  const gece = () => doc.documentElement.dataset.theme === 'dark' ||
    (!doc.documentElement.dataset.theme && matchMedia('(prefers-color-scheme: dark)').matches);
  let raf = 0, t0 = 0, son = 0;
  function kare(ts) {
    raf = 0;
    if (doc.hidden) return;
    if (!t0) t0 = ts;
    const t = (ts - t0) / 1000, W = innerWidth, H = innerHeight;
    svg.style.display = gece() ? 'none' : '';
    if (!gece()) {
      for (const b of kuslar) {
        const yol = W + 240;
        const s = ((b.faz + t * b.hiz * yol) % yol) - 120;
        const x = b.yon > 0 ? s : W - s;
        const y = b.y0 * H + Math.sin(t * 0.35 + b.salin) * 40;
        const aci = b.yon > 0 ? 90 : -90;
        const egim = Math.cos(t * 0.35 + b.salin) * 12 * b.yon;
        const cirp = 0.55 + 0.45 * Math.cos(t * 5.2 + b.salin * 3);
        const kanat = `scale(${(0.35 + 0.65 * cirp).toFixed(3)},1)`;
        for (const n of [b.k, b.gl]) {
          n.querySelector('.m-sol').setAttribute('transform', kanat);
          n.querySelector('.m-sag').setAttribute('transform', kanat);
        }
        b.k.setAttribute('transform', `translate(${x.toFixed(1)},${y.toFixed(1)}) rotate(${aci + egim}) scale(${b.olcek})`);
        // gunes sag ustte: golge sola-asagi duser, kusun yuksekligine gore kayar
        b.gl.setAttribute('transform', `translate(${(x - 70 * b.olcek).toFixed(1)},${(y + 90 * b.olcek).toFixed(1)}) rotate(${aci + egim}) scale(${(b.olcek * 0.95).toFixed(3)})`);
      }
    }
    raf = requestAnimationFrame(kare);
  }
  const basla = () => { if (!raf && !doc.hidden) raf = requestAnimationFrame(kare); };
  doc.addEventListener('visibilitychange', () => { if (doc.hidden) { if (raf) cancelAnimationFrame(raf); raf = 0; } else basla(); });
  basla();
  return { destroy() { if (raf) cancelAnimationFrame(raf); svg.remove(); } };
}
