---
name: ultragrammar
description: Türkçe dilbilgisi ve söz dizimi skill'i; fiilimsiler (zarf-fiil, sıfat-fiil, isim-fiil), çatı, çekim ve yapım ekleri, söz dizimi, devrik cümle, çeviri Türkçesi izleri, TDK anlatım bozuklukları. Türkçe kurmaca ya da düzyazı yazarken, cümle İngilizce gibi durduğunda, -dı zinciri, edilgen, ek seçimi ya da söz dizimi sorusunda kullan. ultrawrite yazmadan önce bunu çağırır.
---

# ultragrammar: Türkçe iskelet

Bu skill **ultrawrite** ailesinin parçasıdır. ultrawrite yazmadan önce bunu çağırır; tek başına da kullanılabilir. Dosya yolları bu skill'in klasörüne göredir.

## Fiilimsiler ve Türkçe iskeletle kurma

**Kanıt notu.** -(y)Ip, -(y)ArAk ve -ken'in cümle bağlama işlevi TDK Belleten'den doğrulandı (Gülsevin 2020, **[K]**). Bu dosyanın geri kalanı standart Türkçe dilbilgisidir (Korkmaz, Ergin, Banguoğlu çizgisiyle uyumlu, **[G]**). Bu kitapların ücretsiz PDF'i bulunamadığı için bu oturumda sayfadan doğrulanmadı. Örnek cümleler benim, nötr içerikli.

## 1. Sorun: model İngilizce kurar, çıktı katmanı Türkçeye çevirir
İngilizce **sağa dallanır**: özne, fiil, nesne, sonra yan bilgi (who, which, that, while, after, without...) arkadan eklenir. Türkçe **sola dallanır**: baş sonda, yüklem en sonda, yan bilgi başın önüne fiilimsi öbeğiyle dizilir. Model İngilizce planı sırayla çevirince yan bilgi ayrı cümleye, "ve"ye, "ki"ye, "-dı" zincirine dönüşür. Çeviri kokusu buradan gelir.

**Çare: Türkçe iskeletle kur.**
1. Ana yargıyı seç. Bu yüklemdir ve cümlenin sonunda durur.
2. Kalan her bilgiyi fiilimsiyle yüklemin ya da adın **önüne** diz. Yeni cümle açma.
3. Vurgulanacak ögeyi yüklemin hemen önüne koy (vurgulu öge yüklemin yanındadır). Gerekirse devrik kur: *Açtı pencereyi.*
4. **Ters çeviri testi** (benim sezgisel yöntemim): cümleyi kelime kelime İngilizceye çevir. Sorunsuz çıkıyorsa ve Türkçesi her şeyi tek tek sıralıyorsa muhtemelen çeviri Türkçesidir. Bir Türk yazarın fiilimsili cümlesinin birebir İngilizcesi genellikle garip çıkar.

## 2. Üç fiilimsi grubu

### Zarf-fiil (ulaç, bağ-fiil): eylemi yüklemin zarfı ya da bağlayıcısı yapar
| Ek | İşlev | Örnek |
|---|---|---|
| **-(y)Ip** | art arda ya da eşzamanlı, aynı özne. Sonraki fiilin kip ve kişisini taşır **[K]** | *Çantayı alıp çıktı.* |
| **-(y)ArAk** | tarz, yol, eşzamanlı **[K]** | *Merdivenleri ikişer atlayarak indi.* |
| **-(y)ken** | eşzamanlı ya da zıtlık ve tercih **[K]** | *Çay demlenirken pencereden baktı.* / *İkisi tutuklanırken biri serbest kaldı.* (Gülsevin) |
| **-(y)IncA** | zaman (olunca, edince) **[G]** | *Kapı çalınca sustu.* |
| **-DIkçA** | tekrar ve artış **[G]** | *Yürüdükçe yol uzadı.* |
| **-mAdAn / -mAksIzIn** | "-sız, -meden": olumsuz tarz **[G]** | *Bir şey demeden çıktı.* |
| **-(y)AlI** | "-den beri" **[G]** | *Gideli çok oldu.* |
| **-Ir -mAz** (aynı fiil) | hemen ardından **[G]** | *Görür görmez tanıdı.* |
| **-(y)A -(y)A** (ikileme) | sürerlik, tarz **[G]** | *Koşa koşa geldi.* |
| **-DIktAn sonra / -mAdAn önce** | sıra (edat grubu) **[G]** | *Yedikten sonra çıktı.* |
| **-mAk için / -sIn diye** | amaç **[G]** | *Duymak için eğildi. / Duysun diye bağırdı.* |

