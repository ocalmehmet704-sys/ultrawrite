/* kagit.js - kâğıt ve su. Kâğıt hiç değişmez; yalnız metin, batma ve gölge.
   initKagit({su, reduced}) -> { seek, destroy }.  su yoksa (null) yalnız DOM efektleri. */

var P = [
  ["Babasının ölümünün haberinin gelişiyle birlikte evde derin bir sessizlik oluştu.", "Babasının öldüğü haberi gelince ev sustu.", "Ad zinciri değil fiil. Türkçe olayı fiille anlatır."],
  ["O, onun annesinin ona verdiği yüzüğü parmağından çıkardı.", "Annesinden kalan yüzüğü çıkardı.", "Türkçe zamiri ekte taşır; o, onun, ona İngilizceden gelir."],
  ["Derin bir üzüntü hissetti ve gözleri doldu.", "Çayını soğuyana kadar karıştırdı.", "Duyguya ad koyma, duyguyu taşıyan hareketi yaz."],
  ["Konuşamayacak kadar yorgundu.", "Ağzını açacak hâli yoktu.", "\"-amayacak kadar\" İngilizce \"too ... to\" kalıbının çevirisi."],
  ["Saatine baktı; buluşmaya on dakika vardı. (Mainz, 1455)", "Akşam çanı çaldı; şehrin kapıları birazdan kapanacaktı.", "1455'te kol saati yoktu, zamanı çan söylerdi."]
];

var KIREMIT = 'var(--acc, #b3402b)';
var NS = 'http://www.w3.org/2000/svg';
var DERINLIK = 190; /* px; perspective 1200 ile %13,7 küçülme */

var clamp = function (x, a, b) { a = a === undefined ? 0 : a; b = b === undefined ? 1 : b; return x < a ? a : x > b ? b : x; };
var lerp = function (a, b, t) { return a + (b - a) * t; };
var seg = function (t, a, b) { return clamp((t - a) / (b - a)); };
var eIO = function (t) { return t < .5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2; };
var eOut = function (t) { return 1 - Math.pow(1 - t, 3); };
var pad = function (x) { return (x < 10 ? '0' : '') + x; };

/* ---------- SVG filtreleri ve küçük stil ---------- */
function kur() {
  var d = document;
  if (!d.getElementById('kg-css')) {
    var st = d.createElement('style');
    st.id = 'kg-css';
    st.textContent =
      '.kg-sr{position:absolute!important;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}' +
      '.kg-yazi{display:block}.kg-h{display:inline-block}' +
      '#hero-baslik.kg-ust{display:grid}#hero-baslik.kg-ust>span{grid-area:1/1}';
    d.head.appendChild(st);
  }
  if (!d.getElementById('kg-svg')) {
    var s = d.createElementNS(NS, 'svg');
    s.id = 'kg-svg';
    s.setAttribute('aria-hidden', 'true');
    s.setAttribute('width', '0');
    s.setAttribute('height', '0');
    s.style.cssText = 'position:absolute;width:0;height:0;overflow:hidden;pointer-events:none';
    s.innerHTML =
      '<defs>' +
      '<filter id="kg-su" x="-6%" y="-6%" width="112%" height="112%" color-interpolation-filters="sRGB">' +
      '<feTurbulence id="kg-su-t" type="fractalNoise" baseFrequency="0.010 0.015" numOctaves="2" seed="7" result="n"/>' +
      '<feDisplacementMap id="kg-su-d" in="SourceGraphic" in2="n" scale="0" xChannelSelector="R" yChannelSelector="G" result="d"/>' +
      '<feGaussianBlur id="kg-su-b" in="d" stdDeviation="0" result="b"/>' +
      '<feColorMatrix id="kg-su-m" in="b" type="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"/>' +
      '</filter>' +
      '<filter id="kg-coz" x="-8%" y="-40%" width="116%" height="180%" color-interpolation-filters="sRGB">' +
      '<feTurbulence type="fractalNoise" baseFrequency="0.018 0.03" numOctaves="2" seed="3" result="n"/>' +
      '<feDisplacementMap id="kg-coz-d" in="SourceGraphic" in2="n" scale="0" xChannelSelector="R" yChannelSelector="G"/>' +
      '</filter></defs>';
    d.body.appendChild(s);
  }
}

