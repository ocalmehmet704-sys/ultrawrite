# Duyguyu adlandırmadan taşıma mekanizmaları (dünya edebiyatı)

Kapsam: Eliot'un objective correlative'i, Hemingway'in eksiltme/buzdağı tekniği, Woolf'un izlenim poetikası, Chekhov'un ayrıntı önerisi ve "show, don't tell" sözünün kaynağı, sentimentality ile melodram ayrımı.
Yöntem: Her kaynak için önce sohbet `seen` kontrolü, sonra WebFetch ile açma ya da PDF'i `pdftotext` ile metne çevirip okuma. Arama özetleri tek başına kanıt sayılmadı.
Sınır: Orwell'in 1984 aşk sahnesinin metni bu oturumda açılamadı; Carver, Chekhov'un "kısalık" pratiği ve Türkçe karşılığı kapsanmadı (bütçe). Doğrulanmış kaynak sayısı: 7 (2'si ikincil).

---

## Bulgular

**1. Nesne zinciri olarak duygu (Eliot)**
- Ne: Eliot, duyguyu taşımanın yolunun, duygunun adını koymak yerine, o duygunun "formülü" olan nesne, durum ve olay zincirini kurmak olduğunu söyler.
- Kaynak: T. S. Eliot, "Hamlet and His Problems" (1919; The Sacred Wood'da yayımlandı), s. 100. https://www.shakespeare-navigators.ewu.edu/hamlet/Eliot/e100.html (sayfa, The Sacred Wood baskısının faksimilesi).
- Alıntı: "a set of objects, a situation, a chain of events which shall be the formula of that particular emotion"
- Kullanım: Bir sahnede duygu adını yazmadan önce, o duyguyu taşıyacak 3 somut nesne ya da eylem seçilir ve bunlar sahnede kendi sırasıyla gelir. Eliot bunu drama için yazdı; romana uyarlaması benim çıkarımım.
- Güvenilirlik: Yüksek (birincil metin, sayfa doğrulandı). Ama Eliot'un bu kavramı "tek formül" olarak sunması eleştirilmiş (aşağıda, Zayıf bölümünde).

**2. Eksiltme: buzdağı (Hemingway, ikincil atıfla)**
- Ne: Hemingway'in buzdağı benzetmesi, yazının gücünün görünmeyen kısımdan geldiğini söyler.
- Kaynak: Wikipedia, "Iceberg theory", https://en.wikipedia.org/wiki/Iceberg_theory (atıf: Death in the Afternoon, bölüm 16).
- Alıntı: "The dignity of movement of an ice-berg is due to only one-eighth of it being above water."
- Kullanım: Eksiltme bilinen bir bütünden gelmelidir. Yazar sahneyi bilmiyorsa boşluk olur, bilmediği şeyi yazmamakla bilinen bir şeyi okurdan saklamak farklıdır. Bu ayrım yazarın kendi bilgisine bağlı; SKILL'e "sahneyi bil, sonra eksilt" diye geçirilebilir.
- Güvenilirlik: Orta. Alıntı Wikipedia üzerinden alındı, kitabın kendisi açılmadı. "Okur hisseder" yorumu Zoe Trodd'un okumasına dayanıyor (Wikipedia'nın aktarımı).

**3. Duygu sözcüğü olmadan taşınan duygu: ölçülebilir fark (Bizzoni & Feldkamp 2024)**
- Ne: Hemingway'in "Yaşlı Adam ve Deniz" romanında, insanların güçlü duygu bulduğu ama modellerin nötr puanladığı 101 cümle, duygu bulunan 714 cümleye göre daha düşük "uyarılma" (arousal) ve daha yüksek "somutluk" (concreteness) taşıyor.
- Kaynak: Yuri Bizzoni & Pascale Feldkamp, "Below the Sea (with the Sharks): Probing Textual Features of Implicit Sentiment in a Literary Case-study", Unimplicit 2024 atölyesi, ACL, s. 54-61, 2024. https://aclanthology.org/2024.unimplicit-1.5.pdf (PDF tam metin olarak okundu)
- Alıntı: "sentences where humans perceived a strong sentiment while models did not are significantly lower in arousal and higher in concreteness"
- Sayılar (Tablo 1, cümle düzeyi): arousal örtük 0,401 (±0,106) / açık 0,446 (±0,110); somutluk örtük 2,732 (±0,37) / açık 2,649 (±0,328). Her ikisi de Mann-Whitney testinde p<0,05.
- Kullanım: Taslak cümlelerde "somut nesne + düşük uyarılma" dengesine bakılabilir. Örnek makaleden: "The boy took the old army blanket off the bed and spread it over the back of the chair and over the old man's shoulders." Bu cümlede duygu sözcüğü yok ama insan okuyucu duygu sezdi. Türkçe için NRC-VAD ve Brysbaert somutluk sözlüğünün karşılığı bu araştırmada aranmadı; ölçüm için önce sözlük gerekir.
- Güvenilirlik: Orta. Tek roman, 101 cümle, İngilizce sözlük tabanlı ölçüm. Yazarlar kendi ölçümlerini "crude" (kaba) olarak niteliyor (dipnot 13). Tablo 2'deki yıldız açıklaması hatalı: "* p<0,05" ve "** p<0,05" aynı eşiği veriyor, bu yüzden hangi testin ne kadar güçlü olduğu makaleden tam okunamıyor.

**4. İzlenimin birikimi ve vurgu (Woolf, "Modern Fiction")**
- Ne: Woolf, romanın işinin zihne düşen sıradan izlenimleri sunmak olduğunu söyler; anlamın hangi an "önemli" olduğu, olaydan çok izlenimlerin sıralanmasına bağlıdır.
- Kaynak: Virginia Woolf, "Modern Fiction", The Common Reader (1925). Tam metin PDF: https://scalar.usc.edu/works/new-book--11/media/VWoolfModernFiction.pdf (`pdftotext` ile okundu)
- Alıntı: "The mind receives a myriad impressions--trivial, fantastic, evanescent, or engraved with the sharpness of steel." ve "life is a luminous halo, a semi-transparent envelope"
- Kullanım: Duyguyu "büyük an"da değil, sıradan bir günün izlenimleri arasında kurmak. Önemli an, Woolf'un deyişiyle "accent" (vurgu) ile okuyucunun hangi ayrıntıda durduğuna göre belirlenir: bir ayrıntıyı diğerlerinden fazla yazmak ve sonra kesmek.
- Güvenilirlik: Yüksek (birincil metin, tam okundu). Ama bu bir poetika bildirisi, bir teknik kural değil.

**5. "Show, don't tell" sözünün Chekhov'a atfı yanlış; Chekhov'un önerisi başka bir şeydi**
- Ne: Chekhov'un 1886'da kardeşi Alexander'a yazdığı mektupta, ay ışığını anlatmak için ay adını kullanmak yerine kırık şişe camının parıltısını önermesi, ama ay adını yasaklamadığı belirtiliyor. Kısa "show, don't tell" sözü ise bu mektuptan sonra türetilmiş bir sadeleştirme.
- Kaynak 1: Quote Investigator, "Don't Tell Me the Moon Is Shining; Show Me the Glint of Light on Broken Glass", 2013. https://quoteinvestigator.com/2013/07/30/moon-glint/ (ilk basılı atıf 2002, The Quotable Book Lover; QI: "probably did not say or write the statement")
- Kaynak 2: Fiction blogu, "What Did Chekhov Really Say About 'Show, Don't Tell'?" (tarih belirtilmemiş). https://www.fiction.plamondon.com/?p=703
- Alıntı (Plamondon): "the idea that he had anything against saying the moon is shining is simply not true!"
- Alıntı (Plamondon, slogan kökeni): "As a slogan, 'Show, don't tell' is originally from theater."
- Kullanım: Kural "ay deme" değil, "adı verme yerine ayrıntı seç" olmalı. Örnek: "ay ışığı" yerine "kırık şişe camı parladı". Bu, SKILL'e bir yasak değil, bir seçim ilkesi olarak girmeli.
- Güvenilirlik: Yüksek (atfın yanlış olduğu konusunda iki bağımsız kaynak; QI mektubun Yarmolinsky çevirisine dayanıyor). Mektubun tam metnini açmadım; alıntılar iki ikincil kaynaktan.

**6. Sentimentality: kazanılmamış duygu olarak tanım (Bauer, ikincil)**
- Ne: Duygunun "kazanılmış" (earned) olması, karakterin deneyiminden doğması gerekir; yazarın kendi kararıyla dayatılan sonuç melodramdır.
- Kaynak: Marion Dane Bauer, "Sentiment and Sentimentality" (blog, 2014). https://www.mariondanebauer.com/just-thinking/2014/07/sentiment-and-sentimentality (WebFetch özeti; alıntılar özetten)
- Alıntı: "Melodrama is imposed from above."
- Kullanım: Bir sahnede duygunun kaynağı karakterin önceki seçimlerinde görülmüyorsa, duygu sahte sayılır. Test: duygu yazarın istediği sonuçtan mı, yoksa karakterin önceki davranışından mı çıkıyor?
- Güvenilirlik: Düşük-orta. Blog, birincil değil; alıntı WebFetch özetinden alındı, tam metinle karşılaştırılmadı.

---

## SKILL'e önerilen kurallar

1. Bir sahnede duygunun adı yazılmadan önce, o duyguyu taşıyacak 3 somut nesne ya da eylem seçilir ve sahnede bu sırayla gelir (Eliot, bulgu 1).
2. Taslak cümlelerde duygu sözcüğü yerine düşük uyarılmalı, somut nesneli cümle tercih edilir; bu bir ölçüm hedefidir, kesin kural değil (Bizzoni, bulgu 3).
3. Önemli an olay değil, sıradan izlenimler arasında kurulur; izlenimlerden birinin vurgusu okuyucuya duygu verir (Woolf, bulgu 4).
4. "Ay deme" yasağı değil, "adı verme yerine ayrıntı seç" ilkesi uygulanır (Chekhov, bulgu 5).
5. Eksiltme ancak yazarın bildiği bir bütünden geliyorsa çalışır; bilinmeyen bir boşluk jesttir (Hemingway, bulgu 2).
6. Bir duygu sahnede karakterin önceki seçiminden çıkmıyorsa, sentimental sayılıp gözden geçirilir (Bauer, bulgu 6).

---

## Doğrulanamayanlar

- **1984, Part Two (aşk ve çayırlık sahnesi):** Orwell'in metni açılamadı. storgy.com sayfaları yalnızca bir çalışma rehberinin özeti (bölüm 2 "The Meeting in the Country" olarak tanımlanıyor), alıntı olarak kullanılmadı. Storgy'de geçen "Not merely the love of one person..." ve "He had fallen in love with her..." cümleleri Orwell metninden doğrulanmadı. Gutenberg Australia (gutenberg.net.au) metni, bölüm sınırlarını kontrol etmek için sonraki adım.
- **Hemingway, "If a writer of prose knows enough..." (Death in the Afternoon):** Cümlenin kendisi kaynakta doğrulanamadı; arama özetinde geçiyor.
- **Hemingway "omissive" ifadesi ("the emotion is plentiful, though hidden and not exposed"):** Bizzoni makalesi bu ifadeyi Daoshan & Shuo (2014)'e atfediyor. Asıl kaynak açılmadı, yalnızca makalenin aktarımı var.
- **Gardner, "faults of soul" / "without sentiment, fiction is worthless":** İkincil inceleme metinlerinde geçiyor; The Art of Fiction'ın kendisi açılmadı, alıntı doğrulanmadı.
- **Stern, "Making Shapely Fiction" ("insight, humor, freshness, and specificity"):** Yeniden yayımlanmış bir parçadan arama özetinde geçiyor; açılmadı.
- **Moretti, "Emotions, plus distance" (serbest dolaylı anlatım):** Arama özetinde, kaynağı açılmadı.
- **Woolf ve Flaubert'te serbest dolaylı anlatım (Banfield, Cohn):** Yalnızca genel referans olarak görüldü; birincil çözümleme açılmadı.

---

## Çelişkili ya da zayıf çıkanlar

- **"Show, don't tell" Chekhov'a aittir (yaygın sanı):** Kanıt yok. Kısa sözün ilk basılı atfı 2002, Chekhov'un kendisi değil (bulgu 5).
- **Sentimentality ve melodram tanımları çelişiyor:** Bauer ve Stern duygunun "kazanılmamış" olmasını vurgular; North American Review'da (aramada görüldü, açılmadı) melodram "kazanılmamış duygu" olarak tanımlanıp taslakta yazılıp revizyonda kazanılabileceği söyleniyor; bir Substack yazısı ise melodramı "orantısız yoğunluk" olarak tanımlıyor. Tanımlar üç ayrı ölçüt kullanıyor: yazar kontrolü, duygu yoğunluğu, kanıt eksikliği.
- **Eksiltmenin duygu taşıdığı iddiası:** Bizzoni'nin bulgusu tek bir kitapta, 101 cümlede ve sözlük tabanlı ölçümle. "Omissive" etiketi kaynakları eleştirilmeden tekrar ediliyor. Hemingway'in buzdağı yorumu Trodd'un okumasına dayanıyor, deneysel kanıt değil.
- **1984 aşk sahnesi okumaları:** Study guide sitesi ve forum tartışmaları aşkın politik isyan mı yoksa gerçek sevgi mi olduğunu tartışıyor; bu akademik çözümleme değil, görüş.
- **Eliot'un objective correlative'i romanda işler mi?** Makaleler bunu bir "tek formül" değil, okura bağlı bir süreç olarak eleştiriyor; okur tepkisini açıklamadığı belirtiliyor (aramada görüldü, açılmadı).

---

## Sohbet notu

Sait Faik "Ay Işığı" ile ilgili TDK notları (Aydın Özer) zaten var; burada Chekhov'un ay/cam örneğiyle yan yana okunabilir, ama tekrar özetlenmedi. Carver'ı editörlük yönünden a09 alıyor; bu ajan yalnızca duygu mekanizması açısından bakmadı.
