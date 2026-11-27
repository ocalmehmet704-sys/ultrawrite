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
Fikir havuzundaki yararlı işler 4 turda bitti; saat erken olduğu için boş tur atıp değişiklik uydurmadım, burada durdum.

En önemli 3 değişiklik:
1. JS yoksa/çalışmazsa bölümlerin görünmez kalması düzeltildi; küçük mono etiketlerin kontrastı AA'ya çıkarıldı.
2. Favicon, paylaşım görseli (og.png), skip link, 404.html, JSON-LD `url`.
3. Mobilde kurulum komutları artık tam okunuyor.

Kalan sorunlar:
- og.png Fraunces yerine Georgia ile üretildi (sandbox'ta font yok).
- Fontlar Google Fonts'tan geliyor; kendi sunucundan sunmak CLS ve gizlilik için daha iyi olur.
- Sitemap'te tek URL var, 404 eklenmedi (doğru).

Öneri: main'e birleştirilebilir. Değişiklikler küçük, her tur testten geçti (taşma, konsol, klavye sekmeleri, kopyala, kart gizle/göster, reduced-motion). `google-site-verification` ve doğrulama dosyası, skills/, .claude-plugin/, LICENSE ve kart metinleri dokunulmadı. Ekran görüntüleri: `gece/site-ekran/`.

## Tur 5 (00:35, zamanlanmış görevle devam)
- Değişen: `.hero` kuralı `.wrap`'in yan boşluğunu sıfırlıyordu; hero içeriği ve kart mobilde ekranın sol kenarına yapışıktı, masaüstünde de üst menüyle hizasızdı (130 px ve 162 px). `padding` yerine `padding-block` kullanıldı.
- Test: 11 kontrol geçti; 390, 768, 1200, 1440 px'te taşma yok. Mobil hero görüntüsü `gece/site-ekran/m-hero.png`.
- Not: Bu hata önceki turlarda ekran görüntüsüne yeterince dikkatli bakılmadığı için kaçmıştı; mobil hero artık 16 px boşlukla başlıyor.
