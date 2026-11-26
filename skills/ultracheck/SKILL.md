---
name: ultracheck
description: Türkçe metinde yapay zekâ izi ve tutarlılık denetimi skill'i; YZ yazı işaretleri (Wikipedia Signs of AI writing kurmaca karşılıkları), ölçülmüş slop kalıpları, değer verme çabası, bariz kurgu, dönem denetimi (anakronizm), dil içi tutarlılık, çeviri kalıpları. Bir metni denetlerken, 'yapay duruyor' denince, gözden geçirme ajanı çalışırken ve tarihsel ya da başka dilde geçen kurguda kullan. ultrawrite yazmadan önce ve her sayfadan sonra bunu çağırır.
---

# ultracheck: denetim

Bu skill **ultrawrite** ailesinin parçasıdır. ultrawrite yazmadan önce bunu çağırır; tek başına da kullanılabilir. Dosya yolları bu skill'in klasörüne göredir.

## YZ yazı işaretleri (Wikipedia "Signs of AI writing", kurmacaya uyarlanmış)

Kaynak: https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing. Sayfa ansiklopedi metinleri için yazılmış. Burada her madde Türkçe kurmacadaki karşılığıyla verilir. Ayrıntılı rapor ve örnekler: `raporlar/wiki/wNN.md`. Raporlardaki "doğru" örneklerin bir kısmı skill kurallarına uymuyor (-dı ve "ve" zinciri, açıklama, duygu etiketi). Örnek alırken bu dosyayı ve SKILL.md'yi esas al.

| id | Wikipedia maddesi | Türkçe kurmacada görünüşü | Kural |
|---|---|---|---|
| w01 | Undue emphasis on significance, legacy | "dönüm noktasıydı", "simgeliyordu", "izini bıraktı" | Kural 17 |
| w02 | Superficial analyses | Cümle sonuna yorum kuyruğu: "…, bu da önemini gösteriyordu", "…-arak gücünü vurguladı" | Kural 19 (fiilimsiyle eylem bağlamak serbest) |
| w03 | Vague expression of connection | "ile ilişkili", "bağlantılı olarak", "ilgili" | Kural 20: kimin neyi yaptığını fiille söyle ("Baba ölünce evde kimse konuşmadı.") |
| w04 | Vague attributions | "uzmanlara göre", "birçok kişi", "eleştirmenler" | Kural 24 |
| w05 | Outline-like conclusions | "Zorluklara rağmen umut vardı", "geleceğin aydınlık olacağına inanarak" | Kural 21 |
| w06 | High density of "AI vocabulary" | derinlemesine, titizlikle, dokusu, gözler önüne sermek, ışık tutmak | Kural 20 |
| w07 | Avoidance of basic copulatives | "hizmet vermektedir", "teşkil eden", "niteliğindedir" | Kural 20: düz yüklem ya da ek-fiil ("Müze eski bir handa.") |
| w08 | Negative parallelisms | "X değil, Y", "sadece X değil, aynı zamanda Y" | Kural 18. Rapordaki "duyguyu doğrudan adlandır" önerisi Kural 12 ile çeliştiği için alınmadı. |
| w09 | Rule of three | "yoksulluk, umut ve göç", "öfkeli, kırgın ve yorgun" | Kural 18 |
| w10 | Style (biçim) | Kalın yazı, emoji, madde işareti, "Karakter: / Yaş:" etiketi, Başlık Büyük Harf | Kural 22 |
| w11 | Collaborative communication | "Elbette! İşte bölüm:", "Umarım beğenirsin", "Bu bölümde çatışmayı öne çıkardım" | Kural 22 |
| w12 | Hedging disclaimers | "pek belgelenmemiş olsa da", "bilinmemekle birlikte" | Kural 24 |
| w13 | Pronounced shift in writing style | Bir bölümde anlatıcı sesi gerekçesiz değişir | Gerekçesiz kayma yasak; bilinçli ses değişimi tekniktir, metinde fark edilir olsun (gözden geçirme ajanı denetler). |
| w14 | Differences between LLMs | Modele göre farklı kalıplar | Kural değil: tek bir kalıp tek başına YZ kanıtı değildir. |
| w15 | Biases in content | Türkiye'de geçen sahnede latte, apartman lobisi, "Elias" adı | Kural 23 |
| w16 | Signs of human writing | Ölüm, yazma, yapma için süslü eş anlamlı ("hayatını kaybetti", "çaba sarf etti") | Kural 20: düz fiil ("öldü", "uğraştı"), karakter sesi gerektirmedikçe |
| w17 | Ineffective indicators | Tek bir bağlaç, tek bir sözcük | Kural değil: bağlacı yalnızca iki cümle gerçekten bağlıysa yaz; tek işaret kanıt sayılmaz. |
| w18 | Promotional language | eşsiz, büyüleyici, nefes kesici, zengin kültürel miras | Kural 20 (tanıtım dili yalnızca reklam yazan bir karakterin ağzında kalır) |
| w19 | Section summaries, abrupt cut offs | "Kısacası", "Sonuç olarak", "Sonuç" başlığı | Kural 21 |
| w20 | Em dashes, elegant variation | Boşluklu uzun tire; aynı kişiye "yaşlı adam, o kırgın yolcu, bu sessiz figür" | Kural 23 (tek ad), tire için Bölüm 1 kuralları |