Kural: -Ip ve -ArAk yalnızca özneler aynıysa ve eylemler art arda ya da eşzamanlıysa uygun. -ken öznesi farklı olabilir.

### Sıfat-fiil (ortaç): eylemi adın niteleyicisi yapar. İngilizce who/which/that yan cümlesinin Türkçe karşılığı
| Ek | İşlev | Örnek |
|---|---|---|
| **-An** | özne olan ad (yapan kişi) | *Kapıda bekleyen adam.* (the man who waits) |
| **-DIk + iyelik** | özne dışı ad (nesne, yer, zaman) | *Adamın beklediği kapı.* (the door the man waits at) |
| **-AcAk (+iyelik)** | gelecek, olası | *Yarın gelecek misafir. / Yazacağı mektup.* |
| **-mIş** | bitmiş durum, sonuç | *Solmuş yaprak.* |
| **-Ar / -mAz** | huy, süreklilik | *Bitmez bir kış.* |
| **-AsI** | olası, gereklilik | *Görülesi bir yer.* |

Seçim kuralı: niteleyeceğin ad eylemin **öznesiyse** -An, **nesnesi/yeri/zamanıysa** -DIk/-AcAk + iyelik.

### İsim-fiil (ad-fiil): eylemi ad gibi kullanır. İngilizce "that" ve "-ing/to" cümlelerinin karşılığı
| Ek | İşlev | Örnek |
|---|---|---|
| **-mAk** | eylemin adı, amaç | *Susmak kolaydı. / Görmek için eğildi.* |
| **-mA (+iyelik)** | eylemin adı, öznesiyle | *Gelmesini bekledi.* (waited for her to come) |
| **-Iş** | tarz ya da ad | *Yürüyüşü ağırdı.* |
| **-DIk / -AcAk + iyelik** | "that" bilgi cümlesi | *Geleceğini biliyordu. / Kapıyı kilitlediğini hatırlamıyordu.* |
| **-mAyA başla-, devam et-** | başlama ve sürme | *Ağlamaya başladı.* |

"Biliyordu ki geleceğini" ya da "Biliyordu, o gelecekti" gibi ayrı cümle kurma, yukarıdaki iyelikli yapıyı kullan.

## 3. İngilizce kalıp, Türkçe karşılık
| İngilizce düşünce | Çeviri Türkçesi | Türkçe iskelet |
|---|---|---|
| opened the window and shouted | Pencereyi açtı ve bağırdı. | *Pencereyi açıp bağırdı.* (Gülsevin) |
| while he walked, he thought | O yürüyordu ve düşünüyordu. | *Yürürken düşündü.* |
| the man who was sitting by the door | Kapının yanında oturuyor olan adam. | *Kapının yanında oturan adam.* |
| the book she had left on the table | Kitap, ki onu masada bırakmıştı. | *Masada bıraktığı kitap.* |
| he knew that she would come | Biliyordu ki o gelecekti. | *Geleceğini biliyordu.* |
| without saying anything | Bir şey söylemedi ve çıktı. | *Bir şey demeden çıktı.* |
| every time he looked | Her sefer baktığında, o... | *Baktıkça...* |
| as soon as she saw him | O onu gördüğü anda | *Onu görür görmez.* |
| after eating | O yemek yedikten sonra, o... | *Yedikten sonra...* (özne düşer) |
| began to cry | Ağlamayı başlattı. | *Ağlamaya başladı.* |

