# 02 - Slop ölçümü: mod çöküşü, homojenleşme, insan-YZ ölçülebilir farkı (İngilizce ve çok dilli)

Kapsam: yaratıcı yazımda YZ'nin tekdüzeleşmesi, slop metrikleri, RLHF/DPO etkisi, insan taban çizgisiyle ölçülmüş farklar. StoryScope (2604.03136) tekrarlanmadı. Yöntem, sayı ve veri kaynağı verildi.
Doğrulama notu: "Alıntı" alanındaki metinler ya PDF'ten doğrudan okundu (Antislop) ya da WebFetch'in sayfadan verdiği ifadedir. Alıntı yoksa "özet" yazıldı. Hiçbir sayı arama özetinden alınmadı; kaynak sayfası açılıp doğrulanmayanlar işaretlendi.

## Okuma haritası: neyin ölçüldüğü, neyin folklor olduğu

| Kalıp | Durum | Dayanak |
|---|---|---|
| Aşırı kullanılan sözcük/ad/tamlama ("tapestry", "Elara", "heart hammered ribs") | ÖLÇÜLDÜ | Bulgu 1, 2, 3 |
| "It's not X, it's Y" yapısı | ÖLÇÜLDÜ (6.3x), ama yalnızca bir makalede, tek baz çizgisiyle | Bulgu 1 |
| Aynı hikâye öğeleri (olay örgüsü, ad, mekân) | ÖLÇÜLDÜ, birden çok bağımsız çalışma | Bulgu 3, 4, 5, 6 |
| Nominalleştirme, ortaç yan cümle fazlalığı | ÖLÇÜLDÜ (Biber öznitelikleri) | Bulgu 7 |
| Anlatı/duygu yayında ve açılışta kalıplaşma | ÖLÇÜLDÜ ama yalnızca özetten (ICML 2026 gönderisi) | Bulgu 10 |
| Modeller arası benzerlik | ÖLÇÜLDÜ | Bulgu 3, 5, 8, 9 |
| "Kısa kopuk cümle", "tek nesne", "düzgün kapanış jesti" | FOLKLOR (bulduğum hiçbir ölçümde yok) | Zayıflar bölümü |
| "Düşük perplexity/burstiness = YZ" | Kanıtı çürütülmüş yönde (Bulgu 12) | Bulgu 12 |
| Sahte duygu / "duygu ekle" sorunu | Ölçüm bulamadım | Doğrulanamayanlar |

## Bulgular

