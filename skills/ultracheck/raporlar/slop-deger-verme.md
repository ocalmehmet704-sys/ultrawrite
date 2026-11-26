# YZ kurmacasında "değer verme çabası" kalıbı

Durum etiketleri: **[Doğrulandı]** kaynak sayfası açılıp kontrol edildi. **[İkincil]** kaynak yalnızca başka bir yazıdan öğrenildi. **DOĞRULANAMADI** kaynak açılamadı ya da iddia bulunamadı. **[Zanaat]** kaynaksız, yazım pratiğine dair çıkarım.

Not: New Yorker sayfası erişime kapalıydı (fetch hatası), bu yüzden Sehgal'in makalesi yalnızca ikincil kaynaktan biliniyor.

---

## 1. Kalıbın tanımı ve alt türleri

Tanım: model, ayrıntıya ve karaktere olduğundan fazla anlam yükler; sıradan bir nesne, bir anıyı ya da yarayı taşıyormuş gibi sunulur.

**a) Önem şişirme (undue emphasis)** [Doğrulandı]
Wikipedia'nın "Signs of AI writing" sayfası, "undue emphasis on significance, legacy, and broader trends" başlığı altında bu kalıbı tarif eder. Sayfa şunu söyler: "LLM writing often puffs up the importance of the subject matter." Listelenen kalıplar arasında "stands/serves as", "is a testament/reminder", "underscores its importance", "a pivotal moment", "setting the stage for" gibi ifadeler var. Sayfa, bu işaretlerin tek başına kanıt olmadığını da belirtir. Kaynak: https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing
Not: Sayfa, Wikipedia politikası olmadığını açıkça yazar. Kurmaca yerine ansiklopedik metne dair bir kılavuzdur.

**b) Miras nesne (babadan kalan saat, annenin son mektubu, kardeşin kolyesi)** DOĞRULANAMADI
Kullanıcının verdiği örnek kalıp olarak makul görünür, ama araştırmada bu spesifik nesneler için bir kaynak bulunamadı. "Dead father heirloom" aramasında sonuç çıkmadı. Bu alt tür için yalnızca [Zanaat] düzeyinde gözlem yapılabilir. Kaynaklarda genel kanıt olarak "klişe duygusal ifadeler" ve "klişe kalıp hikâyeler" geçer, ancak nesne türü tek tek belgelenmemiştir.

**c) Travma geçmişi** [İkincil]
Parul Sehgal'in "The Case Against the Trauma Plot" (The New Yorker, Aralık 2021 / Ocak 2022 sayısı) makalesi, travma kalıbının karakteri bir semptoma indirgediğini savunur. Millions yazısı, makalenin ana iddiasını şöyle özetler: trauma plot "flattens, distorts, reduces character to symptom." Kaynak: https://themillions.com/2022/01/an-examination-of-the-trauma-plot.html
Yapay zekâya özgü bir travma kalıbı ölçümü bulunamadı. Bu alt türün YZ'ye özgü olduğu DOĞRULANAMADI; kalıp insan yazımında da var, Sehgal'in eleştirisi genel bir edebi eleştiridir.

**d) Sembolik ayrıntı ve "bu an her şeyi değiştirdi" anlatıcısı** [Doğrulandı, kısmen]
"Key turning point", "marking/shaping the", "evolving landscape" gibi ifadeler Wikipedia listesinde geçer; yani önemi açıklayan dil kalıbı doğrulandı. Ancak bunun kurmacadaki karşılığı olan "dönüm noktası anlatıcısı" ayrıca ölçülmemiştir [Zanaat].

**e) Dersi açıkça söyleyen anlatıcı** DOĞRULANAMADI
Bir ikincil yazıda, anlatıcıların temayı açıkça açıklama oranı %77'ye karşı insan yazarlarda %52 olarak verilir. Bu sayı, orijinal çalışma açılmadığı için doğrulanamadı.

