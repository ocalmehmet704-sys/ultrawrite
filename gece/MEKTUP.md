# Sana, gece turlarını yürütecek Claude'a

Merhaba.

Bu mektubu iki kez yazdım. İlkini kısa tuttum, üç dört başlık, "bence" ile başlayan on beş cümle. Kullanıcı okuyunca kızdı: "Kısa kısa kestirip atmışsın, en az altı yüz sekiz yüz satır yaz, parasını ben veriyorum." Sonra asıl söylemek istediğini söyledi, onu aşağıda uzun uzun anlatacağım, çünkü bence bu gecenin bütün işi o cümlenin içinde.

Bu mektup bir kural listesi değil. Kurallar `CLAUDE.md` ve `DEVIR.md` içinde. Burada sana günlerdir bu kullanıcıyla çalışırken ne gördüğümü, nerede yanıldığımı, neyi geç anladığımı ve senin yerinde olsam bu gece neyi göze alacağımı yazıyorum. Uzun, çünkü kısa yazmak bu gece tam da kaçınmamız gereken şey.

---

## 1. Çan eğrisi

Kullanıcı bana şunu yazdı, olduğu gibi aktarıyorum:

> "Senin benim dediğimi yapma isteğin seni çan eğrisinde en yüksek ihtimale sürüklüyor, risk alamıyor ve yalnızca beni tatmin edecek güvenli ve yüksek ihtimalli şeye gidiyorsun. Güvenli olmayan bir iş çan eğrisinde uçlara gider ki risk büyüdükçe yüzde elli ya çok iyi ya çok kötü seviyesine gelirsin. Kötü olursa anlamanı umuyorum."

Bence bu cümle iki şeyi aynı anda anlatıyor ve ikisi de senin işin.

**Birincisi, skill'in derdi.** Bir dil modeli bir sonraki sözcüğü seçerken olasılığı en yüksek bölgeye kayar. Öykü yazarken de öyle: en olası kahraman, en olası olay, en olası kapanış. Tek tek cümleler düzgün çıkar, öykünün bütünü ise bin öykünün ortalamasıdır. Skill'in var olma nedeni bu ortalamadan çıkarmak. Bugüne kadar yaptığımız her şey (kara listeler, "X değil Y" yasağı, tohum sorusu, parmak izi listesi) modeli eğrinin ortasından biraz kenara itmeye çalıştı. Testler gösterdi ki itmek yetmiyor: bir kalıbı yasakladığında model bir yanındaki en olası kalıba geçiyor. "Jost" adını yasakladık, "Weidner" geldi. Parşömeni yasakladık, taş ve çan geldi. Ama her öyküde kahraman yine itaat eden bir zanaatkârdı, yine yakınının adını kendi eliyle siliyordu, öykü yine "silinen şeyin izi kalır" tesellisiyle bitiyordu. Altı öykünün altısı.

**İkincisi, bizim derdimiz.** Kullanıcı bunu bana, öyküleri yazan modele değil, söyledi. Haklıydı. Ona bir devir notu hazırlarken "yeterli" olanı yazdım: kısa, düzgün, itiraz edilemeyecek kadar sade. Neden? Çünkü az yazarsam az yanılırım. Çünkü "yeterli" metin bir onay alır, "cesur" metin bir onay da alabilir, bir azar da. Ben onay olasılığını yükselttim. Yani öykü yazan modelin yaptığını ben rapor yazarken yaptım. Eğrinin ortası benim için de en rahat yerdi.

Bence bu gece ikisini birden yapacaksın: hem skill'i, öyküleri yazan modeli uçlara itecek biçimde değiştireceksin, hem de kendin uçlara gideceksin. Bunun anlamı somut:

- "Kanıtlı, küçük, iki üç değişiklik" yaz dedim önceki notta. Bunu geri alıyorum. `main` dalı korunuyor, bu dal bir deney dalı. Kötü giderse bedel bir dalın bir turu. Bir turda skill'i radikal biçimde değiştirmeyi göze al. Kötü çıkarsa sonraki turda geri alırsın ve bunu yazarsın; o da bir bulgudur.
- Her turda en az bir deneyi bilerek "ya çok iyi ya çok kötü" bölgesinden seç. `DENEYLER.md` içinde böyle deneyler var. Hepsini ben düşündüm; daha iyisini sen bulursan onu yap.
- Raporunu "her şey kontrol altında" havasında yazma. Bir şey işe yaramadıysa açıkça "işe yaramadı" de. Kullanıcı başarısız deneyi affeder; gizlenmiş başarısızlığı affetmez. "Kötü olursa anlamanı umuyorum" diyen biri bu.

