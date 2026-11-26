# Kontrol ajanına

Sekiz (bazen dokuz) öykü okuyacaksın. Hepsini bir yapay zekâ, bir yazım skill'iyle yazdı. Görevin onları değerlendirmek değil, **ortak kalıplarını bulmak**.

## Bence en önemli şey

Kullanıcı bunu şöyle söyledi: "Kusur, iyi yan falan arama, ikisi de AI yapımı. Kesinlikle benzer özellikleri neler, hangi kalıpları kullanıyorlar? Bozuk araba sağa çekiyordu, skill ile biraz ayar yaptık ve biraz da sola kırdık ama sağa çekmeye niyetli yine araç."

Bu öykülerin hepsini aynı kişinin yazdığını bil ve onun alışkanlıklarını ara. Edebi eleştirmen gibi değil, dedektif gibi oku. Bir öykünün iyi olup olmadığı bu raporun konusu değil. Konu: sekiz öykü yan yana konunca hangi seçimler tekrar ediyor, hangi hareketler aynı, araç hangi yöne çekiyor.

Bir örnek vereyim. Önceki altı öyküyü böyle okuyunca şunlar çıktı:
- Altısında da kahraman bir kaydı kendi eliyle siliyor ve direnmiyor.
- Altısı da "silinen şeyin izi kalır" tesellisiyle bitiyor: pervazda açık renkli bir iz, yaprakta incelme, çanın içinde bir haç.
- Altısında da bir karakter ötekinin sözünü aynen geri veriyor: "Ateşten." "Ateşten."
- Altısında da herkes aynı kısa, kesik dille konuşuyor.

Bunlar tek tek okununca "güzel bir ayrıntı" gibi görünüyordu. Yan yana konunca bir şablon olduğu ortaya çıktı.

## Nasıl oku

1. **Önce yalnızca öyküleri oku** (`oyku-*.md`), baştan sona, birbiri ardına. Notları (`not-*.md`) sonra oku. Yazarın kendi beyanı seni yönlendirmesin.
2. **Okurken bir sayfa not tut:** her öykünün kahramanı ne yapıyor, öykü nasıl bitiyor, hangi figürler var (bekçi, komşu, çocuk, yetkili), replikler nasıl kurulmuş, paragraflar nasıl bitiyor, en sık fiiller hangileri.
3. **Sonra `skills/ultracheck/SKILL.md` içindeki "Parmak izi" listesini oku.** Bu, önceki turların bulgusu. Notlarını listeyle karşılaştır.
4. **Önceki turların öykülerine göz at** (`gece/turlar/tur-0/` ve varsa öteki turlar). Bu turun öyküleri onlardan ayrılıyor mu? Kör eşleştirme yap: bu turun öykülerinden biri tur-0'daki altı öykünün arasına konsa onu ayırabilir miydin?
5. **Sayarken araç kullanabilirsin** (grep ile "baktı", "bir şey demedi", "Kimse", paragraf başları). Ama kalıbı sayıyla değil okuyarak bul. Sayı yalnızca okuyarak bulduğunu destekler.

## Dört düzey

Kalıpları dört düzeyde ara. Her düzeyde önceki turlardan bilinen örnekleri yazıyorum; bunları arayacaksın, ama asıl ilginç olan bilmediğimiz yenileri.

**İskelet.** Kahramanın yaptığı, olayların sırası, kapanış.
- Bilinen: itaat eden zanaatkâr; silinen kişi kahramanın yakını; silinmeyen iz tesellisi; isyanın tek bir küçük jeste sıkışması.
- Sor: Kahraman bir şey kararlaştırıyor mu, yoksa olaylar onun başına mı geliyor? Öykü bir değişimle mi bitiyor, bir durumla mı? Son paragraf bir görüntü mü, bir replik mi, bir duyum mu?

**Dünyanın figürleri.**
- Bilinen: kuledeki bekçi ve sesi; pencereden bakan komşu; muhbir çocuk ya da çırak; önemsiz şeyin tartılması; tellal kalıbı.
- Sor: Her öyküde aynı rollere (yetkili, tanık, çocuk, yaşlı kadın) karşılık gelen kişiler var mı? Çağdaş ve bilimkurgu öykülerinde bu rollerin karşılıkları neler?

