# 05 - LLM ile uzun hikâye üretiminde tutarlılık

Alan: u05-llm-tutarlilik · Tarih: 2026-11-19 · Dil: Türkçe

## Kapsam

- Ne: LLM ile uzun hikâye üretiminde tutarlılığı koruyan yöntemler: plan-taslak-sıralama-düzeltme döngüleri (Re3, DOC), hiyerarşik üretim (Dramatron), açık durum takibi, bellek yapıları ve tutarlılık ölçütleri.
- Nasıl: 11 kaynak arXiv/ACL özet sayfasından doğrulandı; Re3, DOC, Agents' Room ve Dramatron tam metin PDF'lerinden kısmi okuma yapıldı. Okunamayan ayrıntılar "DOĞRULANAMADI" olarak işaretli.
- Yanıt: Ölçülerek işe yaradığı gösterilen yöntemler DOC ve Re3 (insan değerlendirmesinde olay örgüsü tutarlılığında DOC için %22,5, Re3 için mutlak %14 artış) ile Agents' Room'dur (uzman tercihi; sayılar doğrulanamadı). Ölçümler modelin durumu kendiliğinden takip edemediğini gösteriyor; bu yüzden açık durum kaydı gerekli (Entity Tracking, NoCha, FABLES). Yalnızca öz-raporlu olan SCORE sonuçları düşük güvenle okunmalı.

## Bulgular

1. **Re3 (Recursive Reprompting and Revision)**, EMNLP 2022
   - Kaynak: https://arxiv.org/abs/2210.06774 · tam metin: https://arxiv.org/pdf/2210.06774
   - Ne: Dört aşama: (a) planlayıcı yapılandırılmış üst düzey plan üretir; (b) taslakçı her turda planı ve önceki metni istemlere ekleyerek pasaj yazar; (c) sıralayıcı adayları olay tutarlılığı ve öncül uyumu açısından sıralar; (d) düzeltici seçilen adayı uzun menzilli olgusal tutarlılık için düzenler. Tam metindeki şema (Plan, Draft, Rerank/Rewrite, Edit) bu yapıyı doğruluyor.
   - Alıntı (özet): "reranking different continuations for plot coherence and premise relevance"
   - Sonuç: İnsan değerlendirmesinde, aynı modelle düz üretime göre tutarlı genel olay örgüsünde mutlak %14 artış; öncül uyumunda gövdede "up to 20%". Otomatik metrik sonuçları doğrulanamadı.
   - u-mod'da: Tur içinde "aday-sırala-düzelt" adımı (mekanizma 2).
   - Güvenilirlik: Yüksek-orta. Hakemli; değerlendirici sayısı ve ölçek ayrıntısı okunamadı.

2. **DOC (Detailed Outline Control)**, ACL 2023
   - Kaynak: https://arxiv.org/abs/2212.10077 · tam metin: https://arxiv.org/pdf/2212.10077
   - Ne: İki bileşen. Ayrıntılı taslakçı (outliner) kısa ana planı hiyerarşik, ayrıntılı bir plana genişletir; karakter ve mekân algılama adımı içerir (tam metin 3.2.2). Ayrıntılı kontrolör (controller) pasajları bu plana hizalar; her adımda pasajları yeniden sıralar ve olay adaylarını süzer (tam metin). Alıntı (özet): "DOC consists of two complementary components: a detailed outliner and a detailed controller."
   - Sonuç: Re3 tabanına karşı ikili insan değerlendirmesinde olay örgüsü tutarlılığında mutlak %22,5, plan uyumunda %28,2, ilginçlikte %20,7 kazanım. Etkileşimli kontrol edilebilirlikte de daha iyi (sayı yok). Maliyet: üretim 2-3 kat uzun (tam metin).
   - u-mod'da: İki katmanlı tur planı (mekanizma 1).
   - Güvenilirlik: Yüksek-orta. Hakemli; seviye sayısı ve kontrolör ölçütleri doğrulanamadı.

