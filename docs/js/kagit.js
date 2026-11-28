/* kagit.js - kâğıt ve su. Kâğıt hiç değişmez; yalnız metin, batma ve gölge.
   initKagit({su, reduced}) -> { seek, destroy }.  su yoksa (null) yalnız DOM efektleri. */

var P = [
  ["Babasının ölümünün haberinin gelişiyle birlikte evde derin bir sessizlik oluştu.", "Babasının öldüğünü duyunca televizyonu kapattılar.", "Ad zinciri değil fiil. Türkçe olayı fiille anlatır."],
  ["O, onun annesinin ona verdiği yüzüğü parmağından çıkardı.", "Annesinden kalan yüzüğü çıkardı.", "Türkçe zamiri ekte taşır; o, onun, ona İngilizceden gelir."],
  ["Derin bir üzüntü hissetti ve gözleri doldu.", "Çayını soğuyana kadar karıştırdı.", "Duyguya ad koyma, duyguyu taşıyan hareketi yaz."],
  ["Konuşamayacak kadar yorgundu.", "Ağzını açacak hâli yoktu.", "\"-amayacak kadar\" İngilizce \"too ... to\" kalıbının çevirisi."],
  ["Saatine baktı; buluşmaya on dakika vardı. (Mainz, 1455)", "Akşam çanı çaldı; şehrin kapıları birazdan kapanacaktı.", "1455'te kol saati yoktu, zamanı çan söylerdi."],
  ["Gördü ki adam, kapıda bekleyen, ona bakıyordu.", "Kapıda bekleyen adamın kendisine baktığını gördü.", "İngilizce \"who\" yan cümlesi Türkçede ortaçla kurulur."],
  ["Biliyordu ki o gelecekti.", "Geleceğini biliyordu.", "\"Biliyordu ki\" İngilizce \"that\" cümlesidir; Türkçe ad-fiil kullanır."],
  ["Ben eve geldim ve ben çok yorgundum.", "Eve geldim, çok yorgundum.", "Kişi eki yeterken \"ben, sen, o\" yazılmaz."],
  ["Bir kadın bir odaya girdi ve bir pencere açtı.", "Kadın odaya girdi, pencereyi açtı.", "Türkçede her adın önüne \"bir\" gelmez."],
  ["Kapı, Ali tarafından açıldı.", "Ali kapıyı açtı.", "\"Tarafından\" çeviri edilgenidir; faili adıyla yaz."],
  ["Kadının görmesi için fazla yavaş yaptı.", "Kadın görsün diye yavaş yaptı.", "\"İçin fazla\" İngilizce \"too ... for\" kalıbının çevirisi."],
  ["Bu bir veda değildi, bir başlangıçtı.", "Kapıyı arkasından çekip merdivenleri indi.", "\"X değil, Y\" süsü yerine olan şeyi yaz."],
  ["Müze, bölgenin zengin tarihine ışık tutan eşsiz bir mekân olarak hizmet vermektedir.", "Müze eski bir hanın avlusunda; kapıdaki zil çalışmıyor.", "Övgü sıfatı ve süs yerine somut ayrıntı."],
  ["O zaman, görmesinin mümkün olmayacağını anladı.", "Göremeyeceğini anladı.", "Uzun ad zinciri yerine tek çekimli fiil."]
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
      '#hero-baslik.kg-ust{display:grid}#hero-baslik.kg-ust>span{grid-area:1/1}' +
      'html.kg-js:not(.kg-azalt) .spec-tek{display:grid}html.kg-js:not(.kg-azalt) .spec-tek>div{grid-area:1/1;margin:0}' +
      'html.kg-js:not(.kg-azalt) .spec-tek .spec-eski{font:400 24px/1.3 Fraunces,serif;color:var(--ink)}' +
      '@media (max-width:760px){html.kg-js:not(.kg-azalt) .spec-tek .spec-eski{font-size:21px}}' +
      '.kg-aht{position:absolute;left:0;top:0;width:100%;height:100%;overflow:visible;pointer-events:none;z-index:2}' +
      '.kg-aht .kg-kat{position:absolute;overflow:visible;pointer-events:none}' +
      '.kg-aht img{position:absolute;left:0;top:0;max-width:none;height:auto;user-select:none;-webkit-user-drag:none;will-change:transform}' +
      '.kg-aht .kg-lo img{filter:sepia(.9) hue-rotate(136deg) saturate(1.5) brightness(.74);-webkit-mask-image:linear-gradient(to top,rgba(0,0,0,.18),#000 46%);mask-image:linear-gradient(to top,rgba(0,0,0,.18),#000 46%)}' +
      '.kg-aht .kg-lo img.kg-g{filter:sepia(.9) hue-rotate(136deg) saturate(1.3) brightness(.62) blur(3px);-webkit-mask-image:none;mask-image:none}' +
      ':root[data-theme=dark] .kg-aht .kg-lo img{filter:sepia(.9) hue-rotate(168deg) saturate(1.5) brightness(.5)}' +
      ':root[data-theme=dark] .kg-aht .kg-lo img.kg-g{filter:sepia(.9) hue-rotate(168deg) saturate(1.2) brightness(.4) blur(3px)}' +
      '@media (prefers-color-scheme:dark){:root:not([data-theme=light]) .kg-aht .kg-lo img{filter:sepia(.9) hue-rotate(168deg) saturate(1.5) brightness(.5)}' +
      ':root:not([data-theme=light]) .kg-aht .kg-lo img.kg-g{filter:sepia(.9) hue-rotate(168deg) saturate(1.2) brightness(.4) blur(3px)}}' +
      '.kg-mur{position:absolute;inset:-14% -4%;pointer-events:none;z-index:3;opacity:0;border-radius:50%;' +
      'background:radial-gradient(closest-side,rgba(16,14,28,.97),rgba(20,18,34,.9) 55%,rgba(24,22,40,0));filter:blur(10px)}';
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

/* ---------- ahtapot ve mürekkep ----------
   Gerçek ahtapot kolu kareleri (docs/img/aht2-kol1..6.png, gövde aht2-govde1..3.png). Her kol altı pozu kare kare oynatır:
   rahat, uzanıyor, tam uzanmış, kavrıyor, çekiyor, bırakıyor. Kollar kâğıdın alt kenarından, suyun içinden yükselir; uç kâğıda aşar.
   Kenarın altı su rengine boyanır (.kg-lo), üstü canlı kalır (.kg-hi). Gövde derinde, bulanık, su renginde.
   Yüklenemeyen görsel sessizce atlanır. */
var AHT_KARE = [[139, 280], [171, 329], [125, 348], [142, 289], [93, 354], [95, 320]]; /* piksel (en, boy) */
var AHT_GV = [[162, 256], [195, 238], [187, 244]];
var AHT_X = [.13, .38, .63, .88];     /* kol merkezleri (kâğıt genişliği oranı) */
var AHT_OL = [.95, 1.05, .98, .9];    /* kol boyu çarpanı */
var AHT_FAZ = [0, .6, .3, 1];         /* kollar arası gecikme */
var AHT_DON = [-2, -1, 2, 3];         /* sabit eğim (derece) */
var AHT_AYNA = [0, 0, 1, 1];          /* sağdaki kollar aynalanır: kıvrım içe bakar */
var AHT_KALE = {};
function ahtUrl(ad) {
  try { return new URL('../img/' + ad, import.meta.url).href; } catch (e) { return 'img/' + ad; }
}
function ahtAd(t, n) { return 'aht2-' + t + n + '.png'; }
function ahtIsit() {
  var l = [], i;
  for (i = 1; i <= 6; i++) l.push(ahtAd('kol', i));
  for (i = 1; i <= 3; i++) l.push(ahtAd('govde', i));
  l.forEach(function (ad) {
    if (AHT_KALE[ad]) return;
    try { var im = new Image(); im.decoding = 'async'; im.src = ahtUrl(ad); AHT_KALE[ad] = im; } catch (e) { }
  });
}
function ahtImg(ad, sin) {
  var im = document.createElement('img');
  im.alt = ''; im.setAttribute('aria-hidden', 'true'); im.draggable = false;
  im.loading = 'eager'; im.decoding = 'async'; im.src = ahtUrl(ad);
  if (sin) im.className = sin;
  im.style.visibility = 'hidden';
  im.addEventListener('error', function () { im.style.display = 'none'; im.setAttribute('data-yok', '1'); });
  return im;
}
function ahtapotKur(kagit) {
  ahtIsit();
  if (getComputedStyle(kagit).position === 'static') kagit.style.position = 'relative';
  var kok = document.createElement('div');
  kok.className = 'kg-aht'; kok.setAttribute('aria-hidden', 'true'); kok.style.display = 'none';
  var lo = document.createElement('div'), hi = document.createElement('div');
  lo.className = 'kg-kat kg-lo'; hi.className = 'kg-kat kg-hi';
  var gv = [], kl = [];
  for (var v = 0; v < 3; v++) { var gi = ahtImg(ahtAd('govde', v + 1), 'kg-g'); lo.appendChild(gi); gv.push(gi); }
  [lo, hi].forEach(function (k) {
    for (var i = 0; i < 4; i++) for (var f = 0; f < 6; f++) { var im = ahtImg(ahtAd('kol', f + 1)); k.appendChild(im); kl.push({ el: im, i: i, f: f, on: false }); }
  });
  kok.appendChild(lo); kok.appendChild(hi);
  kagit.appendChild(kok);
  var m = document.createElement('div'); m.className = 'kg-mur'; m.setAttribute('aria-hidden', 'true');
  kagit.appendChild(m);
  return { kok: kok, lo: lo, hi: hi, gv: gv, kl: kl, mur: m, kagit: kagit, w: 0, h: 0, on: false, hA: 0, ox: 0, oy: 0, gk: 1 };
}
function ahtOlc(A) {
  var W = A.kagit.offsetWidth, H = A.kagit.offsetHeight;
  if (W === A.w && H === A.h) return;
  A.w = W; A.h = H;
  var hA = Math.max(170, Math.min(330, W * .62, H * 1.1));
  var ox = Math.round(W * .2), oy = Math.round(hA * 1.1), alt = Math.round(hA * 1.2);
  A.hA = hA; A.ox = ox; A.oy = oy;
  var gw = Math.max(110, Math.min(250, W * .4)); A.gk = gw / 190;
  A.lo.style.cssText = 'left:' + (-ox) + 'px;top:' + (-oy) + 'px;width:' + (W + 2 * ox) + 'px;height:' + (oy + H + alt + gw * 1.4) + 'px';
  A.hi.style.cssText = 'left:' + (-ox) + 'px;top:' + (-oy) + 'px;width:' + (W + 2 * ox) + 'px;height:' + (oy + H + 10) + 'px;' +
    '-webkit-mask-image:linear-gradient(#000 ' + (oy + H - 14) + 'px,transparent ' + (oy + H + 8) + 'px);' +
    'mask-image:linear-gradient(#000 ' + (oy + H - 14) + 'px,transparent ' + (oy + H + 8) + 'px)';
  A.kl.forEach(function (k) {
    var n = AHT_KARE[k.f], sc = hA / 330 * AHT_OL[k.i];
    k.w = n[0] * sc; k.h = n[1] * sc;
    k.el.style.width = k.w.toFixed(1) + 'px'; k.el.style.height = k.h.toFixed(1) + 'px';
    k.el.style.transformOrigin = '50% 100%';
  });
  A.gv.forEach(function (im, v) {
    im.style.width = (AHT_GV[v][0] * A.gk).toFixed(1) + 'px'; im.style.height = (AHT_GV[v][1] * A.gk).toFixed(1) + 'px';
  });
}
/* kol pozu: 0..5 sürekli. u: uzanma, s: kâğıdın batışı, faz: kol gecikmesi */
function ahtPoz(u, s, faz) {
  var ui = clamp(u * 1.3 - .3 * faz), si = clamp(s * 1.18 - .18 * faz);
  if (si <= .001) return { f: 2 * eIO(ui), ui: ui };                       /* rahat -> uzanıyor -> tam uzanmış */
  var f = si < .14 ? 2 + si / .14 : si < .3 ? 3 + (si - .14) / .16 : 4;    /* kavrıyor -> çekiyor */
  if (si >= .999) f = 4 + clamp((1 - u) * 2);                              /* bırakıyor: u düştükçe 5. kare */
  return { f: f, ui: ui };
}
/* g: gövde görünürlüğü, u: kolların uzanması (0..1), m: mürekkep, zaman: ms, s: kâğıdın batışı (0..1, isteğe bağlı) */
function ahtapotCiz(A, g, u, m, zaman, s) {
  if (!A) return;
  s = s || 0;
  A.mur.style.opacity = m.toFixed(3);
  if (g <= 0 && u <= 0) { if (A.on) { A.kok.style.display = 'none'; A.on = false; } return; }
  if (!A.on) { A.kok.style.display = ''; A.on = true; }
  ahtOlc(A);
  var zt = (zaman || 0) / 1000, W = A.w, H = A.h, hA = A.hA, ox = A.ox, oy = A.oy;
  var po = [];
  for (var i = 0; i < 4; i++) po.push(ahtPoz(u, s, AHT_FAZ[i]));
  A.kl.forEach(function (k) {
    var i = k.i, P = po[i], f = P.f, f0 = Math.min(5, Math.floor(f)), fr = f - f0;
    var w = clamp((fr - .4) / .2);                          /* kareler arası çapraz solma: karenin son %20'si */
    var op = k.f === f0 ? 1 - w : (k.f === f0 + 1 ? w : 0); /* f0 = 5 iken k.f = 5 için op = 1 */
    var goster = op > 0 && P.ui > 0;
    if (!goster) { if (k.on) { k.el.style.visibility = 'hidden'; k.on = false; } return; }
    var sal = 2 * Math.sin(zt * (.85 + .17 * i) + i * 1.9);
    var yuk = (1 - eIO(P.ui)) * (hA * 1.05 + 30);
    var cek = eIO(clamp((s - .1) / .5)) * hA * .06;
    var x = ox + W * AHT_X[i] - k.w / 2;
    var y = oy + H + hA * .5 - k.h + yuk + cek + 2.5 * Math.sin(zt * (.7 + .1 * i) + i * 2.3);
    k.el.style.transform = 'translate(' + x.toFixed(1) + 'px,' + y.toFixed(1) + 'px) rotate(' + (AHT_DON[i] + sal).toFixed(2) + 'deg)' + (AHT_AYNA[i] ? ' scaleX(-1)' : '');
    k.el.style.opacity = (op * Math.min(1, P.ui * 4)).toFixed(3);
    if (!k.on) { k.el.style.visibility = ''; k.on = true; }
  });
  var gp = clamp(g), v = Math.sin(zt * .33);
  var gw = [1 - Math.max(clamp(-v * 2.5), clamp(v * 2.5)), clamp(-v * 2.5), clamp(v * 2.5)];
  var gx = ox + W * .5 + 6 * Math.sin(zt * .6), gy = oy + H + hA * .62 + (1 - gp) * 40 + 4 * Math.sin(zt * .8);
  A.gv.forEach(function (im, j) {
    var wd = AHT_GV[j][0] * A.gk, ht = AHT_GV[j][1] * A.gk;
    im.style.transform = 'translate(' + (gx - wd / 2).toFixed(1) + 'px,' + (gy - ht * .1).toFixed(1) + 'px) rotate(' + (3 * Math.sin(zt * .5)).toFixed(2) + 'deg)';
    im.style.opacity = (.55 * gp * gw[j]).toFixed(3);
    im.style.visibility = gw[j] > 0 && gp > 0 ? '' : 'hidden';
  });
}

/* ---------- ana ---------- */
export function initKagit(opts) {
  opts = opts || {};
  var su = opts.su || null, reduced = !!opts.reduced;
  var d = document, root = d.documentElement;
  var $ = function (s, r) { return (r || d).querySelector(s); };

  var heroBaslik = $('#hero-baslik');
  /* başlık sabit kalır: üstü çizili eski satır ve altında "Düştü." (değişim gösterilmez) */
  var heroEski = null;
  var heroYeni = heroBaslik && $('.yeni', heroBaslik);
  var spec = $('.spec');
  var eski = spec && $('.spec-eski', spec), yeni = spec && $('.spec-yeni', spec), not = spec && $('.spec-not', spec);
  var sayac = spec && $('.spec-sayac', spec), ticks = spec && $('.ticks', spec);
  var live = $('#spec-canli');

  /* ticks bir kez kurulur */
  if (ticks) ticks.innerHTML = P.map(function (_, j) { return '<i' + (j === 0 ? ' class="on"' : '') + '></i>'; }).join('');
  var tk = ticks ? Array.from(ticks.querySelectorAll('i')) : [];
  function tuslar(fn) {
    if (!spec) return;
    [].forEach.call(spec.querySelectorAll('[data-yon]'), function (b) {
      b.addEventListener('click', function () {
        var r = fn(b.getAttribute('data-yon'));
        if (b.getAttribute('data-yon') === 'kal') {
          b.setAttribute('aria-pressed', r ? 'true' : 'false');
          b.setAttribute('aria-label', r ? 'Akışı sürdür' : 'Bu örnekte kal');
        }
      });
    });
  }
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
      var rk = 0;
      tuslar(function (y) {
        if (y === 'kal') return false;
        rk = (rk + (y === 'sonraki' ? 1 : -1) + P.length) % P.length;
        var q = P[rk];
        if (eski) eski.textContent = q[0];
        if (yeni) yeni.textContent = q[1];
        if (not) not.textContent = q[2];
        sayacYaz(rk); liveYaz(rk, true);
      });
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
  var Aht = (spec && !reduced) ? ahtapotKur(spec) : null;
  if (!reduced) { if (yeni) yeni.style.opacity = '0'; if (not) not.style.opacity = '0'; }
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
  var H = { t: 0, dur: 2600, g: 0, done: !heroEski || !heroYeni, manual: false, seen: true };
  var He = null;
  if (heroEski && heroYeni) {
    He = harfle(heroEski, heroEski.textContent.trim());
    He.box = heroEski; /* mask/filtre CSS ::after çizgisini de kapsasın */
    if (!reduced) { heroBaslik.style.position = 'relative'; H.mur = document.createElement('div'); H.mur.className = 'kg-mur'; H.mur.setAttribute('aria-hidden', 'true'); H.mur.style.inset = '-30% -8%'; heroBaslik.appendChild(H.mur); }
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
    if (t >= 1300 && !H.k) { H.k = 1; if (su) { var r = heroBaslik.getBoundingClientRect(); su.ripple(r.left + r.width * .3, r.top + r.height / 2, 1); su.foam(r); su.bubbles(r.left + r.width * .3, r.top + r.height / 2, { count: 10, radius: 70 }); } }
    if (H.mur) H.mur.style.opacity = (t < 1300 ? 0 : t < 1550 ? .85 * seg(t, 1300, 1480) : .85 * (1 - seg(t, 1550, 1950))).toFixed(3);
    coz(He, t >= 1500 ? 1 : 0);
    belir(heroYeni, H.gy, t >= 1500 ? 1 : 0);
  }
  renderHero(0);

  var T0 = 1500, DS = 800, D = T0 + DS;
  var C = {
    k: 0, t: 0, dur: D + 3000 + 4300, hold: false, round: 0, first: true, started: false, manual: false,
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
      { t: D + 850, f: function () { liveYaz(C.k, true); } },
      { t: D + 1900, f: function () { var m = merkez(); if (su) su.ripple(m.x, m.y, .45); } },
      { t: D + 2800, f: function () { var m = merkez(); if (su) su.ripple(m.x, m.y, .3); } }
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
    yaz(Ce, C.first ? 1 : seg(t, 400, 1100));
    if (t >= T0 && !C.g) { geoY(Ce); C.gy = yeni ? geoEl(yeni) : null; C.g = 1; }
    cizgi(Ce, seg(t, T0, D));
    var s = a < 0 ? 0 : a < 1400 ? eIO(a / 1400) : a < 1800 ? 1 : a < 3000 ? 1 - eOut((a - 1800) / 1200) : 0;
    batir(specSh, s, vt);
    coz(Ce, a >= 850 ? 1 : 0);
    var gv = t < 900 ? 0 : a < 1500 ? seg(t, 900, 1500) : 1 - seg(a, 1500, 2100);
    var kl = a < 0 ? seg(t, 1500, D) : a < 1400 ? 1 : 1 - seg(a, 1400, 1800);
    var mr = a < 500 ? 0 : a < 1100 ? .95 * seg(a, 500, 800) : .95 * (1 - seg(a, 1100, 1900));
    ahtapotCiz(Aht, gv, kl, mr, vt, s);
    if (C.sw) {
      var bp = a >= 850 ? 1 : 0;
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
      if (C.t >= C.dur && !C.hold) {
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

  function git(k) {
    if (!spec) return;
    H.done = true; if (He) renderHero(H.dur);
    batir(specSh, 0, vt); ahtapotCiz(Aht, 0, 0, 0);
    C.round = Math.max(C.round, 1); C.manual = false;
    begin((k + P.length) % P.length);
    renderKart(0, vt); basla();
  }
  tuslar(function (y) {
    if (y === 'kal') { C.hold = !C.hold; return C.hold; }
    git(C.k + (y === 'sonraki' ? 1 : -1));
  });
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
