// su.js: tepeden bakilan havuz dibi (Three.js 0.170.0, tek tam ekran fragment shader).
// API: initSu(canvas, {theme, reduced}) -> {ripple, bubbles, foam, setTheme, setScroll, pause, resume, renderStill, depthAt, destroy}
// Tum koordinatlar viewport CSS pikseli. Yuzey sayfa hizinda, dip 0,67 katinda kayar.

const THREE_URL = 'https://cdn.jsdelivr.net/npm/three@0.170.0/build/three.module.min.js';
const PARALLAX = 0.67;
const MAX_RIPPLE = 8, MAX_BUBBLE = 32, MAX_FOAM = 3;
const FOAM_LIFE = 2.4;

// Dipin yumusak derinlik alani (0 sig, 1 derin). Shader ile ayni formul: depthAt buradan okur.
function baseDepth(x, y) {
  var a = Math.sin(x * 0.0031 + 1.3 + 0.9 * Math.sin(y * 0.0027));
  var b = Math.sin(y * 0.0043 + x * 0.0017 + 0.5);
  var c = Math.sin((x + y) * 0.0071 + 2.1);
  var d = 0.5 + 0.27 * a + 0.2 * b + 0.1 * c;
  return d < 0 ? 0 : d > 1 ? 1 : d;
}

const VERT = /* glsl */ `
void main() {
  gl_Position = vec4(position.xy, 0.0, 1.0);
}`;