3. **Dramatron**, arXiv 2022 (CHI 2023 yayını bu turda doğrulanamadı)
   - Kaynak: https://arxiv.org/abs/2209.14958 · tam metin: https://arxiv.org/pdf/2209.14958
   - Ne: Logline'dan başlayıp başlık, karakterler, hikâye adımları (beats), mekân açıklamaları ve diyalog üreten hiyerarşik zincir. Özet: "By building structural context via prompt chaining." Tam metin: "For narrative coherence, we leverage plot beats in our hierarchical generation."
   - Ölçüm: 15 tiyatro ve film profesyoneliyle ortak yazım ve görüşme (özet). Anketler öz-bildirim: "I enjoyed writing with the AI system" maddesine %77 katıldı. Yapısal sorunlar ve aksaklıklar için ayrı bölümler var (5.4, 5.6); içerikleri okunamadı.
   - u-mod'da: Tur planının alan sırası: logline, olay adımları, sahne notu (mekanizma 1'in alt yapısı).
   - Güvenilirlik: Orta-düşük. Tutarlılık için nicel ölçüm yok; anketler öz-bildirim.

4. **PlotMachines**, EMNLP 2020
   - Kaynak: https://arxiv.org/abs/2004.14967
   - Ne: Anahtar noktalardan (outline) hikâye üretir; model yazarken olay örgüsünün dinamik durumunu izlemek zorundadır (özet).
   - Sonuç: GPT-2 ve Grover gibi düz modeller anahtar noktalara yeterince uymuyor; durum takibi hikâyeleri daha sıkı kılıyor (nitel). Nicel sonuç ve durum takibinin nasıl kaydedildiği özette yok.
   - u-mod'da: Planlanan olaylar için "işlendi / işlenmedi" alanı (mekanizma 3).
   - Güvenilirlik: Orta. Hakemli; ayrıntılar doğrulanmadı.

5. **Agents' Room**, ICLR 2025
   - Kaynak: https://arxiv.org/abs/2410.02603 · tam metin: https://arxiv.org/pdf/2410.02603
   - Ne: Anlatı teorisinden esinlenen özelleşmiş ajanlar (tam metin 4.1), sentetik veriyle ajan eğitimi (4.2), "Tell Me A Story" veri seti (4.3). Ajanlar ortak bir "scratchpad" üzerinden durum paylaşır (tam metin). Alıntı (özet): "decomposes narrative writing into subtasks tackled by specialized agents"
   - Ölçüm: İnsan (6.1), otomatik (6.2) ve LLM değerlendirici. Tam metne göre LLM değerlendiricisi iki çalıştırmada aynı hikâyeyi %90,2 oranında tercih ediyor. Bu tekrarlanabilirlik, geçerlilik kanıtı değil.
   - Sonuç: Uzman değerlendiriciler ajanlı hikâyeleri temel sistemlere tercih etmiş (özet). Tercih oranları, taban modeller ve veri seti boyutu doğrulanamadı.
   - u-mod'da: Rol ayrımı ve ortak kâğıt (mekanizma 7).
   - Güvenilirlik: Orta-yüksek. Hakemli; sayısal kazanım doğrulanamadı.

6. **Entity Tracking in Language Models**, ACL 2023
   - Kaynak: https://arxiv.org/abs/2305.02363 · ACL: https://aclanthology.org/2023.acl-long.213
   - Ne: Başlangıç durumu ve işlem dizisinden varlığın son durumunu çıkarma testi. Alıntı (özet): "only GPT-3.5 models, which have been pretrained on large amounts of code, exhibit this ability."
   - Sonuç: Yalnızca kod ağırlıklı ön eğitimli GPT-3.5 modelleri başarılı; yalnız metinle ön eğitim yetmiyor. İnce ayarlı T5 zor bölünmelerde düşüyor ama önemsiz olmayan takip yapıyor. Sayısal sonuç özette yok.
   - u-mod'da: Durum takibini modele bırakmama; açık alan kaydı zorunlu (mekanizma 3).
   - Güvenilirlik: Yüksek (ACL 2023), ama 2023 modelleriyle; güncel modellerde yeniden sınanmalı.

