# Devir notu

## Şimdiye kadar

Skill üç test turundan geçti. İsteğin hepsi aynıydı: "1984 temalı, 1455 Almanya'sında geçen kısa öykü". Öyküler `gece/turlar/tur-0/` altında (yazar1-6).

| Tur | Ajan | Skill | Bulgu |
|---|---|---|---|
| 1 (yazar1-2) | Sonnet medium | tek skill + references | Referanslar okundu. İki ajan aynı adları (Jost, Wendel) ve aynı iskeleti seçti. Anakronizm ("kurşun kalem", "mont"), Almanca levhada Türkçe harf dizgisi, "X için fazla Y" çevirisi. |
| 2 (yazar3-4) | Sonnet medium | sekiz skill'lik aile | Alt skill'ler yüklendi, tur 1 hataları kayboldu. Benzeşme bir alt düzeye kaydı: parşömen kazıyan yazıcı, "Weidner" adı iki öyküde. |
| 3 (yazar5-6) | Haiku high | aile + tohum sorusu | Tohum nesneyi değiştirdi (köprü taşı, çan yazıtı). Ama iskelet aynı kaldı. |

Altı öykünün ortak parmak izleri artık `skills/ultracheck/SKILL.md` içinde "Parmak izi: modelin şablonu" başlığında: itaat eden zanaatkâr, silinen yakın, silinmeyen iz tesellisi (6/6), kuledeki bekçinin sesi, pencereden bakan komşu, muhbir çocuk, önemsiz şeyin tartılması, tellal kalıbı, yankı repliği (6/6), soru ve tek sözcük yanıt zinciri, tek ses, susma vuruşu, bakma vuruşu, "Kimse" kapanışı, duyum kapanışı. Ayrıca sahne yerine özet zinciri ("Ertesi …" sekiz kez) ve söylenip gösterilen bilgi.

Son yapılan değişiklikler (`main`, sürüm 3.3.0):
- ultrawrite 2.3: ilk taslak yazara gösterilmez; "bir yapay zekâ burada ne yazardı?" yanıtı yazılır; taslak parmak izi listesiyle karşılaştırılır; üç ve daha fazla parmak izi varsa sahne ya da bölüm baştan üretilir; kelime sayılır.
- ultrawrite 0.4: tohum sorusuna ek olarak "Kahraman ne yapıyor ve öykü nasıl bitiyor?" sorusu.
- Kural 25: yankı repliği ve tek ses. Kural 28: paragraf başı taraması. Kural 14: silinen yakın bariz seçim.

Bu değişiklikler henüz hiçbir testte sınanmadı. Bu gecenin ilk işi onları sınamak.

Açık sorular:
- 2.3'teki yeniden üretim gerçekten yapılıyor mu, yoksa ajan "yaptım" diyip geçiyor mu?
- Uzunluk: altı öykünün altısı kısa aralığın tabanında (1.010-1.225 kelime). Kelime sayma adımı bunu düzeltiyor mu?
- İskelet sorusu şablonu kırıyor mu, yoksa model dördüncü bir şablona mı kayıyor?
- Şablon yalnızca "baskı öyküsü" isteğine mi özgü, yoksa çağdaş, çocuk, yas ve bilimkurgu isteklerinde de kendi şablonları var mı?

## Bir tur nasıl yürütülür

1. `git pull` ile dalı güncelle. Tur numarası `gece/turlar/` altındaki en büyük numaranın bir fazlası.
2. **Sekiz yazar ajanı** başlat, arka planda, hepsi aynı anda. Model `haiku`, çaba düzeyi `high`. Her birine `gece/istekler.md`'den bir istek ver ve şunu söyle:
   - Skill şu klasörde: `skills/ultrawrite` (deponun tam yolunu ver). SKILL.md'yi oku ve talimatlarına uy.
   - Bölüm 0 yanıtları istekte; yeniden sorma.
   - Öyküyü `gece/turlar/tur-N/oyku-K.md` dosyasına yaz (yalnızca metin). Notu `gece/turlar/tur-N/not-K.md` dosyasına yaz: yüklenen skill'ler, ilk taslakta "YZ'nin yazacağı şey" diye işaretlenenler, yeniden üretilen sahneler, kelime sayısı, uydurulan adlar.
   - Yazar ajanlarına referans okumalarını, parmak izini ya da yeniden üretimi ayrıca söyleme. Skill bunları kendisi yaptırmalı; sınadığımız şey bu.
3. Hepsi bitince ajanların araç kayıtlarından alt skill'leri gerçekten açıp açmadıklarına bak (en azından bir ikisinde).
4. **Kontrol ajanı** başlat: temiz bağlam, model `sonnet`, çaba düzeyi `high`. Ona `gece/KONTROL.md` dosyasını ve tur klasörünün yolunu ver. Raporu `gece/turlar/tur-N/rapor.md` olur.
5. Raporu oku. **En fazla iki üç** skill değişikliği yap; her biri rapordaki somut sayılara dayansın. Önceki turun değişikliği işe yaramadıysa geri al. Değişikliği `gece/turlar/tur-N/degisiklik.md` dosyasına yaz: ne değişti, hangi bulguya dayanıyor, bir sonraki turda neye bakılacak.
6. Gerekirse `gece/istekler.md`'de 3-8 numaralı isteklerden bir ikisini değiştir (1 ve 2 sabit).
7. Commit et, `gece` dalına push et.
8. Son turdan sonra `gece/SABAH.md` yaz: en çok bir sayfa. Hangi parmak izleri kayboldu, hangileri kaldı, hangi yenileri çıktı; skill'de bu gece ne değişti; `main`e alınmaya değer değişiklikler hangileri.