const FRAG = /* glsl */ `
precision highp float;
uniform float uTime;
uniform float uNight;
uniform float uScroll;
uniform float uDpr;
uniform float uS;
uniform vec2 uCss;
uniform vec4 uR[${MAX_RIPPLE}];
uniform vec4 uB[${MAX_BUBBLE}];
uniform vec4 uF[${MAX_FOAM}];
uniform float uFt[${MAX_FOAM}];

float h21(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}
float vnoise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  return mix(mix(h21(i), h21(i + vec2(1.0, 0.0)), f.x),
             mix(h21(i + vec2(0.0, 1.0)), h21(i + vec2(1.0, 1.0)), f.x), f.y);
}
float baseDepth(vec2 b) {
  float a = sin(b.x * 0.0031 + 1.3 + 0.9 * sin(b.y * 0.0027));
  float c = sin(b.y * 0.0043 + b.x * 0.0017 + 0.5);
  float e = sin((b.x + b.y) * 0.0071 + 2.1);
  return clamp(0.5 + 0.27 * a + 0.2 * c + 0.1 * e, 0.0, 1.0);
}
vec2 vpos(vec2 ij) {
  float odd = ij.y - 2.0 * floor(ij.y * 0.5);
  vec2 jit = vec2(h21(ij + 1.1), h21(ij + 7.3)) - 0.5;
  return vec2(ij.x + 0.5 * odd + jit.x * 0.8, ij.y * 0.866 + jit.y * 0.7);
}
float vdepth(vec2 ij, vec2 pos) {
  return clamp(baseDepth(pos * uS) + (h21(ij + 3.7) - 0.5) * 0.22, 0.0, 1.0);
}
float caustic(vec2 uv, float t) {
  vec2 p = mod(uv * 6.28318, 6.28318) - 250.0;
  vec2 i = p;
  float c = 1.0;
  float inten = 0.005;
  for (int n = 0; n < CITER; n++) {
    float tt = t * (1.0 - (3.5 / float(n + 1)));
    i = p + vec2(cos(tt - i.x) + sin(tt + i.y), sin(tt - i.y) + cos(tt + i.x));
    c += 1.0 / length(vec2(p.x / (sin(i.x + tt) / inten), p.y / (cos(i.y + tt) / inten)));
  }
  c /= float(CITER);
  c = 1.17 - pow(c, 1.4);
  return pow(abs(c), 11.0);
}
vec3 ramp(float d, float night) {
  vec3 d0 = mix(vec3(0.62, 0.74, 0.66), vec3(0.15, 0.24, 0.40), night);
  vec3 d1 = mix(vec3(0.435, 0.70, 0.68), vec3(0.09, 0.18, 0.33), night);
  vec3 d2 = mix(vec3(0.27, 0.52, 0.53), vec3(0.05, 0.11, 0.25), night);
  vec3 d3 = mix(vec3(0.12, 0.37, 0.39), vec3(0.02, 0.05, 0.14), night);
  vec3 c = mix(d0, d1, smoothstep(0.0, 0.28, d));
  c = mix(c, d2, smoothstep(0.25, 0.58, d));
  c = mix(c, d3, smoothstep(0.55, 1.0, d));
  return c;
}

void main() {
  vec2 p = vec2(gl_FragCoord.x, uCss.y * uDpr - gl_FragCoord.y) / uDpr;
  float t = uTime;
  vec2 ps = p + vec2(0.0, uScroll);          // yuzey uzayi (sayfa hizinda)
  vec2 pb = p + vec2(0.0, uScroll * ${PARALLAX.toFixed(2)});  // dip uzayi

  // Yuzey dalgalari dibi hafifce kirar (normal haritasi gibi)
  vec2 off = vec2(
    sin(ps.x * 0.021 + ps.y * 0.013 + t * 0.8) + sin(ps.y * 0.034 - t * 0.6 + 1.7),
    cos(ps.x * 0.017 - ps.y * 0.026 - t * 0.7) + cos(ps.x * 0.040 + t * 0.5)) * 0.9;
  vec3 hl = vec3(0.0);
  float hlAmt = 0.0;

  // Halka dalgalar (daire): dibi radyal kirar, kenarda ince parlama
  for (int i = 0; i < ${MAX_RIPPLE}; i++) {
    vec4 r = uR[i];
    float age = t - r.z;
    if (age < 0.0 || age > 3.2) continue;
    vec2 dv = ps - r.xy;
    float d = length(dv);
    float rad = age * (70.0 + 40.0 * r.w);
    if (abs(d - rad) > 90.0 && abs(d - rad * 0.72) > 90.0) continue;
    float w = 4.0 + age * 5.0;
    float fade = pow(1.0 - age / 3.2, 2.0) * r.w;
    vec2 dir = dv / max(d, 0.001);
    float e1 = (d - rad) / w;
    float e2 = (d - rad * 0.72) / (w * 1.2);
    off += dir * (e1 * exp(-e1 * e1) * 5.0 + e2 * exp(-e2 * e2) * 2.5) * fade;
    hlAmt += (exp(-e1 * e1) * 0.8 + exp(-e2 * e2) * 0.35) * fade;
  }
  vec2 b = pb + off;

  // Dusuk poligon mozaik: jitter'li ucgen kafes (duzensiz tas/cakil), duz golgeli
  vec2 lp = b / uS;
  float j0 = floor(lp.y / 0.866);
  float i0 = floor(lp.x);
  vec2 A = vec2(0.0), B = vec2(0.0), C = vec2(0.0);
  float dA = 0.5, dB = 0.5, dC = 0.5, tid = 0.0;
  bool found = false;
  for (int dj = -1; dj <= 1; dj++) {
    for (int di = -1; di <= 1; di++) {
      float j = j0 + float(dj);
      float i = i0 + float(di);
      for (int k = 0; k < 2; k++) {
        vec2 ia, ib, ic;
        float odd = j - 2.0 * floor(j * 0.5);
        if (odd < 0.5) {
          if (k == 0) { ia = vec2(i, j); ib = vec2(i + 1.0, j); ic = vec2(i, j + 1.0); }
          else        { ia = vec2(i, j + 1.0); ib = vec2(i + 1.0, j + 1.0); ic = vec2(i + 1.0, j); }
        } else {
          if (k == 0) { ia = vec2(i, j); ib = vec2(i + 1.0, j); ic = vec2(i + 1.0, j + 1.0); }
          else        { ia = vec2(i, j); ib = vec2(i + 1.0, j + 1.0); ic = vec2(i, j + 1.0); }
        }
        vec2 pa = vpos(ia), pb = vpos(ib), pc = vpos(ic);
        vec2 v0 = pb - pa, v1 = pc - pa, v2 = lp - pa;
        float den = v0.x * v1.y - v0.y * v1.x;
        float u1 = (v2.x * v1.y - v2.y * v1.x) / den;
        float u2 = (v0.x * v2.y - v0.y * v2.x) / den;
        if (!found && u1 >= 0.0 && u2 >= 0.0 && u1 + u2 <= 1.0) {
          found = true;
          A = pa; B = pb; C = pc;
          dA = vdepth(ia, pa); dB = vdepth(ib, pb); dC = vdepth(ic, pc);
          tid = h21(ia + ib * 1.7 + ic * 2.9);
        }
      }
    }
  }
  float depth = (dA + dB + dC) / 3.0;
  vec2 e1 = B - A, e2 = C - A;
  float det = e1.x * e2.y - e1.y * e2.x;
  float gx = ((dB - dA) * e2.y - (dC - dA) * e1.y) / det;
  float gy = ((dC - dA) * e1.x - (dB - dA) * e2.x) / det;
  vec3 n = normalize(vec3(gx * 1.6, gy * 1.6, 1.0));
  vec3 L = normalize(vec3(0.5, -0.5, 0.75));
  float shade = clamp(1.0 + (dot(n, L) - L.z) * 1.1, 0.86, 1.14);
  shade *= 0.95 + 0.1 * tid;
  vec3 col = ramp(0.16 + 0.84 * depth, uNight) * shade;

  // Kostik agi
  float cc = caustic(b / 470.0, t * 0.11 + 4.0);
  vec3 cDay = vec3(0.60, 0.98, 0.88) * 0.2;
  vec3 cNgt = vec3(0.50, 0.66, 1.00) * 0.09;
  col += cc * mix(cDay, cNgt, uNight) * (1.15 - 0.55 * depth);

  // Halka parlamasi
  col += hlAmt * mix(vec3(0.85, 1.0, 1.0) * 0.36, vec3(0.6, 0.75, 1.0) * 0.12, uNight);

  // Seyrek yumusak parilti (yuzeyde)
  {
    vec2 sp = ps / 72.0;
    vec2 sc = floor(sp);
    vec2 sf = fract(sp);
    float h1 = h21(sc + 7.7);
    float thr = mix(0.94, 0.975, uNight);
    if (h1 > thr) {
      vec2 pt = vec2(0.2 + 0.6 * h21(sc + 1.3), 0.2 + 0.6 * h21(sc + 5.1));
      float ph = fract(t * (0.12 + 0.12 * h21(sc + 9.1)) + h21(sc + 2.2));
      float inten = pow(sin(ph * 3.14159), 8.0);
      float dd = length((sf - pt) * 72.0);
      float s = exp(-dd * dd / (2.0 * 2.2 * 2.2)) * inten;
      col += s * mix(vec3(1.0, 1.0, 0.92) * 0.75, vec3(0.80, 0.88, 1.0) * 0.85, uNight);
    }
  }

  // Kabarciklar: izleyiciye dogru buyur, yuzeyde kucuk halka olup soner
  for (int i = 0; i < ${MAX_BUBBLE}; i++) {
    vec4 v = uB[i];
    float age = t - v.z;
    if (age < 0.0 || age > v.w + 0.6) continue;
    vec2 pos = vec2(v.x, v.y - uScroll);
    float dd = length(p - pos);
    if (dd > 46.0) continue;
    float mxR = 8.0 + 9.0 * h21(vec2(v.x, v.y));
    if (age <= v.w) {
      float u = age / v.w;
      float R = mix(1.4, mxR, pow(u, 1.7));
      float blur = mix(R * 0.9 + 1.5, 0.9, smoothstep(0.0, 0.75, u));
      float edge = 1.0 - smoothstep(R - blur, R + 0.6, dd);
      float rim = smoothstep(R * 0.55, R, dd) * edge;
      float a = (0.10 * edge + 0.60 * rim) * mix(0.35, 1.0, u);
      vec2 hp = pos + vec2(-R * 0.35, -R * 0.35);
      float hs = exp(-pow(length(p - hp) / (R * 0.22 + 0.5), 2.0)) * 0.7 * edge * u;
      col = mix(col, mix(vec3(0.92, 1.0, 1.0), vec3(0.72, 0.84, 1.0), uNight), clamp(a, 0.0, 1.0));
      col += hs * 0.6;
    } else {
      float pu = (age - v.w) / 0.6;
      float Rp = mxR + pu * 15.0;
      float e = (dd - Rp) / 1.2;
      col += exp(-e * e) * (1.0 - pu) * mix(vec3(0.9, 1.0, 1.0) * 0.7, vec3(0.7, 0.8, 1.0) * 0.55, uNight);
    }
  }

  // Kopuk: kagit cevresinde ince, duzensiz, kisa omurlu
  for (int i = 0; i < ${MAX_FOAM}; i++) {
    float age = t - uFt[i];
    if (age < 0.0 || age > ${FOAM_LIFE.toFixed(1)}) continue;
    vec4 r = uF[i];
    vec2 hs2 = r.zw * 0.5;
    vec2 c = vec2(r.x, r.y - uScroll) + hs2;
    vec2 q = abs(p - c) - hs2;
    float sd = length(max(q, 0.0)) + min(max(q.x, q.y), 0.0);
    if (sd < 0.0 || sd > 26.0) continue;
    float env = smoothstep(0.0, 0.18, age) * (1.0 - smoothstep(1.0, ${FOAM_LIFE.toFixed(1)}, age));
    float spread = 1.5 + age * 3.2;
    float n1 = vnoise(p * 0.16 + vec2(t * 0.35, -t * 0.2));
    float n2 = vnoise(p * 0.55 + 11.0);
    float line = exp(-pow((sd - spread - 2.5 * n1) / 1.15, 2.0)) * smoothstep(0.38, 0.62, vnoise(p * 0.11 + 3.0 + age * 0.3));
    float dots = step(0.84, h21(floor(p / 2.2) + 5.0)) * smoothstep(spread + 12.0, spread, sd) * smoothstep(0.35, 0.6, n2);
    float fo = clamp(line * 0.95 + dots * 0.7, 0.0, 1.0) * env;
    col = mix(col, mix(vec3(1.0), vec3(0.78, 0.86, 1.0), uNight), fo * 0.78);
  }

  // Gunes / ay yansimasi: yuzeyde kucuk, dalgayla kirilan parilti
  {
    vec2 sp = gl_FragCoord.xy / uDpr;
    sp.y = uCss.y - sp.y;
    vec2 gc = vec2(uCss.x * 0.80, uCss.y * 0.20);
    float wob = vnoise(sp * 0.035 + vec2(t * 0.6, t * 0.4)) - 0.5;
    vec2 dd = (sp - gc) / vec2(1.0, 1.35);
    float rr = mix(70.0, 46.0, uNight);
    float dist = length(dd) + wob * 26.0;
    float core = exp(-pow(dist / rr, 2.0));
    float gl = core * mix(0.30, 0.22, uNight);
    col += gl * mix(vec3(1.0, 0.97, 0.85), vec3(0.78, 0.86, 1.0) * 0.75, uNight);
  }

  gl_FragColor = vec4(clamp(col, 0.0, 1.0), 1.0);
}`;