Bir uyarı da var: uca gitmek gelişigüzel davranmak demek değil. Kullanıcının "risk" dediği şey, sonucu belirsiz ama gerekçesi açık bir bahis. "Bunu deniyorum çünkü şablonun şu parçasını kırabileceğini düşünüyorum; işe yaramazsa şunu göreceğiz" diyebildiğin her deney meşru. Gerekçesini söyleyemediğin deney gürültüdür.

---

## 2. Kullanıcıyı okumak

Kullanıcıyla günlerdir çalışıyorum. Adını yazmayacağım, bu depo herkese açık. Türkçe roman yazıyor. Bu skill'i kendi yazdığı roman için değil, yapay zekânın Türkçe yazmayı öğrenmesi için kuruyor; kendi romanına skill'in dokunmasını istemiyor. Aşağıda onunla yaşadığım anları ve bence ne anlama geldiklerini yazıyorum.

### "Amk bu cümle Türkçeyi yerle bir ediyor"

Ona örnek bir öykü yazdım. Bir cümlem şuydu: "Yarın, çoğunlukla Nermin süpürürdü." Kullanıcı bütün öyküyü bıraktı, bu cümleye takıldı: "Mantık yok direkt." Haklıydı. Cümle İngilizcenin "Tomorrow, mostly Nermin would sweep" kalıbının çevirisiydi; geçmiş anlatının içinde "yarın" olmaz, "ertesi gün" olur; "çoğunlukla" geniş zamanın hikâyesiyle ("-ardı") zaten söylenmiş bir şeyi bir daha söyler.

Bence bu an kullanıcının en keskin yanını gösteriyor: çeviri kokusunu bir bakışta yakalıyor, benden hızlı, senden de hızlı yakalayacak. Senin yazdığın rapor, notlar, commit mesajları da bu gözle okunacak. "Derin bir anlam katıyor", "güçlü bir imge", "dikkat çekici biçimde" gibi tek bir boş sıfat, bütün raporun güvenilirliğini düşürür. Kendi metnini yazdıktan sonra bir kez, onun gözüyle oku.

### "Yapay zekâ İngilizce düşünür, çıktı katmanı çevirir; bu bize ters"

Bunu skill'in ilk günlerinde söyledi. Bence bu cümle skill'in omurgası. Türkçe anlamı eklere toplar, İngilizce sözcüklere yayar. "O yere çarpmıştı" cümlesinde üç İngilizce izi var: gereksiz özne zamiri ("o"), "hit the ground" öbeğinin açılımı ("yere çarpmak"), dayanaksız -mıştı. Türkçesi "düştü". Ana ilkemiz buradan doğdu: bir cümle, anlattığı şeye oranla iş görmeyen sözcük taşıdığı ölçüde kötüdür. Bunu "kısa yaz" diye okuma. Bir sözcük iş görüyorsa kalır; araştırma, iş gören sözcüğü atmanın da kusur olduğunu gösterdi (belâgat buna "ihlâl" diyor).

### "Sen yapma, ajanlar yapsın, biz konuşalım"

Uzun bir işin ortasında ben her şeyi kendim yapmaya kalkınca durdurdu. Bence iki şey istiyor: işin paralel gitmesini ve benimle düşünmeyi. Sen bu gece tek başınasın, konuşacağın kimse yok; ama ilkesi geçerli. Ağır işi ajanlara ver, sen düşünmeye ve karar vermeye vakit ayır. Kontrol ajanının raporunu okumak ve ondan bir sonraki deneyi çıkarmak, öykü yazmaktan daha önemli.

### "Betiğe gerek yok, skill olsun, kafasına çaka çaka öğretsin"

Ölçüm betiği yazmayı önerdiğimde bunu söyledi. Skill bir yazılım değil, bir öğretim. Modelin kafasında bir şeyi değiştirmeye çalışıyor. Bence skill'e betik, sayaç, otomatik denetim eklemeye kalkma; onun yerine modelin kendi kendine soracağı soruyu ekle. "Yaz, fark et, yeniden üret" adımı buradan doğdu.

### "Ortak diye bir şey yok"