## 4. Tasvir fiilleri: bir sözcükte İngilizcenin üç sözcüğünü taşıyan aspekt araçları **[G]**
Ana fiile yardımcı fiil eklenir ve eylemin nasıllığını verir. İngilizce phrase ile anlatılanı Türkçe tek sözcüğe sıkıştırır.
- **-(y)Iver-** tezlik, çabukluk: *bakıverdi* (glanced quickly).
- **-(y)Ip dur-** sürerlik, ısrar: *yürüyüp durdu* (kept walking).
- **-(y)A kal-** donup kalma: *bakakaldı* (stood staring).
- **-(y)A gel-** başlangıçtan sürüp gelme: *yürüyegeldi*.
- **-(y)Ayaz-** neredeyse olma: *düşeyazdı, öleyazdı* (almost fell).
- **-(y)Ip git- / geç-**: *gülüp geçti*, *çekip gitti*.
Tasvir fiili duygu sözcüğü yazmadan hâli taşır: *bakakaldı*, *susuverdi*.

## 5. Cümle düzeyinde İngilizce izleri
- **Özne zamirini düşür.** Türkçe özne ekle belli olur. "O pencereyi açtı. O bağırdı." yerine *Pencereyi açıp bağırdı.* Cümle başında O/Onun yığılması İngilizce izidir.
- **İyelik ekiyle yetin.** "Onun elini onun cebine soktu" değil, *Elini cebine soktu.*
- **"Bir" her yerde değil.** İngilizce a/an her ada gelir, Türkçede belirsizlik çoğu yerde ek ya da bağlamla anlaşılır. "Bir adam bir kapıdan bir odaya girdi" yığılması çeviri izidir. (Eşik sezgisel: 100 kelimede 3,5'ten çok "bir" şüphe uyandırır.)
- **"Bir şekilde" (in a way), "-mAktA/-mAktAdIr"** (haber dili, İngilizce present continuous ya da resmî ton): kurguda *-(I)yor* ya da fiilsiz cümle kullan. "Sahip olmak" TDK'da yasak değil (Yaman 2013), ama var/yok yapısı daha Türkçe: *Kapısı yoktu.*
- **Edilgen.** "Yapılmaktadır, gerçekleştirilmiştir" resmî ve çeviri tonu. Fail gizlenecekse edilgen, değilse etken.
- **"ve" zinciri.** Her eylemi "ve" ile bağlama; fiilimsi, virgül ya da noktalı virgül kullan.
- **Ek-fiil ritmi.** *yorgundu* (idi bitişik), *yorgunmuş* (imiş: öğrenilen), *yorgunsa* (ise), *yorgunken*. Her biri farklı tonda.
- **Devrik ve vurgu.** Devrik cümle konuşma dilinden gelir, yabancı etki kanıtı yok (Ataç, Torun aracılığıyla). Yazı dilinde süs olarak değil, konuşma sesi olarak kullan.
- **-dı yalnızca ani eylemde.** Bkz. SKILL.md "ek çeşitliliği".

## 6. Hızlı kontrol
Taslağın her paragrafında şunları ara:
1. Art arda 3+ cümle aynı özneyle ve aynı ekle başlayıp bitiyorsa birini fiilimsiye çevir.
2. "O, onun, bir, ve" yığılması var mı?
3. Yan bilgi ayrı cümleyse, sıfat-fiil ya da zarf-fiil öbeğine çevirebilir misin?
4. Yüklem sonda mı? Vurgulanan öge yüklemin yanında mı?
5. Sayfa denetimini (SKILL.md Bölüm 2.3) yap: fiilimsi cümlelerini ve İngilizce izlerini kontrol listesiyle işaretle.


---

## Ek, zaman ve söz dizimi

Kaynak ve güvenilirlik ayrıntısı: `raporlar/00-tdk-notlar.md`, `raporlar/03-ceviri-turkcesi.md`, ultratense (`raporlar/04-zaman-kip-anlatici.md`), `tdk/T3-dilbilgisi-kitap.md`. Düzey: **K** kanıtlı (makale), **Z** zanaat, **F** folklor.

## Eylemleri bağlamak
- **K** -(y)Ip, -(y)ArAk ve -ken, ana cümlenin zarfı olmadan da cümleleri sıralayıp bağlar. Bağladıkları fiil, sonraki fiilin kip ve kişi ekini anlamsal olarak taşır, böylece tekrar önlenir (Gülsevin, TDK Belleten 69, 2020).
  - *Pencereyi açıp bağırmaya başladı.* ≡ Pencereyi açtı ve bağırmaya başladı.
  - *Birden yerinden kalkarak dışarı çıktı.*
  - -ken zıtlık ve tercih kurar: *Şüphelilerden ikisi tutuklanırken biri serbest kaldı.* / *Önceleri iki yabancıyken sonraları aralarından su sızmayan iki dost olduk.*
  - Ek, yalnızca aynı özneli, art arda ya da eşzamanlı eylemde uygundur.
- **Z** "Açtı. Bağırdı. Koştu." dizisi İngilizce sözdiziminin çevirisidir ve ritmi öldürür.

## Zaman ve kip tercihi
- **K** -mIş yalnızca rivayet değildir. Olay zamanı, atıf zamanı ve konuşma zamanı ayrımıyla düşünülmeli; bitmişliği ve canlılığı da taşır ("kurgusal geçmişteki bitmişlik") (Bacanlı 2008, Bilig 44; yüksek güven, sayfa no yok).
- **Z** Nokta, cümle sonu işaretinden çıkarılıp "bir kamera gibi" kullanılabilir, gerilim anlarında yoğunlaşır (Balcı 2010, Belleten; tek roman, orta güven).
- Kullanım özeti (Z, işlev ayrımı): **-yor** akış, **-mış** anlatıcıyı olaydan uzaklaştırma ya da bitmişlik, **geniş zaman** huy ve tekrar, **-dı** ani kesik eylem, **ek-fiil/fiilsiz** durum.
- Doğrulanmadı: masalda -mIş'ın anlatıyı zamandan ve mekândan uzaklaştırdığı (Üzüm, Demir, Polat 2023; yalnızca başka ajanın özeti).
- Ek-fiil yazımı: "yorgundu" ile "yorgun idi" ritim farkı yaratır (TDK yazım kuralı).

## Söz dizimi ve çeviri Türkçesi
- **K** Devrik cümle yerli bir biçimdir, yabancı etki iddiasını destekleyen kanıt bulunamadı. Konuşma dilinde ve şiirde vardır, yazı dilinde süs değil kaynak olarak kullanılmalı (Ataç, Torun aracılığıyla, Türk Dili 102, 2014).
- **K** Yapmak/almak calque'ları: "çay almak" ≡ "çay içmek", "yenilgi almak" ≡ "yenilmek" (Yaman 2013, Türk Dili). "Sahip olmak" aynı listede TDK'da yasak değil; yasak diye yazma.
- **K** Açık özne kullanınca kişi eki ve ek-fiil düşmez: "Ben odada." ≡ "Ben odadayım." (TDK Çeviri Çalıştayı 2022; öğrenci Türkçesi, edebi çeviriye genellenmez).
- **Z** *ki* bağlacı ile -ki ekini ayır; ikinci cümlesi okura bırakılan ki'li yapı ("Öyle korkunç bir manzara ki…") yarım bırakma kalıbıdır (Zülfikar 2020, Türk Dili 817).
- **F** "Edat yerine ek" kuralı: açık bir TDK kuralı olarak yazılı bulunamadı.

## Yazım (TDK)
- Sayıları anlatımda harfle yaz; rakamı veri cümlelerinde kullan. Birleşik sayıları ayrı yaz ("iki yüz"). Sıra sayısı "8’inci". Üleştirme: "ikişer".
- "bilmem ki", "demek ki", "kaldı ki" ayrı; "sanki", "oysaki", "belki" bitişik.
- Noktalama ve konuşma çizgisi kuralını yazim.tdk.gov.tr'den doğrula; arama özeti güvenilir değil (2012 27. baskı).


---

## Ek dosyalar

- `references/cati.md`: edilgen, ettirgen, dönüşlü, işteş; çeviri edilgeninden kaçınma.
- `references/ekler-cekim.md`: isim ve fiil çekimi, haber ve dilek kipleri, zamir düşürme.
- `references/ekler-yapim.md`: yapım ekleri, türetme, ikileme, pekiştirme, yansıma.
- `references/guzel-yazma.md`: TDK kaynaklı anlatım bozuklukları, söz dizimi, noktalama, sözcük seçimi.
- `raporlar/`: TDK notları, çeviri Türkçesi raporu, dilbilgisi kaynak raporları (T1-T4).

Konusu çıkan dosyayı Read ile aç.
