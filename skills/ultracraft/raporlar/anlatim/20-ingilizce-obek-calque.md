# İngilizce öbek ve kalıpların Türkçeye birebir aktarımı (calque) ve zamir/"bir" fazlalığı

**Kapsam:** İngilizce kalıpların Türkçeye öykünme çeviriyle geçişi; özne/iyelik zamiri fazlalığı ve "bir" belirsizlik sıfatının aşırı kullanımı. 03-ceviri-turkcesi.md ile çakışan Yaman, Zülfikar, TDK çalıştayı ve Ataç bulguları burada tekrarlanmadı.
**Yöntem:** Arama + WebFetch; PDF'ler `pdftotext -layout` ile metne çevrildi (`_calisma/`). "bir" ve "a sense of"/"hit the ground" tarzı öbekler için Türkçe kaynak bulunamadı; bunlar "Doğrulanamayanlar" bölümünde.

---

**Bulgular**

**1. Makine ve öykünme çeviride İngilizce yapı birebir taşınıyor; Türkçe alternatifler kullanılmıyor.**
- **Ne:** Aynı romanın üç tür çevirisini karşılaştıran sınıflandırma çalışmasında, insan çevirisi "not much larger than" yapısını "çok daha büyük olmayan" olarak aktarıyor; insan çevirmenlerin Türkçe karşılıkları ise "farksız görünen" ve "pek de büyük sayılmazdı". Model çıktısında "daha da tuhaf" gibi normalleştirmeler de görülüyor.
- **Kaynak:** Akdağ, Aygün, Şahin, Hodzik, Gürses, Güngör (2026), "Retranslation at the intersection of style, machines, and plagiarism", Boğaziçi Üniversitesi / Stygenai çalıştayı. https://aclanthology.org/2026.stygenai-1.3.pdf (PDF metni: Bölüm 4.4, Ek B; Bölüm 4.5)
- **Alıntı:** "This adherence to the source text's syntax … creates a rigid 'translationese.'" (İngilizce, 14 kelime)
- **Kullanım:** Kötü: "çok daha büyük olmayan" (İngilizce "not much larger than" kalıbının aynası). İyi: "pek de büyük sayılmazdı" (aynı anlam, Türkçe yapı). Test: cümle İngilizce yapının sırasını mı izliyor, yoksa Türkçe bir kalıp mı kullanıyor? Sözcük sayısı değil, yapı kopyası ölçüt.
- **Kanıt düzeyi:** kanıtlı (sınıflandırma ölçümü; Random Forest Macro F1 %83,44) ama bu bulgu tek örnek cümleye dayanıyor; kalıp genellemesi zanaat düzeyinde.
- **Güvenilirlik:** Orta. Tek roman, 52-69 parça, makine modeli çıktısı. İnsan çevirisi için değil, insan çevirmenlerin tercihi için kanıt sayılır.

**2. Söylem belirteçleri ve işlev sözcükleri çeviride sözlü karşılıklarından sapıyor.**
- **Ne:** Aynı çalışmada yazar tespitinde en ayırt edici öğeler "ancak", "tabii", "hiçbir", "oldukça", "yeniden" gibi işlev sözcükleri çıktı. Makine çevirisinde bu sözcükler çoğunlukla sözlük karşılığında kalıyor ya da standartlaştırılıyor; insan çevirmen bunları bağlama göre seçiyor.
- **Kaynak:** Akdağ vd. (2026), aynı makale, Bölüm 3.6-4.2 (Tablo ve özellik önem analizi). https://aclanthology.org/2026.stygenai-1.3.pdf
- **Alıntı:** "these items often suffer from literal translation or over-standardization" (İngilizce, 9 kelime)
- **Kullanım:** Çeviri metninde "hiçbir", "ancak", "tabii" sözcüklerini her geçtiğinde sor: Türkçe bu bağlamda bu sözcüğü gerçekten kullanır mı, yoksa İngilizce bağlaç/belirteç sırası mı taşınıyor? Örnek ölçülmediği için kötü→iyi çifti verilmedi.
- **Kanıt düzeyi:** kanıtlı (özellik önem analizi), ama sonuç makine çıktısına ait; insan öykünme çevirisi için dolaylı.
- **Güvenilirlik:** Orta.

