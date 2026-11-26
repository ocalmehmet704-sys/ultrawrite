# ultrawrite

Türkçe kurmaca metin (roman, öykü, sahne, bölüm) yazarken ve düzeltirken kullanılan skill ailesi. Yapay zekâ çıktısının "çeviri Türkçesi", "her sahnede aynı ton", "sahte duygu" ve "ortalama kurgu" kusurlarını engeller.

Ana ilke: **Bir cümle, anlattığı şeye oranla iş görmeyen sözcük taşıdığı ölçüde kötüdür.**

## Skill'ler

| Skill | İşi |
|---|---|
| **ultrawrite** | Yönetici: soruları sorar, kuralları taşır, yazmadan önce diğerlerini yükler. |
| **ultragrammar** | Türkçe iskelet: fiilimsiler, çatı, ekler, söz dizimi. |
| **ultratense** | Zaman ve kip: -dı, -mış, -mıştı, -acaktı. |
| **ultravoice** | Ses: duygu, ritim, anlatıcı mesafesi. |
| **ultracheck** | Denetim: YZ izleri, slop, bariz kurgu, dönem ve dil tutarlılığı. |
| **ultracraft** | Zanaat: ana ilkenin araştırma dayanağı, betimleme, diyalog, yazar teknikleri, *1984* çözümlemesi. |
| **ultraworld** | Arka plan dünyası ve paralel hikâye (`/u-mod`). |
| **ultrabrutal** | Brutal kitle seviyesi. |

ultrawrite tek başına yazmaz: önce ultragrammar, ultratense, ultravoice, ultracheck ve ultracraft'ı yükler, her birinden bir kuralı yazara söyleyerek yüklediğini kanıtlar.

## Kurulum

**Claude Code (eklenti, sekiz skill birden):**

```
/plugin marketplace add ocalmehmet704-sys/ultrawrite
/plugin install ultrawrite@ultrawrite
```

**Claude uygulaması (claude.ai):** [Releases](https://github.com/ocalmehmet704-sys/ultrawrite/releases) sayfasından sekiz `.skill` dosyasını indirip her birini ayrı skill olarak yükleyin. ultrawrite diğerleri olmadan eksik çalışır.

## Çalışma biçimi

1. **Başlamadan:** bölüm boyutu, kitle seviyesi ve üslup sorulur. İstek bilinen bir esere ya da temaya dayanıyorsa yazardan öyküye özgü bir tohum (meslek, nesne ya da ad) istenir.
2. **Yazarken:** Türkçe iskelet korunur, en olası kurgu atılır, duygu adlandırılmaz.
3. **Yazdıktan sonra:** metin sayfa sayfa denetlenir; ortam izin veriyorsa bir gözden geçirme ajanı arka planda çalışır.

## Kısıtlar

- Yazarın vermediği karar alınmaz; uydurulan ad, olay ve mekân "taslak" diye bildirilir.
- Kitle seviyesi kendiliğinden yükseltilmez ya da düşürülmez.
- Yazarın kendi cümlesi izinsiz değiştirilmez.

## Kaynaklar

Kurallar araştırmaya dayanır; her kuralın kanıt düzeyi (kanıtlı, zanaat, folklor) yazılıdır. Ham raporlar ve alıntı doğrulama tabloları her skill'in `raporlar/` klasöründedir. Alıntılar ve kaynaklar sahiplerine aittir.

## Lisans

Fork serbesttir. Ticari yazılarda (kitap, roman, senaryo vb.) kullanılacaksa önsöz, teşekkür ya da yazar notunda makul boyutta **ultrawrite** anılması yeterlidir. Ayrıntılar için `LICENSE`.