### 1. Antislop: slop'u insan baz çizgisine oranla ölçme yöntemi
- **Ne:** Bir model için 2.000 yaratıcı yazı üretilir, her sözcük/iki-üç sözcüklük öbek için ρ = f_LLM / f_insan hesaplanır; en yüksek oranlılar o modelin "slop parmak izi"dir.
- **Kaynak:** Paech, Roush, Goldfeder, Shwartz-Ziv, "Antislop: A Comprehensive Framework for Identifying and Eliminating Repetitive Patterns in Language Models", arXiv 2510.15061 (ICLR 2026). https://arxiv.org/abs/2510.15061 (PDF açıldı, `pdftotext` ile okundu)
- **Sayılar (PDF'ten):** gemma-3-12b için "elara" 85.513x, "unsettlingly" 3.833x, "shimmered" 2.882x, "stammered" 2.043x; üç-sözcüklükler: "heart hammered ribs" 1.192x, "voice trembling slightly" 731x, "felt profound sense" 550x. "It's not X, it's Y" kalıbı bazı modellerde insana göre 6,3x. FTPO ile suppression %90+ ve sözcük çeşitliliği taban çizginin %95-102'si; DPO ile bastırmada çeşitlilik %74-92'ye düşüyor ve yazı kalitesi bozuluyor. Sampler 8.000+ kalıbı bastırıyor (belirteç yasağı ~2.000'de kullanılamaz oluyor, özet sayfasına göre).
- **Alıntı:** "Slop fingerprints cluster within model families, but differ between model families"
- **Kullanım:** Türkçe için aynı yöntem: bir insan Türkçe roman derleminde (kamu malı metinler) sözcük/üçlü sıklığı çıkar, YZ çıktısıyla oranla; çıkan en yüksek oranlı ad, sıfat, fiil ve öbek listesi "yasak listesi" olur. Model başına ayrı liste gerekir.
- **Güvenilirlik:** Yüksek (yöntem ve sayılar PDF'ten doğrulandı). Önemli sınırlama: tek sözcükler için baz çizgisi `wordfreq` (genel web sıklığı), kurgu değil. Yani "Elara"nın 85.513x'i kurgu bazına göre değil, genel dile göre. n-gram'lar için Reddit yaratıcı yazı + Gutenberg kullanılmış, bu da insan kurgusunu temsil eder ama çok dar (Reddit istemleri). Oranlar mutlak değil, sıralama için kullanılmalı.

### 2. 67 modelde ortak slop sözcükleri ve üçlüleri
- **Ne:** Aynı çalışma 67 YZ modelinin en aşırı kullanılan 120 sözcüğüne ve 40 üçlüsüne bakıp ortak olanları sayıyor; kalıpların modeller arası yaygınlığı ölçülmüş.
- **Kaynak:** Aynı makale, Ek tablolar 4 ve 5. https://arxiv.org/abs/2510.15061
- **Sayılar:** Modellerin %68,7'sinde "voice barely whisper", %61,2'sinde "said voice low", %49,3'ünde "air thick scent", %44,8'inde "took deep breath", %43,3'ünde "smile playing lips", %25,4'ünde "heart pounding chest". Ortak sözcükler: "murmured" %73,1, "nodded" %73,1, "glint" %68,7, "hesitated" %68,7, "whispered" %68,7, "blinked" %64,2, "faintly" %62,7, "unreadable" %62,7.
- **Alıntı:** yok (tablo verisi).
- **Kullanım:** Kalıpların bir kısmı model ailesi bağımsız: fiziksel tepki jestleri (fısıldamak, başını sallamak, derin nefes almak, göz kırpmak, kalbi göğsünde çarpmak) Türkçe taslakta da aranmalı. Türkçe karşılıklarının sıklığı ÖLÇÜLMEDİ, tahmin değil bir ölçüm görevi.
- **Güvenilirlik:** Yüksek (tablo PDF'ten okundu); bir model "top 120"sine girmek, insandan 1000x farklı olmak değildir, yaygınlık sayısıdır.

### 3. 20.000 hikâyede 11 sözcük, hikâyelerin %88,3'ünde
- **Ne:** Dört güncel modelden, beş istemle 20.000 hikâye alınmış; 11 sözcük hikâyelerin %88,3'ünde geçiyor (Elias, Mara, Elara gibi adlar, deniz feneri gibi mekân, saatçi/kütüphaneci gibi meslek). Yazarlar bu sözcüklerin yayımlı edebiyatta ve ön eğitim verisinde nadir, tercih verisinde yaygın olduğunu söylüyor.
- **Kaynak:** Hamilton ve Mimno, "Elias in the Lighthouse, Again? Diagnosing Low Diversity in LLM Stories", arXiv 2605.26492, 26 Mayıs 2026. https://arxiv.org/abs/2605.26492 (yalnızca özet sayfası açıldı)
- **Alıntı:** "11 words occur in 88.3% of generated stories"
- **Kullanım:** Ad, mekân ve meslek seçimi en ucuz ölçülebilir slop: Türkçe taslakta karakter adı, mekân ve meslek dağılımı sayılıp (örneğin 20 taslakta kaç kez aynı ad/mekân/meslek) varsayılan seçimler dışına çıkılır.
- **Güvenilirlik:** Orta-yüksek: sayı özetten, modeller adlandırılmamış, insan baz çizgisi yok (karşılaştırma yayımlı edebiyatla ve ön eğitim verisiyle). Neden iddiası (tercih verisi) bir hipotez, kanıtlanmış nedensellik değil.

### 4. Olay örgüsü yankısı: "Sui Generis" skoru (PNAS)
- **Ne:** Bir hikâye parçasının olay örgüsünün, aynı istemden üretilen alternatif devamlarda ne kadar yinelendiğini ölçüyor; LLM hikâyeleri insanlarınkine göre belirgin biçimde daha öngörülebilir.
- **Kaynak:** Xu, Jojic, Rao, Brockett, Dolan, "Echoes in AI: Quantifying lack of plot diversity in LLM outputs", PNAS 122(35), e2504966122, 2025. https://pmc.ncbi.nlm.nih.gov/articles/PMC12415252
- **Sayılar:** 100 hikâye (50 WritingPrompts + 50 Wikipedia dizi özeti), ~3.700 parça; GPT-4 ve LLaMA-3-70B. Skor düşüşü LLM hikâyelerinde %7,8-11,3, insanlarda %0,4-3,7. İnsan-LLaMA farkı >6,0; LLaMA hikâyeleri GPT-4 devamlarına karşı skorlandığında yalnızca 0,6 ve 1,6 yüksek, yani modeller aynı kalıpları paylaşıyor. İnsan "sürpriz" yargısıyla Spearman 0,55.
- **Alıntı:** yok (özet).
- **Kullanım:** Kendi taslağında ölçülebilir test: aynı sahne istemini birkaç kez çalıştır; sahnenin ana hamlesi her seferinde aynıysa o hamle slop'tur, değiştirilmelidir (hâlâ yapılabilir: sahnenin "en olası" olayını bul, onu yazma).
- **Güvenilirlik:** Yüksek (PNAS, hakem denetimli). Sınırı: kısa hikâyeler, 100 örnek, insan metinleri kalabalıkça seçilmiş Reddit/Wikipedia; roman ölçeğine genellenmez. Ölçüt GPT-4 yargısına dayanıyor.

### 5. LLM hikâyeleri birbirine insan hikâyelerinden daha çok benziyor
- **Ne:** 10 LLM'in hikâyeleri r/WritingPrompts insan hikâyeleriyle karşılaştırılmış; LLM'ler birbirine daha benzer, sıcaklık artırma ve olumsuz istem homojenliği anlamlı azaltmıyor.
- **Kaynak:** Thennal DK ve Hatzel, "Do Large Language Models Always Tell The Same Stories?", arXiv 2606.17350 (v2, Eylül 2026). https://arxiv.org/abs/2606.17350 (yalnızca özet sayfası)
- **Alıntı:** yok (özet; "negative prompting and temperature scaling do not meaningfully reduce this homogeneity" bölümü özetten aktarıldı, kelimesi kelimesine doğrulanmadı).
- **Kullanım:** "Şunu yazma" yasak listesi ve yüksek sıcaklık tek başına çare değil; yapısal yöntem (önceden belirlenmiş sahne kısıtları, ayrıntı bankası) gerekir.
- **Güvenilirlik:** Orta (yeni önbaskı, sayılar özette yok, tam metin açılmadı).

### 6. İnsan çiftleri: yaratıcılık bireyde artıyor, kümede çeşitlilik düşüyor
- **Ne:** GPT-4'ten fikir alan yazarların hikâyeleri daha yaratıcı/iyi yazılmış bulunuyor ama birbirine daha çok benziyor; en çok yararlanan, en az yaratıcı yazarlar.
- **Kaynak:** Doshi ve Hauser, "Generative AI enhances individual creativity but reduces the collective diversity of novel content", Science Advances 10(28), 2024. https://pmc.ncbi.nlm.nih.gov/articles/PMC11244532
- **Sayılar:** 293 yazar, 600 değerlendirici, 3.519 değerlendirme; koşullar: YZ'siz, 1 YZ fikri, 5 YZ fikri. Benzerlik (OpenAI gömme, kosinüs x100): 1 fikirde b=0,871, insan-yalnız koşulun aralığının %10,7'si; 5 fikirde %8,9. Yeni-lik +%5,4 / +%8,1; düşük-DAT yazarlarda yazı kalitesi +%26,6'ya kadar. Değerlendiriciler YZ fikri alanlara en az %25 "sahiplik" cezası uygulamış.
- **Alıntı:** yok (sayılar sayfadan).
- **Kullanım:** YZ'den fikir/öneri almak taslağı ortalamaya çeker; fikir kaynağı olarak kullanılacaksa beş seçenek istemek tek seçenekten iyi görünüyor, ama çıktıyı olduğu gibi almak yerine karşıt yöne gitmek gerekir (yorum).
- **Güvenilirlik:** Yüksek (Science Advances, açık veri). Sınırı: kısa (8 cümlelik) hikâyeler, GPT-4, çevrimiçi katılımcılar.

### 7. Biber öznitelikleriyle insan-YZ farkı: nominalleştirme ve ortaç yan cümle (PNAS)
- **Ne:** Talimat ayarlı (RLHF'li) modeller, taban modellere ve insana göre sistematik biçimde farklı dilbilgisel kalıp kullanıyor; farkın kaynağı talimat ayarı, eğitim metni değil.
- **Kaynak:** Reinhart ve ark., "Do LLMs write like humans? Variation in grammatical and rhetorical styles", PNAS 122(8), 2025. https://arxiv.org/abs/2410.16107 (HTML sürümü okundu)
- **Sayılar:** Nominalleştirme: talimat ayarlı modellerde insanın 1,5-2 katı (GPT-4o 2,1x, d=1,23). Şimdiki ortaç ("-ing") yan cümle: 2-5x (GPT-4o 5,3x, d=1,38). Etkensiz edilgen: GPT-4o yaklaşık yarı oranda. "camaraderie" 162x, "tapestry" 155x; "tapestry" GPT-4o çıktılarının %23'ünde, "amidst" %27'sinde. Rastgele orman, yedi kaynak arasında %66 doğruluk (şans %14); tek LLM-insan ikilisinde %93-98. Llama 3 taban modelleri insana en yakın. Veri: HAP-E (8.290 metin) ve CAP (9.615), kurgu dahil sekiz tür.
- **Alıntı:** yok (sayılar sayfadan).
- **Kullanım:** Türkçedeki karşılık, kanıt değil çıkarım: isim-fiil/eylemlik (-ma/-me/-ış), "-ken/-erek/-ip" zarf-fiil fazlalığı gibi YZ'nin tercih ettiği yapılar sayılarak insan metinle oranlanabilir. Bunun Türkçe için yapıldığına dair kaynak BULAMADIM.
- **Güvenilirlik:** Yüksek (PNAS, ayrıntı sayılar). Sınırı: İngilizce, kurgu yalnızca bir tür olarak karışık; ölçülenler modelin istemine ("kurgu yaz") göre değişir. Fiktif kurgu metinleri için ayrı sayılar bu makaleden çıkmıyor.

### 8. RLHF ve çeşitlilik: SFT/RLHF aşamaları karşılaştırması
- **Ne:** RLHF, SFT'ye kıyasla çıktı çeşitliliğini anlamlı ölçüde azaltıyor, dağılım dışı girdilerde genellemeyi artırıyor: çeşitlilik ve genelleme arasında ödünleşim.
- **Kaynak:** Kirk ve ark., "Understanding the Effects of RLHF on LLM Generalisation and Diversity", ICLR 2024, arXiv 2310.06452. https://proceedings.iclr.cc/paper_files/paper/2024/hash/5a68d05006d5b05dd9463dd9c0219db0-Abstract-Conference.html (yalnızca arama özetinden; sayfası açılmadı)
- **Alıntı:** yok.
- **Kullanım:** Yaratıcı metin için "sohbet/talimat ayarlı" modelden çok taban ya da az ayarlı model tercihi savunulabilir (Bulgu 7'de taban modeller insana daha yakın).
- **Güvenilirlik:** Orta (DOĞRULANAMADI: sayfa açılmadı; görevleri özetleme ve talimat izleme, yaratıcı yazı değil).

### 9. Çöküş nerede oluyor: SFT veri bileşimi ağır basıyor, yalnızca "RLHF suçlu" değil
- **Ne:** Olmo 3'ün üç eğitim hattında çeşitlilik kaybı aşama aşama izlenmiş: Think hattı anlamsal çeşitliliğin çoğunu SFT'de, Instruct hattı daha çok DPO'da kaybediyor; sonuç: çöküş ağırlıklarda, üretim biçiminde değil, veri bileşimi belirleyici.
- **Kaynak:** "Where does output diversity collapse in post-training?", arXiv 2604.16027. https://arxiv.org/abs/2604.16027 (yalnızca özet sayfası)
- **Alıntı:** yok.
- **Kullanım:** "RLHF yaratıcılığı öldürüyor" genellemesi eksik: kayıp eğitim hattına göre farklı aşamada oluşuyor; çıkarım zamanı hileleri sınırlı.
- **Güvenilirlik:** Orta (özet sayfası; sayısal sonuç ve yaratıcı yazı sonucu yok, çalışma çoğunlukla doğrulanabilir görevlerde).

### 10. Yüzey çeşitliliği ölçümleri çöküşü kaçırıyor: duygu eğrisi ve açılış türü
- **Ne:** Sözcük ve gömme tabanlı çeşitlilik ölçütleri düzeliyor görünse bile "duygu eğrisi" ve "açılış türü" kalıpları çökmeye devam ediyor (yazarlara göre ödül istismarı).
- **Kaynak:** "Rethinking Post-training Diversity Collapse: Is Diversity-preserving Post-training Enough?", ICML 2026 gönderisi #54. https://icml.cc/virtual/2026/68538 (yalnızca arama sonucu özeti; sayfa açılmadı)
- **Alıntı:** yok.
- **Kullanım:** Romanın "duygu eğrisi" sorunuyla doğrudan ilgili: sahne bazında hep aynı duygu şekli (gerilim, rahatlama, sessiz anlayış) YZ'nin ölçülmüş bir zayıflığı olabilir; duygu eğrisini sahne sahne plan yapıp çeşitlendir.
- **Güvenilirlik:** DÜŞÜK-orta: DOĞRULANAMADI, yalnızca arama özeti; sayı yok.

### 11. Aynı olgu çok dilli mi? Çoklu dil Hivemind
- **Ne:** 13 dilde 23 açık ağırlıklı model: homojenleşme yaygın ama güç değişiyor; homojenleşme farkı modelin o dildeki yetkinliğiyle bağlantılı ("performans-çeşitlilik ödünleşimi").
- **Kaynak:** Davey, Mishra, Adelöw, Liu, "The Multilingual Artificial Hivemind: Do All LLMs Think Alike in Every Language?", NeurIPS 2026 çalıştayı. https://neurips.cc/virtual/2026/164689 (yalnızca sayfa özeti; diller adlandırılmamış, Türkçe olup olmadığı bilinmiyor)
- **Alıntı:** yok.
- **Kullanım:** Türkçede çöküşün hafif mi ağır mı olduğu bu kaynaktan çıkmaz. Birinci elden Türkçe ölçüm gerekir.
- **Güvenilirlik:** Orta-düşük (çalıştay, özet).

### 12. Perplexity tabanlı YZ dedektörleri güvenilmez: "düşük perplexity = YZ" folklor sayılmalı
- **Ne:** Perplexity ile çalışan yedi dedektör, anadili İngilizce olmayan 91 TOEFL denemesinde ortalama %61,3 yanlış pozitif verdi.
- **Kaynak:** Liang, Yuksekgonul, Mao, Wu, Zou, "GPT detectors are biased against non-native English writers", Patterns, 2023. arXiv 2304.02819 https://arxiv.org/abs/2304.02819 (abstract açıldı; sayılar arama özetinden, DOĞRULANAMADI)
- **Alıntı:** yok.
- **Kullanım:** Taslağı "perplexity/burstiness skoru" ile ölçüp "insana benzer" saymak yanıltıcı; bu ölçümler yazı düzeyinin gösterge değil, vokabüler genişliğinin göstergesi. Kaliteyi ölçmek için Bulgu 1 ve 4'ün kalıp ve olay örgüsü ölçümleri kullanılmalı.
- **Güvenilirlik:** Orta (sayı arama özetinden).

### 13. Uzman yazarlarla yaratıcılık testi (TTCW)
- **Ne:** Uzman yazarlar 48 hikâyeyi 14 ikili testle değerlendirmiş: insan uzman hikâyeleri testlerin ortalama %84,7'sini geçmiş, LLM hikâyeleri %9 (ChatGPT) ile %30 (Claude) arasında.
- **Kaynak:** Chakrabarty, Laban, Agarwal, Muresan, Wu, "Art or Artifice? Large Language Models and the False Promise of Creativity", CHI 2024, arXiv 2309.14556. https://arxiv.org/abs/2309.14556 (yalnızca arama özeti; sayfa açılmadı)
- **Alıntı:** yok.
- **Kullanım:** LLM-yargıcın uzmanla korelasyonu yok: otomatik "kalite puanı" taslağı yargılamaya yetmez, son kararı insan okur.
- **Güvenilirlik:** DÜŞÜK-orta: DOĞRULANAMADI (sayfa açılmadı), model sürümleri eskimiş (2023).

### 14. Stilometri: yazar kümeleri YZ'de sıkı, insanda dağınık
- **Ne:** Burrows Delta (en sık sözcükler) ile GPT-3.5, GPT-4 ve Llama-70B hikâyeleri model başına sıkı kümeler oluşturuyor, insan hikâyeleri çok daha dağınık.
- **Kaynak:** O'Sullivan, Humanities & Social Sciences Communications, 2025. https://doaj.org/article/5039b9c9119946a9be39bbcbfec161b3 (sayfa 403 verdi, açılamadı; bilgi arama özetinden)
- **Alıntı:** yok.
- **Kullanım:** Türkçe için Delta benzeri ölçüm, zeyrek gibi araçlarla yapılabilir (github-notlar.md). Kaynak olarak kullanmadan önce makalenin kendisi açılmalı.
- **Güvenilirlik:** DÜŞÜK: DOĞRULANAMADI.

### 15. Slop skoru ve EQ-Bench: yöntemin kendisi
- **Ne:** EQ-Bench'in slop skoru, "slop sözcük" (%60), "not X but Y" (%25) ve "slop üçlü" (%15) ağırlıklı bileşiğidir; 150 yaratıcı + 150 deneme çıktısı üzerinden hesaplanıyor; "not X but Y" için 10 yüzey + 35 POS-etiketli desen.
- **Kaynak:** sam-paech/slop-score deposu. https://github.com/sam-paech/slop-score (sayfa açıldı)
- **Alıntı:** yok.
- **Kullanım:** Ağırlıkların gerekçesi depoda yok (bileşik kuralı keyfi görünüyor); Türkçe slop skoru yazılacaksa bileşenler ayrı raporlanmalı (Bulgu 16'daki öneriyle uyumlu).
- **Güvenilirlik:** Yüksek (ağırlıklar depodan), ama ağırlıkların geçerliliği KANITSIZ.

### 16. SlopBench: bileşik skor kırılgan, bileşenleri ayrı raporla
- **Ne:** 18 model, 112 el yazımı görev (e-posta, sosyal medya, deneme, iş sohbeti), 19.928 çıktı; dört davranış ölçülmüş: uzunluk, açılış yinelemesi, paragraf ritmi, sabit sözcüksel yapılar. 500 rastgele yeniden ağırlıklandırmada sıralamanın ortası dağılıyor.
- **Kaynak:** "SlopBench: How Well Can We Rank Language Models by Slop?", arXiv 2609.33905. https://arxiv.org/abs/2609.33905 (özet sayfası açıldı)
- **Alıntı:** yok ("one weighting among many" ifadesi özette bulunuyor).
- **Kullanım:** Dört davranışı ayrı ayrı say: açılış yinelemesi (bir sahnenin ilk cümleleri tekrar mı?) ve paragraf ritmi (insan derlemine göre) roman taslağında doğrudan ölçülebilir.
- **Güvenilirlik:** Orta-yüksek. Sınırı: görevler kurgu değil.

## SKILL'e önerilen kurallar (en çok 8)

1. Slop'u liste ezberiyle değil, insan derlemine oranla ölçülen model-özgü yasak listesiyle yakala; liste modelden modele değişir (Bulgu 1, 2).
2. Karakter adı, mekân ve mesleği ilk akla gelen seçimden kaçınarak belirle; taslakta aynı ad/mekân/meslek yineleniyor mu say (Bulgu 3).
3. Sahnenin "en olası" olayını ve açılışını belirle, onu yazma; aynı istemle birkaç çıktı alıp ortak hamleyi at (Bulgu 4, 5).
4. YZ'den fikir alırsan çıktıyı olduğu gibi kullanma, beş seçenek iste ve hepsinden uzak bir yön seç (Bulgu 5, 6).
5. Sahne bazında duygu eğrisini önceden planla, ardışık sahnelerin duygu şekli aynıysa değiştir (Bulgu 10, çok zayıf kanıt, deneme olarak).
6. İsim-fiil, zarf-fiil gibi YZ'nin tercih ettiği yapıların oranını Türkçe insan derlemiyle karşılaştır; kanıt İngilizce (Bulgu 7), Türkçede doğrulanmalı.
7. "Burstiness/perplexity" skorunu kalite ölçütü yapma; bileşenleri ayrı raporla ve son karar için insan okuması kullan (Bulgu 12, 15, 16).
8. Mümkünse taban modele ya da az ayarlı modele yönel, yoksa yasak listesine ek olarak sahne kısıtı ver (Bulgu 5, 7, 8; kanıt orta).

## Doğrulanamayanlar
- Kirk ve ark. (RLHF/çeşitlilik), ICML 2026 #54, Chakrabarty ve ark. (TTCW), O'Sullivan (stilometri), Liang ve ark. (sayılar): kaynak sayfası açılamadı veya yalnızca özet okundu. Bulgu 8, 10, 12, 13, 14 olarak işaretli.
- Verbalized Sampling (arXiv 2510.01171): özet sayfası açıldı, "1,6-2,1x çeşitlilik" ifadesi doğrulandı, ama tipiklik yanlılığı hakkındaki neden iddiası tam metinle test edilmedi; bulgu olarak yazılmadı.
- Bir arama özeti "Reviriego (2025)" adlı bir anlatı homojenliği makalesinden söz etti; kaynağa ulaşamadım, kullanmadım.
- Pawłowski ve Walkowiak (ACL 2026, Fransızca edebiyat stilometrisi): PDF 404 verdi, sadece arama özeti; kullanılmadı.
- "Ismayilzada ve ark. (arXiv 2411.02316)": özet açıldı (YZ hikâyeleri dilsel olarak daha karmaşık ama daha az yeni/şaşırtıcı/çeşitli). "60 LLM ve 60 insan" sayısı özetten geldi ama şüpheli (60 hikâye de olabilir), kullanılmadı.
- Türkçe için hiçbir YZ-insan kurgu ölçümü bu alanda bulunmadı (a01'in alanı).

## Çelişkili ya da zayıf çıkanlar
- **"Kısa kopuk cümle, tek nesne, düzgün kapanış jesti" YZ'nin ölçülmüş imzasıdır:** Bulduğum hiçbir ölçümde (Antislop, Reinhart, Sui Generis, SlopBench) yok. Reinhart'a göre YZ nominalleştirme ve ortaç yan cümleyi insandan FAZLA kullanıyor; bu "kısa kopuk" imajıyla çelişir (İngilizce, tür karışık). SlopBench paragraf ritmini ölçüyor ama ayrıntı özette yok. Bu kalıp halen folklor.
- **"RLHF yaratıcılığı öldürüyor":** Kirk (RLHF<SFT çeşitlilik), Reinhart (talimat ayarı farkı yaratıyor) destekliyor; ama 2604.16027 çöküşün büyük bölümünün SFT veri bileşiminden geldiğini ve aşamanın hatta hatta göre değiştiğini söylüyor. Tek nedenli anlatım zayıf.
- **Yüksek sıcaklık ve "şunu yazma" talimatı çözer:** 2606.17350'ye göre anlamlı etkisi yok (yalnızca özetten).
- **Slop oranları (85.513x vb.) mutlak sayıdır:** Baz çizgi genel web sıklığı ve Reddit/Gutenberg; oranlar sıralama için kullanışlı, edebiyat için yanıltıcı olabilir.
- **Perplexity/burstiness = YZ:** Liang ve ark.'na göre dedektör ana dili İngilizce olmayan insan yazısını yüksek oranda YZ sayıyor; ayrıca ChatGPT ile "doğallaştırılan" metin insan sayılıyor (arama özeti).
- **Bileşik slop skoru geçerlidir:** EQ-Bench ağırlıklarının (%60/25/15) gerekçesi yok; SlopBench ortadaki sıralamanın ağırlığa göre kırılgan olduğunu gösteriyor.
- **Bu alanın İngilizce olması:** Çalışmaların tamamı İngilizce (ya da dili belirsiz). Türkçe için sonuç taşınması kanıtlanmadı.