/* ---------- harf düzeyinde metin ---------- */
function harfle(el, text) {
  el.textContent = '';
  var box = document.createElement('span');
  box.className = 'kg-yazi';
  box.setAttribute('aria-hidden', 'true');
  var sr = document.createElement('span');
  sr.className = 'kg-sr';
  sr.textContent = text;
  var items = [], w = null;
  Array.from(text).forEach(function (ch) {
    var s = document.createElement('span');
    if (ch === ' ') {
      w = null;
      s.textContent = ' ';
      box.appendChild(s);
      items.push({ el: s, sp: 1 });
    } else {
      if (!w) { w = document.createElement('span'); w.style.whiteSpace = 'nowrap'; box.appendChild(w); }
      s.className = 'kg-h';
      s.textContent = ch;
      w.appendChild(s);
      items.push({ el: s, dx: (Math.random() - .35) * 28, dy: (Math.random() - .5) * 20, u: 0 });
    }
  });
  el.appendChild(box);
  el.appendChild(sr);
  return { el: el, box: box, items: items, n: items.length, cnt: 0, wp: -1, dirty: false, ox: 0, ext: 1 };
}
function geoY(Y) {
  var b = Y.box.getBoundingClientRect(), mn = 1e9, mx = -1e9;
  Y.items.forEach(function (it) {
    if (it.sp) return;
    var r = it.el.getBoundingClientRect();
    it.cx = (r.left + r.right) / 2 - b.left;
    mn = Math.min(mn, r.left - b.left);
    mx = Math.max(mx, r.right - b.left);
  });
  Y.ox = mn; Y.ext = Math.max(mx - mn, 1);
  Y.items.forEach(function (it) { if (!it.sp) it.u = clamp((it.cx - mn) / Y.ext); });
}
function geoEl(el) {
  var b = el.getBoundingClientRect(), rg = document.createRange();
  rg.selectNodeContents(el);
  var rs = Array.from(rg.getClientRects()), mn = 1e9, mx = -1e9;
  rs.forEach(function (r) { mn = Math.min(mn, r.left - b.left); mx = Math.max(mx, r.right - b.left); });
  if (mn > mx) { mn = 0; mx = b.width || 1; }
  return { ox: mn, ext: Math.max(mx - mn, 1) };
}
function mask(el, v) { el.style.maskImage = v || ''; el.style.webkitMaskImage = v || ''; }

