# 07 - Zaman çizelgesi ve nedensellik takibi

Ajan: u07-zaman-neden · Tarih: 2026-11-19 · Dil: Türkçe

## Kapsam

- Alan: zaman çizelgesi araçları ve yöntemleri, olay-neden grafikleri, süreklilik hatası (plot hole) tespiti, olgu kaydı (fact registry) tasarımı.
- Yöntem: genel İngilizce aramalar (proje ayrıntısı kullanılmadı); 11 kaynak açılıp doğrulandı, 2 kaynak açılamadı (403, 404). Alıntılar en çok 25 kelime; sayfayı okuyan araçın tırnak içinde verdiği metinler, birebir karşılaştırma yapılmadan.
- Sınır: bulguların çoğu arXiv ön baskısı ya da satıcı sayfası; PDF açılmadı; yaklaşık 33 araç çağrısı.

## Bulgular

### 1. FlawedFictions: süreklilik hatasının tanımı ve taksonomi
- Kaynak: https://arxiv.org/html/2504.11900v2 (arXiv 2504.11900, "Finding Flawed Fictions")
- Alıntı: "continuity errors (contradictions of established facts)" (Bölüm 2)
- Ne: Taksonomi: Continuity Error, Out of Character Behavior, Factual Error, Impossible Event, Unresolved Storylines (Shattuck 2024'e atıfla). Yazarlar süreklilik hatasını ana hedef alıyor. Hata enjeksiyonu: bir olgu ilk perdeden seçilir, LLM onu olumsuzlayan bir karşı-versiyon yazar, ilk perde sonraki perdelerle birleştirilir; LLM filtresi ve insan kontrolüyle doğrulanır.
- u-mod'da: "süreklilik hatası = kurulmuş bir olguyla çelişki" tanımı olgu kaydına bağlanır (M1, M7). Enjeksiyon yöntemi, denetleyiciyi ölçmek için bilinçli hatalı test metinleri üretmekte kullanılabilir.
- Güvenilirlik: orta-yüksek. Sayfa açıldı; ön baskı; taksonomi kaynağı (Shattuck) açılmadı.

### 2. FlawedFictions: uzun hikâyelerde sonuçlar
- Kaynak: aynı URL, Tablo 1b (FlawedFictionsLong).
- Ne: 200 hikâye, 1200-4000 kelime; 97 hatalı, 103 temiz. Doğruluk / CEEval-Full (yerelleştirme): o1 (orta) 0.61 / 0.53; Claude 3.5 Sonnet + doğrulayıcı 0.60 / 0.50; GPT-4o 0.57 / 0.35; Llama-3.3-70B 0.53 / 0.16; o3-mini (yüksek) 0.45 / 0.07. Tabanlar: rastgele 0.50 / 0.00; hep "hata yok" 0.51 / 0.51. CEEval-Full'da 0.51'in üstüne yalnızca o1, GPT-4-turbo ve GPT-4-turbo+CoT çıkıyor. Yazarlara göre kısa setten uzun sete geçişte performans sert düşüyor.
- u-mod'da: Tek doğruluk oranına güvenme; yerelleştirme ve "hep hata yok" tabanıyla birlikte raporla (M7).
- Güvenilirlik: yüksek (tablo açıldı); ön baskı.

### 3. NoCha: kitap uzunluğunda doğru/yanlış iddia testi
- Kaynak: https://arxiv.org/abs/2406.16264 (v3, son revizyon 22 Ekim 2024)
- Alıntı: "1,001 minimally different pairs of true and false claims about 67 recently-published English fictional books"
- Ne: 1001 çift, 67 kitap. Sayfaya göre on uzun bağlamlı LLM zorlanıyor; açık-ağırlıklı modeller rastgele tahmin düzeyinde; en iyi GPT-4o, %55.8. İnsanlar görevi kolay buluyor (sayısal insan skoru yok).
- u-mod'da: Tüm kitabı tek sorguda kontrol etmek güvenilir değil; denetimi olgu başına yerel sorgulara böl (M7). Doğru ve bozulmuş olgu çiftleri, u-mod'un kendi denetimini ölçmek için bir test şablonu olabilir.
- Güvenilirlik: yüksek-orta (arXiv özet sayfası açıldı).

### 4. TLDM: geçen süre ve karakter konumu, uzun romanlarda
- Kaynak: https://arxiv.org/html/2505.14925v1 (arXiv 2505.14925, "Too Long, Didn't Model")
- Veri: 40 İngilizce roman, 4 uzunluk grubu (32k token altından 128k token üstüne). Görevler: bölüm başına tek cümle özet; her karakterin son fiziksel konumu; geçen anlatı süresi (tek zaman görevi).
- Ne: Geçen süre: GPT-4.1 0.58 → 0.38 (en kısa → en uzun grup), Gemini 2.0 Flash 0.55 → 0.63; rastgele taban 0.22-0.35. Konum: GPT-4.1 0.17 → 0.09; DeepSeek V3 0.14 → 0.00; rastgele 0.00-0.01. Skorlar 0-1 ölçeğinde.
- Alıntı (Ek B istemi): "Predict how much time in minutes, hours, or days elapsed in this narrative."
- u-mod'da: Geçen süre ve konumu modele tahmin ettirme; olgu kaydından hesapla (M4).
- Güvenilirlik: orta-yüksek (arXiv; tablo açıldı). Birim bilgisi çelişkili (bkz. Zayıf ve çelişkili bölümü).

### 5. ConStory-Bench ("Lost in Stories"): hata türleri ve kanıtlı denetleyici
- Kaynak: https://www.microsoft.com/en-us/research/?p=1163845
- Ne: 2000 istem, 4 görev türü, 5 hata kategorisi, 19 alt tür. ConStory-Checker çelişkiyi işaretler ve her kararı metin kanıtıyla verir. Sayfaya göre hatalar en çok olgusal ve zamansal boyutta; metnin ortasına yakın ve belirteç entropisinin yüksek olduğu yerlerde kümeleniyor. Sayfada hata oranı yok.
- Alıntı: "they are most common in factual and temporal dimensions"
- u-mod'da: Her çelişki bulgusu iki pasaj ve çakışan olgu kimliğiyle gelsin (M7); denetimde olgusal ve zamansal kontroller önce çalışsın.
- Güvenilirlik: orta. Kurumsal sayfa; yalnızca LLM üretimi hikâyeler; insan romanına genellenemez.

### 6. Riedl ve Young (2010): nedensel ilerleme ve karakter inandırıcılığı
- Kaynak: https://jair.org/index.php/jair/article/view/10669 ("Narrative Planning: Balancing Plot and Character", JAIR 39, 2010)
- Alıntı: "two attributes of narratives are universal: (a) the logical causal progression of plot, and (b) character believability"
- Ne: IPOCL (Intent-based Partial Order Causal Link) planlayıcısı, nedensel olarak sağlam olay ilerlemesi üretmeyi hedefler. Niyetin nedensel bağlantılarla modellenmesi yalnızca arama özetinde geçiyor; tam metinde teyit edilmedi.
- u-mod'da: Her olay bir nedensel ebeveyn ister; kenarlar türlenir (M5).
- Güvenilirlik: yüksek (hakemli dergi; sayfa açıldı). Çalışma plan üretimi içindir; denetime uyarlama bizim çıkarımımız.

### 7. GLUCOSE: hikâye-özgü nedensel ifade ile genel kural
- Kaynak: https://aclanthology.org/2020.emnlp-main.370 (Mostafazadeh ve ark., EMNLP 2020)
- Alıntı: "Each GLUCOSE entry includes a story-specific causal statement paired with an inference rule generalized from the statement"
- Ne: 10 boyut; odak alanları olaylar, durumlar, motivasyonlar ve duygular; sayfada yaklaşık 670 bin ifade ve kural.
- u-mod'da: Hikâye olgusu ile genel kuralı ayrı tut (M6).
- Güvenilirlik: yüksek (ACL Anthology sayfası açıldı); sayı yaklaşık.

### 8. Olay hesabı (Event Calculus): durum, başlatıcı ve sonlandırıcı olaylar
- Kaynak: https://en.wikipedia.org/wiki/Event_calculus (atıf: Kowalski ve Sergot, "A logic-based calculus of events", New Generation Computing, 1986)
- Ne: Yüklemler: holdsAt(Fluent, Time), happensAt(Event, Time), initiates(Event, Fluent, Time), terminates(Event, Fluent, Time). Bir durum, araya giren sonlandırıcı olay olmadıkça sürer. Prolog sürümünde clipped(Fluent, T1, T2) yüklemi, iki zaman arasında sonlandırıcı olay varsa doğrudur; holdsAt bunu not(clipped(...)) ile kullanır.
- Alıntı: "the fluent is not terminated by any event that happens in the meantime"
- u-mod'da: Olgu kaydının iskeleti bu mantığı taşır: her değer bir başlatıcı olaya bağlanır, bir sonlandırıcıyla kapanır (M1, M3).
- Güvenilirlik: orta (Wikipedia; birincil makale açılmadı).

### 9. Campfire: zaman çizelgesi aracı ve kurgusal takvim
- Kaynak: https://campfirewriting.com/timeline-maker (satıcı sayfası; Campfire Technology LLC)
- Ne: İç içe notlu olaylar; olaylar sürükle-bırakla yerleşir ve akış şeması gibi bağlanır ("bir anın sonrakileri nasıl değiştirdiğini göstermek için"); şeritler ve ayraçlar; karakter gelişimi modülü (Arcs); dünya tarihine bağlı kurgusal takvim (iki yönlü senkron); Gantt görünümü ve renkli dönemler; 10'dan fazla ücretsiz taslak şablonu. Mekân ya da ayar bağlantısı bulunamadı; fiyat verilmemiş.
- Alıntı: "designed to help you build narrative timelines with nested notes that seamlessly connect to the rest of your story"
- u-mod'da: Kurgusal takvim alanı (M4) ve olay bağlantıları (M5) için tasarım referansı.
- Güvenilirlik: düşük-orta (satıcı pazarlama sayfası; özellikler bağımsız teyit edilmedi).

### 10. Aeon Timeline: çoklu hat görünümü; otomatik denetim yok
- Kaynak: https://aeontimeline.com/solutions/story-planning-software (satıcı sayfası)
- Ne: Zaman çizelgesi görünümü; iç içe olaylar; birden çok hikâye hattını yan yana izleme ve kesişmeleri görme; kişi ve yer etiketleme, bağımlılık ve ilerleme izleme; özel öğe türleri (ör. yanıltıcı ipuçları); Scrivener ve Ulysses entegrasyonu; 14 günlük ücretsiz deneme.
- Sayfada yok: otomatik yaş ya da süre hesabı; otomatik çelişki işaretleme.
- u-mod'da: Hat şeridi ve kesişme görünümü (M8). Otomatik denetimi bu araçtan bekleme; u-mod'da kur.
- Güvenilirlik: düşük-orta (satıcı sayfası).

### 11. TGMS: geçerlilik zamanı ile işlem zamanının ayrımı
- Kaynak: https://arxiv.org/abs/2607.10265 (tek yazarlı ön baskı; v1 11 Temmuz 2026)
- Alıntı: "TGMS separates valid time from transaction time."
- Ne: İki zaman ekseni: geçerlilik (olgunun doğru olduğu süre) ve işlem (sistemin kaydettiği an). Değerlendirme geliştiricinin kendi kıyaslaması: kurgu dışı iletişim ağı verisi; 14B model için tam eşleşme 0.409, üç temel yöntem 0.045-0.182.
- u-mod'da: Düzeltmeler eski kaydı silmez, yeni sürüm olarak eklenir (M2).
- Güvenilirlik: düşük-orta (ön baskı; kendi kıyaslaması; alan dışı veri).

### 12. Chambers ve Jurafsky (2008): otomatik olay zinciri (yalnızca kaynak doğrulandı)
- Kaynak: https://aclanthology.org/P08-1090/ ("Unsupervised Learning of Narrative Event Chains", ACL-08: HLT, 2008)
- Ne: Başlık, yazarlar, yıl ve "denetimsiz" niteliği sayfada teyit edildi. Yöntem ve sonuçlar DOĞRULANAMADI (özet sayfada yok, PDF açılmadı).
- u-mod'da: Otomatik aday olay zinciri çıkarımı için başlangıç noktası; çıkan her ilişki "taslak" işaretli olur. Yöntem doğrulanmadan uygulanmaz.
- Güvenilirlik: kaynağın varlığı yüksek; yöntem DOĞRULANAMADI.

## u-mod'a önerilen mekanizmalar

**M1. Olgu kaydı satırı (alan tanımı)**
- id; tür: olgu | genel kural | olay
- özne, yüklem, değer (ör. Ali, konum, liman)
- başlangıç: hikâye zamanı, dahil; başlatıcı olay id
- bitiş: hikâye zamanı, hariç; boşsa hâlâ geçerli; sonlandırıcı olay id
- anlatıda_ilk_görünme: bölüm ve sahne (okurun olguyu öğrendiği yer; hikâye sırasından ayrı)
- bilen: olguyu bilen karakterler (kaynaksız tasarım kararı)
- kaynak: yazarın metnindeki pasaj ya da "taslak"
- durum: kesin | taslak | çelişkili
- nedensel_ebeveyn: olay id listesi
Gerekçe (bulgu no): 8 (başlatıcı/sonlandırıcı mantığı), 7 (olgu ile genel kuralın ayrımı), 11 (geçerlilik alanları).

**M2. İki zaman ekseni (kural)**
Hikâye zamanı (M1'deki başlangıç ve bitiş) ile kayıt zamanı (satırın yazıldığı ya da düzeltildiği an) ayrı tutulur. Düzeltmede eski satır silinmez; yeni sürüm eklenir, eski satır "geçersiz kılındı" olur. Gerekçe: 11 (ön baskı; Chekol ve Stuckenschmidt 2019 teyit edilemedi).

**M3. Durum geçiş denetimi (adım)**
Yeni bir değer yazılmadan önce: aynı özne ve yüklem için açık (bitişsiz) satır var mı? Varsa, o satırı kapatan bir sonlandırıcı olay ya da yeni değeri başlatan olayın kendisi bunu yapmalı. Aksi halde satır "süreklilik çatışması" olur ve yazara sorulur. Gerekçe: 8 (clipped mantığı).

**M4. Hesaplanabilir değerleri kayıttan üret (adım)**
(1) Kurgusal takvimi tanımla: gün, ay, yıl ve ana olaylar. (2) Her olaya hikâye zamanı ata. (3) Geçen süre = iki olay arası fark; yaş = doğum olayından fark; konum = en son konum satırı. LLM'den geçen süre ya da konum tahmini isteme. Gerekçe: 4 (geçen süre ve konum görevlerinde düşük skor), 9 (kurgusal takvim). Aeon'da otomatik yaş hesabı yok (10), bu nedenle u-mod'da kurulmalı.

**M5. Olay-neden kuralı (doğrulama adımı)**
Her yeni olay için en az bir nedensel ebeveyn ya da "başlangıç durumu" işareti zorunlu. Kenar türleri: fiziksel sonuç | karakter niyeti | bilgi (tür ayrımı tasarım kararı). Ebeveyni olguyu değiştirmeyen olay "taslak" kalır ve yazara önerilir. Gerekçe: 6 (nedensel ilerleme ve karakter inandırıcılığı), 9 (akış bağlantısı).

**M6. Genel kural ile hikâye olgusunu ayır (tablo ayrımı)**
Genel kurallar ("bu şehirde gece sokağa çıkma yasak") hikâye olgularından ayrı durur. Bir olgu bir genel kuralı çiğnerse "süreklilik ihlali" bayrağı alır. Gerekçe: 7.

**M7. Yerel, iki aşamalı denetim (adım)**
(1) Yeni bölüm ya da olgu için yalnızca ilgili kayıt satırlarını getir; tüm kitabı tek sorguda verme. (2) "Çelişki var mı": evet/hayır. (3) Evetse iki pasaj, çakışan olgu id'leri ve çiğnenen kural. (4) Sonucu "hep hata yok" tabanı ve yerelleştirme ölçüsüyle raporla; tek doğruluk oranıyla raporlama. Öncelik: olgusal ve zamansal çelişkiler. Gerekçe: 2, 3, 5.

**M8. Hat şeridi ve kesişme adayı (görünüm ve işaret)**
Her paralel hat ayrı şerit olur. Aynı hikâye zamanı aralığında aynı mekân ya da aynı karakter iki hatta geçerse "kesişme adayı" olarak taslak işaretlenir; karar yazara bırakılır (u04 ve u10 ile bağlantılı). Gerekçe: 10 (çoklu hat görünümü), 9 (şerit ve ayraç).

## Doğrulanamayanlar

- Chekol ve Stuckenschmidt (TIME 2019, zamana duyarlı olasılıksal bilgi grafiği): core.ac.uk sayfası 403 döndü; açılamadı.
- Genette'in sıra, süre ve sıklık ayrımı ile analepsis/prolepsis terimleri: çalışma rehberi 404 döndü; açılamadı. Bu terimler mekanizmalarda kullanılmadı.
- Kowalski ve Sergot (1986) özgün makalesi: açılmadı; yalnızca Wikipedia atfı var.
- Chambers ve Jurafsky (2008) yöntemi ve sonuçları: PDF açılmadı; özet sayfada yok.
- FlawedFictions: "LLM özetleri ve modern uyarlamalarda tespit oranı daha yüksek" iddiası yalnızca arama özetinde. Açılan kısım metnin ilk 100000 karakteriydi (toplam yaklaşık 215000); ekler kısmen okundu.
- NoCha: token aralığı (yaklaşık 49k-336k), veri setinin yayımlanmaması, çift bazında puanlama ve tek cümlelik sorularda daha yüksek doğruluk iddiaları arama özetinde; açılan sayfada bulunamadı.
- Shattuck (2024) taksonomi kaynağı: açılmadı; taksonomi yalnızca FlawedFictions metninde atıf olarak geçiyor.
- Low-Shot Learning for Fictional Claim Verification (arXiv 2304.02769): açılmadı.
- Stanford CS224N öğrenci projesi (PDF): açılmadı.
- Quipu (arXiv 2608.16813; ikili zamanlı, yalnızca eklemeli olgu günlüğü): açılmadı.
- Motik (2012, RDF ve OWL'de geçerlilik zamanı): açılmadı.
- Ware (2014, CPOCL) ve Haslum (2012): açılmadı.
- Plottr, Preceden, Storyteller Suite (Obsidian eklentisi): arama listesinde görüldü, açılmadı.
- GLUCOSE'un bilişsel psikoloji temeli: sayfada teyit edilmedi.
- Olay hesabında anlık semantiği (başlatıcı olayın anı sayılmaz, sonlandırıcının anı sayılır): arama özetinde; Wikipedia'da teyit edilmedi.
- Aeon: 65 dolarlık fiyat ve 2024 sürüm bilgisi: blog ve listeleme; resmi sayfada yok.

## Zayıf ve çelişkili iddialar

- TLDM iç çelişki: yöntem bölümü birimleri saatten yıllara veriyor; Ek B istemi dakika, saat ve gün diyor. Bu bilgi WebFetch özetinden; birebir teyit edilmedi.
- TGMS: arama özeti "assert, retract, correct" işlemlerini sayıyor; açılan özet işlem adı vermiyor, yalnızca 13 operatörden söz ediyor. Bu adlar kullanılmadı.
- Campfire: arama özetindeki sponsor sayfası olayları "insanlara ve ayarlara" bağladığını söylüyor; açılan satıcı sayfasında ayar ya da mekân bağlantısı yok.
- Aeon: bir blog yazarı otomatik yaş hesabını iddia ediyor; resmi sayfa bunu da otomatik çelişki işaretlemeyi de anmıyor.
- FlawedFictions metriği (kendi çıkarımımız): "hep hata yok" tabanının CEEval-Full değeri 0.51, 200 hikâyenin 103'ünün temiz olmasıyla (103/200 = 0.515) uyumlu. Bu, metriğin temiz hikâyede doğru "hata yok" cevabına puan verdiğini düşündürüyor; CEEval-Full tek başına güvenilir bir ölçü değil.
- ConStory: "hatalar metnin ortasında kümelenir" sonucu yalnızca LLM üretimi hikâyelere ait; bir oran verilmiyor.
- GLUCOSE: "yaklaşık 670 bin" sayısı sayfada yaklaşık olarak geçiyor; kesin sayı yok.