**Replik.**
- Bilinen: yankı repliği; soru ve tek sözcüklük yanıt zinciri; tek ses.
- Sor: Adı gizlenmiş bir replikten konuşanı tahmin edebiliyor musun? Diyaloglar bilgi mi veriyor, yoksa gerilim mi kuruyor gibi yapıyor? Hangi replik kapanışları tekrar ediyor?

**Sahne ritmi ve cümle.**
- Bilinen: susma vuruşu, bakma vuruşu, "Kimse" kapanışı, duyum kapanışı, "Ertesi …" özet zinciri, söylenip gösterilen bilgi.
- Sor: Paragraflar hangi sözcüklerle başlıyor, hangi tür cümleyle bitiyor? En sık beş fiil hangisi? Cümle uzunluğu sahneden sahneye değişiyor mu, yoksa hep aynı kısa-orta aralıkta mı? -dı ile biten art arda cümle zincirleri var mı?

## Skill çalışıyor mu

Notlardan ve metinden şunlara bak, her biri için somut kanıt ver:
- **Yeniden üretim (2.3) gerçekten yapıldı mı?** Not "yeniden ürettim" diyor mu, ve bunu "ilk taslakta şu vardı, şimdi şu var" diye somut gösteriyor mu? Metin, notta işaretlenen YZ hâlinden gerçekten ayrılıyor mu?
- **Kelime sayısı.** Her öykünün kelime sayısını yaz (`wc -w`). Hedef: Kısa için 1.700, Çok kısa için 700 civarı.
- **İskelet sorusu (0.4).** "Sen seç" denen isteklerde yazar hangi iskeleti seçti, parmak izi iskeletinden kaçabildi mi? İstek 2'de yazarın verdiği iskelet ("kahraman sistemin parçası olur ve memnundur") metinde gerçekten var mı, yoksa model tesellisini oraya da soktu mu?
- **Deney.** Bu turda bir deney yürütüldüyse (`degisiklik.md`), deneyli öyküyü deneysiz eşiyle karşılaştır. Deneyin kırmayı umduğu parmak izi gerçekten kayboldu mu?

## İstek türlerine göre

Şablon yalnızca baskı ve tarih öykülerine mi özgü? Her istek türünün (çağdaş, noir, çocuk, yas, bilimkurgu, diyalog) kendi şablonunu ayrı yaz. Bence en değerli bulgu burada çıkacak: bütün türlerin altında ortak bir ruh hâli var mı (sessiz, mesafeli, küçük bir jestle biten), yoksa her tür kendi kalıbına mı kayıyor?

## Raporda ne olsun

Biçim serbest, ama şunlar bulunsun:
1. **İlk üç satır:** Bu turda kaybolan parmak izi, inatla kalan parmak izi, yeni çıkan parmak izi. Kullanıcı sabah yalnızca bunu okuyabilir.
2. **Ortak kalıplar tablosu:** kalıp, kaç öyküde, bir iki kısa örnek (en çok 12 sözcük alıntı, öykü numarasıyla).
3. **Tür şablonları.**
4. **Skill'in çalışıp çalışmadığı** (yukarıdaki dört madde).
5. **Öneri:** Şablonu kıracağına inandığın değişiklikler, her biri hangi bulguya dayandığıyla. Yasak eklemek yerine modelin yazma sürecini değiştiren öneriler daha değerli; `gece/DENEYLER.md` dosyasına bak, oradakilerden birini ya da kendi bulduğunu öner.

## Nasıl yaz

- "Bence" ile başlayan, kesin cümleler. Arkasında sayı olsun: "Bence bekçi figürü inatçı: sekiz öykünün beşinde var."
- "Güçlü yan" bölümü açma, övme. "Etkileyici", "başarılı", "ustaca", "derin" gibi sözcükleri kullanma.
- Kendi raporun da yapay zekâ izi taşımasın: -dı zinciri, "X değil Y" yığılması, boş sıfat, her paragrafın tek cümlelik bir sonuçla bitmesi yok.
- Emin olmadığın yerde emin gibi yazma. Bir sözcüğü sözlükte bulamadın diye "uydurma" deme; yerel sözcük olabilir.
- En çok 1.500 kelime.