7. **NoCha (One Thousand and One Pairs)**, EMNLP 2024
   - Kaynak: https://arxiv.org/abs/2406.16264
   - Ne: 67 yeni İngilizce kurgu kitabı üzerinde 1.001 doğru-yanlış iddia çifti; iddiaları kitabı okumuş insanlar yazdı. Alıntı (özet): "while human readers easily perform this task, it is enormously challenging for all ten long-context LLMs that we evaluate"
   - Sonuç: Açık ağırlıklı modeller rastgele tahmini geçemiyor; en iyi GPT-4o %55,8. Tek cümlelik aramada modeller daha iyi, bütün-kitap akıl yürütmede kötü. Etiket doğru olsa bile model açıklamaları çoğu zaman yanlış. Spekülatif kurguda ve yoğun dünya kurgusunda düşüş belirgin.
   - u-mod'da: Bütün-metin tutarlılık denetimi güvenilmez; denetim bölüm bölüm ve kayıtlı kaynaklı yapılır (mekanizma 5, 8).
   - Güvenilirlik: Yüksek (EMNLP 2024; özet doğrulandı).

8. **FABLES (Evaluating faithfulness and content selection in book-length summarization)**, COLM 2024
   - Kaynak: https://arxiv.org/abs/2404.01261
   - Ne: 26 kitap üzerinde LLM özetlerinden çıkarılan 3.158 iddianın insan olgusallık etiketleri. Alıntı (özet): "most unfaithful claims relate to events and character states"
   - Sonuç: Yanlış iddiaların çoğu olay ve karakter durumlarıyla ilgili; doğrulama kitabın geneline yayılmış akıl yürütme gerektiriyor. LLM tabanlı otomatik hakemler insan etiketleriyle güçlü uyum göstermiyor, özellikle yanlış iddialarda. Özetler kitabın sonuna yakın olaylara fazla ağırlık veriyor.
   - u-mod'da: İddia düzeyi denetim (mekanizma 5); otomatik hakeme körü körüne güvenmeme (mekanizma 8).
   - Güvenilirlik: Yüksek (COLM 2024; özet doğrulandı; tablolar okunmadı).

9. **BooookScore**, ICLR 2024 (sayfadaki camera-ready notu; kabul sayfada doğrulanmadı)
   - Kaynak: https://arxiv.org/abs/2310.00785
   - Ne: 100 yeni kitabın GPT-4 özetleri üzerinde 1.193 insan etiketi; sekiz yaygın tutarlılık hatası türü. Alıntı (özet): "identify eight common types of coherence errors made by LLMs"
   - Ölçüt: Otomatik skor, hatasız cümlelerin oranı (her cümle için hata türü var mı). İnsan uyumu "yüksek" denmiş; sayı yok.
   - Yöntem: Hiyerarşik birleştirme ve kaydırmalı (rolling) güncelleme karşılaştırılmış; kaydırmalı yöntem daha düşük skor alıyor ama daha fazla ayrıntı tutuyor (özet).
   - u-mod'da: Cümle düzeyi hata oranı (mekanizma 6); kaydırmalı özet (mekanizma 4).
   - Güvenilirlik: Orta-yüksek; uyum değeri doğrulanamadı.

10. **Özyinelemeli özet belleği (Recursively Summarizing Enables Long-Term Dialogue Memory)**, Neurocomputing (kabul; yıl doğrulanamadı)
    - Kaynak: https://arxiv.org/abs/2308.15022
    - Ne: LLM kısa bir diyalog parçasını belleğe yazar; her sonraki parça önceki bellekle birlikte yeni bellek üretir; yanıtlar en son belleğe dayanır. Alıntı (özet): "recursively produce new memory using previous memory and following contexts"
    - Sonuç: Uzun diyaloglarda daha tutarlı yanıtlar bildirilmiş. Sayısal sonuç, kıyas ve veri seti özette yok. Kodun yayımlandığı belirtilmiş, bağlantı bulunamadı.
    - u-mod'da: Kayan özet alanı (mekanizma 4). Alan uyarısı: diyalog, hikâye değil.
    - Güvenilirlik: Düşük-orta.

11. **SCORE (Story Coherence and Retrieval Enhancement for AI Narratives)**, ön baskı
    - Kaynak: https://arxiv.org/abs/2503.23512 · v1 özeti: https://arxiv.org/abs/2503.23512v1
    - Ne: Üç bileşen: dinamik durum takibi (nesne ve karakterler, sembolik mantıkla), hiyerarşik bölüm özetleri, geri getirme (TF-IDF ve kosinüs benzerliği).
    - Sonuç: Yalnızca v1 özetinde: tutarlılıkta %23,6 (NCI-2.0 benchmark), duygusal tutarlılıkta %89,7 (EASM metriği), halüsinasyonlarda %41,8 az; kıyas "baseline GPT models". Son sürüm özetinde bu sayılar yok; NCI-2.0 ve EASM tanımsız.
    - u-mod'da: Hipotez olarak mekanizma 3 ve 4'e geri getirme eklentisi; kanıt değil.
    - Güvenilirlik: Düşük: ön baskı, öz-raporlu, sürüm çelişkisi.

