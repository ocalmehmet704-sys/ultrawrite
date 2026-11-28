# Site gece notları

## Tur 1 (23:50)
- Değişen: `.rv` gizleme kuralı `.js` sınıfına bağlandı (JS kapalıysa ya da çalışmazsa bölümler görünmez kalıyordu). `--faint` rengi koyulaştırıldı: açık modda 3,4:1 iken 5,0:1; karanlık modda 4,0:1 iken 5,6:1 (küçük mono etiketler AA altındaydı).
- Test: yatay taşma yok (1440, 390), konsol hatası yok, sekmeler klavyeyle çalışıyor, kopyala çalışıyor, kart gizle/göster sonrası devam ediyor, reduced-motion'da animasyon yok. Hepsi geçti.
- Ekran görüntüsünde sorun: tam sayfa görüntüde kaydırmadan önce bölümler boş çıkıyordu (reveal); JS'siz sürümde artık görünüyor.

## Tur 2 (23:55)
- Değişen: `favicon.svg`, `og.png` (1200x630, Playwright ile HTML'den üretildi; hero başlığıyla aynı çift), og:image/twitter:card etiketleri, "İçeriğe geç" bağlantısı (ilk Tab'ta görünür) ve `main#main`.
- Test: 11 kontrol geçti; ilk Tab skip link'e düşüyor.
- Görülen sorun: og görselinde Fraunces yok (sandbox çevrimdışı), Georgia ile üretildi; sabah istenirse gerçek fontla yeniden üretilebilir.

## Tur 3 (23:58)
- Değişen: mobilde kurulum komutları sarılıyor (önceden tek satırda kesiliyor, kaydırma çubuğu gizliydi, komutun sonu görünmüyordu).
- Test: 11 kontrol geçti; 390 px'te taşma yok. Ekran görüntüsünde komutlar tam okunuyor, sekme satırı sağda kesilerek kaydırılabilir olduğunu gösteriyor.

