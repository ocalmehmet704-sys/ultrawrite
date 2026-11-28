# Ekip arayüzü (5 ajan, tek çalışma kopyası)

Tasarımın kaynağı: `gece/TASARIM.md` (storyboard). Ondan sapma yok. Açık sorunun kararı: **B** — hero kâğıdı batmaz; yalnız başlık satırı "O yere çarpmıştı." yerinde çizilir, mürekkebi çözülür, aynı yerde "Düştü." belirir. Tam batma (dalma, kabarcık, çözülme, belirme, çıkış) dönen kartta, her örnekte.

Çalışma yeri: `/home/user/ultrawrite` (dal `site-gece`). Herkes YALNIZ kendi dosyalarını yazar. Git commit/push YALNIZ 5. ajan (birleştirici) yapar.

## Dosya sahipliği
| Ajan | Dosyalar |
|---|---|
| 1 Sahne | `docs/js/su.js` |
| 2 Kâğıt | `docs/js/kagit.js` |
| 3 Sayfa | `docs/index.html` (HTML + CSS + mevcut satır içi sekme/kopyala/tema betikleri), `docs/slop.html` yalnız renk/tema uyumu |
| 4 Yedek ve erişilebilirlik | `docs/js/main.js`, `docs/js/yedek.js` |
| 5 Birleştirici | testler (scratchpad), `gece/SITE.md`, `gece/site-ekran/v5-*`, commit/push; gerekirse küçük bağlama düzeltmeleri |

## Ortak sözleşme
- `index.html` yalnız şunu yükler: `<script type="module" src="js/main.js"></script>` ve `<canvas id="su" aria-hidden="true">` (sabit, tam ekran, en arkada). Eski satır içi WebGL/su/batma kodu kaldırılır (3. ajan).
- `main.js` (4): ortamı algılar (reduced-motion, WebGL2, `document.hidden`), `su.js`'i dinamik import eder; başarısız olursa `yedek.js`. Sonra `kagit.js`'i başlatır. Tema düğmesi `document.documentElement.dataset.theme` değiştirir ve `themechange` olayı yayar (`document.dispatchEvent(new CustomEvent('themechange',{detail:{theme}}))`); 3. ajanın satır içi tema betiği bu olayı yayar, 4 dinler ve `su.setTheme` çağırır.
- `su.js` (1): `export async function initSu(canvas, {theme, reduced}) → api`. Three.js `https://cdn.jsdelivr.net/npm/three@0.170.0/build/three.module.min.js` (başka harici yok). API (ekran pikseli, CSS px, viewport'a göre):
  - `ripple(x, y, strength=1)` daire halka dalga
  - `bubbles(x, y, {count=12, radius=60})` izleyiciye doğru büyüyen kabarcıklar
  - `foam(rect)` kâğıt dikdörtgeni çevresinde ince düzensiz köpük çizgisi (kısa ömürlü)
  - `setTheme('light'|'dark')`, `setScroll(y)`, `pause()`, `resume()`, `renderStill()`
  - `depthAt(x, y)` → 0..1 (o noktada dip derinliği; gölge bulanıklığı için)
- `yedek.js` (4): aynı api biçimi; 2B tuvalde tepeden üçgen mozaiğin durgun çizimi; diğer metotlar no-op.
- `kagit.js` (2): `export function initKagit({su, reduced})`. DOM kancaları (3. ajan bunları HTML'de sağlar):
  - Hero: `#hero-baslik` içinde `.eski` ("O yere çarpmıştı.") ve `.yeni` ("Düştü."). Döngü bir kez, sayfa ilk görünümde.
  - Dönen kart: `.spec` (kâğıt), içinde `.spec-eski`, `.spec-yeni`, `.spec-not`, `.spec-sayac`, `.ticks`. Beş cümle çifti `kagit.js` içinde, mevcut `index.html`'deki `var P = [...]` dizisinden HARFİYEN kopyalanır.
  - Her kâğıdın gölgesi: kâğıdın `::after`'ı değil, kardeş öğe `.golge` (3 sağlar; 2 konum/bulanıklık günceller).
  - `document.hidden` iken zamanlayıcılar durur; görünür olunca aynı örnekten bozulmadan devam.
  - Reduced-motion: animasyon yok; `.eski` üstü çizili ve okunur + `.yeni` görünür.
  - Erişilebilirlik: o an geçerli metin `aria-live="polite"` bölgede (3 sağlar: `#spec-canli`).
- CSS 3D: `.havuz { perspective: 1200px; perspective-origin: 50% 50%; transform-style: preserve-3d }`; kâğıtlar `.kagit`; batma yalnız `translateZ` eksi + filtreler; rotateX yok.

## Değişmezler
`google-site-verification` meta etiketi ve `docs/google5ab5d5d35ff4333c.html`; `skills/`, `.claude-plugin/`, `LICENSE`; beş cümle çifti ve açıklamaları; "O yere çarpmıştı. / Düştü."; 6.000/34/36/8; emoji yok; yeni metin kısa doğal Türkçe. Sekmeler + klavye, kopyala, skip link, JS'siz görünürlük, tema düğmesi (localStorage try/catch, FOUC yok), yapılandırılmış veri, YZ izleri bağlantıları korunur. Yatay taşma yok, konsol hatası yok, kontrast AA.