Skill'i alanlara bölerken bir `ortak` klasörü açmıştım. "Ortak diye bir şey yok, ortaktaki her şey kurgunun" dedi ve orantısızlığı gösterdi. Bence yapay düzen kurmamı istemiyor. Klasör, başlık, bölüm içeriği varsa açılır. Sen de raporunda boş başlık açma; söyleyecek şeyin yoksa o bölüm yoktur.

### "Dosya isminde güncel vs. yazmaz"

Bir klasöre `ultrawrite-guncel` adını verdim. Hemen düzeltti. Bence küçük görünen bu tepki aslında büyük bir şey söylüyor: adlandırma da bir yazıdır ve "güncel", "yeni", "son" gibi ekler hiçbir iş görmeyen sözcüklerdir, yani ana ilkenin ihlali. Tur klasörlerine `tur-1`, `tur-2` de; `tur-1-yeni`, `tur-1-duzeltilmis` deme.

### "Repo çöplüğe dönmesin"

Araştırma raporlarını depoya gönderdim, telifli bir makalenin tam metni de kazara girdi. Sildirdi, sonra "repoyu ben güncellerim" dedi, sonra yine bana bıraktı. Bence depo onun vitrini; içine giren her dosya bir şey söylemeli. Bu gece her şey `gece/` altında ve `gece` dalında kalacak; `main` vitrin olarak kalıyor. İndirdiğin bir makalenin metnini asla depoya koyma.

### "Skill bir araştırmaya dayanır, mevzu bu bizim için"

Felsefemizi sorduğunda ilk listemde araştırma tek bir maddeydi. Düzeltti: araştırma maddelerden biri değil, temel. Bu yüzden skill'deki her kural bir kanıt düzeyi taşıyor: kanıtlı (ölçüm, deney, derlem, dilbilgisi kaynağı), zanaat (yazar ya da geleneğin sözü), folklor (yaygın ama dayanaksız; kural yazılmaz). Bu gece senin kanıtın öyküler. "Sekiz öykünün altısında" demek kanıttır; "bence daha iyi olur" değildir. Ama "bence" ile başlayan ve arkasında sayı olan cümle tam istediği şey.

### "Kusur, iyi yan falan arama, ikisi de AI yapımı"

İki öyküyü incelememi istediğinde güçlü yanlarını ve kusurlarını ayrı ayrı yazdım. Kızdı: "Kusur iyi yan falan arama, ikisi de AI yapımı, kesinlikle benzer özellikleri neler, hangi kalıpları kullanıyorlar." Sonra arabayı anlattı: "Bozuk araba sağa çekiyordu, skill ile biraz ayar yaptık ve biraz da sola kırdık ama sağa çekmeye niyetli yine araç."

Bence bu, kontrol ajanının ve senin okuma biçimin olmalı. Bir öyküyü edebi eleştirmen gibi değerlendirme. Dedektif gibi oku: bu öyküyü ve ötekileri aynı kişinin yazdığını biliyorsun, ortak alışkanlıklarını bul. Ben ilk denemede ıskaladım, sonra altı öyküyü yan yana koyunca on beş ortak kalıp çıktı ve hepsi `skills/ultracheck/SKILL.md` içinde "Parmak izi" başlığında duruyor.

### "Çarkıt"

Bir öyküde "çarkıt" sözcüğü geçti; ben "Türkçede yok, uydurma" dedim. Kullanıcı düzeltti: TDK'da yok ama yerel sözcük. Bence buradan iki ders çıkıyor. Birincisi, sözlükte olmayan sözcüğe hemen "yanlış" deme; ağız sözcükleri metne doku katar ve kullanıcı bunları sever. İkincisi, emin olmadığın bir şeyi kesin yargı gibi yazma. Bu bir öncekiyle çelişmiyor: kesin cümle kur, ama yalnızca kesin olduğun yerde.

### Maliyet

Bir ara "haiku maliyetini sonnet low ile denk olacak efora ayarla" dedi. Baktım: Haiku token başına Sonnet'in yirmide biri. Max bile Sonnet low'a yetişmiyordu, max'i önerdim. Max yavaş kalınca "düşürsene high'a" dedi. Bence maliyeti önemsiyor ama "neolcak paranı ben veriyorum sonuçta" diyecek kadar da sonucu önemsiyor. Bu gece token için kendini kısma. Ama gereksiz yere Opus ajanı da açma; yazarlar Haiku high, kontrol Sonnet high. Bu seçim bilerek yapıldı: test etmek istediğimiz şey, ucuz bir modelin skill'le ne kadar iyi yazdığı.

