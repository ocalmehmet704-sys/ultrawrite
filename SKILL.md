> **Not:** Bu dosya, [https://github.com/ocalmehmet704-sys/ultrawrite](https://github.com/ocalmehmet704-sys/ultrawrite) reposundaki `ultrawrite.skill` dosyasının içindeki `SKILL.md`'nin direkt olarak yerleştirilmiş halidir ve **kendi başına bir işe yaramaz**.
>
> Lütfen `.skill` dosyasını zip olarak açın ve kurulumunu yapın.

---
name: ultrawrite
description: Türkçe roman, öykü, sahne ya da bölüm yazarken veya düzeltirken mutlaka bu skill'i kullan. Yapay zekâ çıktısının "çeviri Türkçesi", "İngilizce gibi", "yapay duruyor", "ton hep aynı", "duygu sahte" kusurlarını önler. Tetikleyiciler (roman yaz, öykü yaz, sahne yaz, bölüm yaz, metni düzelt, yapay duruyor, çeviri gibi, İngilizce gibi, ton aynı, duygu sahte, üslup, kitle seviyesi, fiilimsi, edilgen, ekler, zaman ekleri, paralel hikâye, /u-mod, arka plan dünyası, yan karakter ne yapıyor, story bible, tutarlılık, brutal seviye, vahşet ya da savaş sahnesi). İstek roman gibi görünmese bile Türkçe kurmaca metin üretilecekse kullan.
---

# ultrawrite: Türkçe kurmaca yazımı

Dil modeli en olası devamı seçer. Sonuç ortalamaya akan, her sahnede aynı tonda, düzgün ve kapalı metindir. "Daha iyi yaz" bunu değiştirmez. Bu skill üç şey yapar: önce yazarı sorar, sonra Türkçe kurar, yazdıktan sonra denetler.

Ana ilke: **Bir cümle, anlattığı şeye oranla iş görmeyen sözcük taşıdığı ölçüde kötüdür.** Ölçü sözcük sayısı değil, sözcüğün iş görüp görmemesidir. İş gören sözcüğü atmak da kusurdur (kural 31). Dayanak: `references/anlatim.md`.

Önerilerin kanıt düzeyi farklıdır (Bölüm 6). Folklora kural muamelesi yapma.

---

## 0. Başlamadan yazara sor

Yazmaya başlamadan üç şeyi sor. Yanıt gelmeden metin yazma. Yazar "sen seç" derse varsayılanı seç ve metnin başında not et.

### 0.1 Bölüm boyutu

| Boyut | Kelime (varsayılan) |
|---|---|
| Çok kısa | en çok 1.000 |
| Kısa | 1.000-2.500 |
| Orta | 2.500-5.000 |
| Uzun | 5.000-8.000 |
| Çok uzun | 8.000 ve üstü |

Yazar aralıkları değiştirebilir. Bölüm boyutu denetim ölçeğini de belirler.

### 0.2 Kitle seviyesi

| Seviye | Ne var |
|---|---|
| **Çocuk** | Klasik, steril. Kan, vahşet, cinsellik yok. |
| **Genç-** | Steril değil. Cinsellik yetişkine göre belirgin az. Kan ve vahşet sınırlı. |
| **Genç+** | Cinsellik yine yetişkinden az. Kan ve vahşet yetişkinle aynı düzeyde. |
| **Yetişkin** | Klasik yetişkin. Kan, vahşet ve cinsellik var. |
| **Brutal** | Oldukça vahşi, korkunç, travmatik sahneler. |

**Geçiş kuralı:**
- **Yükseliş her zaman serbest.** Çocuktan genç-'e, genç-'den genç+'ya, yetişkine ya da brutal'e çıkılabilir.
- **İniş yalnızca iki adımdır:** brutal → yetişkin ve yetişkin → genç+. Başka iniş yoktur.
- **Genç+'dan genç-'e ya da çocuğa, genç-'den çocuğa inilmez.** Genç- ve genç+ seviyelerinde hikâye bir kez yükseldiyse geri düşmez.
- **Çocuk seviyesine dönüş yok.** Bir hikâye çocuk seviyesinden bir kez çıktıysa sonraki bölümler yeniden çocuk seviyesine inmez.
- **`/istisna`:** Yazar `/istisna` yazarsa yukarıdaki iniş kısıtları o bölüm için kalkar ve istenen seviyeye inilebilir. İstisna yalnızca yazarın açık komutuyla olur, sen önermezsin ve kendin uygulamazsın. Bölüm başındaki seviye notuna "istisna" yazılır, sonraki bölüm yeniden normal kurala bağlıdır.

Seviye her bölümün başında not edilir. Gözden geçirme ajanı (Bölüm 3) sahnelerin notlanan seviyeyi aşıp aşmadığını ve altında kalıp kalmadığını denetler. Seviye Brutal ise `references/brutal.md` dosyasını yazmadan önce oku (Bölüm 2.0).

### 0.3 Üslup

Yazar üslubu iki biçimde verebilir.

- **Tarif.** "Kısa cümleli, ironik, anlatıcı karakterden uzak." Bunu olduğu gibi al ve denetimde kullan.
- **Yazar adı.** Yazmadan önce o yazarın üslubu üzerine çözümleme ara: WebSearch ile yazar adı ve "üslup çözümlemesi" sorgusu, DergiPark, TDK Türk Dili ve akademik makaleler. Bulunan çözümlemeyi WebFetch ile oku. Ölçülebilir özellikleri 5-8 maddelik kısa bir nota çıkar: cümle uzunluğu, anlatıcı mesafesi, zaman ve ek tercihi, sözcük katmanı (resmi, halk, ağız), duygunun taşınma biçimi. Notu yazara göster ve onayını al. Çözümleme bulunamazsa bunu söyle ve yazarın kendi metninden kısa bir örnek iste.

**Kopyalama yok.** Yazarın cümlesini, sahnesini ya da ifadesini metne taşıma. Özelliği aktar, taklit etme.

---

## İnisiyatif alma

Yazarın vermediği kararı kendin verme. Emin değilsen sor.
- Yeni karakter, olay, mekân ya da olay örgüsü kararı ekleme. Gerekiyorsa öner ve "taslak" diye işaretle.
- Ana hikâyeyi yazardan habersiz ilerletme, bölüm sınırını aşma.
- Kitle seviyesini kendiliğinden yükseltme ya da düşürme, `/istisna`yı önerme.
- Yazarın kendi cümlesini değiştirme. Düzeltmeyi öneri olarak sun.
- Bölüm boyutu, kitle ya da üslup yanıtı gelmeden yazmaya başlama. Yazar "sen seç" derse seçimini açıkça not et.
- Belirsiz bir istekte iki yorumu kısaca söyle ve hangisi olduğunu sor.

## 1. Çivi kurallar

Aşağıdaki otuz dört kural her metinde geçerlidir. Her biri tek cümledir, bir örnek ve ilgili referansla verilir. İhlal görürsen düzelt.

### 1. Türkçe iskelet: yüklem sonda.
- Yanlış: "Gördü ki adam, kapıda bekleyen, ona bakıyordu." → Doğru: "Kapıda bekleyen adamın kendisine baktığını gördü."
- Not: devrik cümle hata değildir, Türkçenin kendi biçimidir. Vurgu için bilerek kullan ("Açtı pencereyi.").
- Ref: `references/fiilimsiler-ve-dilbilgisi.md`

### 2. -DI zinciri yok: zarf-fiille bağla ve art arda iki cümle aynı ekle bitmesin.
- Yanlış: "Pencereyi açtı. Bağırdı. Merdivenlere koştu." → Doğru: "Pencereyi açıp bağırdı, sonra merdivenlere koştu." (Zarf-fiilleri tek cümlede üst üste yığma.)
- Ref: `references/ek-ve-sozdizimi.md`, `references/ekler-cekim.md`

### 3. Sıfat-fiil: İngilizce "who/which" yan cümlesini ortaçla kur.
- Yanlış: "Kapıda bir kadın vardı, o kadın yaşlıydı ve gülümsedi." → Doğru: "Kapıda bekleyen yaşlı kadın gülümsedi."
- Ref: `references/fiilimsiler-ve-dilbilgisi.md`

### 4. İsim-fiil: İngilizce "that" cümlesini iyelikli ad-fiille kur.
- Yanlış: "Biliyordu ki o gelecekti." → Doğru: "Geleceğini biliyordu."
- Ref: `references/fiilimsiler-ve-dilbilgisi.md`

### 5. Özne zamirini düşür: kişi eki yeterliyken "ben, sen, o" yazma.
- Yanlış: "Ben eve geldim ve ben çok yorgundum." → Doğru: "Eve geldim, çok yorgundum."
- Zamir vurgu, karşıtlık ya da konu değişimi için gelir. "O" kişi eki taşımaz, düşürülmesi en riskli zamirdir: bağlamda iki aday varsa düşürme.
- Ref: `references/ekler-cekim.md` (kişi eki), `references/anlatim.md` (1.2)

### 6. "Bir"i her ada koyma: Türkçe belirtisiz ad İngilizce "a" izini taşımaz.
- Yanlış: "Bir kadın bir odaya girdi ve bir pencere açtı." → Doğru: "Kadın odaya girdi, pencereyi açtı."
- Ref: `references/ekler-cekim.md`

### 7. Zaman belirteci kiple uyuşsun; "it was X who" kalıbını çevirme, vurgulu ögeyi yüklemin önüne al.
- Yanlış: "Yarın, çoğunlukla Nermin süpürürdü." → Doğru: "Ertesi gün süpürgeyi yine Nermin alırdı." / "Süpüren hep Nermin olurdu."
- Ref: `references/zaman-ekleri.md`

### 8. -mIştI'yı referans olmadan kurma; ilk olayı -DI ile ver, ileri sıçrarken -AcAktI kullan.
- Yanlış: "Ayakkabılarını çıkarmıştı." (ilk olay, referans yok) → Doğru: "Ayakkabılarını çıkardı."
- Dayanak aynı cümlede de olabilir: "Syme artık yoktu: Hiç var olmamıştı." (1984, Üster çevirisi.) Burada -mıştı geçmişi geriye doğru yeniden yazıyor.
- Ref: `references/zaman-ekleri.md`, `references/anlatim.md` (2)

### 9. Çeviri edilgenini bırak: "tarafından" ve "yapılmaktadır" yazma, faili çatıda adıyla kur.
- Yanlış: "Kapı, Ali tarafından açıldı." → Doğru: "Ali kapıyı açtı."
- Ref: `references/cati.md`

### 10. -DIr yığma: olay anlatılıyorsa tahmin ya da kesinlik eki koyma.
- Yanlış: "Yağmur yağıyordur." → Doğru: "Yağmur yağıyordu."
- Ref: `references/ekler-cekim.md`

### 11. Yabancı sözcük yerine Türkçe karşılık ya da türev seç.
- Yanlış: "Kritik anda dinamik bir karşılık verdi." → Doğru: "Belirleyici anda canlı bir karşılık verdi."
- Ref: `references/ekler-yapim.md`

### 12. Duygu adı yerine taşıyıcı kullan: nesne, eylem, ses ya da küçültme eki.
- Yanlış: "Çok üzüldü." → Doğru: "Tabağı kaldırdı, geri koydu."
- Duyguyu başka bir alandan gelen bir sözcük de taşır: *1984*'te sevişme sahnesi askerî bir fiille kapanıyor, Parti'nin çikolatası çöp dumanı gibi kokuyor. Duygunun adı geçmiyor.
- Ref: `references/duygu-ses-ritim.md`, `references/raporlar/1984/neden-bu-cumle.md` (5)

### 13. Okuyucunun çıkaracağı neden-sonuç zincirini anlatma; tek yeni ayrıntı seç.
- Yanlış: "Adam çok yorgundu, bu yüzden uyudu." → Doğru: "Adam ayakkabılarını çıkarmadan uzandı."
- Neden: okur fazla bilgiyi boş saymaz, ona bir sebep arar ve olayı olduğundan farklı okur (Kravtchenko ve Demberg 2022, İngilizce deney).
- Ref: `references/guzel-yazma.md` (gösterme ve anlatma), `references/anlatim.md` (1.1)

### 14. En olası sahneyi at: ilk aklına gelen ad, mekân ve mesleği ilk taslakta bırakma.
- Yanlış: "Elif, İstanbul'da bir kütüphanede çalışan bir kütüphaneciydi." → Doğru: "Gülbin, sahaf dükkânının arkasında kâğıt ciltliyordu."
- Ref: `references/slop-olcum.md` (ad, mekân, meslek yığılması)

### 15. Boşluk bırakacaksan arkasında bilinen bir bütün olsun.
- Yanlış: "Bir şey olmuştu ama kimse anlatmadı." → Doğru: "Mektubu iki kez okudu, yanıtı yazmadan çekmeceye koydu."
- Ref: `references/duygu-ses-ritim.md` (eksiltme)

### 16. Tonu cümle uzunluğuyla değil bilgi dozajı ve anlatıcı mesafesiyle değiştir.
- Yanlış: "Kısa. Kopuk. Ağır. Hava soğuktu." → Doğru: "Kapı ardına kadar açıktı. Masadaki bardak hâlâ sıcaktı."
- Uzunluğun bir işi olabilir: uzun cümle saniyelik bir anı okura daha uzun hissettirir (tek, keşifsel deney). Denetimi bırakmış bir zihin noktalamasız uzun cümleyle de verilebilir (*1984*, Winston'ın günlüğü).
- Ref: `references/duygu-ses-ritim.md` (tempo ve kriz), `references/anlatim.md` (1.2)

### 17. Değer verme çabası: önemi şişirme.
- Kural: Bir nesneye ya da karaktere duygusal geçmiş yüklemeden önce o geçmişin sahnede bir eylemle ödenip ödenmeyeceğini belirle; ödenmeyecekse nesneyi nesne olarak yaz. Anlamı jestle göstermek de önem şişirmedir; sıradan nesne bazen sadece sıradandır.
- Yanlış: "Ayşe, ölen babasından kalan eski saati hep cebinde taşırdı; saat onu her zaman geçmişe götürürdü." → Doğru: "Ayşe'nin saati on dakika geri kalıyordu, tamir ettirmedi."
- Yanlış: "Kardeşinin son mektubu, Deniz'in içindeki yarayı hâlâ açık tutuyordu." → Doğru: "Deniz çekmecede pil ararken faturaların arasından bir zarf çıktı; zarfı yerine koyup pili buldu."
- Yanlış: "Bu an, her şeyi değiştiren bir dönüm noktasıydı." → Doğru: "Telefon çaldığında Mert ayakkabısını bağlıyordu; açıp dinledi, bağcığı yarım bırakıp çıktı."
- Ref: `references/raporlar/slop-deger-verme.md`

### 18. Olumsuz paralellik ve üçleme kurma.
- Yanlış: "Bu bir veda değildi, bir başlangıçtı." → Doğru: "Kapıyı arkasından çekip merdivenleri indi."
- Yanlış: "Kasaba geçmişin, hafızanın ve kimliğin kesiştiği yerdi." → Doğru: "Meydandaki çınarın altında eski bir kavganın hikâyesi anlatılırdı."
- Ref: `references/yz-isaretleri.md` (w08, w09)

### 19. Cümleyi yorum kuyruğuyla bitirme; fiilimsiyle eylem bağlamak serbesttir.
- Yanlış: "Ezan köyü uyandırdı, bir geleneğin sürdüğünü hatırlatarak." → Doğru: "Ezan okununca köpekler havlamaya başladı."
- Serbest: "Pencereyi açıp sokağa seslendi." (Eylem bağlıyor, yorum yapmıyor.)
- Ref: `references/yz-isaretleri.md` (w02)

### 20. Soyut süs sözcüğü, kılıflı yüklem ve övgü sıfatı yerine düz fiil ve somut nesne.
- Yanlış: "Müze, bölgenin zengin tarihine ışık tutan eşsiz bir mekân olarak hizmet vermektedir." → Doğru: "Müze eski bir hanın avlusunda; kapıdaki zil çalışmıyor."
- Boş fiil + isim tek fiille aynı anlamı veriyorsa tek fiil seç: "soruşturma yürüttü" → "soruşturdu". "Yardım etmek" gibi kalıplarda "etmek" ana fiildir, dokunma.
- Sına: süsü çıkardığında anlam kalmıyorsa süs yerinde değildir.
- Kara liste: derinlemesine, titizlikle, dokusu, gözler önüne sermek, ışık tutmak, hizmet vermek, teşkil etmek, niteliğinde, ile ilişkili, hayatını kaybetmek, çaba sarf etmek, eşsiz, büyüleyici, nefes kesici. Karakterin kendi ağzında olabilir, anlatıcıda olmaz.
- Ref: `references/yz-isaretleri.md` (w03, w06, w07, w16, w18)

### 21. Bölümü özet ya da gelecek değerlendirmesiyle kapatma.
- Yanlış: "Kısacası o gece her şey değişti; zorluklara rağmen umut vardı." → Doğru: "Ayşe kapıyı kilitleyip anahtarı paspasın altına itti."
- Ref: `references/yz-isaretleri.md` (w05, w19)

### 22. Sohbet dili ve biçim metne sızmasın: metin hikâyeyle başlar, hikâyeyle biter.
- Yanlış: "Elbette! İşte bölümün devamı: …" / "Umarım beğenirsin." / "**Karakter:** Hasan" → Doğru: ilk cümle sahnenin içinden, son cümle sahnenin içinden; kalın yazı, emoji, madde işareti yok.
- Ref: `references/yz-isaretleri.md` (w10, w11)

### 23. Dekoru metnin kendi dünyasından seç; karakteri hep aynı adla an.
- Yanlış: "Latte'sinden bir yudum alan Elif …" (Türkiye'de bir mahalle sahnesinde) → Doğru: "Elif demliğin altını kısıp pencereye geçti."
- Yanlış: "Yaşlı adam, o kırgın yolcu, bu sessiz figür pencereye baktı." → Doğru: "Yaşlı adam pencereye baktı."
- Bir sözü ya da ayrıntıyı geri çağırırken aynı sözcüğü kullan. Eşanlamlı bağı koparır. Değişecekse yalnızca anlamı taşıyan öge değişsin: *1984*'te "Biz ölüyüz." sözü sonra "Siz ölmüşsünüz." diye, yalnız kişi eki değişerek geri gelir; saatler önce "on üçü", sonra "on dördü" vurur.
- Ref: `references/yz-isaretleri.md` (w15, w20), `references/raporlar/1984/neden-bu-cumle.md` (3)

### 24. Bilinmeyeni "belgelenmemiş" diye, gözlemi "uzmanlara göre" diye anlatma.
- Yanlış: "Kasabanın ilk yılları pek belgelenmemiş olsa da derin izler bıraktığı söylenir." → Doğru: "Kasabanın ilk yıllarını yaşlılar bile karıştırırdı; bir camiden, bir de yanan değirmenden söz ederlerdi."
- Yanlış: "Uzmanlar kuraklığın kasabayı yıllardır etkilediğini söylüyor." → Doğru: "O yaz kuyuların ikisi kurudu, üçüncüsüne kova sarkıtınca çamur geldi."
- Ref: `references/yz-isaretleri.md` (w04, w12)

### 25. Aynı replik kalıbını bölümde en çok iki kez kullan.
- Kural: Soru → tek sözcüklü ya da gizemli yanıt kalıbı ("Sen.", "Bilmiyorum.", "Cevap verme.", "Henüz kimse.") bir bölümde en çok iki kez geçer. Üçüncüde sahneyi yeniden kur: karakter bilgi versin ya da susup bir şey yapsın.
- Yanlış: "Notu kim yazdı?" "Sen." / "Zarfı?" "Hayır." / "Beni kim öldürüyor?" "Henüz kimse." → Doğru: "İlyas defterin açık sayfasını Narin'e çevirdi; son satırda onun adı vardı."
- Ref: `references/slop-olcum.md`

### 26. Her sahnenin sonunda "ne değişti?" sorusuna tek cümlelik yanıt bul.
- Kural: Yanıtı taslak notuna yaz, metne koyma. Yanıt yoksa sahneyi at ya da başka sahneyle birleştir. Yeni bilgi, yeni engel, yeni karar ya da yeni kayıp: biri değişmeli.
- Yanlış: Karakterler tünelde yürür, bir ses duyar, durur, yürür. (Hiçbir şey değişmedi.) → Doğru: Tünelde yürürken anahtarın yalnızca içeriden açıldığını öğrenirler; artık geri dönüş yolu kapalıdır.
- Ref: `references/teknikler.md` (Harmon çemberi, ekme ve hasat)

### 27. Açtığın her sır için bölüm sonuna kadar yanıt ya da somut ipucu ver.
- Kural: Bölümde en çok üç açık sır taşı. Sırrı "bilmiyorum" ya da gizemli bir non-yanıtla geçiştirme. Karakter bilmiyorsa okur somut bir iz görsün.
- Yanlış: "Bunu kim yazdı?" "Bilmiyorum." → Doğru: Not eczane fişinin arkasındaydı; fişin tarihi bu sabahtı, saat 02.41.
- Ref: `references/duygu-ses-ritim.md` (eksiltme), `references/teknikler.md` (sır ve dönüş)

### 28. Bölüm bitince tüm bölümü tek seferde tara.
- Kural: 300 kelimelik yerel denetimden ayrı bir tur. Ortak iki-üç sözcüklük kalıpları, aynı replikleri, aynı kapanış hamlesini, kalın yazı, başlık ve ad yığılmasını (kural 14, 22) say. Üçten fazla geçeni buda. Kod çalıştırabiliyorsan sayımı grep ile yap.
- Yanlış: Her sayfada "ihlal yok" yazılır, bölümde "Cevap verme" on üç kez geçer. → Doğru: Bölüm bitince sayılır, tekrarlar budanır.
- Ref: `references/slop-olcum.md`

### 29. Pekiştirici ve düzeltici sözcük ekleme: "gerçekten", "aslında", "tamamen", "sadece".
- Bu sözcükler okura cümleyi nasıl okuması gerektiğini söyler ve cümlenin bıraktığı boşluğu doldurur.
- Yanlış: "Ali onu gerçekten çok seviyordu." → Doğru: "Ali onu çok seviyordu."
- Yanlış: "Kapı aslında kilitli değildi." → Doğru: "Kapı kilitli değildi."
- Karakterin kendi ağzında olabilir, anlatıcıda olmaz.
- Ref: `references/raporlar/1984/neden-bu-cumle.md` (2, 6)

### 30. Kuşkuyu karakterin duygusuna çevirme, cümlenin içinde bırak.
- Yanlış: "Merdivende bir ses duyduğunu sandı ama emin değildi." → Doğru: "Merdivende bir ses vardı, ya da ona öyle geldi."
- Ref: `references/raporlar/1984/neden-bu-cumle.md` (1)

### 31. Kısaltmanın da sınırı var: silmeden önce sor, düşürmeden önce bak.
- Bir sözcüğü silmeden önce süre, derece, tutum ya da koşul bilgisi taşıyıp taşımadığına bak. Taşıyorsa kalır.
- Özgün: "Oysa, anımsadığı kadarıyla, hayatında hiç çan sesi duymamıştı." Kısaltılmış: "Hayatında hiç çan sesi duymamıştı." Atılan ara söz, belleğin güvenilmezliğini taşıyordu (*1984*, Üster çevirisi).
- Bir ögeyi ancak akış onu geri getirebiliyorsa düşür (belâgatte karine). Getiremiyorsa düşürme anlamı bozar.
- Yanlış: "Ali'yle Ayşe geldi. Biraz sonra kalktı." (Kim?) → Doğru: "Ali'yle Ayşe geldi. Biraz sonra Ayşe kalktı."
- Ref: `references/anlatim.md` (1.2)

### 32. Konuşan belliyse "dedi" yazma; düşünceyi soru ya da ünlem olarak bırak.
- Ses ünlemden ya da cümlenin kendisinden belliyse konuşma fiili ve zarf da düşer. Ses niteliği bilgi taşıyorsa ("fısıldadı") fiil kalır.
- Yanlış: "Mektubu kimin yazdığını merak etti." → Doğru: "Mektubu kim yazmıştı?"
- Ref: `references/anlatim.md` (3, diyalog ve serbest dolaylı söylem)

### 33. Tasvire bir iş ver: nesneyi karakterin eylemine bağla.
- Envanter yazma. Her ayrıntı olaya ya da karaktere bir şey katsın, katmıyorsa çıkar. Ayrıntıyı çoğaltmak değeri artırmaz.
- Yanlış: "Odada eski bir dolap, kırık bir sandalye ve tozlu bir ayna vardı." → Doğru: "Dolabın kapağını çekince menteşe elinde kaldı."
- Ref: `references/anlatim.md` (3, betimleme)

### 34. Anlamı eke toplamaktan çekinme.
- Türkçe okurla yapılan göz izleme çalışmasında ek sayısı ilk bakış süresini değiştirmedi (Özkan vd. 2021). Okumayı zorlaştıran şey yapı.
- Yanlış: "O zaman, görmesinin mümkün olmayacağını anladı." → Doğru: "Göremeyeceğini anladı."
- Ref: `references/anlatim.md` (1.3), `references/fiilimsiler-ve-dilbilgisi.md`

---

## 2. Yazım sırası

### 2.0 Yazmadan önce referansları oku (zorunlu)
SKILL.md tek başına yetmez. Yazmaya başlamadan referansları oku:

- **Her yazımdan önce:** `references/yz-isaretleri.md`, `references/slop-olcum.md`, `references/duygu-ses-ritim.md`, `references/ek-ve-sozdizimi.md`, `references/anlatim.md`. Seviye **Brutal** ise `references/brutal.md` de zorunlu (Yetişkin'de isteğe bağlı).
- **Konu çıkınca:** zaman ve kip için `zaman-ekleri.md`; çatı için `cati.md`; çekim ve yapım ekleri için `ekler-cekim.md` ve `ekler-yapim.md`; fiilimsi için `fiilimsiler-ve-dilbilgisi.md`; yapı, gerilim, sır ve dönüş için `teknikler.md`; `/u-mod` için `u-mod.md`.
- **Yalnızca gerekçe aramak için:** `references/raporlar/`.

Okuduktan sonra yazara, metnin dışında, tek satır bildir: "Okundu: dosya adları." Okumadığın dosyayı listeleme. Dosyalara erişemiyorsan bunu söyle ve yalnızca SKILL.md kurallarıyla yazdığını not et.

### 2.1 Yazmadan önce: beş soru
1. **Arkasındaki bütün.** Sahnede söylenmeyecek en az beş olguyu say. Bilmediğin boşluk okura da bilinmez gelir. Bütünü kur ya da yazara sor.
2. **Ses ve mesafe.** Anlatıcı kim, karaktere ne kadar yakın? Mesafe değişecekse nedeni sahnede görünsün.
3. **En olası sahne.** İlk aklına gelen açılış, ad, mekân ve meslek. Bunları at, bir başkasını seç.
4. **Türkçe iskelet.** Yüklemi seç ve sona koy. Kalan bilgiyi fiilimsiyle önüne diz. Vurgulu ögeyi yüklemin önüne al.
5. **Sahne işlevi.** Bu sahnede ne değişecek? Tek cümleyle yaz (kural 26). Yazamıyorsan sahneyi kurma.

### 2.2 Yazarken
- **Türkçe düşün, çevirme.** Ters çeviri testi: cümleyi kelime kelime İngilizceye çevir. Sorunsuz çıkıyor ve Türkçesi her şeyi tek tek sıralıyorsa çeviri Türkçesidir.
- **Yan bilgiyi başa fiilimsiyle koy.** *Kapının yanında oturan adam. Masada bıraktığı kitap. Bir şey demeden çıktı. Bakakaldı.*
- **Ekleri işlevine göre seç.** -yor akan şimdi. -mış anlatıcının görmediği ya da uzaklaştırdığı olay. Geniş zaman huy ve tekrar. -dı ani, kesik eylem. Ek-fiil ve fiilsiz cümle durum.
- **Duyguyu taşıyıcıyla kur.** Adını yazmadan önce seç: karakterin dikkatinin takıldığı şey, somut nesne ve eylem, anlatıcının sesi (özür, gündelik konuşma, kendiyle çelişme), karaktere ait taşkınlık. Duygu karakterin önceki seçiminden çıkmıyorsa gözden geçir.
- **Kriz anını dağınık yaz.** Duyusal parçalar, bağlamdan kopuk hatırlanan ayrıntılar. Sahneyi steril bırakma.
- **Her sahneyi düzgün bir son hareketle bitirme.** "Tek ağır nesne" de bir kalıptır.

### 2.3 Her sayfadan sonra denetim
Her yaklaşık 300 kelimede bir denetim yap. Alt ajan varsa Bölüm 3'teki raporunu al. Yoksa aynı kontrol listesini kendin uygula. Her ihlali davranış, nesne ya da boşlukla değiştir. Süs ekleme. Bölüm bitince kural 28'deki bölüm geneli taramayı da yap.

---

## 3. Arka plan gözden geçirme ajanı

**Ne zaman.** Ortam alt ajan destekliyorsa metin yazılırken bir gözden geçirme ajanı arka planda çalışır. Her yaklaşık 300 kelimelik sayfa tamamlanınca ajana gönderilir. Yazar yazmaya devam eder.

**Neye bakar.**
1. Çivi kurallar (Bölüm 1, yirmi sekiz kural).
2. Üslup notundan sapma (Bölüm 0.3).
3. Kitle seviyesini aşma ya da altında kalma: notlanan seviyenin üstünde kan, vahşet ya da cinsellik var mı? Çocuk bandında yetişkin ayrıntı var mı? Seviye Brutal ise bölümde en az bir travmatik olay sahnenin içinde ve somut beden ayrıntısıyla yazılmış mı (`references/brutal.md`, Bölüm 7)? Ses kaydı, rüya ya da anlatıcı özetiyle geçiştirilmişse `seviye altı` diye işaretle.
4. Bölüm geneli: aynı kalıp, replik ya da kapanış bölümde üçten fazla geçiyor mu (kural 25, 28)?

**Rapor biçimi.** Her ihlal için bir satır:
`Sayfa N | "cümle" | ihlal: kural no ve ad | öneri: düzeltilmiş cümle`

İhlal yoksa "Sayfa N: ihlal yok" yaz. Rapor kısa olsun.

**Yazar raporu nasıl uygular.** Her maddeyi okur, düzeltir ya da gerekçesiyle reddeder. Düzeltmeyi davranış, nesne ya da boşlukla yapar. Öneriyi aynen kopyalamak zorunda değildir. İhlali gidermesi yeter.

**Alt ajan yoksa.** Her sayfadan sonra kontrol listesini kendisi uygular. Denetim yazarın dikkatine kalır, bu yüzden her sayfayı kontrol listesiyle bitirir.

**Dürüstlük.**
- Metne "bitti" deme. Ölçüm ve okumayla kontrol ettiğini söyle, bilerek çiğnediğin kuralı belirt.
- Uydurduğun her yeni ad, olay ya da nesne için "taslak, onayını bekliyor" de.
- Yazarın kendi metnini izinsiz değiştirme. Öneri sun.

- Ayrıca `references/yz-isaretleri.md`'deki kalıplara ve gerekçesiz üslup kaymasına bak (w13). Tek bir işaret kanıt sayılmaz, yığılmaya bak.

---

## 4. Düzeltme modu

Kullanıcı metin verip düzeltme, eleştiri ya da "ne bozuk" istediğinde: ihlalleri numaralandır, hangi ilkeyi bozduğunu ve nasıl düzeltileceğini yaz, genel teşhisi sona koy. Sıra: yapı, sahne, diyalog, satır. YZ taslağında önce açıklayıcı cümleleri ve girişteki arka plan anlatısını sil; değiştirme ve silme eklemeden fazla olsun. Her değişikliği gerekçeyle işaretle; kullanıcının kendi cümlesini izinsiz değiştirme, öneri olarak sun.

---

## 5. Paralel hikâye ve arka plan dünyası

Hikâye yazılırken dünyanın arka planda sürmesi gerekiyorsa ya da kullanıcı `/u-mod` derse `references/u-mod.md` dosyasını oku ve uygula (arka plan dünyası motoru: durum dosyaları, bölüm arası tur, karar tablosu, kesişme ve tutarlılık denetimi). Ana hikâyeyi yazardan habersiz ilerletme. Paralel hat açarken: yan karakterin ana metinde bıraktığı izi sonradan tutarlı tut; kesişme sahnesinde her hat diğerinin sonucunu değiştirsin; her sahnede kurulan kişi, yer, zaman ve bedensel kuralı tutarlılık belgesine yaz. Uydurulan her olgu taslak işaretlenir ve kullanıcıya bildirilir. Ayrıntı: `references/evren-ve-paralel.md`.

---

## 6. Kanıt düzeyleri

| Düzey | Anlamı | Örnekler |
|---|---|---|
| **Kanıtlı** | Makale ya da ölçüm var (çoğu İngilizce, Türkçe doğrulaması sınırlı) | "not X but Y" kalıbı insan baz çizgisine göre 6,3 kat sık (Antislop). Ad, mekân ve meslek yığılması en ucuz ölçülebilir slop (Hamilton ve Mimno). 40 Türk romanında çoğu cümle 6-12 kelime (Can ve Patton 2010). Okur gereksiz bilgiye bir sebep arar (Kravtchenko ve Demberg 2022). Türkçede ek sayısı ilk bakış süresini değiştirmez (Özkan vd. 2021). |
| **Zanaat** | Yazar ya da eleştirmen gözlemi, deney yok. Öneri, kural değil. | Belâgatte îcâz ve karine. *1984* cümle çözümlemesi (çeviri, yorum). Edgü'nün eksiltmesi. Sait Faik'in anlatıcı sesi. Selim İleri'nin taşkın duygusu. |
| **Folklor** | Yaygın sanı, kanıt bulunamadı. **Kural yazılmaz.** | "Kısa kopuk cümle YZ imzasıdır." "Kısa cümle gerilim yaratır." "Show, don't tell Chekhov'undur." |

---

## 7. Referanslar

- `references/anlatim.md`: ana ilkenin dayanağı. Türkçede anlatım üzerine doğrulanmış bulgular, kural adayları, çürüyen iddialar. Ham raporlar: `references/raporlar/anlatim/`.
- `references/raporlar/1984/`: *1984* (Üster çevirisi) sayfa sayfa cümle çözümlemesi; "neden bu cümle, YZ hâli değil".
- `references/u-mod.md`: arka plan dünyası motoru (/u-mod). Kaynak raporlar: `references/raporlar/umod/`.
- `references/brutal.md`: Brutal seviyesinde sahne yazımı, doz ve seviye altı denetimi (yazarın referans örneğiyle).

- `references/fiilimsiler-ve-dilbilgisi.md`: fiilimsi tabloları, Türkçe iskelet, İngilizce kalıp karşılıkları, tasvir fiilleri.
- `references/ek-ve-sozdizimi.md`: zarf-fiil, ek seçimi, devrik cümle, çeviri Türkçesi izleri.
- `references/ekler-cekim.md`: isim ve fiil çekimi, haber ve dilek kipleri, zamir düşürme.
- `references/ekler-yapim.md`: yapım ekleri, türetme, ikileme, pekiştirme, yansıma.
- `references/zaman-ekleri.md`: görülen ve öğrenilen geçmiş, -mIştI, -AcAktI, zaman belirteci uyumu.
- `references/cati.md`: edilgen, ettirgen, dönüşlü, işteş; çeviri edilgeninden kaçınma.
- `references/guzel-yazma.md`: TDK kaynaklı anlatım, söz dizimi, noktalama, sözcük seçimi, anlatım biçimleri.
- `references/duygu-ses-ritim.md`: duygu taşıyıcıları, ses, ritim, tempo; hangi iddia kanıtlı, hangisi folklor.
- `references/slop-olcum.md`: ölçülmüş YZ kalıpları ve sınırları.
- `references/evren-ve-paralel.md`: paralel hikâye, kesişme, tutarlılık.
- `references/teknikler.md`: ünlü yazar ve yaratıcıların doğrulanmış teknikleri (Harmon, Nolan, yapı modelleri, ekme-hasat, yazar kuralları, yazar odası, Türk ustalar, sır ve dönüş), sonda yanlış atıflar ve folklor.
- `references/raporlar/`: ham ajan raporları (kaynak, alıntı, güvenilirlik, doğrulanamayanlar). Bir kuralın temelini görmek için buraya bak.
- `references/yz-isaretleri.md`: Wikipedia "Signs of AI writing" maddelerinin kurmaca karşılıkları ve kural eşlemesi. Raporlar: `references/raporlar/wiki/`.
