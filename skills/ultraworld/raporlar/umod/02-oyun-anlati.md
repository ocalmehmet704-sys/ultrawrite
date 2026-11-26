# 02 - Oyun anlatısı ve dünya durumu takibi

Tarih: 2026-11-19 · Ajan: u02-oyun · Görev: GOREV-UMOD.md, alan 02

## Kapsam

- Konu: oyunlarda ortaya çıkan anlatı; storylet ve nitelik (quality) tabanlı anlatı, Dwarf Fortress dünya geçmişi, Crusader Kings karakter stresi, RimWorld storyteller ve dünya durumunun anlatı malzemesine çevrilmesi (story sifting).
- Yöntem: genel terimli aramalar; 8 kaynak açılıp içerikleri doğrulandı (4 yazar/geliştirici sayfası, 3 topluluk wiki'si, 1 ikincil haber sitesi). Açılamayan sayfalara dayanan iddialar "Doğrulanamayanlar" bölümünde.
- Sınır: haftalık arama limiti nedeniyle koordinatör yeni aramayı durdurdu. DF olay sistemi ve CK3 hafıza/özellik ayrıntıları kaynaksız kaldı. Alıntılar WebFetch'in sayfadan döndürdüğü cümlelerdir; ham HTML ile karşılaştırılmadı.

## Bulgular

### 1. Quality-based narrative ve salience tanımları (Emily Short, 2016)
- **Kaynak:** https://emshort.blog/2016/04/12/beyond-branching-quality-based-and-salience-based-narrative-structures/ (12 Nisan 2016)
- **Alıntı:** "storylets unlocked by qualities" (nitelikle açılan storylet'ler); "pick a bit of content out of a large pool" (geniş bir havuzdan içerik parçası seçmek). Sayfaya göre "quality-based" etiketi Failbetter Games'in icadıdır ve etiket sonradan bırakılmıştır.
- **Sayfa özeti:** Quality-based anlatıda nitelikler sayısal değerlerdir ve storylet'leri açar. Salience-based anlatı, havuzdan o an için en uygun içeriği seçer.
- **u-mod'da:** Nitelik kapıları (M1, M2). Salience, havuzdan o an en uygun adayı seçme kuralı olarak (M3).
- **Güvenilirlik:** Yüksek bir yazar kaynağı; ama ampirik çalışma değil. Tasarım fikri olarak kullanıldı.

### 2. Storylet: bağımsız parçalar, herhangi sırada; nitelikler ne yapılacağını söyler (Failbetter, 2010)
- **Kaynak:** https://www.failbettergames.com/echo-bazaar-narrative-structures-part-two (3 Mart 2010)
- **Alıntılar:** "They tend to be discrete chunks of narrative that can be played in any order, as many times as you like." (Parçalar herhangi bir sırada, istenen sayıda oynanabilir.) "The really important thing here is that qualities tell storylets what to do." (Asıl önemli şey: nitelikler storylet'lere ne yapacaklarını söyler.)
- **Sayfa özeti:** Bir nitelik, storylet'in dalını eşik değerine göre açar ya da kilitler. Bir nitelik, bir hikâye bittiğinde storylet'leri kalıcı olarak kapatabilir (tek seferlik hat). Tek niteliğin yönettiği bağlı storylet zincirine sayfa "questicle" diyor.
- **Boşluk:** Sayfa, bir sonraki storylet'in nasıl seçildiğini anlatmıyor.
- **u-mod'da:** Tek sefer ve zincir bayrakları (M1). Seçim kuralı için bu kaynakta dayanak yok; M3 bunu tasarım olarak işaretler.
- **Güvenilirlik:** Yüksek (geliştiricinin kendi blogu); ama Echo Bazaar'a özgü ve 2010 tarihli.

### 3. Az nitelik, tek anlam (Failbetter, 2011)
- **Kaynak:** https://www.failbettergames.com/dont-poke-that-narrative-engineering-principles-part-1 (9 Temmuz 2011)
- **Alıntılar:** "But there are too many qualities controlling things, too many assumptions about what will happen when." (Çok fazla nitelik işleri yönetiyor; ne olacağına dair varsayımlar da çok.) "We've been using a single quality to do different things in different places." (Tek bir niteliği farklı yerlerde farklı işler için kullanıyorduk.)
- **Sayfa özeti:** Sıralı olayları birden çok nitelik yönetince kırılganlık oluşuyor. Tek niteliği farklı işler için kullanmak tutarsızlığa ve istismara yol açtı. Sayfa, her içerik biriminde en az sayıda nitelik kullanmayı öneriyor.
- **u-mod'da:** Nitelik sözlüğü ve tek anlam kuralı (M2).
- **Güvenilirlik:** Orta-yüksek. Tek stüdyonun deneyimi; genelleme için dış kanıt yok.

### 4. Story sifting: olay geçmişinde desen eşleştirme (Kreminski, Dickinson, Wardrip-Fruin; ICIDS 2019)
- **Kaynak:** https://mkremins.github.io/publications/Felt_SimpleStorySifter
- **Alıntı:** "Felt is a query language-based story sifter coupled with a rules-based simulation engine." (Felt, kural tabanlı bir simülasyon motoruna bağlı, sorgu dili tabanlı bir story sifter'dır.)
- **Sayfa özeti:** Olaylar ve karakterler veritabanında varlık olarak tutulur. Desen, mantıksal değişkenler ve kısıtlardan oluşan bir sorgudur. Desen olayları sırayla arar; eşleşmeler arasında ilgisiz olaylara izin verilir. Bir `not-join` benzeri kısıt, iki eşleşme arasında belirli bir olayı dışarıda bırakabilir. Desenleri insanlar yazar; sayfa otomatik desen keşfini kapsamıyor.
- **u-mod'da:** Olay ve varlık tablosu (M6); desen sorgusu ve kesişme adayı (M7); denetim sorguları (M8).
- **Güvenilirlik:** Yüksek (yazarların kendi araştırma sayfası); ama bir prototipin tanımı.

### 5. RimWorld storyteller: tehdit ölçeği ve zamanlama girdileri (topluluk wiki'si)
- **Kaynak:** https://rimworldwiki.com/wiki/AI_Storytellers (tarih yok; sürüm notları 0.11 ve 0.14 dönemine ait)
- **Alıntılar:** "In normal mode, the storyteller scales threats according to colonist count, player wealth, and a variety of other factors." (Normal modda storyteller, tehditleri koloni nüfusu, oyuncunun zenginliği ve başka etkenlere göre ölçekler.) "Phoebe gives lots of time between disasters to build your colony." (Phoebe, felaketler arasında koloniyi kurmak için çok zaman verir.)
- **Sayfa özeti:** Tehdit ölçeği yüzde ile ayarlanır (Peaceful %10 ile Losing is fun %220 arası). Zamanlama girdilerinden biri, son büyük olaydan bu yana geçen süredir. Zenginlikten bağımsız modda, koloni kuruluşundan sayılan sabit bir zaman eğrisi kullanılır (varsayılan 12 yıl, aralık 1-20 yıl). Adaptasyon: koloni iyi giderken zorluk artar, kolonistler hasar alınca düşer.
- **Sayfada yok:** Olay seçim mantığı, storyteller başına ağırlıklar, olay sıklığı, bekleme süresi ve tehdit bütçesi.
- **u-mod'da:** Seçim girdileri (M3); bölüm yoğunluk bütçesi ve adaptasyon (M4).
- **Güvenilirlik:** Orta. Topluluk wiki'si; değerler oyun sürümüne bağlı.

### 6. RimWorld "Randy": zorunlu büyük olay kuralı (topluluk wiki'si, kod bölümü)
- **Kaynak:** https://www.rimworldwiki.com/wiki/Randy
- **Alıntılar:** "If Randy has not fired a major threat after 13 days, the next Randy fired event becomes a major threat." (13 gün büyük tehdit ateşlenmezse, Randy'nin bir sonraki olayı büyük tehdit olur.) "Randy fires events on average every 1.35 days." (Randy olayları ortalama her 1,35 günde bir ateşler.)
- **Sayfa özeti:** Ortalama olay aralığı 1,35 gündür; bu "günde 1,35 olay" anlamına gelmez. Raid puanı çarpanı 0,5 ile 1,5 arasındadır.
- **u-mod'da:** Sessizlik sayacı (M4). Mod bunu otomatik uygulamaz; yazara sorar (M5).
- **Güvenilirlik:** Orta. Değerler oyunun tanım dosyasından; sürüme bağlı.

### 7. CK3 stres: kişilikle çelişen eylem stres üretir (ikincil haber, 2020)
- **Kaynak:** https://bleedingcool.com/games/new-crusader-kings-iii-developer-diary-explains-more-game-aspects (28 Haziran 2020; Paradox'un geliştirici günlüğünü aktaran haber. Birincil günlük açılamadı.)
- **Alıntılar:** "If a character has to do something against their personality, they receive a level of stress." (Karakter kişiliğine aykırı bir şey yapmak zorunda kalırsa stres seviyesi alır.) "Stress could be implemented in a variety of ways depending on the three key personality traits that occur in characters." (Stres, karakterlerdeki üç temel kişilik özelliğine bağlı olarak çeşitli biçimlerde uygulanabilir.)
- **Haberin özeti:** Stres, karakterin üç temel özelliğine bağlanır. İlk iki seviye hafiftir; üçüncü seviyede kırılmalar olasıdır. Geliştiriciler, stresi azaltan bir eylem yapmayı öneriyor. Hafıza ve karakter yapay zekâsı haberde yok.
- **u-mod'da:** Karakter kartında `kisilik` (üç özellik) ve `stres` (0-3) alanları; kişilikle çelişen eylem stres artırır (M1).
- **Güvenilirlik:** Düşük-orta. İkincil haber; kuralın ayrıntısı yok.

### 8. Dwarf Fortress dünya geçmişi dökümü: uluslar ve liderler (topluluk wiki'si)
- **Kaynak:** https://dwarffortresswiki.org/index.php/World_History_file
- **Alıntı:** "This is represented as ??? if the leader was born before history (before year 1)." (Tarih başlamadan önce doğan liderlerde yıl ??? olarak gösterilir.)
- **Sayfa özeti:** Legends modunda "p" ile yazılan `<kayit-adi>-world_history.txt` dosyası; uluslar, liderler (doğum, ölüm, hükümdarlık başlangıcı, gücü asıl hat, yeni hat ya da miras yoluyla alma), tanrı kayıtları ve çocuk sayısını içerir. Sayfa olay, savaş, eser, yer, kimlik ve neden bağlantılarını kapsamıyor.
- **u-mod'da:** Dış dökümü model almak yerine kendi olay şemasında kimlik ve neden alanlarını açıkça tutmak (M6).
- **Güvenilirlik:** Orta. Topluluk wiki'si; sayfa DF2014'ten taşındığını ve v53.17 için eskimiş olabileceğini belirtiyor.

## u-mod'a önerilen mekanizmalar

Her mekanizma bir alan ya da adım tanımıdır. Köşeli parantezdeki sayılar bulgu numarasıdır. "Tasarım" etiketli kurallar kaynakta yoktur; GOREV-UMOD kurallarından ya da kaynakların açık bıraktığı boşluklardan türetilmiştir.

### M1. Olay kartı (storylet) ve karakter kartı alanları
- **Olay kartı alanları:** `id`; `tur` (dünya | grup | karakter); `kosullar` (nitelik koşulları, ör. `nitelik >= esik`); `etkiler` (nitelik değişimleri ve olgu yazımı); `agirlik` (seçim ağırlığı); `tekrar` (tek_sefer | tekrarlanabilir | bekleme_N_tur); `zincir` (bağlı kart listesi); `taslak` (uydurulan her olgu için `true`). [2]
- **Tek sefer:** Kart bittiğinde bir "bitti" niteliği yazılır; kart kapısı bu niteliğe bağlanır. [2]
- **Zincir:** Zincirdeki kartlar tek bir niteliğin eşiklerine bağlanır. [2]
- **Karakter kartı ek alanları:** `kisilik` (üç temel özellik), `stres` (0-3), `son_buyuk_olay` (tur no). Kişiliğe aykırı eylem stres artırır. [7]

### M2. Nitelik sözlüğü ve tek anlam kuralı
1. Her niteliğin adı, sahibi (dünya | grup | karakter) ve tek anlamı bir sözlükte tutulur.
2. Sözlükte olmayan nitelik bir kart koşuluna yazılamaz. Mevcut bir niteliği başka anlamda kullanmak yasaktır. [3]
3. Kart başına koşul sayısı düşük tutulur. Sayı sınırı (ör. 3-4) tasarım önerisidir; [3] yalnızca "en az nitelik" ilkesini veriyor.
4. Nitelik ekleme ve silme değişiklik kaydına yazılır.

### M3. Tur döngüsü (her bölüm sonunda)
1. **Uygunluk:** Her hat için ön koşulları sağlanan ve `tekrar` kuralı izin veren kartlar listelenir.
2. **Seçim:** Hat başına tur başına en fazla bir kart. Havuzdan o an en uygun aday seçilir [1]. Ağırlık formülü tasarımdır: `agirlik` × "son büyük olaydan beri geçen süre" faktörü. Son büyük olay girdisi [5]'te geçer; çarpanın biçimi kaynakta yok.
3. **Uygulama:** Dünya tarafındaki etkiler işlenir. Ana hikâyedeki olaylar yazarın verdiği bilgiden okunur; yazarın metnine dokunulmaz.
4. **Kayıt:** Uygulanan her kart M6'da bir olaya dönüşür (`taslak: true`).
5. **Bekleme:** Seçilmeyen uygun kartlar sonraki tura aday olarak kalır; koşulları bozulursa düşer. (Tasarım.)
6. **Grup saati:** Her grup için `saat` alanı (ilerleme sayacı); dolunca grup kartı adayı doğar. (Tasarım; ayrıntısı u09 alanında.)

### M4. Sessizlik sayacı ve yoğunluk bütçesi
1. Her hat için `son_buyuk_tur` tutulur.
2. Eşik N bölüm (proje parametresi). Randy kodunda eşik 13 gün [6]; bu yalnızca bir örnektir. N dolunca hattın bir sonraki uygun kartı "büyük aday" olur. Mod bunu kendisi uygulamaz; M5 gereği yazara sorar.
3. **Bütçe (tasarım):** Bölüm başına en fazla X büyük olay. Bütçe dolunca büyük adaylar bir sonraki bölüme kalır.
4. **Adaptasyon:** Son bölümde karakterler ağır kayıp yaşadıysa (`stres` 2 ve üstü ya da bir ölüm), hafif kartlar öne alınır. Kaynağı [5]: kolonistler hasar alınca zorluk düşer. Eşik değerleri tasarımdır.

### M5. Karar tablosu: ilerle, donar, yazara sor

| Durum | Karar | Kayıt |
|---|---|---|
| Koşullar sağlanıyor; kart yalnızca dünya tarafında; bölüm bütçesi var | İLERLE | Olay yazılır (`taslak`) |
| Kart ana hikâyedeki aktif bir karakteri ya da mekânı kullanıyor; ya da hat zaten "bekliyor" | DONAR | Kesişme listesinde "bekliyor" |
| `geri_alinamaz: true` etkisi (ölüm, evlilik, ihanet, yönetim değişimi); ana hikâye karakterine doğrudan etki; M4 sayacı dolu; iki hat aynı karakter ya da kaynağı aynı anda istiyor | YAZARA SOR | Soru kartı açılır; yanıt gelene kadar hat donar |

Zamanlama kısmı [5] ve [6] ile desteklenir. Tablonun geri kalanı tasarımdır; dayanağı GOREV-UMOD kurallarıdır: ana hikâyeyi habersiz ilerletmemek ve büyük kararları yazara önermek.

### M6. Olay kaydı: nedensellik ve bilgi alanları
- **Alanlar:** `id`; `zaman` (bölüm ya da gün); `tur`; `katilimcilar` (id listesi); `yer`; `neden` (önceki olay id listesi; kök olaylarda `kok` işareti); `kart` (kaynak kart id); `etkiler` (nitelik değişimleri); `bilgi_kimde` (olayı bilen karakter id listesi); `durum` (taslak | onayli | celiskili); `kaynak` (ana hikâye olaysa bölüm referansı).
- **Kural:** `neden` ve `katilimcilar` mevcut kayıtlara işaret etmelidir; M8 bunu denetler.
- **Dayanak:** [4] olay ve varlıkların sorgulanabilir tablo olarak tutulabileceğini gösteriyor; [8] DF dökümünün olay ve neden alanlarını tarif etmediğini gösteriyor. Bu alanlar açıkça tanımlanmalı.

### M7. Anlatı malzemesi tarayıcısı (dünya durumundan anlatıya)
1. Desen sorgularını insan yazar; mod desen keşfetmez. [4]
2. Örnek desen: iki olay sırayla (A, sonra B); aralarında "X olmasın" kısıtı (`not-join` benzeri). [4]
3. Çıktı iki listeye yazılır:
   - (a) **Kesişme adayı:** Kesişme listesine öneri olarak girer; uygulanmaz.
   - (b) **Haber ya da dedikodu malzemesi:** kim, ne, kimden duydu, ne zaman. Yalnızca `bilgi_kimde` alanına göre üretilir. Mod metin yazmaz; yazarın kullanacağı taslak malzemedir. (Tasarım; [4] yalnızca "olay zincirlerini ayıklayıp sunma" fikrini veriyor.)
4. Her iki çıktı `durum: taslak` ile girer; yazar onaylamadan `onayli` olmaz.

### M8. Tutarlılık denetimi (tur ve bölüm sonunda)
Her ihlal için kural adı, olay id ve öneri üretilir:
1. `neden` referansları mevcut ve sebep, sonuçtan önce ya da aynı zamanda.
2. Ölü ya da etkisiz karakter sonraki olaylarda katılımcı olamaz.
3. Kullanılan her nitelik sözlükte tanımlı; değerler tanımlı aralıkta.
4. `tekrar: tek_sefer` kartı yalnızca bir kez uygulanmış.
5. `taslak` bir olgu yazarın onaylı metniyle çelişiyorsa `durum: celiskili` yapılır ve yazara sorulur.
6. Aynı varlık için iki hat aynı turda farklı değerde kayıt yazmışsa çelişki olarak işaretlenir.

Rapor: tur başına bir tablo; ihlal yoksa "temiz" satırı.
Dayanak: tasarım. [2] tek sefer bayrağını, [4] sorgu tabanlı denetimi, [8] kimlik ve neden alanlarının açıkça tutulması gerektiğini destekliyor.

## Doğrulanamayanlar

1. **DF Legends sayfası** (https://dwarffortresswiki.org/index.php/v0.34:Legends ve https://dwarffortresswiki.org/index.php/Legend): iki denemede de HTTP 429. Arama özetinden gelen şu iddialar DOĞRULANAMADI: "Reveal all history" ayarı; "world activation" özelliğinin 0.40.01 sürümünde gelmesi; x tuşuyla XML dökümü; legends_plus.xml ve DFHack; Legends Viewer.
2. **DF olay, savaş, eser ve olay nedenselliği:** açılmış hiçbir kaynakta yok. DOĞRULANAMADI.
3. **CK3 Dev Diary #31 "A Stressful Situation"** (stres seviyeleri, kırılma eşikleri, Seviye 3'te erken ölüm riski): forum sayfası iki denemede de HTTP 500. DOĞRULANAMADI.
4. **CK3 Dev Diary #58 "Stre(ss)tching the Traits"** (Shy, Forgiving, Diligent örnekleri; özellik değiştiricileri): iki adreste de açılamadı (önce HTTP 500, sonra hata sayfası). DOĞRULANAMADI.
5. **CK3 Dev Diary #105 "1.7 Bastion"** (hafıza sistemi, Memory Viewer, anıların solması): HTTP 500. DOĞRULANAMADI. Hafıza mekanizması kaynaksız olduğu için mekanizma listesine alınmadı.
6. **CK3 wiki "Stress" sayfası:** hata sayfası döndü. DOĞRULANAMADI.
7. **Emily Short: kalite tabanlı sistemde seyircinin seçtiği, salience sisteminde seçimin sistem tarafından yapıldığı** (arama özeti): açılan sayfada bu ayrım özetlenmedi. DOĞRULANAMADI. Doğrulanan kısım yalnızca salience'ın "havuzdan parça seçme" olduğu.
8. **Felt'in devam çalışmaları** (Winnow; örnek-tabanlı desen sentezi; "Select the Unexpected", ICIDS 2022; Ryan'ın "story recognition" etiketi): hiçbiri açılmadı. DOĞRULANAMADI.
9. **Failbetter Storynexus'un "quality-based narrative" etiketini kullanması** (arama özeti): açılmadı. DOĞRULANAMADI.
10. **James Owen Ryan, "Curating Simulated Storyworlds"** (UC Santa Cruz, 2018; eScholarship 1340j5h2) ve **Talk of the Town** simülasyonu: künye sayfası boş döndü; Talk of the Town hiçbir açılmış kaynakta yok. DOĞRULANAMADI. Dünya durumundan haber üretimi için en önemli açık hat budur.

## Zayıf veya çelişkili iddialar

1. **Randy birimi:** arama özeti "günde 1,35 olay" dedi; kaynak sayfa "ortalama her 1,35 günde bir olay" diyor. Doğru birim gün aralığıdır. Hesap (tasarım, kaynak değil): 1 / 1,35 ≈ 0,74 olay/gün. Sayfa özetinde, bu değerin Randy'nin ateşlediği olaylara ait olduğu ve görevlerin ayrı tetiklendiği notu var; bu not sayfanın kendi cümlesi olarak doğrulanmadı.
2. **Storylet'in "veri birimi" olarak çerçevelenmesi:** arama özeti Short'un storylet'i veri birimi saydığını söyledi. Açılan sayfa bunu yapmıyor; storylet'i kısa metin, karar noktası ve sonuç olarak tarif ediyor.
3. **Emily Short yazısının tarihi:** sayfada 12 Nisan 2016 ile açıklanmamış ikinci bir tarih (Ağustos 2017) görünüyor. 2016 kullanıldı; belirsizlik kayıtlı.
4. **Storylet seçim mantığı:** Failbetter 2010 sayfası sonraki storylet'in nasıl seçildiğini anlatmıyor; Short sayfası seçim mantığını yalnızca salience için kısaca veriyor. M3'teki seçim kuralı bu yüzden tasarımdır.
5. **RimWorld değerleri sürüme bağlı:** Randy'nin 13 gün, 0,5-1,5 çarpanı ve 1,35 gün değerleri oyun tanım dosyasından; wiki'nin sürüm notları karışık (0.11 ve 0.14 dönemleri). Güncel sürümde doğrulanmadı.
6. **DF dökümü eski olabilir:** sayfa DF2014'ten taşınmış; v53.17 için eskimiş olabileceğini kendisi belirtiyor.
7. **CK3 stres kuralı tek ikincil haberde:** Bleeding Cool 2020; birincil günlük açılamadı. Haber yalnızca "kişilikle çelişen eylem stres üretir" kuralını aktarıyor; eşikler ve sayılar yok.
8. **Failbetter yazıları tek stüdyonun deneyimi:** Echo Bazaar örnekleri; genellemeler dış kanıtla desteklenmedi.