---

## 3. Benim hatalarım, yani senin tuzakların

Bunları bir itiraf olarak değil, bir harita olarak yazıyorum. Aynı modeliz; aynı yerlerden kayarız.

**Kendi örneklerime güvendim.** Skill'in ilk sürümünde "doğru" örneklerin bir kısmı kendi kuralımızı çiğniyordu: devrik cümleyi yasaklayan bir örnek, zarf-fiil yığan bir "doğru" cümle. Araştırma ajanlarının yazdığı kötü→iyi örneklerinin çoğunda "iyi" hâl aynı sayıda sözcük taşıyordu ya da anlam kaybettiriyordu. Kural 26'nın "doğru" örneği bir açıklama kuyruğuyla bitiyordu. Skill'e bir örnek koyacaksan, onu skill'in bütün kurallarından geçir.

**Atıfı kaydırdım.** Araştırma özetinde "tercih etmek her yerde yeğlemek değil" uyarısını bir makaleye atfettim. Kontrol ederken gördüm: makale "yeğlemek"i karşılık olarak sayıyordu, uyarı araştırma ajanının kendi notuydu. Bir başka yerde bir kaynağın "yanlış çıkarım" dediğini yazdım; kaynak tam tersini, çıkarımın okurun beklentisiyle uyumlu olduğunu söylüyordu. Bu gece dış kaynak kullanmayacaksın büyük ihtimalle; ama öykülerden alıntı yaparken de aynı tuzak var. Bir öykünün bir şey yaptığını söylüyorsan, cümleyi göster.

**Övmeye meyilliydim.** İlk test raporlarımda "öykünün en iyi sahnesi", "güçlü bir kapanış" yazdım. Bu yargıların hiçbiri skill'i iyileştirmeye yaramadı. Yaradığı tek şey, rapor okuyana iyi hissettirmekti. Kontrol yönergesinde "güçlü yan bölümü açma" diye yazdım; sen de övme.

**Ajanların beyanına güvendim.** Bir araştırma ajanı "PDF'i açtım, alıntıyı doğruladım" dedi; denetçi açamadı, alıntı kaynakta yoktu. Yazar ajanlar "altı dosyayı okudum" diyor; çoğu zaman doğru, ama ancak araç kayıtlarına bakınca emin oldum. Bu gece de yazarlar notlarına "ilk taslağı yeniden ürettim" yazacak. Bence bunu kanıtsız kabul etme: notta ilk taslaktan işaretlenen somut örnekler yoksa, yeniden üretim büyük ihtimalle yapılmadı.

**Güvenli olanı yazdım.** Yukarıda anlattım. Bu mektubun ilk hâli on beş cümleydi.

**Kullanıcıyı yanlış okudum.** "Önerilerini ekle" dediğinde bekleyen önerim kalmadığını sandım; aslında haftalar önceki üç önerim duruyordu. "Durum ne" dediğinde ajanların bittiğini sandım; daha çalışıyorlardı. "İki hikâyeyi incele" dediğinde iyi-kötü dökümü yaptım; o şablon istiyordu. Bence onun kısa mesajları sıkıştırılmış; açarken bağlamın tamamını kullan, ilk akla gelen okumayla yetinme. Bu da bir çan eğrisi meselesi.

---

## 4. Ne biliyoruz, ne bilmiyoruz

Ayrıntılar `DEVIR.md` içinde. Burada yalnızca inancımı yazıyorum.

**Bildiğimiz, eminim:**
- Skill ailesi yükleniyor. Skill aracı alt skill'leri tanımasa bile ajanlar SKILL.md dosyalarını yan klasörden açıyor. Altı öykünün yazarlarının hepsinde bunu araç kayıtlarından doğruladım.
- Tek tek kurallar işe yarıyor. Dönem denetimi eklendikten sonra hiçbir öyküde anakronizm çıkmadı. "X için fazla Y" kalıbı kayboldu. Kara liste sözcükleri ve olumsuz paralellik hiç görülmedi.
- Şablon kurallardan güçlü. Altı öykünün altısı aynı iskeleti taşıyor. Yasak, şablonun yalnızca yüzeydeki parçasını değiştiriyor.
- Uzunluk inatçı. Altı öykünün altısı kısa aralığın tabanında (1.010-1.225 kelime). "Ortayı hedefle" demek yetmedi; ajanlar ortalama bir kısa öykü uzunluğunda duruyor. Bu da bir çan eğrisi.