/* yazılma: harfler sırayla belirir */
function yaz(Y, p) {
  if (Math.abs(Y.wp - p) < 1e-4) return;
  Y.wp = p;
  var n = Y.n + 4;
  Y.items.forEach(function (it, i) {
    if (it.sp) return;
    var o = clamp(p * n - i);
    it.el.style.opacity = p >= 1 ? '' : o.toFixed(2);
  });
}
/* kiremit çizgi: soldan sağa */
function cizgi(Y, p) {
  var c = Math.round(p * Y.n);
  if (c === Y.cnt) return;
  Y.cnt = c;
  Y.items.forEach(function (it, i) {
    var s = it.el.style;
    if (i < c) {
      s.textDecorationLine = 'line-through';
      s.textDecorationColor = KIREMIT;
      s.textDecorationThickness = '0.09em';
    } else {
      s.textDecorationLine = '';
    }
  });
}
/* mürekkep çözülmesi: harf harf bulanır, soldan sağa ilerleyen mask */
function coz(Y, p) {
  var b = Y.box, W = .45;
  if (p <= 0) {
    if (Y.dirty) {
      Y.items.forEach(function (it) { if (!it.sp) { it.el.style.cssText = ''; } });
      b.style.cssText = ''; mask(b, ''); Y.dirty = false; Y.cnt = -1; Y.wp = -1;
    }
    return;
  }
  Y.dirty = true;
  var X = function (u) { return (Y.ox + u * Y.ext).toFixed(1) + 'px'; };
  if (p >= 1) {
    b.style.opacity = '0'; b.style.filter = ''; mask(b, '');
    return;
  }
  b.style.opacity = '';
  Y.items.forEach(function (it) {
    if (it.sp) return;
    var q = eIO(clamp((p * (1 + W) - it.u) / W)), s = it.el.style;
    if (q <= 0) { s.opacity = ''; s.filter = ''; s.transform = ''; return; }
    s.opacity = (1 - q * q).toFixed(3);
    s.filter = 'blur(' + (q * 7).toFixed(1) + 'px)';
    s.transform = 'translate(' + (it.dx * q).toFixed(1) + 'px,' + (it.dy * q).toFixed(1) + 'px) scale(' + (1 + .3 * q).toFixed(3) + ')';
  });
  var F = lerp(-.31, 1, p);
  mask(b, 'linear-gradient(90deg,transparent ' + X(F) + ',#000 ' + X(F + .3) + ')');
  b.style.filter = 'url(#kg-coz)';
  var cd = document.getElementById('kg-coz-d');
  if (cd) cd.setAttribute('scale', (18 * Math.sqrt(p)).toFixed(1));
}
/* belirme: aynı yönde açılan mask, soluktan koyuya */
function belir(el, G, p) {
  if (p <= 0) { el.style.opacity = '0'; mask(el, ''); return; }
  if (p >= 1 || !G) { el.style.opacity = ''; mask(el, ''); return; }
  var E = eIO(p) * 1.35;
  var X = function (u) { return (G.ox + u * G.ext).toFixed(1) + 'px'; };
  mask(el, 'linear-gradient(90deg,#000 ' + X(E - .3) + ',rgba(0,0,0,.3) ' + X(E - .1) + ',transparent ' + X(E) + ')');
  el.style.opacity = (.5 + .5 * p).toFixed(3);
}

