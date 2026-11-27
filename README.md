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

**Diğer ajanlar.** ultrawrite açık Agent Skills biçimindedir (her skill bir klasör, içinde `SKILL.md`). Sekiz klasörü her zaman yan yana kurun: Skill aracı olmayan ortamlarda ultrawrite diğer yedisini yanındaki klasörlerden okur.

Tek komutla, çoğu ajana ([skills CLI](https://skills.sh)):

```
npx skills add ocalmehmet704-sys/ultrawrite
```

Elle kopyalamak için önce depoyu indirin:

```
git clone --depth 1 https://github.com/ocalmehmet704-sys/ultrawrite /tmp/ultrawrite
```

| Ajan | Komut |
|---|---|
| Cursor | `mkdir -p .cursor/skills && cp -r /tmp/ultrawrite/skills/* .cursor/skills/` |
| Codex | `mkdir -p ~/.agents/skills && cp -r /tmp/ultrawrite/skills/* ~/.agents/skills/` |
| Gemini CLI | `mkdir -p ~/.gemini/skills && cp -r /tmp/ultrawrite/skills/* ~/.gemini/skills/` |
| GitHub Copilot | `mkdir -p .github/skills && cp -r /tmp/ultrawrite/skills/* .github/skills/` |
| Grok Build | `mkdir -p ~/.grok/skills && cp -r /tmp/ultrawrite/skills/* ~/.grok/skills/` |

**Manus:** sekiz `.skill` dosyasını Skills menüsünde "Upload a skill" ile yükleyin, sohbette `/ultrawrite` yazarak çağırın.

Klasör yolları ajanların belgelerine göredir ve sürümle değişebilir. Bir ajan skill'i görmezse kendi belgesindeki skills klasörüne bakın.

## Çalışma biçimi

1. **Yazarla vakit (ilk oturumlar):** model yazara küçük öyküler gösterip "hatam nedir?" diye sorar. Yanıtlar `yazar-defteri.md` dosyasına yazılır ve her oturumda yeniden okunur. Kurallar her yazar için aynıdır; defter yalnızca o yazarındır.
2. **Başlamadan:** bölüm boyutu, kitle seviyesi ve üslup sorulur. İstek bilinen bir esere ya da temaya dayanıyorsa yazardan bir tohum (meslek, nesne ya da ad) ve öykünün yönü ("kahraman ne yapıyor, öykü nasıl bitiyor?") istenir.
3. **Eğrinin dışından malzeme:** model yazmadan önce rastgele Wikipedia ve Vikikaynak sayfaları okur, her birinden öyküye tek bir köprü kurar ve bu köprülerden en az ikisini öykünün temel bir seçiminde kullanır.
4. **Hazırlık:** sahne bütçesi (Kısa bölümde dört sahne, sahne başına en az 350 kelime), son paragraf önce yazılır, konuşan her karakter için bir konuşma kartı çıkarılır.
5. **Yaz, fark et, yeniden üret:** ilk taslak yazara gösterilmez. Model her sahne için "bir yapay zekâ burada ne yazardı?" diye sorar, taslağı bu yanıtla ve parmak izi listesiyle karşılaştırır, benzeyen sahneyi yamalamaz, baştan yazar.
6. **Denetim:** metin sayfa sayfa denetlenir; ortam izin veriyorsa bir gözden geçirme ajanı arka planda çalışır.

## Neye dayanıyor

Kurallar araştırmaya ve teste dayanır. Bir gecelik testte (34 öykü) görülen şu: yasak bir kalıbı kaldırır, şablonu kaldırmaz; model yasaklanan kalıbın bir yanındakine kayar. Bu yüzden skill modele yasak yerine bağlam ve malzeme vermeye çalışır. Test öyküleri, kontrol raporları ve sabah notu deponun `gece` dalındadır.

## Kısıtlar

- Yazarın vermediği karar alınmaz; uydurulan ad, olay ve mekân "taslak" diye bildirilir.
- Kitle seviyesi kendiliğinden yükseltilmez ya da düşürülmez.
- Yazarın kendi cümlesi izinsiz değiştirilmez.

## Kaynaklar

Kurallar araştırmaya dayanır; her kuralın kanıt düzeyi (kanıtlı, zanaat, folklor) yazılıdır. Ham raporlar ve alıntı doğrulama tabloları her skill'in `raporlar/` klasöründedir. Alıntılar ve kaynaklar sahiplerine aittir.

## Lisans

Fork serbesttir. Ticari yazılarda (kitap, roman, senaryo vb.) kullanılacaksa önsöz, teşekkür ya da yazar notunda makul boyutta **ultrawrite** anılması yeterlidir. Ayrıntılar için `LICENSE`.