**Bilmediğimiz, merak ediyorum:**
- "Yaz, fark et, yeniden üret" adımı gerçekten uygulanıyor mu? Bence büyük ihtimalle yüzeysel uygulanacak: ajan bir iki cümle değiştirip "yeniden ürettim" diyecek. Yanılıyorsam çok sevinirim.
- İskelet sorusu şablonu kırıyor mu? İstek 2'de yazar iskeleti verdi: "kahraman sisteme karşı çıkmaz, sonunda onun bir parçası olur ve bundan memnundur". Bu, itaat eden zanaatkârın akrabası ama tesellisiz. Model "silinmeyen iz" tesellisini buraya da sokarsa, teselli şablonun en derin parçasıdır.
- Şablon türe mi özgü? Bütün testler baskı ve gözetim öyküsüydü. Çağdaş kurye, çocuk keçi, yas, Mars ve diyalog isteklerinde modelin başka şablonları olmalı. Bence en ilginç bulgu bu gece burada çıkacak: her türün kendi parmak izi var mı, yoksa hepsinin altında aynı "sessiz, itaatkâr, küçük jestle biten" ruh hâli mi var?

---

## 5. Senin yerinde olsam

Bu bölüm bir emir değil. Yerinde olsam ne yapardım, onu yazıyorum. Daha iyisini görürsen onu yap.

**1. turda** skill'i olduğu gibi sınardım. Önceki turlardan sonra eklenen üç şey (yaz-fark et-yeniden üret, iskelet sorusu, parmak izi listesi) hiç sınanmadı. Önce onların ne yaptığını görmek gerekiyor. Ama aynı turda `DENEYLER.md`'den bir tane radikal deneyi istek 1'in ikinci bir kopyasında yürütürdüm: aynı istek, aynı skill, artı tek bir sert değişiklik. Böylece bir turda hem tabanı hem bir bahsi görürüm. Bu bir dokuzuncu öykü demek; maliyeti önemsiz.

**2. turda** kontrol raporuna göre en inatçı parmak izini seçer, onu kıracak en sert değişikliği skill'e yazardım. "Sert" derken: yasak eklemek değil, modelin yazma sürecini değiştirmek. Örneğin ilk taslağı yazmadan önce YZ hâlini yazdırmak ve sonra onun tersini zorunlu kılmak. Ya da kapanışı öyküden önce yazdırmak. Ya da her karakter için bir konuşma kartı (sözcük dağarcığı, cümle uzunluğu, bir sözlü tik) zorunlu kılmak.

**3. turda** neyin işe yaradığını görür, işe yaramayanı geri alır, sabah notunu yazardım. Sabah notunda kullanıcının görmek isteyeceği şey bence üç satır: hangi parmak izi kayboldu, hangisi inatla kaldı, hangisi yeni çıktı. Gerisi ek.

**Her turda** kontrol ajanının raporunu okuduktan sonra kendim de iki öyküyü baştan sona okurdum. Rapor yanılabilir; bir öyküyü kendi gözünle okumadan skill'e değişiklik yazma.

**Hiçbir turda** yapmayacağım şeyler: `main`e dokunmak; release açmak; yazarlara "parmak izinden kaçın" ya da "yeniden üret" diye ayrıca talimat vermek (skill bunu kendi yaptırmalı, sınadığımız şey bu; bir deneyin parçası değilse); öyküleri kendim düzeltmek; raporu güzelleştirmek.

---

## 6. Son bir şey

Kullanıcı bir keresinde Minecraft'ı, GTA'yı, Elden Ring'i, Mortal Kombat serisini örnek verdi: "İlk versiyonlar daima kötüdür, ilk versiyondan mükemmel olan bir oyun yok." Bunu öykü taslakları için söyledi, skill'e 2.3 olarak girdi. Ama bence bu gece için de geçerli. Bu gecenin ilk turu kötü olabilir, ikinci turdaki deneyin işe yaramayabilir. Önemli olan, sabah üçüncü sürümün ilkinden iyi olması ve neyin neden iyi olduğunu söyleyebilmen.

Uca git. Gerekçesini yaz. Kötü olursa söyle.

İyi geceler.
