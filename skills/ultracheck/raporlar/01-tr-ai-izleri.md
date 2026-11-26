# 01 Türkçe yapay zekâ metni izleri

**Kapsam:** Türkçe YZ metninin insan metninden ölçülebilir farkları (sözcük çeşitliliği, ek, cümle yapısı), Türkçe tespit çalışmaları ve YZ kalıpları. Önce TDK sitelerinde arandı (sonuç yok), sonra DergiPark ve arXiv'de. Bu raporda yalnızca açılıp doğrulanan ya da açıkça işaretlenen kaynaklar var.
**Bütçe:** yaklaşık 25 araç çağrısı. Yeniden başlatma sonrası ek 10 çağrı kullanıldı.

## Bulgular

**1. Bergin & Atasoy (2026): ChatGPT-4o mini ile öğrenci metinlerinin söz varlığı karşılaştırması**
- **Ne:** 147 Türkçe öğretmenliği öğrencisi metni ile aynı 10 konuda ChatGPT-4o mini metni (uzunluk belirtilmeden) karşılaştırıldı. Atasoy (2015) ölçütleri kullanıldı.
- **Kaynak:** Bergin, B. & Atasoy, A. (2026). "Söz varlığı unsurları bağlamında yapay zekâ ve öğrenci metinleri üzerine bir inceleme." *Uluslararası Türkçe Öğretimi Araştırmaları Dergisi*, 6(2), 415-438. https://dergipark.org.tr/tr/download/article-file/5339956 (DOI: 10.5281/zenodo.21986509)
- **Alıntı:** Özet: "yapay zekânın insanın kendine özgü çeşitliliğini henüz yakalayamadığı" (Türkçe, özet).
- **Sayılar (PDF'ten doğrulandı):** YZ 34.235 toplam / 2.365 farklı kelime; öğrenci 23.306 / 3.800. Oran (farklı/toplam): YZ %6,908; öğrenci %16,304. Deyim: YZ 1.038 toplam / 107 farklı; öğrenci 559 / 205. Atasözü: YZ 0, öğrenci 1. İkileme: YZ 68 / 10; öğrenci 53 / 29.
- **Kullanım:** Romanda kullanılacak bir ölçü olarak doğrudan kullanılamaz (aşağıdaki uyarıya bakın). Deyim ve ikileme dağılımı ise YZ'nin "tekrarlayan kalıp" üretimine dair somut bir gösterge olarak not edilebilir.
- **Güvenilirlik:** Orta. Veri ve sayılar PDF'te doğrulandı. Ölçüt bir sorun taşıyor: Oran, tüm metinler birleşik (havuzlanmış) hesaplanıyor. YZ metinlerinin toplamı öğrenci metinlerinden yaklaşık %47 uzun (metin başına ortalama yaklaşık 233 ve 159 belirteç). Havuzlanmış tür-belirteç oranı uzunlukla düştüğü için bu fark kısmen uzunluktan kaynaklanıyor olabilir. Yazarlar bunu tartışmıyor. Ayrıca YZ modelinin tek bir sürümü (4o mini) kullanıldı ve tür yalnızca bilgilendirici metinler.

**2. Şimşek & Özdemir (2026): YD olarak Türkçe öğrenici metinleri ile ChatGPT metinlerinin karşılaştırması**
- **Ne:** A2 ve B2 düzeyinde 72 öğrenici metni ile 6 ChatGPT metni (altı konu) karşılaştırıldı; karmaşıklık, doğruluk, akıcılık ve işlevsel yeterlik ölçütleri kullanıldı.
- **Kaynak:** Şimşek, P. H. & Özdemir, S. (2026). *Dil Eğitimi ve Araştırmaları Dergisi* 12(1). DOI: 10.31464/jlere.1858803. https://dergipark.org.tr/tr/pub/jlere/article/1858803
- **Alıntı:** Makale özeti (Türkçe, en fazla 25 kelime): "ChatGPT, cümle ve sözcük düzeyinde öğrenicilerden daha doğru metinler üretmiştir."
- **Sayılar:** Yalnızca farkların yönü doğrulandı. ChatGPT'de sözcük çeşitliliği ortalaması ve karmaşık cümle oranı daha yüksek; öğrenicilerde anlamlı sözcük oranı daha yüksek. Sayısal değer yok.
- **Kullanım:** Yalnızca yön olarak not edilir. Bu çalışmanın ChatGPT örneği 6 metin, yani istatistiksel dayanağı zayıf.
- **Güvenilirlik:** Düşük. Sayı yok, örneklem çok küçük (ChatGPT tarafında 6 metin).

**3. Tunç (2026): ChatGPT öyküleri ile Sait Faik / Ferit Edgü taklitlerinin ayırt edilmesi**
- **Ne:** 160 Anadolu Üniversitesi öğrencisi, Sait Faik ve Ferit Edgü tarzında ChatGPT öyküleri ile gerçek öyküleri ayırt etmeye çalıştı.
- **Kaynak:** Tunç, G. (2026). "Öykü yazarı olarak yapay zekâ: ChatGPT örneğinde yapay zekânın öykü yazma kabiliyeti." *Folklor/Edebiyat* 32(126), 459-482. DOI: 10.22559/folklor.5014. https://dergipark.org.tr/tr/pub/fe/article/1940799
- **Alıntı:** Özet, en fazla 25 kelime: "…onların tarzında yazan yapay zekânın metninden ayırt edememeleridir."
- **Sayılar:** Sayfada yüzde, doğru/yanlış oranı ya da istatistik değeri yok. Yalnızca ki-kare testinin anlamlılığı belirtiliyor.
- **Kullanım:** Taklit öykünün insan algısında ayırt edilemez çıkabildiği, bu nedenle insan değerlendirmesinin "YZ ayırt edilemez" sonucuna güvenilmemesi gerektiği yönünde bir not.
- **Güvenilirlik:** Düşük-orta. Metinler sayfada açıkça eşleştirilmemiş ("Öykü 1, 4, 5, 6" hangileri YZ, belirtilmemiş).

**4. Kayabas ve ark. (2025): Türkçe ChatGPT metinlerinin LSTM ile tespiti (Applied Sciences)**
- **Ne:** Türkçe ChatGPT metinlerini insan metinlerinden ayırmak için LSTM ağları denendi (arama özetinden).
- **Kaynak:** Kayabas ve ark. (2025), *Applied Sciences* 15(10), 5541. https://www.mdpi.com/2076-3417/15/10/5541
- **Durum:** **DOĞRULANAMADI.** MDPI sayfası 403 verdi. Arama özeti yalnızca yöntemi ve Türkçe'nin düşük kaynaklı dil olarak gösterildiğini söylüyor. Doğruluk değeri ve veri büyüklüğü bilinmiyor.
- **Güvenilirlik:** Doğrulanamadı. Romana uygulanabilir bulgu yok.

**5. Dervişcemaloğlu & Yılmaz (2025): ChatGPT-4 ile Türkçe kurgu (Söylem 10(1))**
- **Ne (özet, önceki tur notu):** 20 Türkçe kurgu metni (188-390 kelime), anlatımın ağırlıklı olarak özetleyici olduğu, doğrudan konuşma ve düşüncenin neredeyse hiç olmadığı, 20 metnin 13'ünün pozitif/didaktik kapanışa sahip olduğu, mekânların genel (kasaba, ofis, orman) olduğu.
- **Kaynak:** Dervişcemaloğlu & Yılmaz (2025), *Söylem* 10(1). https://dergipark.org.tr/tr/download/article-file/4484137
- **Durum:** **DOĞRULANAMADI.** PDF metni okunamadı (sıkıştırılmış ikili veri). Yalnızca üst bilgi alındı. Sayılar önceki turdan geliyor, bu turda kontrol edilemedi.
- **Güvenilirlik:** Doğrulanamadı. Kullanılacaksa yalnızca metnin ham PDF'i pdftotext ile açılıp yeniden kontrol edildikten sonra.

**6. arXiv 2511.21744: istatistiksel özelliklerle YZ metni tespiti (İngilizce, Türkçe'ye özgü değil)**
- **Durum:** İçerik okunamadı, yalnızca metadata alındı. Arama özeti, 31 stilometrik özellikle Random Forest ile %98'e varan doğruluk bildiriyor. Türkçe değil, bu nedenle bu raporda bulgu olarak kullanılmıyor.

## SKILL'e önerilen kurallar
1. Türkçe YZ metni ölçümünde sözcük çeşitliliği tek başına kullanılmaz; her metin için ayrı hesaplanıp uzunlukla birlikte raporlanır (Bergin & Atasoy 1, uzunluk uyarısı).
2. "YZ metni ayırt edilemiyor" sonucu, insan değerlendirmesinde tek başına kanıt sayılmaz (Tunç 3).
3. Deyim ve ikileme sıklığı, YZ kalıplarının olası göstergesi olarak not edilir ama sayıya dönüştürülmeden kullanılmaz (Bergin & Atasoy 1).
4. Taklit yazar metinleri, ayırt edilemezlik iddiası için değil, tarz taklidinin yüzeysel kaldığını göstermek için değerlendirilir (Tunç 3).

## Doğrulanamayanlar
- Kayabas ve ark. 2025 (MDPI 403): doğruluk ve veri ölçüleri yok.
- Dervişcemaloğlu & Yılmaz 2025: PDF okunamadı, sayılar yeniden kontrol edilmedi.
- Doğan (2014) sözcük çeşitliliği %8,185 (yalnızca Bergin & Atasoy'un atfından bilinir, kaynağı açılmadı).
- Bergin & Atasoy'un atıf yaptığı Coşar (2025) %32,9 / %48 değerleri (atıf yoluyla, açılmadı).

## Çelişkili ya da zayıf çıkanlar
- **"YZ metni daha az çeşitli" iddiası:** Bergin & Atasoy'da doğrulandı, ama havuzlanmış oran uzunluk etkisi taşıyor. Atıf yapılan Coşar (2025) çalışmasında oranlar tersine çok yüksek (%32,9-48), yani sonuç ölçüme ve metin uzunluğuna göre büyük değişiyor. Bu nedenle "YZ daha az çeşitli" kesin bir ölçüm olarak alınmamalı.
- **"Türk okuyucu YZ'yi ayırt edebilir" iddiası:** Tunç 2026 bunu desteklemiyor, insanların taklit öyküleri ayırt edemediğini gösteriyor.
- **TDK sitelerinde YZ metni tespiti:** Arama sonucu yok. Bulunan TDK kaynakları (HAVELSAN iş birliği, yazı sistemi, prozodi) konuyla ilgili değil.
- **Hangi kelimelerin YZ'ye ait olduğu konusunda Türkçe bir liste:** Bulunamadı.

BİTTİM