## Kurmacada ters işleyen yanlar
- Wikipedia tarafsız ansiklopedi dili ister. Kurmacada karakter sesi övebilir, abartabilir, "uzmanlar" diyebilir: kural anlatıcı sesi içindir, diyalog ve karakter odaklı anlatım karakterin ağzına göre yazılır.
- Wikipedia'nın üslup kayması uyarısı yapıştırılmış metni yakalar. Romanda bilinçli anlatıcı ya da odak değişimi bir tekniktir.
- w14 ve w17: tek bir işaret YZ kanıtı değildir. Denetim kalıp yığılmasına bakar.


---

## Ölçülmüş slop ve sınırları

Ayrıntı: `raporlar/01-tr-ai-izleri.md`, `raporlar/02-slop-olcum.md`. Çalışmaların neredeyse hepsi İngilizce; Türkçeye taşındığı kanıtlanmadı.

## Ölçülmüş
- **Antislop (arXiv 2510.15061):** insan baz çizgisine oranla slop ölçümü. "not X, it's Y" kalıbı 6,3 kat; "heart hammered ribs" 1.192 kat; 67 modelde ortak kalıplar tablosu. Baz çizgi kurgu değil, genel web ve Reddit/Gutenberg sıklığı. Liste modelden modele değişir, ezber listeye güvenme.
- **Hamilton ve Mimno (2605.26492):** 20.000 hikâyede 11 sözcük %88,3'ünde geçti (Elias, deniz feneri vb.). Yalnızca özet okundu, orta güven. Ad, mekân ve meslek yığılması en ucuz ölçülebilir slop.
- **Reinhart (PNAS):** YZ nominalleştirmeyi 1,5-2 kat, ortaç yan cümleyi 2-5 kat fazla kullanıyor (İngilizce, tür karışık). Bu, "kısa kopuk cümle" imajıyla çelişir.
- **PNAS "Sui Generis" (Xu ve ark.):** olay örgüsü yankısını ölçer.
- **Bergin ve Atasoy 2026 (UTÖAD 6(2), 415-438), Türkçe:** farklı/toplam sözcük oranı YZ %6,9, öğrenci %16,3. Havuzlanmış oran, YZ metni yaklaşık %47 daha uzun; sonuç uzunluktan etkilenmiş olabilir. Atıf yapılan Coşar (2025) tersi oranlar veriyor, yani "YZ daha az çeşitli" kesin değil.

## Zayıf ya da folklor
- "Kısa kopuk cümle, tek nesne, düzgün kapanış jesti YZ imzasıdır": hiçbir ölçümde yok. Bu kalıbı kullanmamak yine de iyi zanaat olabilir, ama kanıtlı diye sunma.
- Perplexity ve burstiness = YZ: Liang ve ark.'na göre dedektörler ana dili İngilizce olmayan insan yazısını YZ sayıyor. Kalite ölçütü yapma.
- Bileşik slop skoru (EQ-Bench ağırlıkları): gerekçe yok, sıralama ağırlığa göre kırılgan.
- "Yüksek sıcaklık ve şunu yazma talimatı çözer": 2606.17350'ye göre anlamlı etki yok (yalnızca özet).
- Türk okuyucu YZ'yi ayırt edebilir: Tunç 2026'da 160 öğrenci taklit Sait Faik/Edgü öykülerini YZ'den ayırt edemedi (sayısal sonuç yok). Ayırt edilemezlik kanıtı sayılmaz.
- "RLHF yaratıcılığı öldürüyor": tek nedenli anlatım zayıf; SFT veri bileşiminin payı büyük.