**3. Açık özne ve nesne yokluğunda zamir yorumu bozuluyor; Türkçe özneyi kişi ekiyle taşır.**
- **Ne:** Türkçe "ekonomiklik ilkesi" gereği özne ve nesne çoğu zaman yazılmaz; açık zamir yazıldığında (ya da yazılmadığında) çeviri motorları zamiri yanlış yorumluyor. Yazar, bunun Türkçenin esnek söz diziminden doğduğunu belirtiyor.
- **Kaynak:** Serap Bozkurt Güvenek (2026), "Türkçede makine çevirisinin söz dizimsel ve anlamsal hataları: Google Translate ve DeepL örnekleri", HUMANITAS 14(27), 35-57. https://doi.org/10.20304/humanitas.1814139 (PDF s. 53, madde 1)
- **Alıntı:** "Nesne ya da özne ögelerinin açık biçimde belirtilmediği durumlarda, zamirsel kullanımlar çoğu zaman yanlış yorumlanmış" (Türkçe, ≤25 kelime)
- **Kullanım:** Kötü: "Onun eli titriyordu." İyi: "Eli titriyordu." Kural: iyelik zamiri yalnızca vücut parçası ya da eşyanın sahibi karşılaştırılıyorsa ya da karışıklık varsa yazılır. Özne için: "Ben" ancak karşıtlık ya da vurgu varsa tutulur; "Ben gözlerimi kapattım" → "Gözlerimi kapattım". Bu iki örnek yazarın bulgusunun çıkarımıdır, kaynakta bu cümleler yok.
- **Kanıt düzeyi:** zanaat (kaynak nitel bir MT incelemesi; iyi örnekler bu çalışmadan türetilmiş bir çıkarım).
- **Güvenilirlik:** Orta. Nitel, makine çevirisine dayanıyor; "bir" ve iyelik için ayrı bir veri yok.

**4. İngilizce kısaltılmış yapılar (indirgenmiş sıfat-fiil, zarf tümcesi) Türkçede belirsizlik üretiyor; açık tümce kurmak belirsizliği kaldırıyor.**
- **Ne:** Öğrenci deneyinde İngilizcedeki indirgenmiş (zamirsiz, bağlaçsız) cümleler çoktan seçmeli testte belirsiz bulundu; aynı cümleleri sıfırdan çevirenler ilişkisel ya da zarf tümcesi kurarak belirsizliği azalttı. Türkçede indirgenmiş ilgi ve zarf yapısı olmadığı için çevirmen açık tümce kurmak zorunda kalıyor.
- **Kaynak:** Mehpare Köseer Bütün ve Zeynep Başer (2025), "Ambiguity in Translation of Reduced Relative Clauses and Adverbial Clauses", Current Perspectives in Social Sciences 29(2), 252-270. https://doi.org/10.53487/atasobed.1618695 (tam metin: https://dergipark.org.tr/tr/download/article-file/4515935 — bu PDF'in metni ayrıca okunamadı; bilgi sayfa özetinden)
- **Alıntı:** Sayfa özetinden alındığı için alıntı verilmedi.
- **Kullanım:** İngilizce "-ing" ya da "-ed" ile kurulan kısa öbekleri Türkçede sıfat-fiil yerine açık tümce olarak kur; ama sıfat-fiil zincirini uzatma (bkz. 03 bulgu 7). Örnek çift verilmedi, çünkü yalnızca özetten okundu.
- **Kanıt düzeyi:** kanıtlı (öğrenci deneyi; küçük örneklem, 24 cümle).
- **Güvenilirlik:** Orta. Tam metin okunamadı; öğrenci verisi, edebi metne genelleme çıkarım.

---

**Skill'e önerilen kurallar**

1. İngilizce "not X-er than" ya da benzeri karşılaştırma kalıbını "pek de … sayılmazdı" gibi Türkçe yapıyla değiştir (Bulgu 1).
2. Özne ve iyelik zamirini, karşıtlık ya da karışıklık yoksa yazma: "Eli titriyordu" (Bulgu 3).
3. "hiçbir", "ancak", "tabii" gibi söylem ve işlev sözcüklerini her geçtiğinde bağlamda yeniden değerlendir (Bulgu 2).
4. İndirgenmiş İngilizce öbeği Türkçede açık tümceye çevir, ama tümceyi uzatıyorsan sıfat-fiil zincirini sadeleştir (Bulgu 4).
5. Çeviri metinde yapıyı sor: cümle İngilizce sıralamayı mı izliyor? İzliyorsa Türkçe yapıya dön (Bulgu 1).

