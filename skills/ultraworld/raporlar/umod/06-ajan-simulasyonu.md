# u-mod araştırma 06: Çok ajanlı dünya simülasyonu ve yan karakterler

## Kapsam
- **Konu:** Generative Agents (Park ve ark., 2023) ile izleyen çalışmaların bellek, yansıma ve planlama mimarisi; simülasyondan çıkan olaylar ve hikâyeler; sürüklenme ve tutarlılık yöntemleri; maliyet. Amaç: yan karakterleri u-mod'da ajan gibi ilerletmek için uygulanabilir mekanizmalar.
- **Yöntem:** 9 arama, 13 sayfa açıldı (12 makale; Park 2024'ün iki sürümü dahil). Park 2023 için ar5iv tam metni (bölüm 8.3'e kadar), Concordia için HTML metni (bölüm 5'e kadar) okundu; diğerleri arXiv özeti. Sayılar ve tırnaklı ifadeler araç özetinden alındı; kritik sayılar tam metinle teyit edilmeli. Alıntılar en çok 25 kelime.
- **Sınır:** Sağlayıcıya özgü fiyat verilmedi (doğrulanmış fiyat yok); maliyet bölümü sağlayıcıdan bağımsız bir formüldür.

## Bulgular

### A. Generative Agents (Park ve ark., 2023; arXiv:2304.03442)

**1. Bellek akışı ve geri çağırma skoru.**
- Kaynak: https://ar5iv.labs.arxiv.org/html/2304.03442 (özet: https://arxiv.org/abs/2304.03442)
- Ne: Geri çağırma üç bileşenin toplamıdır: tazelik, önem ve ilgi. Üçü de min-max ile [0,1] aralığına ölçeklenir; ilgi, kayıt ve sorgu gömmeleri arasındaki kosinüs benzerliğidir. Ağırlıklar 1'e ayarlıdır. Tazelik, bellek son geri çağrıldığından beri geçen sandbox saatine göre üstel azalır; katsayı 0,995.
- Alıntı: "exponential decay function over the number of sandbox game hours since the memory was last retrieved"
- u-mod'da: Olay günlüğünde her karakter için aynı üç skor. Tazelik birimi sahne saati olmalı; 0,995 sandbox'a özgüdür, u-mod'da yeniden kalibre edilir.
- Güvenilirlik: Yüksek. Metin açıldı; üstel formül açık yazılmamış, katsayı metinden alındı.

**2. Önem puanı.**
- Kaynak: aynı.
- Ne: LLM'e 1–10 arası tam sayı sorulur; puan kayıt oluşturulurken bir kez verilir. Örnekler: oda toplamak 2, birini çıkmaya davet etmek 8.
- Alıntı: "On the scale of 1 to 10, where 1 is purely mundane"
- u-mod'da: Önem, olayın karakter için ağırlığıdır. Kanon etkisi ayrı alanda tutulur; önem sonradan değiştirilmez, yeniden değerlendirme yeni bir kayıt olur.
- Güvenilirlik: Yüksek.

**3. Yansıma.**
- Kaynak: aynı.
- Ne: Son olayların önem toplamı bir eşiği (uygulamada 150) geçince tetiklenir; ajanlar "roughly two or three times a day" yansıma yapar. Son 100 kayıttan üç soru üretilir, her soru için geri çağırma yapılır, beş içgörü yazılır ve her içgörü kaynak kayıt numaralarını gösterir. İçgörüler başka yansımalara kaynak olabilir (ağaç yapısı).
- Alıntı: "exceeds a threshold (150 in our implementation)"
- u-mod'da: M3. Kaynaksız içgörü kabul edilmez; yansıma yorum statüsündedir.
- Güvenilirlik: Yüksek. Eşik bu uygulamaya özgüdür.

**4. Planlama ve tepki kararı.**
- Kaynak: aynı.
- Ne: Gün planı "five to eight chunks" parçadan oluşur; parçalar saatlik eylemlere, sonra 5–15 dakikalık adımlara bölünür; her adım konum, başlangıç ve süre taşır. Her adımda yeni gözlemler LLM'e gider ve karar verilir: planı sürdür ya da tepki ver. Tepkide plan o noktadan yeniden üretilir.
- Alıntı: "decide whether the agent should continue with their existing plan, or react"
- u-mod'da: M4. Saatlik çözüm yalnız sıcak karakterlerde yapılır.
- Güvenilirlik: Yüksek.

**5. Değerlendirme: inanılırlık ve bileşen ablasyonu.**
- Kaynak: aynı.
- Ne: Gözlemcilerin sıralamasına dayalı TrueSkill μ değerleri: tam mimari 29,89; yansıma yok 26,88; yalnız gözlem 25,64; insan işçiler 22,95; hiçbir bileşen yok 21,21. Hiçbir bileşen içermeyen koşul ile insan işçiler arasında anlamlı fark yok; diğer karşılaştırmalar p<0,001.
- u-mod'da: Planlama ve yansıma davranışı karakteri "inandırıcı" kılıyor. Ancak ölçü inanılırlıktır, tutarlılık değil; tutarlılık için ayrı ölçüt gerekir (M7).
- Güvenilirlik: Orta. Sayılar özetleyicinin tablo okumasından; satır etiketleri tam tabloyla teyit edilmeli.

**6. Kendiliğinden yayılan olay (Valentine's Day partisi).**
- Kaynak: aynı.
- Ne: Partiyi tek bir ajan (Isabella) başlatmıştı. İki günlük simülasyon sonunda 25 ajanın 13'ü partiyi duydu (başta 1). Davetli 12 ajandan 5'i geldi. Gelmeyen 7 ajanın 3'ü çakışma nedeniyle gelemedi; 4'ü ilgilendiğini söyledi ama o gün gelmeyi planlamadı.
- Alıntı: "five out of the twelve invited agents showed up at Hobbs cafe"
- u-mod'da: Yan karakterin küçük bir niyeti zincirleme yayılabilir. Bu tür yayılım M8'de kesişme adayı olarak yazara sunulur; ana hikâyenin bilgisine sızmaz (M5).
- Güvenilirlik: Yüksek (sayılar). Tek vaka, 25 ajan, iki gün.

**7. Hata biçimleri.**
- Kaynak: aynı.
- Ne: (a) Süsleme: Isabella, Sam'in yarın "make an announcement tomorrow" diyeceğini söylüyor; bu hiç konuşulmamıştı. (b) Dünya bilgisi sızıntısı: Yuriko, komşusunu "Wealth of Nations" yazarı olarak anlatıyor. (c) Aşırı uyum: Isabella başkalarının parti fikirlerini nadiren reddediyor. (d) Geri çağırma hatası: Rajiv, adaylığı duyduğu hâlde seçimi yakından takip etmediğini söylüyor. (e) Hallüsinasyon: diğer ajanlar hakkındaki 453 yanıtın 6'sı (%1,3). (f) Bellek büyüdükçe davranış kayması: bazı ajanlar öğle yemeği için bara gidiyor. (g) Diyalog "could feel overly formal" bulunuyor.
- Alıntı: "could feel overly formal"
- u-mod'da: Süsleme M3, bilgi sızıntısı M5, reddetme alanı M1, geri çağırma M2, davranış kayması M7 ile ele alınır.
- Güvenilirlik: Yüksek (metin özeti).

**8. Maliyet çıpası ve maliyet modeli.**
- Kaynak: aynı.
- Ne: Makale 25 ajanlı, iki günlük simülasyonu gpt-3.5-turbo ile anlatıyor; maliyeti "binlerce dolar" token kredisi ve "birkaç gün" olarak veriyor. Kesin dolar, token ya da çağrı sayısı yok.
- Alıntı: "costing thousands of dollars in token credits and taking multiple days to complete"
- Model (bu raporun çıkarımı, kaynak değil): Günlük çağrı sayısı C = Σ_sıcak [1 + g + y + r·(1 + k) + d] + Σ_ılık [1/7] + Y
  - 1: sıcak karakter başına gün planı
  - g: yeni gözlem sayısı (her biri için tepki kararı)
  - y: yeni bellek sayısı (her biri için önem puanı)
  - r: günlük yansıma sayısı; her biri bir soru ve k içgörü çağrısı
  - d: diyalog çağrısı
  - Y: karakter × yoklama sorusu × 2 (yanıt ve hakem) ÷ kontrol aralığı (gün)
  - Maliyet = Σ (girdi token × girdi fiyatı + çıktı token × çıktı fiyatı)
- Kaldıraç: sıcak karakter sayısı ve olay-tetikli çağrı. Park 2023'te her adımda yeni gözlem varsa LLM'e tepki kararı için gidiyor (özet); Concordia'da her adımda eylem seçimi için LLM çağrısı var (HTML v2).
- u-mod'da: M6 (katmanlar), M4 (tetikli çağrı).
- Güvenilirlik: Alıntı yüksek; formül çıkarım; sayısal maliyet yok. Token ve fiyat, sağlayıcının güncel fiyat sayfasıyla hesaplanmalı.

### B. Sonraki çalışmalar

**9. Park ve ark. (2024): röportaj tohumu.**
- Kaynak: https://arxiv.org/abs/2411.10109 (v4); v1: https://arxiv.org/abs/2411.10109v1
- Ne: 1.052 ABD'li yetişkin, iki saatlik yapay zekâ yürütücülü sesli röportaj (American Voices Project protokolü). Tohumlar karşılaştırıldı: kendi yazdığı kişilik, anket, röportaj, anket+röportaj ve yalnız demografi. v4 sayıları: anket+röportaj %72,8; katılımcının iki hafta sonraki kendi tutarlılığı %79,5; yalnız demografi %60,4. Kişilik tahmini iyileşti; teşvikli ekonomik seçimler iyileşmedi; hiperrasyonalite azalmadı.
- Alıntı (v4): "combining them reached 72.8%, compared with 79.5% for participants' two-week test-retest agreement"
- Alıntı (v1): "The generative agents replicate participants' responses on the General Social Survey 85% as accurately"
- u-mod'da: Yan karakterin tohumu röportaj biçiminde toplanır (M1). Ekonomik ve strateji kararları tohumdan türetilmez; açık kuralla yazılır (M5).
- Güvenilirlik: Yüksek (iki sürüm açıldı). Sürümler arasında ölçüt değişti; bkz. "Zayıf, çelişkili ya da sınırlı iddialar".

**10. Concordia: Game Master katmanı (2023).**
- Kaynak: https://arxiv.org/html/2312.03664v2 (arXiv:2312.03664)
- Ne: GM dünya durumunu ve "gerçek" değişkenleri (ör. para, oy) tutar. Ajanlar niyetini doğal dille bildirir; GM fizibiliteyi denetler, eylemin sonucunu anlatır ve olayı kayıt olarak yazar. Gözlem yalnız GM bir ajanın olayı gördüğüne karar verirse üretilir. Değerlendirme yok; nitel örnekler var. Bazı güncellemeler kodla yapılabilir ve "verimlilik ya da uzun vadeli tutarlılık" için daha seyrek çalışabilir.
- Alıntı: "In case the GM judges that a player did not observe the event, no observation is emitted."
- u-mod'da: M5 (dünya defteri ve bilgi filtresi), M6 (kod tabanlı bileşenler).
- Güvenilirlik: Orta. Kavramsal kaynak; sonuç yok; bölüm 5'e kadar okundu.

**11. CoSER: edebi kaynaktan rol yapma (2025; v3 Ocak 2026).**
- Kaynak: https://arxiv.org/abs/2502.09082
- Ne: 771 kitap ve 17.966 karakterlik veri; LLaMA-3.1 tabanlı 8B ve 70B modeller; birden çok karakterin tek sahnede konuştuğu kurgu. Temel fikir "verilen koşullarla oyunculuk" (given circumstances). 70B için InCharacter %75,80 ve LifeChoice %93,47; yazarlar GPT-4o ile denk ya da üstün olduğunu iddia ediyor.
- Alıntı: "given-circumstance acting for training and evaluating role-playing LLMs"
- u-mod'da: M2'deki çağrı paketi; her çağrıya sahne, rol, hedef ve bilgi koşulları ayrı ayrı verilir.
- Güvenilirlik: Orta. Özet ve yazar iddiası; insan çalışmasının sayıları özette yok.

**12. Project Sid (2024): çok modüllü ajan toplumu.**
- Kaynak: https://arxiv.org/abs/2411.00114
- Ne: Minecraft ortamı; ajan sayısı "10 - 1000+" aralığında; PIANO mimarisi ("Parallel Information Aggregation via Neural Orchestration"); roller, kolektif kurallar ve kültürel-dinî aktarım iddiaları. Ölçüm "uygarlık benzeri" kıstaslarla yapılıyor; ama ayrıntı ve sayı özette yok, yazarlar "These preliminary results" diyor. Basında geçen vergi, para birimi ve rahip-tüccar anlatıları bu makalede doğrulanamadı.
- Alıntı: "autonomously developing specialized roles"
- u-mod'da: Ayrı modüller (hafıza, plan, tepki) M2–M4 ile uyumlu. Kültür ve norm iddiası ölçülmemiş; u-mod'da kurum ya da norm çıkarımı yazar onayına bağlanır (M8).
- Güvenilirlik: Düşük-orta. Yalnız özet; ölçüm yok.

**13. OASIS (2024): milyon ajanlı sosyal ağ simülasyonu.**
- Kaynak: https://arxiv.org/abs/2411.11581
- Ne: X ve Reddit benzeri platformları taklit eder; "capable of modeling up to one million users" kapasitesi; ilgi tabanlı ve "hot score" öneri sistemleri; takip ve yorum eylemleri; bilgi yayılımı, grup kutuplaşması ve sürü etkisi. Ölçek büyüdükçe grup dinamikleri güçleniyor. Sayı, bellek/profil modeli ve gerçek davranışla doğrulama özette yok.
- Alıntı: "larger agent group scale leads to more enhanced group dynamics"
- u-mod'da: Ajan sayısı küçük olsa da kurum ya da grup varlıkları kalabalık bir kitle gibi davranırsa sürü riski doğar. M7'de karşı görüşlü karakter kontrolü ile izlenir.
- Güvenilirlik: Düşük. Kapasite iddiası; geçerlilik ve sayı yok.

**14. AI-Press (2024): haber taslağı ve kamuoyu tepkisi.**
- Kaynak: https://arxiv.org/abs/2410.07561
- Ne: Çok ajanlı "otomatik haber taslağı ve düzeltme" sistemi; geri bildirim, "demografik dağılımı dikkate alan" kamuoyu simülasyonu. Geri bildirimin taslağa dönüp dönmediği, kalite ve kamuoyu doğrulamasının yöntemi ve sayıları özette yok.
- Alıntı: "automated news drafting and polishing system"
- u-mod'da: M8'deki dünya bülteni için bir örnek; "haber kalitesi" iddiası kullanılmaz.
- Güvenilirlik: Düşük. Yalnız özet; sayı yok.

**15. Ashery ve ark. (2024): kendiliğinden konvansiyon ve grup önyargısı.**
- Kaynak: https://arxiv.org/abs/2410.08948
- Ne: Merkezi koordinatör olmadan LLM ajanlar ortak bir konvansiyonu "universally adopted social conventions" düzeyinde benimseyebiliyor. Grup düzeyi önyargı, hiçbir ajan bireysel olarak önyargılı değilken ortaya çıkabiliyor. Taahhütlü bir azınlık çoğunluğun konvansiyonunu değiştirebiliyor. Oyun, popülasyon büyüklüğü ve model özette yok.
- Alıntı: "even when agents exhibit no bias individually"
- u-mod'da: Kurum ve grup normları kendiliğinden çıkabilir ama kanona yazılmaz (M8). Taahhütlü azınlık bir karakter kalıbı olarak önerilebilir (M1).
- Güvenilirlik: Orta. Yalnız özet.

**16. Barrie ve Törnberg (2025): veri sızıntısı eleştirisi.**
- Kaynak: https://arxiv.org/abs/2505.23796
- Ne: Ashery ve ark.'nın bulgularının, modellerin ön-eğitimde karşılaştıkları konvansiyonları hatırlamasıyla açıklanabileceğini savunuyor; modellerin oyunun yapısını tanıyıp sonucunu geri çağırdığını öne sürüyor. Ek deney ve sayı özette yok.
- Alıntı: "the models simply reproduce conventions they already encountered during pre-training"
- u-mod'da: LLM'in "kendiliğinden" ürettiği hikâye kalıpları klişe olabilir. Yan karakter davranışlarında klişe denetimi ve yazar onayı gerekir (M8).
- Güvenilirlik: Orta. Tek eleştiri; yazarların yanıtı incelenmedi.

### C. Sürüklenme ve tutarlılık

**17. Li ve ark. (2024): persona sürüklenmesi.**
- Kaynak: https://arxiv.org/abs/2402.10962 (arXiv'de güncel başlık "Instruction (In)Stability in Language Model Dialogs"; önceki başlık "Persona Drift")
- Ne: LLaMA2-chat-70B ve GPT-3.5 ile sekiz tur içinde belirgin sapma. Dikkatin uzun konuşmada erken jetonlardan uzaklaşması olası açıklama olarak öne sürülüyor (tentatif). Kontrol yöntemi split-softmax, "lightweight method" olarak tanımlanıyor. Ölçüm: iki talimatlı sohbet botunun birbiriyle konuşması.
- Alıntı: "within eight rounds of conversations"
- u-mod'da: Sapma erken başlayabilir; yoklama her bölümde yapılmalı (M7). Split-softmax gibi iç dikkat müdahalesi yalnız kendi çalıştırdığınız açık model için mümkündür (çıkarım).
- Güvenilirlik: Orta. Yalnız özet; başlık değişmiş. "Eğitim gerektirmez" iddiası DOĞRULANAMADI.

**18. 2026 ön baskısı: yeniden hatırlatma ve davranışa özgü düzeltme.**
- Kaynak: https://arxiv.org/abs/2609.24532
- Ne: 1.200 konuşma (28 tur), 4 LLM, iki ADHD persona yoğunluğu. Sapma, persona tutarlılığında ilerleyici düşüş olarak ölçüldü. Yeniden enjeksiyon sapmayı %35–38, yansıtıcı hatırlatma %22–27, davranışa özgü talimat %87 azalttı. Hiçbiri sapmayı tamamen gidermedi. Uyarlanabilir zamanlama statik zamanlamadan üstün çıkmadı.
- Alıntı: "Monitoring therefore appears more useful for deciding what to correct than when to intervene."
- u-mod'da: M7'de zamanlama sabit (her bölüm ya da tur başı), içerik izleyicinin seçimiyle belirlenir.
- Güvenilirlik: Orta. Ön baskı; yalnız özet; öğrenci personaları; hakem olarak LLM kullanıldığı için döngüsellik riski.

**19. Uzun etkileşimde persona kalıcılığı.**
- Kaynak: https://arxiv.org/abs/2512.12775 (v2 özeti)
- Ne: 7 LLM ile 100'den fazla turluk diyaloglar. Persona sadakati, özellikle hedef odaklı konuşmalarda düşüyor; yanıtlar baseline'a yaklaşıyor. Başlangıçta persona'sız modeller persona'lı modelleri geçiyor (talimat izleme ile ödünleşim). Güvenlik boyutu ölçülmüş ama özette sonuç yok.
- Alıntı: "persona fidelity degrades over the course of dialogues, especially in goal-oriented conversations."
- u-mod'da: Pazarlık, tehdit ya da hedef yarışı içeren sahneler M7'de daha sık yoklanır; yan karakter hedef odaklı bir sahneye girdiğinde sapma riski artar.
- Güvenilirlik: Orta-düşük. Yalnız özet; sayı yok.

## u-mod'a önerilen mekanizmalar (en çok 8)

**M1. Karakter tohumu (röportaj şablonu).** [bulgular 9, 7, 15]
- Alanlar: değerler; korkular; alışkanlıklar; ilişkiler (yön ve duygu); kısa ve uzun vadeli hedefler; kırmızı çizgiler ("asla yapmaz"); reddetme durumları; tutarsızlık notları.
- Adım: Yazarın yanıtladığı ya da taslak olarak üretilen soru seti karakter kartına dönüşür. Her alan "kanon" ya da "taslak" olarak işaretlenir.
- Kural: Reddetme alanı zorunlu (aşırı uyum, bulgu 7). Ekonomik ya da strateji kararı kişilik tohumundan türetilmez; açık karar tablosu yazılır (bulgu 9).
- Başlangıç değeri (öneri): 30–40 soru.

**M2. Olay günlüğü ve çağrı paketi.** [bulgular 1, 2, 11, 7]
- Olay alanları: id; sahne zamanı; yer; tanıklar; içerik; önem (1–10, oluştururken bir kez); kaynak durumu (kanon, taslak, yazar onaylı).
- Bilgi kaydı (karakter başına): olay id; öğrenme zamanı; kaynak türü (gördü, duydu, söylendi).
- Geri çağırma: tazelik + önem + ilgi; her biri min-max ile ölçeklenir; başlangıçta eşit ağırlık; tazelik katsayısı sahne saatine göre kalibre edilir (bulgu 1).
- Çağrı paketi (her tur): sabit karakter kartı + verilen koşullar (sahne, rol, hedef) + bilgi kaydı dilimi + geri çağrılan olaylar + aktif kilitler (bulgu 11).

**M3. Yansıma kapısı.** [bulgular 3, 7]
- Tetik: Son olayların önem toplamı eşiği aşınca. Uygulamada 150 (bulgu 3); u-mod için birkaç bölümlük denemeyle kalibre edilir.
- Adım: Üç soru, her soru için geri çağırma, içgörüler.
- Kural: Her içgörü kaynak olay id'lerini taşır; kaynaksız içgörü reddedilir. Yansıma "yorum" statüsündedir; kanon olamaz.
- Denetim: İçgörünün öne sürdüğü her olgu kaynak olaylarda geçiyor mu? Geçmiyorsa "süsleme" bayrağı konur.

**M4. Gün planı ve tepki kararı (yalnız sıcak karakterler).** [bulgular 4, 6, 8]
- Adım: Gün planı 5–8 bloktan oluşur. Saatlik çözüm yalnız kesişmeye yakın karakterlerde yapılır.
- Tetik: Her yeni gözlemde "sürdür" ya da "tepki ver" kararı. Tepki planı o andan yeniden üretir; karar gerekçesi kaydedilir.
- Kural: Tepki bir kanon sahnesini ya da büyük bir sonucu etkiliyorsa yazara sorulur (M6). Bir kesişmeye dokunuyorsa M8 listesine aday olur.

**M5. Dünya defteri, bilgi filtresi ve kilitler (GM katmanı).** [bulgular 10, 6, 7, 9]
- Alanlar: dünya defteri (gerçekte olanlar; para, ilişki, konum, kurum durumu); bilgi kayıtları (M2); kilit listesi (yazarın yazdığı sahneler ve yasak sonuçlar).
- Kurallar:
  - (a) Yalnız orkestratör bilgi kaydına yazar; karakter bir olayı yalnız tanık olduysa ya da duyduysa öğrenir.
  - (b) Her eylem fizibilite denetiminden geçer (konum, zaman, para); geçersiz eylem yeniden denenir ya da atlanır.
  - (c) Eylem bir kilide çarparsa durdurulur ve yazara sorulur.
  - (d) Eylem metninde bilgi kaydında olmayan bir olgu geçiyorsa "bilgi sızıntısı" bayrağı konur.

**M6. Üç katman ve karar kuralları.** [bulgular 8, 10]
- Katmanlar: Sıcak (plan, yansıma, konuşma; günlük). Ilık (haftalık gün-düzeyi plan; yansıma yok). Soğuk (kural tabanlı sayaçlar; LLM çağrısı yok).
- Terfi: Bir hattın yeri, zamanı ya da kişisi ana hikâyenin mevcut sahnesiyle kesişirse ya da bilgi kaydı değişirse hat yükseltilir.
- Donma: Belirlenen süre boyunca (öneri: üç bölüm) yeni olay yoksa Ilık'a, sonra Soğuk'a iner.
- Yazara sor (her zaman): kilit ihlali; büyük sonuç (ölüm, ihanet, kurum kuruluşu, yer değişikliği); iki ardışık yoklama başarısızlığı; kesişme adayının onayı.
- Maliyet kuralı: Sıcak karakter sayısı sınırlanır; çağrılar olay tetiklidir (bulgu 8).

**M7. Sürüklenme yoklaması.** [bulgular 17, 18, 19, 9, 7]
- Adım: Her karakter için sabit bir yoklama seti (öneri: 15–20 soru; kırmızı çizgiler, tercihler, konuşma tarzı). Kontrol noktası: her bölüm sonu (öneri). Yanıtlar kartla bir hakem modelce karşılaştırılır.
- Kalibrasyon: Aynı set bağımsız ikinci bir koşumla çalıştırılır; bu gürültü tabanıdır. Sapma bu tabana göre raporlanır (bulgu 9'un test-tekrar normalizasyonu fikri).
- Düzeltme: Her tur başında sabit hatırlatma (zamanlama statik; bulgu 18) ve izleyicinin seçtiği davranışa özgü talimat (bulgu 18: %87).
- Ek göstergeler: Reddetme alanı olan karakterde "hayır" oranı; hedef odaklı sahnelerde sapma sıklığı (bulgu 19).
- Uyarı: LLM hakemi döngüsel ölçebilir (bulgu 18); hakem ve üretici ayrı koşumlarda çalışmalı.

**M8. Bülten ve kesişme adayı çıkarma.** [bulgular 6, 13, 14, 15, 16]
- Adım: Her tur sonunda iki çıktı üretilir.
  - Dünya bülteni: Yalnız kamuya açık olaylar (tanık sayısı eşiğini geçen); her madde olay id'sine bağlı ve "taslak" işaretli.
  - Kesişme adayları: Aynı yer ve zaman penceresi, ortak kişi ya da bilgi çakışması; her aday skorlanır ve yazara sunulur.
- Kural: Kendiliğinden çıkan grup normu ya da kurum kanona yazılmaz; yazar onayı beklenir. Taahhütlü azınlık kalıbı yalnız bir kanca olarak önerilir.

## Doğrulanamayanlar
- Split-softmax'ın iç mekanizması ve eğitim gerektirmediği iddiası: özetlerde yok (17). DOĞRULANAMADI.
- Project Sid'in basında geçen ayrıntıları (vergi, para birimi, rahip-tüccar): yalnız arama özetleri; makalenin tam metni açılmadı (12). DOĞRULANAMADI.
- Park 2023: ekler ve bölüm 8.3 sonrası okunmadı; ablasyon tablosunun satır etiketleri özetleyiciden (5). Kısmen doğrulandı.
- Concordia: ekler (A.2–A.8) ve olası değerlendirme bölümleri okunmadı (10).
- AI-Press: haber kalitesi ve kamuoyu doğrulamasının sayıları özette yok (14).
- OASIS: gerçek platform davranışıyla doğrulama özette yok (13).
- Ashery ve ark.: oyun tanımı, popülasyon büyüklüğü ve model adı özette yok (15).
- Park 2024 v4: ırk ve ideoloji gruplarında doğruluk farkı için sayı bulunamadı (9). NOT FOUND.
- Haber üreten tarihsel kasaba simülasyonları: bu aramada kaynak bulunamadı; kullanılmadı.
- Maliyet: Park 2024, Concordia, Li 2024 (17), 2026 (18), AI-Press (14) ve OASIS (13) için dolar, token ya da çağrı sayısı yok. NOT FOUND.

## Zayıf, çelişkili ya da sınırlı iddialar
- **Park 2024, iki sürüm, iki ölçüt:** v1 "%85" (test-tekrara göre bağıl); v4 "%72,8" (test-tekrar %79,5; demografi %60,4). v4'te oran yaklaşık %92 (72,8 / 79,5); bu bizim hesabımız, makalenin iddiası değil. Başlık da değişmiş. Raporda iki ölçüt ayrı tutuldu.
- **Park 2023:** Ölçü inanılırlıktır, doğruluk değil. Tam bileşensiz koşul ile insan işçiler arasında anlamlı fark yok; "insan düzeyi" kıyası bu ölçekte zayıf. Kanıt küçük: 25 ajan, iki gün, tek yayılım zinciri.
- **Li 2024 (17):** arXiv başlığı değişmiş; özet modelleri LLaMA2-chat-70B ve GPT-3.5. Bir arama özeti split-softmax'ın eğitim gerektirmediğini yazıyor; bu özette geçmiyor.
- **CoSER (11):** v1 başlığı ("Coordinating LLM-Based Persona Simulation of Established Roles") ile v3 başlığı farklı; GPT-4o ile denklik yazar iddiası; bağımsız değerlendirme yok.
- **Ashery (15) ve Barrie-Törnberg (16):** Kendiliğinden konvansiyon mu, veri sızıntısı mı? Tartışmalı; u-mod'da kanıt gücü düşük sayılmalı.
- **Project Sid (12):** Ajan sayısı "10–1000+" aralığı; basında "1.000"; ayrıntılar doğrulanmadı.
- **OASIS (13):** "Milyon kullanıcı" bir kapasite iddiası; geçerlilik değil.
- **2026 çalışması (18):** Ön baskı; ADHD öğrenci personaları; LLM hakemli ölçüm; alan genellemesi belirsiz.
- **Concordia (10):** Değerlendirme yok; kavramsal kaynak.
- **Genel:** Bu raporun sayıları WebFetch özetinden alındı. Karar vermeden önce kritik sayılar (bulgu 5, 9, 11, 18) tam metinle teyit edilmeli.