## Pratik
- Aynı istemle birkaç çıktı al, ortak hamleyi at. Beş seçenek iste, hepsinden uzak yönü seç.
- Sahne duygu eğrisini önceden planla; ardışık sahnelerin duygu şekli aynıysa değiştir (çok zayıf kanıt, deneme).
- Taban modele ya da az ayarlı modele yönel; yoksa yasak listesine ek olarak sahne kısıtı ver.


---

## Testten çıkan denetimler

Bu üç denetim, skill'in iki bağımsız ajanla sınanmasında görülen hatalardan çıktı (1984 temalı, 1455 Almanya'sında geçen öykü testi).

### Bariz kurgu
İki ajan birbirinden habersiz aynı adları (Jost, Wendel) ve aynı iskeleti seçti: belge değiştirilir, okumayı yeni öğrenen bir çocuk eski metni okur, kahraman bir nüsha saklar, kalanı ateşe gider. Model en olası kurguya akar.
- Bilinen bir esere, türe ya da temaya dayanan istekte, yazmadan önce akla gelen ilk üç seçimi taslak notuna yaz: adlar, olay iskeleti, kapanış görüntüsü. Üçünü de at, başkasını seç.
- İkinci testte yasaklanan seçimler atıldı, ama model bir sonraki en olası seçime kaydı: dört öykünün üçünde parşömen kazıyan yazıcı, iki öyküde "Weidner" adı. Yasak tek başına yetmez; tohumu yazardan iste (ultrawrite 0.4).
- Dönemin ve yerin en sık bilinen adlarını (Almanya için Hans, Jost, Konrad; Osmanlı için Mehmet, Ahmet) karakterlere verme; o dönemin kayıtlarından daha seyrek bir ad seç.

### "Bir yapay zekâ burada ne yazardı?"
ultrawrite'ın ilk taslaktan sonraki adımı (2.3). Denetimde de aynı soruyu kullan: sahnenin YZ hâlini, yani bir modelin akla ilk getireceği açılışı, olayı, adı, repliği ve kapanışı açıkça yaz; metin ona benziyorsa o sahne yamanmaz, yeniden üretilir. Yöntem *1984* cümle çözümlemesindeki "YZ hâli" karşılaştırmasından gelir (ultracraft `raporlar/1984/`).

### Dönem denetimi
Tarihsel bir dönemde geçen metinde her nesne, kurum ve sözcük o yılda var mıydı, sor. Testte 1455'te "kurşun kalem" (yaklaşık bir yüzyıl sonra) ve "mont" geçti.
- Şüpheli her sözcüğü taslak notuna yaz ve yazara sor ya da dönemin karşılığını seç (kurşun kalem yerine kurşun çubuk, tüy kalem; mont yerine yelek, cüppe, kaftan).

### Dil içi tutarlılık
Karakterler Türkçe dışında bir dilde konuşuyor ya da yazıyorsa, metin onların dilini Türkçeye aktarılmış kabul eder. Olay örgüsü Türkçe harflere, sözcük oyununa ya da Türkçe söyleyişe dayanamaz. Testte Mainz'daki dizgici Almanca bir levhada "on iki"yi "o ile n" harfleriyle dizdi.
- Harf, yazım ya da ses üzerine kurulan her sahnede, oyunun karakterin kendi dilinde de işleyip işlemediğine bak. İşlemiyorsa harfi değil sayıyı, sözcüğü ya da işareti anlat ("rakamları değiştirdi").

### Çeviri kalıbı: "X için fazla Y"
İngilizce "too X to / too X for" kalıbı Türkçeye "… için fazla …" diye geçer. Testte: "kadının görmesi için fazla yavaş yapmıştı".
- Doğru: "kadın görsün diye yavaş yaptı" ya da "öyle yavaş yaptı ki kadın gördü".


---

## Ek dosyalar

- `raporlar/01-tr-ai-izleri.md`, `raporlar/02-slop-olcum.md`: Türkçe YZ izleri ve slop ölçüm raporları.
- `raporlar/slop-deger-verme.md`: değer verme çabası araştırması.
- `raporlar/wiki/`: Wikipedia "Signs of AI writing" maddelerinin tek tek raporları (wNN.md).
