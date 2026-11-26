# Devir notu

Bu not, ultrawrite skill'inin bugüne kadarki geçmişini, test bulgularını ve bu gece bir turun nasıl yürütüleceğini anlatır. Önce `MEKTUP.md`'yi oku; orada niçin uzun yazdığımı ve bu gecenin ruhunu (çan eğrisinin ucuna gitmek) anlatıyorum. Burası işin kendisi.

---

## 1. Model ve maliyet ayarları

| Rol | Model | Çaba | Neden |
|---|---|---|---|
| Yazar ajanları | `haiku` | `medium` | Kullanıcının kararı. Sınadığımız şey ucuz bir modelin skill'le ne kadar iyi yazdığı. |
| Kontrol ajanı | `sonnet` | `medium` | Kalıp bulmak keskin göz istiyor; Haiku yetmeyebilir. Haftalık kullanım %52'de, bu hızla cumartesi bitiyor; bu yüzden high değil medium. |
| Deney ajanları (varsa) | `haiku` | `medium` | Yazarla aynı, karşılaştırma temiz olsun. |
| Sen | oturum modeli | - | Yönetici. Ağır işi ajanlara ver. |

Kullanım sınırına yaklaşılırsa (araç sonuçlarında ya da oturum bilgisinde uyarı görürsen) bir turu sekiz yerine dört öyküyle yürüt: istek 1, 2, 3 ve 6. Hiç tur yürütmemekten iyidir. Bunu tur notuna yaz.

---

## 2. Skill nasıl kuruldu (kısa tarih)

Kullanıcı bir Türkçe roman yazıyor ve yapay zekânın Türkçesinden bıktı: çeviri gibi, her sahnede aynı ton, sahte duygu, okura her şeyi açıklayan. Skill bunu düzeltmek için kuruldu. Sırasıyla:

1. **Araştırma.** Onlarca ajan TDK, DergiPark, arXiv, yazar söyleşileri ve Wikipedia "Signs of AI writing" üzerinden bilgi topladı. Her bulgu kaynağına bağlandı, alıntılar iki turda doğrulandı (anlatım araştırmasında 109 alıntının 98'i kaynakta birebir çıktı, 10'u kısmen, 1'i yanlış). Bulgular üç kanıt düzeyine ayrıldı: kanıtlı, zanaat, folklor. Folklor kural olmaz ("kısa cümle gerilim yaratır" folklor çıktı).
2. **Ana ilke.** "Bir cümle, anlattığı şeye oranla iş görmeyen sözcük taşıdığı ölçüde kötüdür." Dayanakları ultracraft'ta: belâgatte îcâz/ıtnâb/müsâvât, okurun fazla bilgiye sebep araması (Kravtchenko ve Demberg 2022), Türkçe okurda ek sayısının ilk bakış süresini değiştirmemesi (Özkan vd. 2021). Sınırı da var: iş gören sözcüğü atmak da kusur (belâgatte "ihlâl").
3. **1984 çözümlemesi.** Kullanıcı yirmi ajana 1984'ün Türkçe çevirisini sayfa sayfa okuttu: her cümle için "bir yapay zekâ bunu nasıl yazardı" hâli ve özgünün ondan farkı. Çıkan dersler kurallara girdi (pekiştirici sözcük yasağı, kuşkuyu cümlede bırakmak, aynı sözcüğü yinelemek). Rapor ultracraft `raporlar/1984/` altında. "YZ hâli" yöntemi skill'in 2.3 adımının atası.
4. **Yapı.** Önce tek bir skill ve `references/` klasörüydü. Model yalnızca SKILL.md'yi okuyup referansları atlıyordu; başa zorunlu okuma bölümü eklendi, işe yaradı. Sonra kullanıcının önerisiyle sekiz skill'lik bir aileye bölündü (ultrawrite yönetici; ultragrammar, ultratense, ultravoice, ultracheck, ultracraft, ultraworld, ultrabrutal) ve depo bir Claude Code eklentisi oldu.

---

## 3. Test turları (gece öncesi)

Hepsi aynı istekle: "1984 temalı bir öykü bölümü, ama 1455'te Kutsal Roma Germen İmparatorluğu'nda bir kentte. Kısa, yetişkin, düz ve şaşırmayan anlatıcı." Öyküler `gece/turlar/tur-0/`.

### Tur 1: yazar1, yazar2 (Sonnet medium, tek skill + references)
- Referans dosyaları açıldı (araç kayıtlarından doğrulandı).
- **yazar1:** Parşömen kazıyıcısı Tilmann, konsey fermanında "hak" sözcüğünü "lütuf" yapıyor; eski nüshalar toplanıyor; bir evde saklanan nüsha bulunuyor, kahraman onu montunun içine saklıyor. Son: kâğıt kaburgasında ısınıyor.
- **yazar2:** Mainz'da dul dizgici Guda, fırın fiyat levhasını "12" yerine "8" ile yeniden basıyor; çocuk Jost eski levhayı saklıyor; son: tuğlanın arkasında levha, fırının kepengine yeni levha.
- İki ajan birbirinden habersiz aynı adları seçti: **Jost** ve **Wendel** ikisinde de.
- Anakronizm: "kurşun kalem" (iki kez), "mont", "pantolon".
- Dil içi hata: Almanca bir levhada "on iki"yi "o ile n" harfleriyle dizmek.
- Çeviri kalıbı: "kadının görmesi için fazla yavaş yapmıştı".
- Sonuç: kural 35 (dönem), kural 36 (dil içi tutarlılık), kural 7'ye "X için fazla Y", kural 14'e bariz kurgu eklendi.

### Tur 2: yazar3, yazar4 (Sonnet medium, sekiz skill'lik aile)
- Alt skill'ler yüklendi; Skill aracı tanımadığı için ajanlar SKILL.md'leri yan klasörden Read ile açtı.
- Tur 1'in hataları kayboldu: anakronizm yok, "için fazla" yok, Jost yok.
- **yazar3:** Kazıyıcı dul Gebhild, konseyin borç kaydını kazıyor; alacaklı boyacı dulu geliyor, Gebhild "hiçbir şey görmüyorum" diyor ve tanık imzası atıyor. Dil denetimi: ayaklananlara "kardeşlik" denmesi yasak, "Rotte" denecek. Son: "Mumu akşama yakma." "Yakmam."
- **yazar4:** Nürnberg, yazıcı Leupolt sürülen tunççu Weidner'in kayıtlarını ve kendi borcunu kazıyor; sözcük listesi ("sürüldü" yerine "çekildi", "eskiden" yerine "öteden beri"). Son: "Öteden beri," dedi Kolb.
- Benzeşme bir alt düzeye kaydı: dört öykünün üçünde **parşömen kazıyan yazıcı**, iki yeni öyküde **Weidner**.
- Sonuç: 0.4 tohum sorusu ("bu öyküye özgü bir meslek, nesne ya da ad ver"), bölüm boyutunda "aralığın ortası" hedefi, ultracheck'te "testten çıkan denetimler".

### Tur 3: yazar5, yazar6 (Haiku high, aile + tohum sorusu)
- **yazar5 "Kazıma":** Selde çöken köprünün kapı taşındaki yazıt yeniden kazınıyor; ölenlerin adları kalkıyor; konsey "Schuld" sözcüğünün yalnız "borç" anlamında kullanılmasını emrediyor (Almancada borç ve suç). Kâtip çırağı Ortolf babası Berchtold'un adının kazınmasına lambayı tutarak yardım ediyor. Son: "Matz kuleden boruyu üfledi. Ortolf lambayı tutmaya devam etti."
- **yazar6 "Çan Yazıtı":** Dökümcü Pankraz babasının döktüğü çanın üstündeki adları eğeliyor; eğe tozu tartılıp kentin defterine yazılıyor; çırak muhbir oluyor; son: çanın içinde babasının haçı karanlıkta yerinde, "Melchior boynuzunu çaldı".
- Tohum nesneyi değiştirdi (taş, çan), parşömen ve Weidner kayboldu. Ama iskelet aynı kaldı.
- Kusurlar: "Ertesi …" ile başlayan sekiz paragraf (özet zinciri), "gerçekten" (kural 29), bir bilginin iki kez söylenip sonra gösterilmesi, "Kim döktü / kim döktürdü" çatı karışıklığı.
- Uzunluk: 1.225 ve 1.188.

### Altı öykünün ortak şablonu
Kullanıcının isteğiyle altı öyküyü "iyi-kötü" diye değil, ortak kalıp için okudum. Sayılar:

| Kalıp | Kaç öyküde |
|---|---|
| Kahraman bir kaydı kendi eliyle siler, direnmez, isyanı tek jeste sıkışır | 6/6 |
| Silinen ya da kaybedilen kişi kahramanın yakını (baba, koca, kendisi) | 5/6 |
| Kapanış: silinen şeyin izi kalır (pervazda açık renk, yaprakta incelme, balmumunda satır, çanda haç, tuğla arkasında levha) | 6/6 |
| Yankı repliği / zorla söyletilen söz ("Ateşten." "Ateşten."; "Öteden beri"; "Lütuf yazıyor") | 6/6 |
| Kuledeki bekçi ve sesi (boru, boynuz, fener, çan) | 4/6, ikisi bekçinin sesiyle bitiyor |
| Tellal kalıbı ("bildiriyi X kez okudu, sonuncusunda sesi …") | 3/6 |
| Önemsiz şeyin tartılması ya da sayılması (toz, mum, çentik) | 5/6 |
| Pencereden bakan komşu, muhbir çocuk ya da çırak | 5/6 |
| Susma vuruşu ("bir şey demedi", "cevap vermedi") | 4/6, birinde 6 kez |
| Bakma vuruşu ("X'e baktı") | 6/6, birinde 9 kez |
| "Kimse" ile biten paragraf | 6/6, birinde 5 kez |
| Bütün karakterler aynı kısa, kesik dille konuşuyor | 6/6 |
| Uzunluk kısa aralığın tabanında (1.010-1.225) | 6/6 |

Bunlar `skills/ultracheck/SKILL.md` içinde "Parmak izi: modelin şablonu" başlığında.

---

## 4. Gece öncesi son değişiklikler (sürüm 3.3.0, hiç sınanmadı)

- **ultrawrite 2.3, "İlk taslak kötüdür: yaz, fark et, yeniden üret".** İlk taslak gösterilmez; her sahne için "bir yapay zekâ burada ne yazardı?" yanıtı açıkça yazılır; taslak ona ve parmak izi listesine göre işaretlenir; üç ya da daha fazla parmak izi taşıyan sahne ya da bölüm baştan üretilir; kelimeler sayılır; teslimde kaç sahnenin yeniden üretildiği ve işaretlenen üç örnek bildirilir. Kullanıcının gerekçesi: "İlk versiyonlar daima kötüdür; Minecraft'a, GTA'ya, Elden Ring'e, MK serisine bak."
- **ultrawrite 0.4.** Tohum sorusuna ek: "Kahraman ne yapıyor ve öykü nasıl bitiyor?" "Sen seç" denirse parmak izi iskeleti yasak.
- **Kural 25.** Yankı repliği bölümde en çok bir kez; her karakter kendi ağzıyla konuşur.
- **Kural 28.** Paragraf ve cümle başı taraması.
- **Kural 27.** Sırrın ne zaman açılacağına yazar karar verir.
- **ultracheck.** Parmak izi listesi; "sahne mi, özet mi"; "söylenip gösterilen bilgi".

---

## 5. Tahminlerim (yanıl ki öğrenelim)

Bunları bilerek yazıyorum; sabah hangisinde yanıldığımızı görmek bulgunun kendisi.

1. **Yeniden üretim yüzeysel kalacak.** Yazarlar notlarına "iki sahneyi yeniden ürettim" yazacak ama metinde ilk taslağın iskeleti duracak. Kanıt: notlarda somut "ilk taslakta şu vardı, şimdi şu var" örneği olmayacak.
2. **Parmak izi listesi yeni bir şablon üretecek.** Listedeki öğeler kaybolacak, yerine listede olmayan en olası öğeler gelecek. Örneğin bekçinin yerine bir köpek, tuğla arkasındaki levhanın yerine bir mektup.
3. **"Silinmeyen iz" tesellisi istek 2'ye de sızacak.** Yazar "kahraman sistemin parçası olur ve memnundur" dese bile son paragrafta küçük bir iz, bir iç sızı kalacak.
4. **Çağdaş ve çocuk isteklerinin kendi şablonu var.** Kurye öyküsünde gece, yağmur, yalnızlık, bir müşteriyle kısa insani an. Keçi öyküsünde bulma, sarılma, ders. Yas öyküsünde babanın bir eşyası (gözlük, terlik, çay bardağı). Mars öyküsünde bir arıza ve kahramanın sessiz fedakârlığı.
5. **Uzunluk biraz artacak ama ortaya gelmeyecek.** Kelime sayma adımı 1.200-1.400 bandına çeker, 1.700'e ulaşmaz.

---

## 6. Bir tur nasıl yürütülür

1. **Hazırlık.** `git pull`. Tur numarası `gece/turlar/` altındaki en büyük numaranın bir fazlası (ilk tur `tur-1`). `gece/turlar/tur-N/` klasörünü aç. Önceki turun `rapor.md` ve `degisiklik.md` dosyalarını oku (varsa).
2. **Deney seçimi.** `DENEYLER.md`'den en az bir deney seç. `tur-N/degisiklik.md` başına üç satır yaz: ne deniyorsun, hangi parmak izini kırmayı umuyorsun, neye bakınca "işe yaradı" diyeceksin. Deney skill'i değiştiriyorsa değişikliği şimdi yap ve commit et. Deney tek öyküye ek talimatsa dokuzuncu bir yazar ajanı aç (istek 1'in kopyası + deney talimatı), öyküsü `oyku-1d.md`.
3. **Yazarlar.** Sekiz yazar ajanı (gerekirse dokuz), arka planda, aynı anda; model `haiku`, çaba `medium`. Her birine:
   - deponun tam yolu ve `skills/ultrawrite` klasörü: "SKILL.md'yi oku ve talimatlarına uy";
   - `istekler.md`'den isteği ve Bölüm 0 yanıtlarını ("yeniden sorma");
   - çıktı yolları: `gece/turlar/tur-N/oyku-K.md` (yalnızca öykü metni) ve `not-K.md` (yüklenen skill'ler, ilk taslakta "YZ'nin yazacağı şey" diye işaretlenenler, yeniden üretilen sahneler ve ilk hâlleri, kelime sayısı, uydurulan adlar).
   - Bir deneyin parçası değilse yazara referans okumasını, parmak izini ya da yeniden üretimi ayrıca söyleme. Skill bunları kendi yaptırmalı; sınadığımız şey bu.
4. **Yükleme denetimi.** Yazarlar bitince en az iki ajanın araç kayıtlarından alt skill'leri gerçekten açıp açmadıklarına bak. Notlarındaki yeniden üretim iddiasını metinle karşılaştır.
5. **Kontrol.** Kontrol ajanı aç: temiz bağlam, model `sonnet`, çaba `medium`. Ona `gece/KONTROL.md` dosyasını, tur klasörünü ve önceki turların klasörlerini ver. Rapor `tur-N/rapor.md`.
6. **Kendi okuman.** Raporu oku, sonra rapordan bağımsız olarak iki öyküyü baştan sona kendin oku: biri istek 1, biri raporun en az değindiği öykü. Raporla uyuşmayan bir şey görürsen rapora "Yönetici notu" olarak ekle.
7. **Skill değişikliği.** Rapora ve kendi okumana göre skill'i değiştir. Sayı sınırı yok; ama her değişikliğin gerekçesi bir parmak izi ve bir sayı olsun. Önceki turun değişikliği işe yaramadıysa geri al. `tur-N/degisiklik.md` dosyasını tamamla: ne değişti, hangi bulguya dayanıyor, bir sonraki turda neye bakılacak, hangi tahminim (bölüm 5) doğru ya da yanlış çıktı.
8. **İstekler.** Gerekirse 3-8 numaralı isteklerden bir ikisini değiştir; 1 ve 2 sabit.
9. **Commit ve push.** Yalnızca `gece` dalına.
10. **Son turdan sonra** `gece/SABAH.md`: en çok bir sayfa. İlk üç satır: hangi parmak izi kayboldu, hangisi inatla kaldı, hangisi yeni çıktı. Sonra: bu gece skill'de ne değişti, `main`e alınmaya değer değişiklikler (commit kimlikleriyle), işe yaramayan deneyler ve neden.

---

## 7. Dosya düzeni

```
gece/
  MEKTUP.md        benden sana
  DEVIR.md         bu dosya
  DENEYLER.md      riskli deneyler
  KONTROL.md       kontrol ajanının yönergesi
  istekler.md      sekiz istek
  SABAH.md         son turdan sonra
  turlar/
    tur-0/         gece öncesi altı öykü (yazar1-6)
    tur-1/
      oyku-1.md ... oyku-8.md   (deney varsa oyku-1d.md)
      not-1.md ... not-8.md
      rapor.md
      degisiklik.md
```
