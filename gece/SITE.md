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