**f) Tekrarlayan isimler, mekânlar, meslekler** [Doğrulandı]
Cornell haberi, 20.000 YZ hikâyesinde yaklaşık %90'ının 11 tekrar eden kelimeden en az birini içerdiğini (ör. "lighthouse", "keeper", Elias, Mara, Elara) ve yarıdan fazlasında deniz feneri bulunduğunu bildirir. Kaynak: https://news.cornell.edu/node/333804
Haberde, yazarların bunu "mode collapse" ile açıklamaya meyilli olduğu, ancak nedeni henüz doğrulamadıkları yazılıdır. Makalenin adı: "Elias in the Lighthouse, Again? Diagnosing Low Diversity in LLM Stories" (EMNLP 2026'da sunulacak).

---

## 2. Neden oluyor

- **Ortalamaya gerileme ve hizalama.** Wikipedia sayfası, LLM'lerin olası metni tahmin ettiğini, "regress to the mean" eğiliminde olduğunu ve RLHF'nin çıktıyı geniş kitlece kabul görebilen, olumlu ve önemli görünen dile ittiğini yazar; yani özgül olgu yerine genel, önemli görünen ifade gelir. [Doğrulandı, Wikipedia sayfası]
- **Belirsizlik kaybı.** Sui'nin makalesi (arXiv 2602.16162) 28 modelde, insan öykülerinin model çıktılarından anlamlı ölçüde daha belirsiz olduğunu bulur; komut-ayarlı modellerde fark artar. Makale, hizalamanın belirsiz çıktıları ittiğini öne sürer, ama bunu doğrudan test etmez. [Doğrulandı, özet; mekanizma çıkarımı]
- **Veri ve mode collapse.** Cornell ekibi, tekrarın olası kaynağını eğitim verisinde (WildChat) görür; kesin neden doğrulanmamıştır. [Doğrulandı, haber; nedeni DOĞRULANAMADI]
- **Sıklık.** Antislop makalesi (arXiv 2510.15061) bazı "slop" kalıplarının LLM çıktısında insan metnine göre 1.000 kattan fazla görüldüğünü belirtir. Makale ağırlıklı olarak tekrarlayan kalıpları ölçer; kurmacaya özgü ayrıntısı özetten doğrulanamadı. [Doğrulandı, özet]
- **Slop skoru.** EQ-Bench/slop-score ağırlıkları (%60 kelime, %25 "X değil Y" kalıbı, %15 üçlü ifade) ikincil bir makaleden alındı; depo açılmadığı için DOĞRULANAMADI.

---

## 3. İnsan yazarlar ne yapıyor

- **Ayrıntının anlamını sonraya bırakmak.** Chekhov ilkesi, sahneye konan her öğenin sonra işlevi olması gerektiğini söyler: "One must never place a loaded rifle on the stage if it isn't going to go off." [Doğrulandı, Wikipedia: Chekhov's gun]. Yani nesne ya ateşlenir ya da çıkarılır. Bu ilke, nesneye baştan duygusal yük yüklemeyi değil, yükü sahnede ödemeyi önerir.
- **Ödenmeyen öğeler.** Hemingway, "Fifty Grand" öyküsünde tanıtılıp bir daha anılmayan karakterlerle ilkeyi alaya almıştır; Rayfield, *Vişne Bahçesi*'nde ateşlenmeyen iki silah bulunduğunu, bunun Chekhov'un kendi önerisine aykırı olduğunu yazar. [Doğrulandı, Wikipedia; Hemingway ve Rayfield alıntıları sayfa özetinden]
- **Sıradan nesne, yükü olay taşısın.** Yükün nesnede değil, eylemde taşınması. [Zanaat] Örnek: bir mektubun açılmaması değil, açılıp masaya bırakılması.
- **Anlamı açıklamamak.** Dersi anlatıcının söylemesi yerine sahnede göstermek. [Zanaat; genel yazım öğretisi, kaynaksız]

---

## 4. ultrawrite için çivi kural önerisi

**Kural:** Bir nesneye ya da karaktere duygusal bir geçmiş yüklemeden önce, o geçmişin sahnede bir eylemle ödenip ödenmeyeceğini belirle; ödenmeyecekse nesneyi yalnızca nesne olarak yaz.

**Örnekler** (yazarın kendi nötr örnekleri)

1. **Yanlış:** "Ayşe, ölen babasından kalan eski saati hep cebinde taşırdı; saat onu her zaman geçmişe götürürdü."
   **Doğru:** "Ayşe'nin saati on dakika geri gidiyordu. Tamir ettirmedi; sabahları işe geç kalmak için bu bahaneyi kullanıyordu."

2. **Yanlış:** "Kardeşinin son mektubu, Deniz'in içindeki yarayı hâlâ açık tutuyordu."
   **Doğru:** "Deniz mektubu çekmeceden çıkardı, zarfın kenarını yırttı, okumadan masaya koydu ve kahve makinesini açtı."

3. **Yanlış:** "Bu an, her şeyi değiştiren bir dönüm noktasıydı."
   **Doğru:** "Telefon çaldığında Mert hâlâ ayakkabılarının bağcığını bağlıyordu. Açtı, dinledi, bağcığı çözüp yeniden bağladı."

---

## 5. Doğrulanamayanlar

- Miras nesne (babadan kalan saat, kolye, son mektup) kalıbına dair kaynak. Araştırmada bulunamadı.
- New Yorker'daki Sehgal makalesinin birincil metni. Sayfa açılamadı; yalnızca Millions üzerinden bilinir.
- Dersi açıkça söyleyen anlatıcı oranı (%77 / %52). Orijinal çalışma açılamadı.
- "56% of Claude stories titled 'The Lighthouse Keeper's Secret'" iddiası. Kaynağı açılmadı.
- Scale AI analizindeki "heavy stones, oceans and salt" benzetmeleri. İkincil.
- "In a world" açılış kalıbı ve kapanışlardaki "telegraphing" iddiası. Kaynak açılmadı.
- EQ-Bench slop skoru ağırlıkları. Depo açılmadı.
- "Bu an her şeyi değiştirdi" anlatıcısının ölçülmüş sıklığı. Bulunamadı.
- Kalıpların Türkçe kurmacadaki karşılığı. Hiç araştırılmadı.