## u-mod'a önerilen mekanizmalar

1. **Tur planı (iki katman)** [DOC, Re3, Dramatron]
   - Adım 1 (kaba plan): Her yan hat için hedef, tetikleyici koşul ve olası sonuç alanı.
   - Adım 2 (ayrıntılı plan): Olay sırası, katılanlar, mekân, zorunlu sonuçlar ve tur kapanınca kontrol edilecek kabul maddeleri.
   - Kural: Ayrıntılı plan olmadan taslak yazılmaz. DOC'ta üretim 2-3 kat uzun olduğu için tur başına işlem bütçesi konur.

2. **Aday-sırala-düzelt** [Re3]
   - Adım 1: Bir yan hat olayı için 3-5 aday taslak üret (öneri; Re3'ün örnek metninde on aday görülüyor, genel sayı doğrulanmadı).
   - Adım 2: Adayları iki ölçütle sırala: durum kaydıyla çelişmeme ve yan hattın ajandasıyla uyum.
   - Adım 3: En iyi adayı kayıtlı olgularla karşılaştırıp düzelt; sonucu "taslak" işaretiyle yazara sun.

3. **Açık durum kaydı (varlık başına alanlar)** [Entity Tracking, NoCha, FABLES, PlotMachines]
   - Alanlar: varlık adı; durum alanı (konum, bilgi, ilişki, sahip olunan eşya vb.); değer; son değişim turu; kanıt (kaynak bölüm ve cümle); kaynak türü (yazar metni | u-mod taslağı).
   - Kural: Model durumu hatırlamaz; her turda kayıttan okur. Güncelleme yalnızca değişen alanlara yapılır. Planlanan olaylar için "işlendi / işlenmedi" alanı tutulur.

4. **Kayan özet + olgu kaydı çifti** [özyinelemeli bellek, BooookScore kaydırmalı güncelleme]
   - Adım: Her turun sonunda yeni özet = önceki özet + bu turun yeni olayları; sabit uzunluk sınırı (değer bu araştırmadan çıkmadı).
   - Kural: Özet olgu kaydının yerine geçmez; ikisi birlikte tutulur. Kanıt diyalog alanından geldiği için hikâyedeki etkisi ayrıca denenmeli.

5. **İddia düzeyi denetim** [FABLES, NoCha]
   - Adım 1: Her tur özetini kısa iddialara böl: kim ne yaptı, kimin durumu ne, kim kimle ilişkili.
   - Adım 2: Her iddiayı kayıttaki kanıta bağla; bağlanamayanlar "kanıtsız taslak" olarak işaretlenir.
   - Öncelik: Olay ve karakter durumu iddiaları (FABLES'te en sık hata). Uzak bölümlerle çelişki ayrı bir adımda denetlenir (NoCha: bütün-kitap akıl yürütme en zor).

6. **Hata oranı izleme** [BooookScore]
   - Alan: Tur başına "hatalı cümle / toplam cümle" oranı. Hatalar yalnızca mekanizma 5'in çıktısından sayılır. BooookScore'un sekiz hata türünün adları bu turda alınamadığı için u-mod kendi sınıf listesini tanımlar.
   - Kullanım: Eğilim izleme. Tek başına kalite göstergesi değildir.

7. **Ajan rolleri ve ortak kâğıt** [Agents' Room]
   - Roller: planlayıcı (çatışma, karakter, mekân alanlarını doldurur); taslakçı (tur taslağını yazar); denetleyici (mekanizma 3 ve 5 kontrollerini uygular); orkestra (ortak kâğıdı, yani durum kaydını yönetir).
   - Kural: Her rolün ayrı istemi vardır; ortak kâğıt tek doğruluk kaynağıdır. Rol sayısının en iyi değer olduğu doğrulanmadı.

8. **Kapı kuralı: dur ve sor** [FABLES, NoCha, SCORE]
   - Adım 1: Denetim (mekanizma 5 veya 6) çelişki bulursa yan hat o turda donar ve yazara sorulur.
   - Adım 2: Otomatik değerlendiricinin "geçti" kararı tek başına kabul edilmez; her ölçüt küçük bir insan örneklemiyle kalibre edilir (örneklem büyüklüğü belirlenmedi).
   - Adım 3: Yazarın metnine dokunulmaz; üretilen her olgu "taslak" işaretiyle tutulur; büyük kararlar yazara önerilir.

## Doğrulanamayanlar

- Agents' Room: insan tercih oranları, taban modeller ve veri seti boyutu (arama özetindeki "~350 hikâye" dahil).
- Re3: değerlendirici ve hikâye sayısı, sıralama puanlama yöntemi, düzeltme ayrıntısı, otomatik metrik sonuçları.
- DOC: outliner seviye sayısı, kontrolör ölçütleri, değerlendirme ölçeği.
- Dramatron: CHI 2023 yayını (yalnızca arXiv'de görüldü), aşama sırasının tam listesi, "Glitches" ve "Structural Problems" bölümleri.
- SCORE: NCI-2.0 ve EASM tanımları; v1 sayılarının yöntemi.
- BooookScore: insan uyum değeri ve sekiz hata türünün adları.
- NoCha: rastgele taban ve insan başarı yüzdesi.
- Özyinelemeli özet: sayısal sonuçlar, kıyaslar, kod bağlantısı.
- PlotMachines: nicel sonuçlar ve durum takibinin mekanizması.
- Aranmadı (bu tur kapsam dışı): MemGPT tipi bellek mimarileri, LongWriter tipi uzun üretim, öz-eleştiri döngüleri (Self-Refine tipi), "lost in the middle" tipi bağlam konumu sorunları. Sonraki turda aranmalı.

## Zayıf ve çelişkili iddialar

- SCORE: v1 özetinde sayılar var, son sürüm özetinde yok; ön baskı, öz-raporlu. Hipotez olarak kullanılmalı.
- Re3 öncül uyumu: özet "by 20%" diyor, gövde "up to 20%"; mutlak mı bağıl mı olduğu belirsiz.
- DOC ve Re3 kazanımları ikili (pairwise) karşılaştırmadan geliyor; yüzdeler tercih farkı, skor değil.
- Dramatron anketleri öz-bildirim; tutarlılık ölçümü değil.
- Agents' Room'un %90,2'si LLM değerlendiricisinin kendi kendine tutarlılığı; geçerlilik kanıtı değil.
- BooookScore'un "yüksek uyum" iddiası (LLM tabanlı bir ölçüt) ile FABLES'in "otomatik hakemler güçlü uyum göstermiyor" bulgusu gerilim içinde. Görevler farklı (özet tutarlılığı ve olgusallık), ama otomatik ölçütlere körü körüne güvenilmemeli.
- Entity Tracking bulgusu 2023 modelleriyle; güncel modellerde yeniden sınanmalı.
- Özyinelemeli özet ve SCORE'un test alanı diyalog ve genel hikâye; roman tutarlılığına aktarılabilirliği kanıtlanmadı.
- Arama özetinde NoCha'nın model sayısı "on" ve "on bir" olarak çelişiyordu; özet sayfası "on" diyor, o kullanıldı.

## Süreç notları

- Görev başında yanlışlıkla salt okunur bir `git status` ve `git log` çalıştırıldı; GOREV kural 3 git komutunu yasaklıyor. Depoda hiçbir değişiklik yapılmadı.
- Tam metin PDF'ler /tmp/u05-pdf/ altına kopyalandı, depoya konmadı; pdftotext -layout ile okundu.
- Koordinatör talimatıyla yeni arama ve PDF okuması durduruldu; bu yüzden ayrıntılı tablolar (Agents' Room tercihleri, Re3 değerlendirme sayıları, DOC seviye yapısı) okunamadı.
- Ekip sohbeti: u05-llm-tutarlilik için claim yapıldı, her URL seen ile kaydedildi, ara bulgu say ile paylaşıldı.
- Aramalar genel İngilizce terimlerle yapıldı; proje ya da hikâye ayrıntısı kullanılmadı.