/* ---------- ana ---------- */
export function initKagit(opts) {
  opts = opts || {};
  var su = opts.su || null, reduced = !!opts.reduced;
  var d = document, root = d.documentElement;
  var $ = function (s, r) { return (r || d).querySelector(s); };

  var heroBaslik = $('#hero-baslik');
  var heroEski = heroBaslik && $('.eski', heroBaslik);
  var heroYeni = heroBaslik && $('.yeni', heroBaslik);
  var spec = $('.spec');
  var eski = spec && $('.spec-eski', spec), yeni = spec && $('.spec-yeni', spec), not = spec && $('.spec-not', spec);
  var sayac = spec && $('.spec-sayac', spec), ticks = spec && $('.ticks', spec);
  var live = $('#spec-canli');

  /* ticks bir kez kurulur */
  if (ticks) ticks.innerHTML = P.map(function (_, j) { return '<i' + (j === 0 ? ' class="on"' : '') + '></i>'; }).join('');
  var tk = ticks ? Array.from(ticks.querySelectorAll('i')) : [];
  function sayacYaz(k) {
    if (sayac) sayac.textContent = pad(k + 1) + ' / ' + pad(P.length);
    tk.forEach(function (x, j) { x.classList.toggle('on', j <= k); });
  }
  function liveYaz(k, tam) {
    if (!live) return;
    var p = P[k];
    live.textContent = tam ? 'Yapay zekâ yazdı: ' + p[0] + ' Türkçesi: ' + p[1] + ' ' + p[2] : 'Yapay zekâ yazdı: ' + p[0];
  }

  /* ---- reduced-motion: tek durgun kare ---- */
  if (reduced) {
    root.classList.add('kg-azalt');
    if (heroYeni) heroYeni.style.opacity = '';
    if (spec) {
      var p0 = P[0];
      if (eski) {
        eski.textContent = p0[0];
        eski.style.textDecorationLine = 'line-through';
        eski.style.textDecorationColor = KIREMIT;
        eski.style.textDecorationThickness = '0.09em';
      }
      if (yeni) { yeni.textContent = p0[1]; yeni.style.opacity = ''; }
      if (not) { not.textContent = p0[2]; not.style.opacity = ''; }
      sayacYaz(0);
      liveYaz(0, true);
    }
    return { seek: function () {}, destroy: function () {} };
  }

  kur();
  root.classList.add('kg-js');
  if (heroBaslik && heroEski && heroYeni) heroBaslik.classList.add('kg-ust');
  if (eski) eski.style.textDecorationLine = 'none';
  function sabitle() {
    if (!spec) return;
    [[eski, 0], [yeni, 1], [not, 2]].forEach(function (c) {
      var el = c[0];
      if (!el) return;
      el.style.minHeight = '';
      var cl = el.cloneNode(false), m = 0;
      cl.style.cssText = 'position:absolute;visibility:hidden;pointer-events:none;width:' + el.offsetWidth + 'px;minHeight:0';
      cl.setAttribute('aria-hidden', 'true');
      el.parentNode.appendChild(cl);
      P.forEach(function (p) { cl.textContent = p[c[1]]; m = Math.max(m, cl.offsetHeight); });
      cl.remove();
      if (m) el.style.minHeight = m + 'px';
    });
  }
  sabitle();
  if (d.fonts && d.fonts.ready) d.fonts.ready.then(function () { sabitle(); medir(); });
  var F = {
    d: d.getElementById('kg-su-d'), b: d.getElementById('kg-su-b'),
    m: d.getElementById('kg-su-m'), t: d.getElementById('kg-su-t')
  };

  /* ---- kâğıtlar, gölgeler, salınım ---- */
  var sheets = [];
  var seen = new Set();
  d.querySelectorAll('.kagit, .spec').forEach(function (el, i) {
    if (seen.has(el)) return;
    seen.add(el);
    var g = null, n = el.nextElementSibling, pv = el.previousElementSibling;
    if (n && n.classList.contains('golge')) g = n; else if (pv && pv.classList.contains('golge')) g = pv;
    var ph = i * 1.9 + .7;
    sheets.push({
      el: el, g: g, s: 0, vis: true, f: 1, par: 0, cx: 0, cy: 0,
      rest: { dx: 24, dy: 26, b: 12 },
      ph: ph, ax: Math.cos(ph * 2.3), ay: Math.sin(ph * 2.3),
      w1: .62 + (i % 3) * .06, w2: .47 + (i % 4) * .05
    });
  });
  sheets.forEach(function (sh) {
    var y = sh.el.parentNode;
    if (y && y.classList.contains('yaprak')) { y.style.perspective = '1200px'; y.style.transformStyle = 'flat'; }
    if (sh.g) sh.g.style.transform = 'none';
  });
  var specSh = sheets.filter(function (x) { return x.el === spec; })[0] || null;

  function golge(sh, s) {
    var g = sh.g;
    if (!g) return;
    var r = sh.rest;
    g.style.translate = lerp(r.dx, 3, s).toFixed(1) + 'px ' + (lerp(r.dy, 4, s) + sh.par).toFixed(1) + 'px';
    g.style.filter = 'blur(' + lerp(r.b, 1.4, s).toFixed(1) + 'px)';
  }
  function medir() {
    var vw = innerWidth, vh = innerHeight;
    sheets.forEach(function (sh) {
      if (sh.s > 0) return;
      var r = sh.el.getBoundingClientRect();
      sh.cx = r.left + r.width / 2; sh.cy = r.top + r.height / 2;
      sh.f = clamp(1.25 - 1.6 * (r.width * r.height) / (vw * vh), .1, 1);
      sh.par = -.12 * (sh.cy - vh / 2);
      var dp = .5;
      try { if (su && su.depthAt) { var v = su.depthAt(sh.cx, sh.cy); if (isFinite(v)) dp = clamp(v); } } catch (e) { }
      sh.rest = { dx: 22 + 6 * dp, dy: 24 + 6 * dp, b: 7 + 16 * dp };
      golge(sh, 0);
    });
  }
  medir();

  function suRenk() {
    var v = getComputedStyle(root).getPropertyValue('--su-rgb').trim().split(/[\s,]+/).map(Number);
    if (v.length === 3 && v.every(isFinite)) return v;
    return root.dataset.theme === 'dark' ? [18, 52, 86] : [38, 142, 140];
  }
  var renk = suRenk();
  function batir(sh, s, vt) {
    if (!sh) return;
    var on = s > .0005;
    if (!on && sh.s === 0) return;
    if (on && sh.s === 0) renk = suRenk();
    sh.s = on ? s : 0;
    var el = sh.el;
    if (on) {
      el.style.translate = '0 0 ' + (-DERINLIK * s).toFixed(2) + 'px';
      el.style.filter = 'url(#kg-su)';
      var k = .55 * s;
      if (F.d) F.d.setAttribute('scale', (10 * s).toFixed(2));
      if (F.b) F.b.setAttribute('stdDeviation', (.9 * s).toFixed(2));
      if (F.t) F.t.setAttribute('baseFrequency', (.010 + .002 * Math.sin(vt / 700)).toFixed(4) + ' ' + (.015 + .003 * Math.cos(vt / 900)).toFixed(4));
      if (F.m) F.m.setAttribute('values',
        (1 - k).toFixed(3) + ' 0 0 0 ' + (k * renk[0] / 255).toFixed(3) + ' ' +
        '0 ' + (1 - k).toFixed(3) + ' 0 0 ' + (k * renk[1] / 255).toFixed(3) + ' ' +
        '0 0 ' + (1 - k).toFixed(3) + ' 0 ' + (k * renk[2] / 255).toFixed(3) + ' 0 0 0 1 0');
    } else {
      el.style.translate = '';
      el.style.filter = '';
    }
    golge(sh, sh.s);
  }
  function sallan(vt) {
    sheets.forEach(function (sh) {
      if (!sh.vis) return;
      var a = .5 * sh.f * Math.sin(vt * .001 * sh.w1 + sh.ph);
      var sc = 1 + .005 * sh.f * Math.sin(vt * .001 * sh.w2 + sh.ph * 1.7);
      var rot = sh.ax.toFixed(3) + ' ' + sh.ay.toFixed(3) + ' 0 ' + a.toFixed(4) + 'deg';
      sh.el.style.rotate = rot; sh.el.style.scale = sc.toFixed(5);
      if (sh.g) { sh.g.style.rotate = rot; sh.g.style.scale = (sc / (1 + DERINLIK * sh.s / 1200)).toFixed(5); }
    });
  }

  /* ---- sahneler ---- */
  var H = { t: 0, dur: 4300, g: 0, done: !heroEski || !heroYeni, manual: false, seen: true };
  var He = null;
  if (heroEski && heroYeni) {
    He = harfle(heroEski, heroEski.textContent.trim());
    He.box = heroEski; /* mask/filtre CSS ::after çizgisini de kapsasın */
    heroYeni.style.opacity = '0';
    H.ready = false;
    var an = [];
    try { an = heroEski.getAnimations({ subtree: true }).filter(function (a) { return a.playState !== 'finished'; }); } catch (e) { }
    Promise.all(an.map(function (a) { return a.finished.catch(function () { }); })).then(function () { H.t = 1300; H.ready = true; });
  } else { H.ready = true;
  }
  function renderHero(t) {
    if (!He) return;
    if (t >= 1300 && !H.g) { geoY(He); H.gy = geoEl(heroYeni); H.g = 1; }
    coz(He, seg(t, 1300, 3000));
    belir(heroYeni, H.gy, seg(t, 3300, 4300));
  }
  renderHero(0);

  var T0 = 1500, DS = 800, D = T0 + DS;
  var C = {
    k: 0, t: 0, dur: D + 4700 + 4300, round: 0, first: true, started: false, manual: false,
    sw: false, g: 0, gy: null, seen: true, ev: []
  };
  var Ce = null, curRect = null;
  function merkez() {
    var r = (spec || d.body).getBoundingClientRect();
    curRect = r;
    return { x: r.left + r.width / 2, y: r.top + r.height / 2, r: r };
  }
  function kurEv() {
    C.ev = [
      { t: D + 100, f: function () { var m = merkez(); if (su) { su.ripple(m.x, m.y, 1); su.foam(m.r); } } },
      { t: D + 300, f: function () { var m = merkez(); if (su) {
        /* hava kâğıdın kenarlarından kaçar: kabarcıklar çevrede, kâğıdın dışında */
        var r = m.r, pts = [[r.left, r.top + r.height * .3], [r.left, r.top + r.height * .75], [r.right, r.top + r.height * .2],
          [r.right, r.top + r.height * .6], [r.left + r.width * .3, r.bottom], [r.left + r.width * .7, r.bottom], [r.left + r.width * .5, r.top], [r.right, r.bottom - 6]];
        pts.forEach(function (q, i) { su.bubbles(q[0] + (q[0] <= r.left ? -14 : q[0] >= r.right ? 14 : 0), q[1] + (q[1] >= r.bottom ? 14 : q[1] <= r.top ? -14 : 0), { count: i % 2 ? 1 : 2, radius: 16 }); });
      } } },
      { t: D + 2500, f: function () { liveYaz(C.k, true); } },
      { t: D + 3600, f: function () { var m = merkez(); if (su) su.ripple(m.x, m.y, .45); } },
      { t: D + 4500, f: function () { var m = merkez(); if (su) su.ripple(m.x, m.y, .3); } }
    ];
  }
  function begin(k) {
    C.k = k; C.t = 0; C.sw = false; C.g = 0; C.gy = null; C.started = true;
    C.first = (k === 0 && C.round === 0);
    kurEv();
    var p = P[k];
    sayacYaz(k);
    if (eski) { Ce = harfle(eski, p[0]); eski.style.opacity = ''; }
    if (C.first) {
      if (yeni) { yeni.textContent = p[1]; yeni.style.opacity = '0'; mask(yeni, ''); }
      if (not) { not.textContent = p[2]; not.style.opacity = '0'; }
      C.sw = true;
    }
    liveYaz(k, false);
  }
  function renderKart(t, vt) {
    if (!spec || !Ce) return;
    var k = C.k, p = P[k], a = t - D;
    if (!C.first) {
      if (t < 400) {
        var f = (1 - seg(t, 0, 400)).toFixed(3);
        if (yeni) yeni.style.opacity = f;
        if (not) not.style.opacity = f;
      } else if (!C.sw) {
        C.sw = true;
        if (yeni) { yeni.textContent = p[1]; yeni.style.opacity = '0'; mask(yeni, ''); }
        if (not) { not.textContent = p[2]; not.style.opacity = '0'; }
      }
    }
    yaz(Ce, C.first ? 1 : seg(t, 0, 700));
    if (t >= T0 && !C.g) { geoY(Ce); C.gy = yeni ? geoEl(yeni) : null; C.g = 1; }
    cizgi(Ce, seg(t, T0, D));
    var s = a < 0 ? 0 : a < 1400 ? eIO(a / 1400) : a < 3500 ? 1 : a < 4700 ? 1 - eOut((a - 3500) / 1200) : 0;
    batir(specSh, s, vt);
    coz(Ce, seg(a, 500, 2200));
    if (C.sw) {
      var bp = seg(a, 2500, 3500);
      if (yeni) belir(yeni, C.gy, bp);
      if (not) not.style.opacity = bp <= 0 ? '0' : bp >= 1 ? '' : eIO(bp).toFixed(3);
    }
  }
  function olaylar(S, t) {
    S.ev.forEach(function (e) { if (!e.d && t >= e.t) { e.d = 1; e.f(); } });
  }

  /* ---- motor: tek rAF, sanal zaman; gizliyken durur ---- */
  var vt = 0, last = 0, raf = 0, ticking = true;
  function adim(ts) {
    raf = 0;
    if (d.hidden || !ticking) { last = 0; return; }
    var dt = last ? Math.min(ts - last, 100) : 16;
    last = ts; vt += dt;
    if (!H.done && !H.manual && H.seen && H.ready) {
      H.t = Math.min(H.t + dt, H.dur);
      renderHero(H.t);
      if (H.t >= H.dur) H.done = true;
    }
    if (H.done && spec && C.seen && !C.manual) {
      if (!C.started) begin(0);
      C.t = Math.min(C.t + dt, C.dur);
      olaylar(C, C.t);
      renderKart(C.t, vt);
      if (C.t >= C.dur) {
        batir(specSh, 0, vt);
        var nk = (C.k + 1) % P.length;
        if (nk === 0) C.round++;
        begin(nk);
        renderKart(0, vt);
      }
    }
    sallan(vt);
    if (++frame % 45 === 0) medir();
    raf = requestAnimationFrame(adim);
  }
  var frame = 0;
  function basla() { if (!raf && !d.hidden && ticking) { last = 0; raf = requestAnimationFrame(adim); } }
  function onVis() {
    if (d.hidden) { if (raf) { cancelAnimationFrame(raf); raf = 0; } last = 0; } else basla();
  }
  d.addEventListener('visibilitychange', onVis);

  var scrollBekle = 0;
  function onScroll() { if (scrollBekle) return; scrollBekle = requestAnimationFrame(function () { scrollBekle = 0; medir(); }); }
  addEventListener('scroll', onScroll, { passive: true });
  addEventListener('resize', onScroll);

  /* görünürlük: ilk görünümde başla, ekran dışında dur */
  var io = null;
  if ('IntersectionObserver' in window) {
    io = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (e.target === heroBaslik) H.seen = e.isIntersecting;
        if (e.target === spec) C.seen = e.isIntersecting;
        sheets.forEach(function (sh) { if (sh.el === e.target) sh.vis = e.isIntersecting; });
      });
    });
    if (heroBaslik) io.observe(heroBaslik);
    if (spec) io.observe(spec);
    sheets.forEach(function (sh) { if (sh.el !== spec) io.observe(sh.el); });
  }

  basla();

  return {
    /* test için: kartı belirli örnek ve ms'ye sar (otomatik akış durur) */
    seek: function (k, t) {
      H.done = true; H.manual = true; H.t = H.dur; H.ready = true;
      if (He) renderHero(H.dur);
      C.manual = true;
      if (!C.started || C.k !== k) begin(k);
      C.ev.forEach(function (e) { if (e.t > t) e.d = 0; });
      C.t = t;
      olaylar(C, t);
      renderKart(t, vt);
    },
    seekHero: function (t) { H.manual = true; H.ready = true; if (He) renderHero(t); },
    setSu: function (s) { su = s || null; medir(); },
    destroy: function () {
      ticking = false; if (raf) cancelAnimationFrame(raf);
      d.removeEventListener('visibilitychange', onVis);
      removeEventListener('scroll', onScroll); removeEventListener('resize', onScroll);
      if (io) io.disconnect();
    }
  };
}
