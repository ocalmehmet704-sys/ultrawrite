# Sabah notu

**Kaybolan:** "yerine koyma" kapanışı (9/10 → 2/12), iz kapanışı (6/10 → 2-4/12), bekçi, tellal, "Ertesi …" zinciri, "Kimse" kapanışı, bakma vuruşu (7/12 → 2/12), bir birimlik sapma (8/10 → 3/12), uzunluğun tabanda kalması.
**İnatla kalan:** kayıtla gerçek arasındaki fark olayın nesnesi (9/10, 11/12, 10/12; Mars ve yas öykülerinde de), yankı repliği (7/10, 11/12, 9/12), alçak sesli yetkili (8/10, 8/12, 9/12), aforizma (azalıyor, sıfırlanmıyor), çocuk ya da çırak tanık, soğuyan çay.
**Yeni çıkan:** her kapanış yasağının yerine bir yanındaki geldi: nesne → kısa son replik (tur 2'de 7/12) → kapı, eşik ve kaydın kendisiyle biten cümle (tur 3). Bağımsız yazarlar aynı ayrıntıyı üretiyor: iki yas öyküsünde babanın bakkala 240 lira borcu, iki öyküde "kedi arabanın altından", 1984 isteğinin üç kopyasında çivit boyacısı.

## Bu gece ne oldu

Üç tur, 34 öykü (her turda sekiz istek, artı deneyler). Tur 1 temiz değil: kökteki CLAUDE.md'nin okuma listesi yüzünden sekiz yazarın sekizi skill'den önce MEKTUP ve DEVIR'i okudu. CLAUDE.md'ye yazar uyarısı eklendi; tur 2 ve 3'te araç kayıtlarına göre hiçbir yazar test belgelerini açmadı.

Bence bu gecenin asıl bulgusu şu: yasak bir kalıbı kaldırıyor, şablonu kaldırmıyor. "Kayıt" iskeleti üç tur boyunca yerinde durdu; kayıt sözcüğünü yasakladığımız öyküde mühür ve "gri yüzey, mavi öz" olarak geri geldi. İstek 1'in dokuz kopyasının beşi ölçü, tartı ya da çentik, üçü boyacı. Model sağa çekmeyi bırakmadı; skill onu daha uzak bir tepeye taşıdı.

## Skill'de ne değişti (`gece` dalı)

| Değişiklik | Yer | Sonuç |
|---|---|---|
| Sahne bütçesi (Çok kısa 2×300, Kısa 4×350) | ultrawrite 0.1 | **İşe yaradı.** Kısa ortalaması 1.017 → 1.285 → 1.273; Çok kısa 300 → 600. Ama tavan oldu, 1.700'e kimse varmadı. |
| Sondan başla (son paragraf önce yazılır; nesne, rutin, iz, sayı, duyum, bakış, kısa replik, ertesi güne bağlı söz olamaz) | ultrawrite 2.1/6 | **Hedefi vurdu**, her turda yerine bir yanındaki geldi. |
| Kural 21'in örneği | ultrawrite kural 21 | Eski "doğru" örnek ("anahtarı paspasın altına itti") tam olarak 9/10'luk kapanışı öğretiyordu. |
| Konuşma kartı | ultrawrite 2.1/7 | **Kısmen.** Aforizma 11/12 → 6/12, yankı 11/12 → 9/12. Kartı yazılı çıkaran yazar yok. |
| İlk taslak ayrı dosyada, gerçek boyutta | ultrawrite 2.3 | **Kısmen.** Taslak yazan 0/8 → 9/12 → 10/12; somut "taslakta şu, şimdi şu" kanıtı 2/8 → 7/12. Taslakların çoğu hâlâ 90-200 kelimelik eskiz. |
| Parmak izi listesine üç testin yeni kalıpları | ultracheck | Liste gizlenince (deney C1) yeni kalıplar yine çıktı: listenin ürettiği şeyler değil, modelin tepesi. Liste yalnız eski kalıpları bastırıyor. |

## `main`e alınmaya değer

Yalnızca `skills/` altındaki değişiklikler; commit'lerin `gece/` kısmı alınmamalı.
- **70d492e**: sahne bütçesi, sondan başla, kural 21 örneği, taslak dosyası.
- **b10f732**: sondan başlaya replik ve ertesi gün maddesi, konuşma kartı, taslağın boyutu.
- **dd9e1f7** ve öncekiler: parmak izi listesine eklenenler (ultracheck).
Bence en değerlisi kural 21'in örneği ve sahne bütçesi: biri doğrudan yanlış bir şey öğretiyordu, öteki sayıyı gerçekten değiştiren tek şey.

## İşe yaramayan deneyler

- **İki taslak yaz, birini at (A3):** yazar planı taslaklardan önce yaptı, üç iskelet öğesi de kaldı.
- **Parmak izi listesini gizle (C1):** liste suçsuz çıktı ama gizlemek de bir şey kazandırmadı.
- **Kayıtsız olay:** kayıt sözcüğü gitti, işlevi kaldı; model bir sonraki tepeye (boyacı) geçti.
- **Sahne bütçesi tek başına (tur 1, 1e):** uzunluğu verdi ama boşluğu bakma ve susma vuruşuyla doldurdu (13 ve 13); skill'e "vuruşla doldurma" uyarısıyla girince bu tekrarlanmadı.

## Yazara mektup (E1)

İki turda, istek 1, 3 ve 6'nın birer kopyası yazmadan önce `gece/yazara-mektup.md`'yi okudu. Kontrol ajanı eşleri kör karşılaştırdı (tur 3'te dosya listesini görmeden, anahtar depoda değilken). **Sonuç: iki turda 0/6.** Altı eşin altısında kontrol ajanı mektupsuz öyküyü "merkezden uzak" buldu; mektupluyu da hiçbir eşte doğru tahmin edemedi. İki turda da mektuplu öyküler daha çok parmak izi taşıdı (tur 2: 16'ya 11, 16'ya 11, 16'ya 13; tur 3: 12'ye 9, 11'e 8, 9'a 7). Bence mektup öyküyü merkezden uzaklaştırmıyor; ya etkisiz ya da tersine çalışıyor. Bir tahminim var, sınamadım: "uca git, cesur ol" diyen metin, modele cesaretin kendisini değil, cesaretin en olası görüntüsünü (direnen kahraman, bedel ödeyen son, yemin) yazdırıyor. n=6; skill'e alınmamalı.

## Açık kalan

- Kayıt iskeleti. Sözcük yasağı işlemiyor; iskelet havuzu (DENEYLER C4) ya da taslağı ayrı bir ajanın yazması sınanmadı.
- Taslak dosyaları yazarlar arasında ortak geçici klasörde birbirini ezdi; test düzeneğinde her yazara ayrı klasör verilmeli.
- 1455 öykülerinde "dakika" iki kez geçti (dönem denetimi bunu yakalamıyor).