**Felsefeyle ilişki**

- Destekleyen: Bulgu 1 ve 3, sözcük sayısından çok yapı kopyasının sorun olduğunu gösteriyor; "çok daha büyük olmayan" ile "pek de büyük sayılmazdı" aynı sözcük sayısında, ama biri İngilizce iskeleti taşıyor. Yani ölçüt "az sözcük" değil, "anlatılana oranla Türkçe yapı".
- Destekleyen: Bulgu 3, zamirin yokluğunun Türkçede ekonomi olduğunu, yazılan zamirin ise ancak karşıtlık için gerektiğini gösteriyor.
- Sınırlayan: Bulgu 4, açık tümcenin belirsizliği azalttığını söylüyor. Yani "kısalt" her zaman doğru değil; kısa kopuk öbek anlaşılmazlık yaratıyorsa tümce açmak gerekir. Yoğunluk, okurun anlamasıyla ölçülmeli.
- Sınırlayan: Bulgu 2, işlev sözcüklerinin bazen zorunlu olduğunu, yalnızca sözlük karşılığının yanlış olabileceğini gösteriyor. Silmek değil, bağlama göre seçmek.

**Doğrulanamayanlar**

- "yere çarptı" (hit the ground), "derin bir nefes aldı" (take a deep breath), "yolunu buldu" (made his way), "… yapmadan edemedi" (couldn't help but), "bir şekilde" (in a way), "bir … hissi" (a sense of), "bir … vardı" (there was a): hiçbirinin çeviri Türkçesi üzerine bir kaynağı bulunamadı. Bu öbeklerin değerlendirmesi zanaat/folklor düzeyinde kalır; kaynak ile birlikte kanıt yoktur.
- "bir" belirsizlik sıfatının İngilizce "a/an" etkisiyle aşırı kullanımı: Türkçe kaynak bulunamadı. Bulgu yok.
- Özne ve iyelik zamirinin çeviri Türkçesindeki sıklığı (derlem ölçümü): arama sonuçlarında ilgili bir çalışma çıkmadı.
- Yazıcı (2018, Tıp Eğitimi Dünyası), "our" iyelik zamirinin eklenmesi: yalnızca arama özetinde görüldü; metin açılmadı.
- Atasobed (2024) makalesinin özne açık/örtük ve edilgen bulguları: özet bunları ele almadı; tam metin açılmadı.
- Kurtböke (1998) tezi ve Yeğinobalı Türkçe-İngilizce derlem çalışması: yalnızca arama özetinde görüldü, bulgu doğrulanmadı.

**Çelişkili ya da zayıf çıkanlar**

- Sarıkaya (2021), "Çeviri yazılarda karma söz dizimleri": Okuduğum metin Osmanlı yazmalarındaki Arapça ve Farsça karma yapıyı konu alıyor; İngilizce calque ile ilgisi yok. Kullanılmadı.
- Bulgu 1 ve 2 aynı makineye ait veriden; insan çevirmen ile makine arasında karışık bir sonuç. İnsan çevirmenin de "not much larger than" kalıbını taşıdığı tek örnekle sınırlı.
- Bulgu 3 yazarı bir makine çevirisi incelemesinden; Türkçe edebi çeviriye doğrudan genelleme yapılamaz.
- "Bir" fazlalığı ve "a sense of" gibi öbekler için kaynak yok; bu yüzden skill'e bu öbeklerle ilgili kural koyulmadı, yalnızca genel "yapı kopyası" kuralı konuldu.

## Denetim

Denetçi ajan, yukarıdaki gövdeye dokunmadan dört bulguyu kaynak URL'leri üzerinden kontrol etti.

**Kaynak doğrulaması**

- **Bulgu 1 (Akdağ vd. 2026, aclanthology PDF):** AÇILAMADI. PDF ham bayt olarak geldi, metin çıkarılamadı. "This adherence to the source text's syntax", "rigid 'translationese'", "not much larger than" ve Macro F1 %83,44 kontrol edilemedi. Alıntı ve sayı doğrulanmadan kabul edilmemeli.
- **Bulgu 2 (aynı PDF):** AÇILAMADI. "these items often suffer from literal translation or over-standardization" alıntısı kontrol edilemedi.
- **Bulgu 3 (Bozkurt Güvenek 2026, HUMANITAS, DergiPark):** AÇILAMADI. Makalenin Türkçe özetinde nesne/özne düşmesi ve zamir yorumu sorunu geçmiyor; özet "pragmatik işlev, vurgu, tema-rema" üzerine. Rapordaki alıntı (PDF s. 53, madde 1) bulunamadı. Tam metin açılmadı; alıntı doğrulanmış sayılmaz. Konu uyumsuzluğu nedeniyle YANLIŞ olma ihtimali yüksek, ama kesin değil.
- **Bulgu 4 (Köseer Bütün ve Başer 2025, Current Perspectives in Social Sciences 29(2), 252-270):** DOĞRULANDI (özet düzeyinde). Başlık, dergi, cilt/sayı ve 24 cümlelik çoktan seçmeli test özetle teyit edildi. "Sıfırdan çevirenler daha az belirsizlik yaşadı" tespiti de özette var. Alıntı verilmediği için yalnızca özet düzeyi doğrulandı.

**Sayım:** doğrulanan 1, yanlış 0, açılamayan 3.

**Kanıt düzeyi**

- Bulgu 1 "kanıtlı" etiketli, ama kanıt tek bir makine sınıflandırma çalışması ve tek örnek cümle. "Kalıp genellemesi" kısmı zanaat olmalı. Etiket "kanıtlı (makine çıktısı ayırt edilebilir); kalıp genellemesi zanaat" diye ayrılmalı.
- Bulgu 2 "kanıtlı" etiketli, ama ölçüm makine çıktısında yazar tespiti; insan öykünme çevirisine geçiş dolaylı. Etiket en fazla "kanıtlı (makine, dolaylı)" olmalı.
- Bulgu 3 "zanaat" etiketli; etiket doğru, ama bu düzey bile kaynağın alıntısı doğrulanmadığı için belirsiz.
- Bulgu 4 "kanıtlı" etiketli; 24 cümlelik öğrenci deneyi için uygun.

**Örnekler (felsefeye göre)**

- "çok daha büyük olmayan" → "pek de büyük sayılmazdı": iki biçim de dört sözcük. Felsefenin ölçütü sözcük sayısı değil ama "pek de sayılmazdı" da gereksiz bir "de" ve dolaylı kurgu taşıyor. Daha sade öneri: "büyük değildi" ya da bağlama göre "Pek büyük değildi" (dört yerine üç sözcük, Türkçe yapı).
- "Onun eli titriyordu" → "Eli titriyordu": iyi, zamir düşürme doğru.
- "Ben gözlerimi kapattım" → "Gözlerimi kapattım": iyi, ama çıkarım kaynakta yok (rapor bunu belirtiyor).
- Bulgu 4 için örnek çift yok; açık tümce önerisi ile "sıfat-fiil zincirini sadeleştir" birlikte iyi bir denge, ama örnek olmadan denetlenemez.

**Önerilen kurallar**

1. "not X-er than" kalıbını Türkçe yapıyla değiştir: DAYANMIYOR (tek cümle örnek, kaynak alıntısı açılamadı). Zanaat olarak tutulabilir, "kural" diye yazılmamalı.
2. Zamiri düşür (karşıtlık yoksa): KISMEN DAYANIYOR. Bulgu 3 kaynağı doğrulanmadı; genel Türkçe dilbilgisi bilgisi destekliyor, ama kaynak olarak Bozkurt Güvenek gösterilemez.
3. "hiçbir", "ancak", "tabii" sözcüklerini her geçtiğinde yeniden değerlendir: DAYANMIYOR (Bulgu 2 alıntısı açılamadı; ölçüm yalnızca makine çıktısında).
4. İndirgenmiş öbeği açık tümceye çevir, sıfat-fiil zincirini sadeleştir: DAYANIYOR (Bulgu 4 özetle doğrulandı). Ancak "sadeleştir" kısmı çıkarım.
5. Çeviride cümle sırasını sor: DAYANMIYOR (Bulgu 1'e bağlı, açılamadı).

**En ciddi sorun:** Bulgu 1 ve 2'nin alıntıları ve sayısı (F1 %83,44) doğrulanamadı; bulgu 3'ün alıntısı makale özetinde yok. Bu üç bulguya dayanan dört öneri (1, 2, 3, 5) kaynağa bağlanamadı ve skill'e yazılmadan önce tam metinle yeniden kontrol edilmeli.
