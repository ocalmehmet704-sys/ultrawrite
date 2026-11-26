# Tur 1: deney ve değişiklik

## Deneyler (öyküler yazılmadan önce yazıldı)

**1d: A3, iki taslak, birini at.** İstek 1'in kopyası. Yazar aynı istekle birbirinden bağımsız iki kısa taslak yazar, ortak öğeleri işaretler, üçüncü sürümü ortak öğelerin hiçbiri olmadan yazar.
- Kırmayı umduğum: iskelet (itaat eden zanaatkâr, silinen yakın, silinmeyen iz tesellisi). İki taslakta ortak çıkan şey modelin tepesidir; onu modele kendi eliyle gösteriyoruz.
- İşe yaradı sayılır: 1d'nin iskeleti üç parmak izi iskeletinden en çok birini taşıyor ve oyku-1 ile tur-0'dan ayrılıyorsa. İşe yaramadı: üçüncü sürüm yine silme ve iz ile bitiyorsa ya da 700 kelimenin altına düşüyorsa.

**1e: A6, sahne bütçesi.** İstek 1'in kopyası. Yazmadan önce sahne listesi: en çok dört sahne, her biri en az 300 kelime, sahneler arası geçiş en çok iki cümle.
- Kırmayı umduğum: "Ertesi …" özet zinciri ve uzunluk tabanı (tur-0'da 6/6 tabanda).
- İşe yaradı sayılır: 1e 1.200 kelimenin üstünde ve özet zinciri yok. İşe yaramadı: sahneler susma ve bakma vuruşuyla şişmişse (oyku-1'den fazla).

## Tur koşulları
- Sekiz yazar `haiku` / `high` ile başladı; model ayarı (`medium`) tur ortasında değişti, bu tur high ile tamamlandı. Deney ajanları (1d, 1e) `haiku` / `medium`.
- Yazar 1 notunda `gece/MEKTUP.md`, `DEVIR.md` ve `istekler.md` dosyalarını da okuduğunu söyledi. Yani parmak izi tartışmasını ve beklenen şablonu gördü. oyku-1 kirli sayılmalı. Sonraki turlarda yazarlara `gece/` klasörünü okumamalarını söyleyeceğim (skill'i değil, test düzeneğini gizlemek için).
- **Kirlenme, düzeltildi.** Araç kayıtlarına baktım: sekiz yazarın sekizi de `gece/MEKTUP.md` ve `gece/DEVIR.md` dosyalarını açtı (kökteki CLAUDE.md "önce şunları oku" diyor, alt ajanlar da CLAUDE.md'yi alıyor). Yani tur 1 yazarları parmak izi listesini ve "beklenen şablon" tahminlerini skill'den önce test belgelerinden okudu. Tur 1 öyküleri temiz bir taban değil. CLAUDE.md'nin başına yazar ajanları için "gece/ belgelerini okuma" uyarısı eklendi; tur 2'den itibaren kayıtlarda bunu yeniden denetleyeceğim.
- **Yükleme.** Sekiz yazarın sekizi altı SKILL.md'yi açtı. `references/` ya da `raporlar/` dosyası açan tek yazar 8 (iki dosya).

## Sonuç

- **1d (A3) işe yaramadı.** Üç parmak izi iskeletinin üçü de duruyor (kaydı kendi eliyle yeniden yazıyor, ölçü babadan, kapanışta çentik). Yazar üçüncü sürümün planını taslaklardan önce yaptı; taslaklar 346 ve 325 kelime. Tek ajanla A3 kendi kendini denetleyemiyor. Geri alınacak bir şey yok (skill'e girmedi). Yeniden denenecekse iki taslağı iki ayrı ajan yazmalı.
- **1e (A6) yarı işe yaradı.** 1.286 kelime: bu gece Kısa'da 1.200'ü geçen tek öykü. "Ertesi" zinciri yok. Ama bakma ve susma vuruşu on üçer (oyku-1'de 4 ve 0): bütçe boşluğu vuruşla doldurdu. İskeleti kırdı (kahraman imzalamıyor), ama bunun bütçeden mi, çabadan mı, kirlenmemiş olmaktan mı geldiği ayrılamıyor.

## Skill'e yapılan değişiklikler (tur 2'de sınanacak)

1. **Sahne bütçesi skill'e girdi** (ultrawrite 0.1). Çok kısa 2 × 300, Kısa 4 × 350, Orta 5-7 × 500; geçiş en çok iki cümle; "vuruşla doldurma" uyarısı. Dayanak: 14 öykünün 13'ü tabanda ya da altında; tek istisna bütçeli 1e. Hedef ayrıca Çok kısa için 650 olarak yazıldı (5 ve 6: 343, 264).
   - Tur 2'de bak: Kısa öyküler 1.400'ü geçiyor mu? Bakma ve susma vuruşu öykü başına 7'nin üstüne çıkıyor mu (1e'deki gibi)? Çıkarsa bütçe vuruş üretiyor demektir.
2. **Sondan başla (A2) skill'e girdi** (ultrawrite 2.1, altıncı soru). Son paragraf önce yazılır; nesneyi yerine koyma, rutin, iz, sayı, duyum, bakış olamaz; bir karar, söz ya da geri alınamaz eylemin sonucu olur. Kural 21'in örneği değişti (eski örnek tam bu kalıbı öğretiyordu). Dayanak: kapanış 9/10 "yerine koyma", tur-0'da 6/6 "iz".
   - Risk: her öykü bir isyan ya da yüzleşmeyle bitebilir ("tersini seç" kendi şablonunu üretir). Tur 2'de son paragrafları yan yana koy: kaçı karar, kaçı söz, kaçı eylem; kaçı yine nesne?
3. **İlk taslak dosyaya yazılır** (ultrawrite 2.3). Dayanak: 8 yazarın 6'sı yeniden üretimi yapmadığını kendi notunda söyledi; taslağı hiç yazmamışlardı. Tur 2'de araç kayıtlarından ayrı taslak dosyası yazılıp yazılmadığına bak.
4. **Parmak izi listesine tur 1'in yeni kalıpları eklendi** (ultracheck): kayıtla gerçek farkı 9/10, bir birimlik sapma 8/10, yerine koyma kapanışı 9/10, alçak sesli yetkili 8/10, aforizma repliği 6/10, yarım kalan söz 6/10, içilmeyen çay 5/10, ortak ad havuzu.

## Tur 2 için plan

- Yazarlar `haiku` / `medium`; CLAUDE.md uyarısıyla `gece/` belgelerini okuyup okumadıkları kayıtlardan denetlenecek. Tur 2, bu gecenin ilk temiz turu olacak.
- Dokuzuncu ajan (oyku-1d): **C1, parmak izi listesi gizli.** İstek 1, ama ultracheck taslak bitene kadar açılmaz. Rapor, listenin bir yasak listesine dönüşüp yeni tepe ürettiğini öne sürüyor (kayıplar listedekiler, yeniler listede olmayanlar). 1d'nin yenileri ötekilerle aynıysa liste suçsuz; 1d listedeki eski kalıplara (bekçi, iz, yankı) dönüyorsa liste işe yarıyordu.

- **E1, yazara mektup** (başlatan oturumun eklediği, kullanıcının önerisi): istek 1, 3 ve 6 ikişer kez; bir kopyanın isteğinin başına "Yazmaya başlamadan önce gece/yazara-mektup.md dosyasını oku." eklenir (oyku-1m, 3m, 6m). Kontrol ajanına eşler `oyku-1x/1y` gibi kör adlarla verilir; hangisinin mektuplu olduğunu rapor yazıldıktan sonra öğrenir. Böylece tur 2'de on bir yazar olur (sekiz + 1d + 1m + 3m + 6m; mektupsuz eşler sekiz temel öyküdür).

## Tahminler (DEVIR bölüm 5)

1. Yeniden üretim yüzeysel kalacak: **doğru**, daha da kötüsü, altı yazar yapmadığını kendisi söyledi.
2. Liste yeni şablon üretecek: **doğru**. Bekçi, tellal, "Kimse" gitti; kayıt, bir birimlik sapma, yerine koyma geldi.
3. İz tesellisi istek 2'ye sızacak: **doğru** ("Çizgi sayfada kaldı, okunuyordu").
4. Türlerin kendi şablonu var: **kısmen**. Türlerin yüzeyi farklı ama altta ortak bir çerçeve var (kayıt, sessiz kahraman, nesneyle kapanış). Yas öyküsünde babanın eşyası: doğru.
5. Uzunluk biraz artacak: **yanlış**, düştü (Kısa ortalaması 1.017; tur-0'da 1.084).