## Tur 4 (23:59)
- Değişen: `404.html` (sade, açık/karanlık uyumlu, 390 px'te taşma yok), JSON-LD'ye `url` alanı eklendi (JSON geçerli).
- Test: 11 kontrol geçti. Görülen sorun: 404'te başlıktaki üstü çizili ilk deneme anlamsızdı, "Bu sayfa yok." olarak sadeleştirildi.

## Sabah özeti
Fikir havuzundaki yararlı işler bitti; zamanlanmış görevler uyandırınca ekran görüntülerine yeniden baktım (tur 5) ve başka somut sorun bulamayınca değişiklik uydurmadım.

En önemli 3 değişiklik:
1. JS yoksa/çalışmazsa bölümlerin görünmez kalması düzeltildi; küçük mono etiketlerin kontrastı AA'ya çıkarıldı.
2. Favicon, paylaşım görseli (og.png), skip link, 404.html, JSON-LD `url`.
3. Mobilde kurulum komutları artık tam okunuyor; hero'nun yan boşluğu hatası (içerik ekran kenarına yapışıktı) düzeltildi.

Kalan sorunlar:
- og.png Fraunces yerine Georgia ile üretildi (sandbox'ta font yok).
- Fontlar Google Fonts'tan geliyor; kendi sunucundan sunmak CLS ve gizlilik için daha iyi olur.
- Sitemap'te tek URL var, 404 eklenmedi (doğru).

Öneri: main'e birleştirilebilir. Değişiklikler küçük, her tur testten geçti (taşma, konsol, klavye sekmeleri, kopyala, kart gizle/göster, reduced-motion). `google-site-verification` ve doğrulama dosyası, skills/, .claude-plugin/, LICENSE ve kart metinleri dokunulmadı. Ekran görüntüleri: `gece/site-ekran/`.

## Tur 5 (00:35, zamanlanmış görevle devam)
- Değişen: `.hero` kuralı `.wrap`'in yan boşluğunu sıfırlıyordu; hero içeriği ve kart mobilde ekranın sol kenarına yapışıktı, masaüstünde de üst menüyle hizasızdı (130 px ve 162 px). `padding` yerine `padding-block` kullanıldı.
- Test: 11 kontrol geçti; 390, 768, 1200, 1440 px'te taşma yok. Mobil hero görüntüsü `gece/site-ekran/m-hero.png`.
- Not: Bu hata önceki turlarda ekran görüntüsüne yeterince dikkatli bakılmadığı için kaçmıştı; mobil hero artık 16 px boşlukla başlıyor.

## Tur 6 (01:17)
- Değişiklik yok. Her metin düğümü için açık ve karanlık modda otomatik kontrast taraması yapıldı: karanlıkta sorun yok; açıkta yalnız sticky üst menü (yarı saydam arka plan) işaretlendi, bu tarayıcı betiğinin saydam karışımı çözememesinden gelen yanlış alarm, menü renkleri elle hesaplandığında geçiyor.
- Mobil orta bölümler (skill listesi, sayılar) ekran görüntüsünde düzgün.

## Tur 7 (10:45, main ile birleştirme)
- main'de Grok'un eklediği `slop.html` ve `.nojekyll` site-gece'ye birleştirildi (çakışma yok).
- Google için: `data:` favicon'lar kaldırıldı (Google bunları göstermez); gerçek dosyalar eklendi (`favicon.svg`, `favicon-48.png`, `favicon-180.png`), iki sayfada da bağlandı. `WebSite` JSON-LD (ad ve alternatif adlar) ve `og:site_name` eklendi. Başlık "ultrawrite: Claude için Türkçe kurmaca yazım skill'i" yapıldı. `slop.html` og:image aldı, soluk metin kontrastı düzeltildi.
- 404: ekran görüntüsündeki 404, `slop.html` yayına girmeden önce açıldığı içindi; `.nojekyll` sonrası canlıda 200 dönüyor.
- Sınır: Google'ın site adı/ikonu `github.io/ultrawrite/` gibi alt yol için güvenilir çalışmaz; özel alan adı ya da `ocalmehmet704-sys.github.io` adlı kullanıcı sitesi gerekir.

## Tur 8 (su teması)
- Skill araması: claude.ai skill dizininde ilgili sonuç yok; eklenti dizininde yalnız `parallax-threejs` (hata ayıklama, MCP ve hook içeriyor, kurulmadı). Koordinatörün verdiği üç aday doğrulandı, SKILL.md ve betikler okundu (şüpheli komut yok; betikler yalnız dosya üretiyor), kullanıcı düzeyinde `~/.claude/skills` altına kuruldu: `lightweight-3d-effects` (freshtechbro/claudedesignskills), `3d-web-experience` (sickn33/antigravity-awesome-skills; üstveride "risk: critical" yazıyor, içerik yalnız anlatım), `threejs-shaders` ve `threejs-performance` (CloudAI-X/threejs-skills; `threejs-skills` adlı tek skill yok, 13 skill'lik bir depo). Harici kütüphane kullanılmadı: Vanta/Three.js yerine çıplak WebGL.
- Değişen: kahverengi zemin kalktı. Arka plan sabit tuvalde düşük poligonlu üçgen ızgara; her üçgen düz gölgeli, dalga yüksekliği shader'da, fare ve tıklama dalga yapıyor, kaydırdıkça faz kayıyor ve su koyulaşıyor. "O yere çarpmıştı." su çizgisinin altına gömülüyor (bulanık, yarı saydam katman, hafifçe salınıyor); "Düştü." net. "Skill'ler" ve "Kurulum" bölümleri iki modda da koyu su altı tonunda, üstte dalgalı yüzey çizgisi. Üstteki bölümlerde yarı saydam cam yüzey. Kiremit vurgu korundu.
- Gece/gündüz düğmesi: üst menüde, SVG simge, aria-pressed ve etiket; sistem tercihi varsayılan, seçim `localStorage`'da (try/catch), `data-theme` ile uygulanır, `<head>` içinde erken ayarlanır (FOUC yok). Su renkleri anında değişir.
- Yedekler: reduced-motion'da tek kare ve animasyon yok; sekme gizlenince rAF durur; WebGL yoksa 2B tuvalde statik üçgen deseni; mobilde ızgara seyrek, dpr 1, 30 fps.
- Test: 1440, 390, koyu ekran görüntüleri (`gece/site-ekran/v2-*`); scrollWidth = viewport; konsol hatası yok; sekmeler klavyeyle; kopyala; kart gizle/göster; reduced-motion; WebGL'siz yedek; JS'siz görünüm; düğme tıklama/Enter ile tema, yenilemede kalıyor, localStorage kapalıyken çalışıyor; piksel tabanlı kontrast taraması (metin gizlenip gerçek arka plan örneklendi) iki modda 1440 ve 390'da sorunsuz.
- Görülen ve düzeltilen: ilk kontrast taramasında soluk metin ve logo vurgusu 4.4:1'di (renkler koyulaştırıldı); koyu mobilde "Daha fazla YZ izi" bağlantısı çıplak suyun üstündeydi (cam hap yüzeyi eklendi); ilk çizimde üçgenler fark edilmeyecek kadar silikti (aydınlatma kontrastı artırıldı).
- Kalan: SwiftShader'da WebGL performans uyarısı (ReadPixels) test ortamına özgü. Gömülmüş cümlenin alt yarısı bilerek bulanık; kontrast taramasında yalnız metin rengi ölçülüyor, bulanık katman hesaba girmiyor (elle bakıldı, okunuyor).

## Tur 9 (gerçek 3B su sahnesi)
- Skill'ler: `3d-web-experience`, `threejs-shaders`, `threejs-performance`, `lightweight-3d-effects`, `ui-ux-pro-max`, `high-end-visual-design` yüklendi ve uygulandı.
- Sahne (Three.js 0.170.0, `https://cdn.jsdelivr.net/npm/three@0.170.0/build/three.module.min.js`, ES module, dinamik import):
  1. Deniz tabanı: perspektife göre sıklaşan, titretilmiş üçgen ızgara; yükseklik JS'te gürültüyle (kum tepeleri, kaya kümeleri). Shader'da `dFdx/dFdy` ile düz gölgeleme, kum/kaya rengi, hareketli kostik desen, derinlik ve uzaklıkla suya karışma. Ayrı bir render hedefine (masaüstünde %75, mobilde %50 çözünürlük) çizilir.
  2. Su yüzeyi: aynı ızgaranın seyrek hâli; dalga yüksekliği vertex shader'da (dört sinüs + dört halka dalga). Yüzeyden taban dokusu normal kadar kaydırılarak okunur (kırılma), Fresnel ile gökyüzü yansıması, güneş/ay speküleri, halka dalgalarda köpük, uzaklıkta sis. Kamera eğik (yaklaşık 31 derece aşağı); sayfa kaydıkça biraz ilerler ve su koyulaşır.
  3. Su altı kabarcıkları: GPU'da hesaplanan 96 noktalık parçacık; batma anında tabandan yüzeye çıkar.
- Yüzen kartlar: üst menü (ada biçiminde hap), hero, örnek kart ve tüm bölüm kartları `data-float`. Dalga formülü JS'te birebir aynı; kartın ekrandaki noktasından su düzlemine ışın atılır, o noktadaki yükseklik ve eğimden `--by/--rx/--rz` hesaplanır (en fazla 7 px, 1.6 derece; büyük kartlarda daha az). Altında suya düşen, yükseldikçe küçülen yumuşak gölge.
- Batma döngüsü: her örnekte yapay zekâ cümlesi suya düşer (küçük sıçrama), üstü çizilir, batar (3B halka dalga ve köpük, sahnede ve kartta kabarcık, köpük damlaları), düzeltilmiş cümle sudan yükselir, 4,3 sn bekler; eski düzeltme akıntıyla uzaklaşırken sıradaki düşer. Kart içinde yarı saydam su katmanı ve dalgalı su çizgisi var, batan kısım katmanın arkasında kalır. Başlıkta "O yere çarpmıştı." su çizgisine gömülür (halka dalga + kabarcık), "Düştü." sudan çıkar. Metinler ve başlık aynı.
- Yedekler: reduced-motion'da tek statik kare, kartlar kıpırdamaz, iki cümle de görünür. WebGL2 yoksa ya da CDN yüklenemezse statik 2B tuval (aynı perspektif üçgenler). JS yoksa CSS degrade arka plan ve iki cümle alt alta. Sekme gizlenince render döngüsü ve kart döngüsü durur, dönünce aynı örnekten devam.
- Performans: taban ızgarası masaüstünde 50x59 (5.900 üçgen), mobilde 30x35 (2.100); su ızgarası bunun yaklaşık %60'ı; kare başına 3 çizim çağrısı; dpr masaüstü 1.5, mobil 1.25 üst sınır; mobilde ~30 fps. Bulanıklık yalnız sabit menüde.
- Test (Playwright, SwiftShader): 37/37 geçti. 1440/390/768 taşma yok, konsol hatası yok (CDN engelli testte yalnız beklenen "Failed to load resource"), sekmeler klavyeyle, kopyala, kart gizle/göster, reduced-motion, tema (tık, Enter, yenilemede kalıcı), WebGL'siz ve CDN'siz yedek, JS'siz görünüm, skip link, piksel tabanlı kontrast taraması dört görünümde sorunsuz.
- Ekran görüntüleri: `v3-d-hero.png`, `v3-d-gece-hero.png`, `v3-m-hero.png`, `v3-m-gece-hero.png`, bölümler `v3-*-ilke/skiller/dayanak/kurulum.png`, batma dizisi `v3-batma-1..6.png`, `v3-reduced.png`, `v3-webgl-yok.png`, `v3-cdn-yok.png`, `v3-js-yok.png`, `v3-toggle-gece.png`.
- Kalan: SwiftShader yavaş olduğu için batma dizisi kareleri gerçek zamanda seyrek alındı; gerçek GPU'da fps ölçülmedi. Hareket eden kartlar Playwright'ın "sabit değil" kontrolüne takılıyor (insan kullanımında sorun beklenmez, test `force` ile tıklıyor). Mobilde hero kartı ekranın çoğunu kapladığı için su ilk ekranda kenarlarda görünüyor.
