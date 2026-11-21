# ultrawrite

Türkçe kurmaca metin (roman, öykü, sahne, bölüm) üretirken ve düzeltirken kullanılan yazım skill'i.

## Ne işe yarar?

Yapay zekâ çıktısının en sık görülen Türkçe kurmaca kusurlarını engeller:

- Çeviri Türkçesi kokusu
- Her sahnede aynı ton
- Sahte duygu
- İngilizce cümle iskeleti
- Yapay ve ortalama üslup

Skill, yazmadan önce yazarla net kararlar alır, yazarken Türkçe iskeleti korur, yazdıktan sonra denetler.

## Ne zaman kullanılır?

- Roman, öykü, sahne veya bölüm yazılırken
- Mevcut metin düzeltilirken
- “Yapay duruyor”, “çeviri gibi”, “ton hep aynı”, “duygu sahte” şikâyetlerinde
- Paralel hikâye, arka plan dünyası veya `/u-mod` istendiğinde

Türkçe kurmaca metin üretilecek her durumda kullanılır.

## Çalışma biçimi

1. **Başlamadan önce**  
   Bölüm boyutu, kitle seviyesi ve üslup sorulur. Yanıt gelmeden yazılmaz.

2. **Yazarken**  
   Türkçe iskelet korunur. En olası ve ortalama sahneler atılır. Duygu gösterilir, adlandırılmaz.

3. **Yazdıktan sonra**  
   Metin sayfa sayfa denetlenir. Gerekirse arka plan gözden geçirme ajanı devreye girer.

## Düzeltme modu

Hazır metin verildiğinde yapı → sahne → diyalog → satır sırasıyla incelenir. Gereksiz açıklamalar ve arka plan anlatısı temizlenir. Değişiklikler öneri olarak sunulur, yazarın cümlesi izinsiz değiştirilmez.

## Paralel hikâye ve arka plan

`/u-mod` veya paralel hat istendiğinde ayrı bir motor devreye girer. Ana hikâye yazardan habersiz ilerletilmez. Yeni olgular “taslak” olarak işaretlenir.

## Kısıtlar

- Yazarın vermediği karar alınmaz.
- Yeni karakter, olay veya mekân uydurulursa “taslak” diye belirtilir.
- Kitle seviyesi kendiliğinden yükseltilmez veya düşürülmez.
- Yazarın kendi cümlesi izinsiz değiştirilmez.

## Dosya

- `ultrawrite.skill` — skill paketi