export async function initSu(canvas, opts) {
  opts = opts || {};
  const THREE = await import(/* @vite-ignore */ THREE_URL);

  const coarse = !!(window.matchMedia && window.matchMedia('(pointer: coarse)').matches);
  const mobile = coarse || window.innerWidth < 760;
  const dprCap = mobile ? 1.25 : 1.5;

  let renderer;
  let shaderError = null;
  try {
    renderer = new THREE.WebGLRenderer({ canvas, antialias: false, alpha: false, depth: false, stencil: false, powerPreference: 'high-performance' });
  } catch (e) {
    throw new Error('WebGL baslatilamadi: ' + (e && e.message));
  }
  renderer.debug.onShaderError = function (gl, program, vs, fs) {
    shaderError = (gl.getShaderInfoLog(fs) || '') + (gl.getShaderInfoLog(vs) || '') || 'shader hatasi';
  };

  // Onceden ayrilmis uniform verisi: dongude nesne yaratilmaz.
  const uR = [], uB = [], uF = [];
  for (let i = 0; i < MAX_RIPPLE; i++) uR.push(new THREE.Vector4(0, 0, -1000, 0));
  for (let i = 0; i < MAX_BUBBLE; i++) uB.push(new THREE.Vector4(0, 0, -1000, 1));
  for (let i = 0; i < MAX_FOAM; i++) uF.push(new THREE.Vector4(0, 0, 0, 0));
  const uniforms = {
    uTime: { value: 0 },
    uNight: { value: opts.theme === 'dark' ? 1 : 0 },
    uScroll: { value: 0 },
    uDpr: { value: 1 },
    uS: { value: mobile ? 84 : 64 },
    uCss: { value: new THREE.Vector2(1, 1) },
    uR: { value: uR },
    uB: { value: uB },
    uF: { value: uF },
    uFt: { value: [-1000, -1000, -1000] }
  };
  const material = new THREE.ShaderMaterial({
    uniforms: uniforms,
    vertexShader: VERT,
    fragmentShader: FRAG,
    defines: { CITER: mobile ? 3 : 4 },
    depthTest: false,
    depthWrite: false
  });
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array([-1, -1, 0, 3, -1, 0, -1, 3, 0]), 3));
  const mesh = new THREE.Mesh(geometry, material);
  mesh.frustumCulled = false;
  const scene = new THREE.Scene();
  scene.add(mesh);
  const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1); // tam tepeden, dik asagi

  let nightTarget = uniforms.uNight.value;
  let tNow = opts.reduced ? 5.0 : 0;
  let scrollY = 0;
  let userPaused = false;
  let running = false;
  let destroyed = false;
  let lastMs = 0;
  let rI = 0, bI = 0, fI = 0;

  function resize() {
    const w = Math.max(1, window.innerWidth), h = Math.max(1, window.innerHeight);
    let pr = Math.min(window.devicePixelRatio || 1, dprCap);
    const budget = mobile ? 1.6e6 : 3.2e6;
    if (w * h * pr * pr > budget) pr = Math.max(0.75, Math.sqrt(budget / (w * h)));
    renderer.setPixelRatio(pr);
    renderer.setSize(w, h, false);
    uniforms.uDpr.value = renderer.getPixelRatio();
    uniforms.uCss.value.set(w, h);
  }

  function draw() {
    uniforms.uTime.value = tNow;
    uniforms.uScroll.value = scrollY;
    renderer.render(scene, camera);
  }

  function frame(ms) {
    if (!running) return;
    let dt = (ms - lastMs) / 1000;
    lastMs = ms;
    if (dt > 0.1) dt = 0.1;
    if (dt < 0) dt = 0;
    tNow += dt;
    const nv = uniforms.uNight.value;
    if (nv !== nightTarget) {
      const step = dt / 0.9;
      uniforms.uNight.value = Math.abs(nightTarget - nv) <= step ? nightTarget : nv + (nightTarget > nv ? step : -step);
    }
    draw();
  }

  function start() {
    if (running || destroyed || opts.reduced) return;
    running = true;
    lastMs = performance.now();
    renderer.setAnimationLoop(frame);
  }
  function stop() {
    if (!running) return;
    running = false;
    renderer.setAnimationLoop(null);
  }
  function onVis() {
    if (document.hidden) stop();
    else if (!userPaused) start();
  }
  function onResize() {
    resize();
    if (!running) draw();
  }
  function onLost(e) { e.preventDefault(); stop(); }

  resize();
  window.addEventListener('resize', onResize);
  document.addEventListener('visibilitychange', onVis);
  canvas.addEventListener('webglcontextlost', onLost);

  // Ilk kare: derleme hatasi varsa reddet (main.js yedege gecer).
  try {
    draw();
  } catch (e) {
    window.removeEventListener('resize', onResize);
    document.removeEventListener('visibilitychange', onVis);
    renderer.dispose();
    throw e;
  }
  if (shaderError) {
    window.removeEventListener('resize', onResize);
    document.removeEventListener('visibilitychange', onVis);
    renderer.dispose();
    throw new Error('su.js shader: ' + shaderError);
  }
  if (!document.hidden) start();

  const api = {
    ripple(x, y, strength) {
      const s = strength == null ? 1 : Math.max(0.2, Math.min(2, strength));
      const v = uR[rI]; rI = (rI + 1) % MAX_RIPPLE;
      v.set(x, y + scrollY, tNow, s);
      if (!running) draw();
    },
    bubbles(x, y, o) {
      const count = Math.min(MAX_BUBBLE, (o && o.count != null) ? o.count : 12);
      const radius = (o && o.radius != null) ? o.radius : 60;
      for (let i = 0; i < count; i++) {
        const a = Math.random() * 6.2832, r = Math.sqrt(Math.random()) * radius;
        const v = uB[bI]; bI = (bI + 1) % MAX_BUBBLE;
        v.set(x + Math.cos(a) * r, y + scrollY + Math.sin(a) * r, tNow + 0.05 + Math.random() * 1.2, 0.8 + Math.random() * 0.55);
      }
    },
    foam(rect) {
      if (!rect) return;
      const v = uF[fI];
      uniforms.uFt.value[fI] = tNow;
      v.set(rect.left != null ? rect.left : rect.x, (rect.top != null ? rect.top : rect.y) + scrollY, rect.width, rect.height);
      fI = (fI + 1) % MAX_FOAM;
      if (!running) draw();
    },
    setTheme(th) {
      nightTarget = th === 'dark' ? 1 : 0;
      if (!running) { uniforms.uNight.value = nightTarget; draw(); }
    },
    setScroll(y) {
      scrollY = +y || 0;
      if (!running) draw();
    },
    pause() { userPaused = true; stop(); },
    resume() { userPaused = false; if (!document.hidden) start(); },
    renderStill() { uniforms.uNight.value = nightTarget; draw(); },
    depthAt(x, y) { return baseDepth(x, y + scrollY * PARALLAX); },
    destroy() {
      destroyed = true;
      stop();
      window.removeEventListener('resize', onResize);
      document.removeEventListener('visibilitychange', onVis);
      canvas.removeEventListener('webglcontextlost', onLost);
      geometry.dispose(); material.dispose(); renderer.dispose();
    }
  };
  return api;
}

export default initSu;
