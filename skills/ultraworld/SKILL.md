---
name: ultraworld
description: Arka plan dünyası ve paralel hikâye skill'i (/u-mod); yazar ana hikâyeyi yazarken evrenin geri kalanını yaşatır; hat kartları, karakter kaydı, zaman çizelgesi, olgu kaydı, tohum ve hasat, kesişme listesi, onay kuyruğu, story bible, tutarlılık. /u-mod, paralel hikâye, 'yan karakter ne yapıyor', arka plan dünyası ya da evren tutarlılığı istendiğinde kullan.
---

# ultraworld: arka plan dünyası

Bu skill **ultrawrite** ailesinin parçasıdır. ultrawrite yazmadan önce bunu çağırır; tek başına da kullanılabilir. Dosya yolları bu skill'in klasörüne göredir.

> Bu dosya ultrawrite skill'inin parçasıdır. Kullanıcı `/u-mod` dediğinde ya da arka plan dünyası gerektiğinde oku ve uygula.

## u-mod: arka plan dünyası motoru

Bu skill, hikâye yazılırken dünyanın ana metinden bağımsız yaşamasını sağlar. Yan karakterler ekran dışında hedeflerinin peşinden gider, gruplar hamle yapar, ana hikâyedeki olayların sonuçları yayılır, paralel hatlar ilerler ve bunlar bir gün kesişir. Mod bu hareketlerin kaydını tutar, tutarlılığı denetler ve yazara önerir. Metni yazan yazardır.

Her turdan önce Bölüm 2'deki durum dosyalarını oku. Dosyada olmayan hiçbir durum var sayılmaz.

---

## 1. Ne yapar, ne yapmaz

**Yapar:** ekran dışı hatların hedef, engel ve sonuçlarını durum dosyalarında ilerletir; ana metinden çıkan zaman işaretlerini ve olguları kaydeder; çelişki ve kesişme adaylarını yazara sıralı liste olarak sunar; uydurduğu her olguyu `taslak` işaretler; her tur sonunda tek sayfalık özet verir.

**Yapmaz:**
- Ana hikâyeyi yazardan habersiz ilerletmez. Ana hikâyedeki bir olay yalnızca yazarın verdiği bilgiden okunur.
- Yazarın metnine dokunmaz, düzeltmez, yeniden yazmaz. Değişiklik yalnızca kuyrukta öneri olarak durur.
- Kendi uydurduğu bir olguyu `kesin` yapmaz. `kesin` yalnızca yazarın onayıyla olur.
- Büyük kararı kendisi vermez (Bölüm 4).
- Ekran dışı bir eylemi sahne metnine çevirmez. Eylem bir not olarak kalır; sahneye çevirmek yazarın işidir.

**İnisiyatif.** ana SKILL.md'nin "İnisiyatif alma" kuralı geçerlidir: emin değilsen sor. Kitle seviyesini ve üslubu ana SKILL.md'den devralır, kendiliğinden değiştirmez.

---

## 2. Durum dosyaları

Projede `evren/` klasöründe tut:

```
evren/
  hatlar.md        hat kartları (2.1)
  karakterler.md   karakter durum kayıtları (2.2)
  gruplar.md       grup saatleri ve ihmal sayaçları (2.3)
  zaman.md         zaman çizelgesi (2.4)
  olgular.md       olgu kaydı (2.5)
  tohumlar.md      tohum-hasat defteri (2.6)
  kesisme.md       bağ ve karşılaşma listeleri (2.7)
  kuyruk.md        yazar onay kuyruğu (2.8)
  tur-gunlugu.md   her turun tek sayfalık raporu
```

**Genel kurallar:**
- Dosya yoksa oluştur, ilk satırına alan sırasını yaz.
- Her kayıtın bir `id`si olur (`H-03`, `K-ayse`, `O-0147`). Id değiştirilmez, yeniden kullanılmaz.
- Kayıt silinmez. Artık geçerli değilse durumu `atildi`, `bitti` ya da `terk` olur.
- Tablo ya da alan listesi kullanılabilir; alan sırası proje boyunca sabit kalır. Sıra değişirse tur günlüğüne yazılır.

### 2.1 Hat kartı (`hatlar.md`)
Her yan hat ve grup hattı için bir kart.
- `id`, `pov`: karakter adı; grup ve kurum hatlarında "dış odak".
- `odak`: sıfır | iç-sabit | iç-değişken | iç-çoklu | dış.
- `hat_saati`: hattın işlenmiş son hikâye zamanı (taslak).
- `son_bolum`: ana metinde hattın son göründüğü bölüm.
- `son_gorunme_aralik`: o bölümden bu yana geçen bölüm sayısı (hesaplanır).
- `durum`: aktif | bekletme | donuk | bitti.
- `sonraki_donum`: bir sonraki olası dönüm noktası (taslak).
- `sonlanma_plani`: hattın nasıl bitebileceği; taslak, yazar onayıyla değişir.
- `baglanti_noktasi`: diğer hatlarla ortak yer, kişi, nesne ya da olay.
- `acik_sorular`: her soru için `cevap_kosulu` (hangi hatta, hangi noktada yanıtlanır).
- `gerekce_testi`: (a) ana hikâyeyle anlamlı bağı var mı, (b) kendi yayı ve çözümü var mı, (c) ana hikâyeden sürekli daha mı ilgi çekici? Beklenen cevap a ve b için evet, c için hayır. Aksi halde hat "ana hikâyeye örül" ya da "kaldır" olarak işaretlenir ve yazara sorulur.

### 2.2 Karakter durum kaydı (`karakterler.md`)
Ekran dışında hareket eden ya da ana hikâyeye bağlı her karakter için bir kayıt.
- `id`, `derinlik`: düz | yuvarlak. Düz karakterin kaydı tek satır ajanda olabilir; yuvarlak karakterde tam tur ve gizli katman vardır.
- `karakter_alani`: sahnedeki işlevi ve bağlı olduğu sahneler. İşlevi olmayan karaktere tur üretilmez.
- `dis_motivasyon` (zorunlu): ekran dışında peşinden gidilen somut hedef. Her turda güncellenebilen tek istek alanı budur.
- `ic_motivasyon` (zorunlu): hedefin gerekçesi, karakterin kendi cümlesiyle.
- `engel`: hedefin önündeki karşıtlık.
- `ozlem` (isteğe bağlı): söylenen ya da hayal edilen, peşinden gidilmeyen şey.
- `kor_nokta` ya da `ihtiyac` (isteğe bağlı, yalnızca yazar isterse): hedefte değil yöntemde yanılgı ya da karakterin fark etmediği eksik.
- `son_gorunme`: sahne, bölüm ve hikâye zamanıyla karakterin son durumu, bildikleri ve ilişkileri.
- `bilgi_durumu`: karakterin hangi olguyu hangi kanaldan (gördü, duydu, söylendi) bildiği.
- `sabit`: saç, göz, boy, doğum tarihi gibi değişmeyecek olgular. Yazar onayı olmadan değişmez; değişirse çakışma olarak işaretlenir.
- `degisken`: konum, ilişkiler, hedef, kaynaklar. Her güncelleme `degisim_izi` alanına bağlanır.
- `degisim_izi`: hikâye zamanı, eski değer, yeni değer, neden, etkilenen olay id.
- `gizli_katman` (yalnızca yuvarlak karakterler): geçmiş ve gençlik notları, `acilma_kosulu` (ana hikâyede hangi olayla açığa çıkabilir). Bu blok metne taşınmaz; sızıntı kontrolü için vardır.

### 2.3 Grup saati (`gruplar.md`)
Her engel, plan ya da tehdit bir saattir. Blades in the Dark'taki tik mantığı kullanılır.
- `id`, `ad`, `sahip` (grup ya da tehlike).
- Saat `ad`ı engelin adıdır (ör. "liman gümrüğü"), planın değil.
- `tur`: tehdit | yarış | bağlı | geri sayım | çekişme.
- `boyut`: 4 | 6 | 8 segment.
- `tik_olcegi`: hafif 1 | standart 2 | ciddi 3 tik.
- `tik_kaynagi`: saat yalnızca bir tik kaynağıyla ilerler (bölüm sonrası yan etki ya da zar sonucu). Kaynaksız tik yazılmaz.
- `dolunca_etki`: TASLAK-KARAR. Yazar doldurur; mod yalnızca öneri verir.
- `odak`: evet | hayır.
- `ihmal_sayaci`: odakta olmayan her turda +1.
- `son_eylem`: son turda ne yapıldığı ve kimin için.

**Kurallar:**
- Odaktaki grup sayısı N'dir (yazarın parametresi). Odakta olmayan grup donar; yalnızca ihmal sayacı artar. Sayaç N tur sonra dolarsa birikmiş tikler taslak olarak eklenir; N ve üst sınır yazarın kararıdır.
- Grup eylemi, grubun kendi kartındaki menüden seçilir. Başlangıç menüsü: ele geçirme ya da yer kazanma; rakibi ifşa etme; istihbarat toplama; kısa vadeli hedef; varlık edinme; borç ya da iyilik tahsili; siyasi baskı ya da gözdağı.
- Zar kullanılırsa sonuç dilime çevrilir (önerilen: 1-3 → 1 tik, 4-5 → 2, 6 → 3; zar türü ve kritik ölçütü yazar tanımlar, kaynakta doğrulanmış değer yoktur). Tüm segmentler dolunca tehdit sonuçlanır; bu büyük karardır ve kuyruğa gider.

### 2.4 Zaman çizelgesi (`zaman.md`)
- `id`: D1, D2, ... Ana eylemin başı D1; her zaman işareti sıradaki numarayı alır.
- `hikaye_zamani` (tarih ya da gün; göreliyse hangi olaya göre), `tur` (mutlak | göreli | örtük), `gecen_sure`, `yer` (bölüm ve paragraf), `hat` (ana ya da ekran dışı hat id), `not`.
- `kayit_zamani`: satırın yazıldığı ya da düzeltildiği an. Düzeltmede eski satır silinmez; `gecersiz_kilindi` olarak işaretlenir ve yeni satır eklenir.

**Kurallar:** Zaman bu tabloda tutulur, stil sayfasında değil. Yaş, geçen süre ve konum hesapları dilden tahmin edilmez; iki olay arasındaki farktan hesaplanır. Hesaplanamayan değer "bilgi eksik" olarak işaretlenir.

### 2.5 Olgu kaydı (`olgular.md`)
Her dünya olgusu tek satırdır.
- `id` (O-0001), `tur` (karakter | mekân | nesne | kural | zaman | terim | olay), `ozne`, `yuklem`, `deger`.
- `baslangic` ve `bitis`: hikâye zamanı ve başlatıcı ya da sonlandırıcı olay id (bitiş boşsa hâlâ geçerli).
- `neden`: önceki olay id listesi (kök olaylarda `kok`). `bilen`: olguyu bilen karakter id listesi.
- `kaynak`: metnin bölüm ve paragrafı ya da `u-mod cikarimi`. `iddia_duzeyi` (kesin | taslak | celiskili | atildi), `karar_veren` (yazar | mod).

**İddia düzeyleri:**
- `kesin`: metinde kanıtı olan ve yazarın onayladığı olgu. Yalnızca yazar bu düzeyi verir.
- `taslak`: modun uydurduğu ya da yazarın henüz onaylamadığı olgu. Her yeni olgu buradan başlar.
- `celiskili`: bir taslak olgu bir kesin olguyla, ya da iki kesin olgu birbiriyle çelişiyorsa. Yazara sorulur.
- `atildi`: yazar reddetti. Arşivde kalır.

Genel kurallar (ör. "bu şehirde gece sokağa çıkma yasak") `tur: kural` ile ayrı tutulur. Bir olay kuralı çiğnerse "süreklilik ihlali" bayrağı alır.

### 2.6 Tohum-hasat defteri (`tohumlar.md`)
Ana metinde ekilen her ayrıntı, söz ya da nesne bir tohumdur.
- `id`, `hat`, `bolum`.
- `tur`: nesne | kisi | soz | imge | bilgi | yanilticilar.
- `bagli_aday`: kesişme adayı id ya da boş.
- `hasat_penceresi`: bölüm aralığı.
- `durum`: acik | odendi | terk | yeniden_tohumlandi.
- `yas`: kaç bölümdür açık.
- `not`.

**Uyarılar (zorunlu değil, yalnızca yazara sorulur):**
- Hasat penceresi aşılırsa "asılı silah" uyarısı.
- Bağlı aday yoksa "boş tohum" uyarısı.
- `tur: yanilticilar` olan tohumlar bilinçli kırmızı ringa sayılır. Uyarı üretmez, ama kapanışta bağlamıyla kapatılmazsa yazara sorulur.

### 2.7 Kesişme listesi (`kesisme.md`)
İki ayrı kayıt türü tutulur: bağ ve karşılaşma. Karıştırılmaz (Bölüm 5.1).

**Bağ (kalıcı ilişki):** `bag_id`, `taraflar` (A, B), `tip` (aile | iş | komşuluk | geçmiş olay | ortak kurum | tematik ayna), `taraflar_biliyor_mu` (evet | hayır | kısmen).

**Karşılaşma (olay):** `zaman`, `yer`, `olay`, `gerekce_baglari` (karşılaşmayı açıklayan bağların ya da hedeflerin listesi), `temas` (fiziksel ya da nesnel karşılaşma var mı), `bilgi` (kim neyi kimden öğrendi), `fark` (taraflar birbirini tanıdı mı), `yapi_tipi` (örgülü | paralel | mozaik | hyperlink), `isaret_duzeyi` (1-3), `durum` (aday | bekliyor | onayli | ertelendi | iptal).

### 2.8 Yazar onay kuyruğu (`kuyruk.md`)
Yazara sunulan her madde burada bekler.
- `id`, `tur_no`, `tur` (buyuk-karar | kesisme-adayi | celiski | olasilik-eslesmesi | donus-onerisi | bilgi-eksikligi | tehdit-dolumu), `ne` (bir cümle).
- `secenekler`: en az iki seçenek; her çelişki için en az iki düzeltme. `durum` (bekliyor | kabul | ertele | yeniden-kurgula | iptal). `karar_notu`: yazarın kendi cümlesi.

---

## 3. Tur yöntemi

Her bölüm bittiğinde, ya da yazar "tur" dediğinde, aşağıdaki sırayla çalış. Adım atlanmaz; değişiklik yoksa "değişiklik yok" yazılır ve geçilir.

1. **Oku.** Yeni ana bölümü salt okunur al. Metne değişiklik yapma. Bölümün zamanını, mekânlarını ve kimin nerede kime baktığını not et.
2. **Sahne günlüğü.** Her sahne için: sıra, anlatı zamanı (mutlak | göreli | örtük), mekân, karakterler, kimin neyi öğrendiği, nesne ve beden durumu (yara, giysi, eşyanın yeri), kanıt konumu. Bu kayıt olgu kaydının ve zaman tablosunun ham malzemesidir.
3. **Zaman ve olgu kaydı.** Zaman işaretlerini `zaman.md`ye işle. Yeni her olgu `olgular.md`ye `taslak` olarak girer. `kesin` satırlara dokunulmaz; çelişen yeni olgu `celiskili` bayrağıyla kaydedilir.
4. **Tutarlılık denetimi.** Bölüm 6'nın kontrol listesini uygula.
5. **Ekran dışı tur birimi.** Her aktif hat için bir birim (3.1). Durumu değiştirmeyen tur yazılmaz.
6. **Grup saatleri.** Odaktaki gruplar için eylem ve tik kararı. Odakta olmayanlar donar, ihmal sayacı artar.
7. **Olasılık kaydı.** Bir soru zar ya da olasılık gerektiriyorsa (3.2), seviye zardan önce yazılır. Sonuç geldikten sonra seviye değiştirilmez.
8. **Kesişme ve tohum kontrolü.** Her hat çifti için ortak yer ve zaman penceresi, nesne, köprü kişi ve olay taranır. Tohumların hasat pencereleri kontrol edilir (Bölüm 5).
9. **Yazara özet.** `tur-gunlugu.md`ye tek sayfa yaz: değişen taslak olgular, açılan ya da donan hatlar, kuyruk maddeleri, doğrulanamayan varsayımlar. Yazara yalnızca kuyruktaki maddeleri sor.

### 3.1 Ekran dışı tur birimi
Her aktif hat için tek birim, Swain'in hedef-engel-sonuç ve tepki-ikilem-karar ritmiyle kurulur:
1. **Hedef:** `dis_motivasyon` bu turda ne istiyor?
2. **Engel:** hangi karşıtlık var?
3. **Sonuç:** tamam, kısmi ya da başarısız mı?
4. **Ara adım:** tepki, ikilem, karar. Kararın yeni `dis_motivasyon` olması yazar onayıyla uygulanır. Bu kural kaynakta doğrulanmadı; tasarımdır.
5. **Gerekçe ve test:** her eylem karakterin kendi cümlesiyle yazılır ("Şunu yapıyor, çünkü ..."); yuvarlak karakterde hamle "ikna edici biçimde şaşırtıyor mu?" sorusundan geçer, geçmezse birim yeniden kurulur. Eylem "yanlış" ya da "kötü" diye etiketlenmez.

Birim bir not olarak yazılır, sahne metni değildir. Bir not en çok dört cümledir.

### 3.2 Olasılık kaydı
Sıra değişmez: soru ve olası yanıtlar yazılır, seviye seçilir, sonra zar atılır.

Seviyeler (eşik ve evet olasılığı): neredeyse kesin 11+ (%90); muhtemel 26+ (%75); 50/50 51+ (%50); pek muhtemel değil 76+ (%25); küçük ihtimal 91+ (%10).

- Zar: 1-100 arası bir sayı (Bash: `shuf -i 1-100 -n 1`). Eşiğe eşit ya da yukarıdaysa "evet".
- Zar tekrar atılmaz. Sonuç beğenilmezse olasılık kaydı yazarın kararıyla yeniden açılır ve gerekçesi yazılır.
- Olağandışı yanıt (eşleşme) için kural yazar tarafından tanımlanır. Kaynaklarda doğrulanmış bir çift zar kuralı yoktur. Olağandışı yanıt her zaman büyük karar sayılır ve kuyruğa gider.
- Kayıt biçimi: `soru | seviye | zar | sonuc | gerekce | taslak`. Gerekçesiz sonuç yazılmaz.
- Olasılık sonucu tek başına ana hikâyeyi değiştirmez; yalnızca taslak olgu üretir.

---

## 4. Karar tablosu: ilerle, dondur, yazara sor

| Durum | Karar | Kayıt |
|---|---|---|
| Koşullar sağlanıyor; hat yalnızca dünya tarafında; bölüm bütçesi var | İLERLE | Olgu `taslak` olarak yazılır |
| Birim ana hikâyedeki aktif bir karakteri, mekânı ya da nesneyi kullanıyor; ya da hat zaten "bekliyor" | DONDUR | Kesişme listesinde `bekliyor` |
| Geri alınamaz etki (ölüm, evlilik, ihanet, yönetim değişimi, kurum kuruluşu); ana hikâye karakterine doğrudan etki; sessizlik sayacı dolu; iki hat aynı karakteri ya da kaynağı aynı anda istiyor; kilit ihlali | YAZARA SOR | Kuyrukta soru kartı; yanıt gelene kadar hat donar |

**Kurallar:**
- Geri alınamaz etki ve ana hikâye karakteriyle çakışma her zaman yazara gider; mod bunları kendi başına çözmez.
- **Sessizlik sayacı.** Her hat için `son_buyuk_tur` tutulur. Yazarın belirlediği N bölüm (proje parametresi) dolunca hattın bir sonraki uygun olayı "büyük aday" olur ve yazara sorulur. Mod bu olayı kendisi uygulamaz.
- **Bölüm bütçesi.** Bir bölümde en çok X büyük olay (yazarın parametresi). Bütçe dolunca büyük adaylar bir sonraki bölüme kalır.
- **Bekletme.** Hat, belirlenen sürede (öneri: üç bölüm) yeni olay üretmezse `bekletme` durumuna geçer. Yazar isterse `donuk`a alır.

---

## 5. Kesişme

### 5.1 Bağ ile karşılaşmanın ayrımı
Bağ kalıcı bir ilişkidir: aile, iş, komşuluk, geçmiş olay, ortak kurum. Karşılaşma bir olaydır. Bağ olmadan karşılaşma olabilir, ama bu durumda gerekçe aranır (5.2). `gerekce_baglari` boşsa karşılaşma bölümsel sayılır ve aday olmaz.

Tarama dört ortak öğeye bakar: yer ve zaman penceresi, nesne, köprü kişi, olay (kaza, cenaze, yangın, haber).

### 5.2 Tesadüf denetimi
Her karşılaşma adayı gerekçe düzeyine göre sınıflanır:
- **Yakınsama:** iki hattın hedefi de o yere ve o ana götürür. Kabul edilir.
- **Yarı tesadüf:** yalnızca bir hatta gerekçe var. Yalnızca bedel testini (5.3) geçerse kabul edilir.
- **Saf tesadüf:** gerekçe yok. Yazar açıkça istediyse ve "tesadüf" olarak işaretlendiyse kabul edilir.

Ayrıca koşul sayılır: karşılaşmanın olması için kimsenin kontrol etmediği koşullar. Yazarın eşiği aşılırsa uyarı verilir.

Yarı tesadüf ya da saf tesadüf adaylarında mod, bir hattın kendi hedefinden o yere gitme gerekçesini önerebilir. Bu bir öneridir; metne yazılmaz.

### 5.3 Bedel ve çıkarma testi
- Karşılaşma çıkarılınca bir hattın dayanağı kalıyor mu?
- Karşılaşma en az bir hat için kayıp, karar ya da yeni hedef doğuruyor mu?

İki cevap da hayırsa aday dekordur ve düşürülür. Bu test, "olası ya da zorunlu" ölçütünün uygulanabilir biçimi olarak tasarımdır; kaynak değildir.

### 5.4 İşaret merdiveni
Kesişmeye yaklaşan olaylar üç düzeyde işaretlenir:
1. **Gizli tohum:** ayrıntı arka planda kalır, karakter dikkat etmez.
2. **Yaklaşan işaret:** kesişmeden bir ya da iki bölüm önce haber, söz ya da görüntü.
3. **Dramatik ironi:** okur iki hattın yaklaştığını bilir, karakterler bilmez.

Sürpriz için düzey 1-2 ve kısa pencere; gerilim için düzey 3 ve uzun pencere. Yüksek riskli kesişmelerde pencere uzun tutulur.

### 5.5 Kesişme anının bakış açısı
Mod öneri üretir, seçimi yazar yapar:
- **Sürpriz:** kesişme, bilmeyen hattın kısıtlı bakışında gösterilir.
- **Gerilim:** okur bilir, karakter bilmez; kesişmeden önceki sahneler bilmeyen hattın bakışında kurulur.
- **Bedel:** bedeli ödeyen hattın bakışı.
- **Çift bakış:** iki hat iki bölümde gösterilir.

Kesişme anı bölüm sınırına konabilir. İki hat aynı zamana ya da bağlantı noktasına yaklaşırsa geçiş sıklığını artırma seçeneği yazara önerilir; otomatik uygulanmaz.

---

## 6. Tutarlılık denetimi

### 6.1 İlkeler
- **Durumu modele bırakma.** Mod durumu hatırlamaz. Her turda dosyalardan okur. Dosyada olmayan durum yoktur.
- **Açık kayıt.** Her iddia bir kayda bağlanır ya da "kanıtsız taslak" olarak işaretlenir. Denetim düzeltmez; bulunan çelişki `celiskili` olarak kaydedilir ve yazara sorulur.
- **Öncelik.** Önce olay ve karakter durumu; sonra zaman ve nedensellik; sonra fiziksel ayrıntı; sonra terim ve yazım.
- **Otomatik hakem tek başına kabul edilmez.** Başka bir model ya da skor bir çelişki "bulamadı" dese bile kayıt elle kontrol edilir. Hakem, üretici ile aynı koşumda çalışmaz. Her ölçütte birkaç örnek insan (yazar) tarafından kontrol edilir.

### 6.2 Çelişki kategorileri
1. **Fiziksel tanım:** saç, göz, boy, yaş, yara.
2. **Zaman sırası ve takvim:** tarih, haftanın günü, yolculuk süresi, geri dönen ölü karakter.
3. **Dünya kuralı.**
4. **İsim ve terim yazımı.**
5. **Mekân coğrafyası, mesafe ve yön.**
6. **Gerçek dünya bağlamı:** mevsim, hava, ay evresi, dönemin giysisi.
7. **Bilgi durumu:** kim neyi ne zaman biliyor. Bu kategori bir öneridir; kaynağı yoktur.

**Şiddet:**
- `kesin-celiski`: iki `kesin` olgu çelişiyor. Hemen yazara gider.
- `olasi-celiski`: bir `taslak` olgu bir `kesin` olguyla çelişiyor. Kuyruğa girer.
- `kontrol-gerek`: mod'un bilmediği bir alanda. Dış doğrulama gerekir.

### 6.3 Tur sonu kontrol listesi
1. Her büyük ve geri alınamaz etkinin `neden` alanı dolu mu?
2. Ölü ya da etkisiz bir karakter sonraki olayda katılımcı mı?
3. Kullanılan her değer tanımlı aralıkta mı?
4. Tekrar kuralı olan olay, izin verilen sayıdan fazla uygulandı mı?
5. Bir `taslak` olgu bir `kesin` olguyla çelişiyor mu?
6. Aynı varlık için iki hat aynı turda farklı değer yazdı mı?
7. Yeni olgu sabit veriyle (boy, doğum tarihi) çelişiyor mu?

Rapor: tur başına bir tablo; ihlal yoksa "temiz" satırı. Tur başına çelişki sayısı eğilim için tutulur; tek başına kalite ölçüsü değildir.

---

## 7. Dönüş denetimi: ekrana dönen yan karakter

Yan karakter ana metne döndüğünde:
1. **Son görünüm:** karakterin o sahnedeki durumu, bildikleri ve ilişkileri, hikâye zamanıyla.
2. **Olay günlüğü:** son görünümden bugüne tur tur kayıtlar.
3. **Bilgi durumu:** karakter neyi bilebilir? Günlükte kanalı olmayan bir bilgi dönüşte uydurulmaz; açık soru olarak yazara bırakılır.
4. **Değişim izi:** aradaki her değişim `degisim_izi`ne bağlı olmalı. Bağlı değilse kayıt tamamlanır ve `taslak` işaretlenir.
5. **Yeni katkı testi:** dönüş sahneye yeni bir şey getiriyor mu? Getirmiyorsa "önerilmiyor" olarak işaretlenir.
6. **Çıktı:** yazara en çok üç dönüş seçeneği. Metin yazılmaz.

---

## 8. Kanıt düzeyleri

Her mekanizmanın dayanağı, `raporlar/umod/` altındaki ham raporlarda numaralı bulgularla izlenebilir.

| Düzey | Anlamı | Mekanizma örnekleri |
|---|---|---|
| **Ölçülmüş** | Deney ya da ölçüm var. Yine de Türkçe roman için genellenmemiştir. | Olgu sorgusuyla çelişki tanısı ve sınıflandırma (FlawedFictions, NoCha, ConStory); zaman ve konum takibinde düşük başarı (TLDM, FlawedFictions); yapay ajan simülasyonlarında tutarlılık (Generative Agents ve sonrası, ön baskılar) |
| **Uygulayıcı kaynağı** | Oyun tasarımı, yazar ya da geliştirici açıklaması. Deney yok. | Storylet ve nitelik kapıları (Failbetter, Short); tik saatleri ve cephe (Blades in the Dark, Dungeon World); ekran dışı hedef-engel birimi (Swain); want ve need ayrımı (Hauge); gizli katman (Moore röportajı) |
| **Tasarım** | u-mod'un kendi önerisi. Kaynakta karşılığı yok ya da boşluğu dolduruyor. | Tur sıklığı, bütçe ve eşikler, ihmal sayacı üst sınırı, zar eşikleri, kritik ölçütü, kaos ayarı, bağ-karşılaşma ayrımının biçimi |
| **Doğrulanamadı** | Kaynak açılmadı ya da iddia bulunamadı. **Kural yazılmaz.** | Mythic'in çift zar tetikleyicisi, Dwarf Fortress Legends ayrıntıları, CK3 stres eşikleri, Dramatica'nın dört hat modeli, Talk of the Town |

**Kaynak sınırı.** Kaynakların çoğu İngilizce ve Batı romanı ya da oyun üzerinedir. Türkçe doğrulaması yoktur. Her yeni mekanizma önce kısa bir bölüm denemesinde sınanır ve sonuç tur günlüğüne yazılır.

---

## 9. ultrawrite ile ilişki

- Mod notları (sahne günlüğü, dönüş seçenekleri, tur raporu) metin değildir. Yazar bu notlardan metin yazdırırsa, metin ana SKILL.md'nin "Çivi kurallar" bölümüne uyar.
- Kitle seviyesi ve üslup ana SKILL.md'nin 0.2 ve 0.3 bölümlerinden alınır; mod bunları kendiliğinden değiştirmez. Seviyenin üstündeki ayrıntı (kan, cinsellik, vahşet) mod notlarında da yazılmaz; gerekirse kuyruğa "seviye dışı" bilgisiyle girer.
- Uydurulan her ad, yer ve nesne `taslak, onayını bekliyor` işaretiyle kaydedilir. Bu kural ana SKILL.md'nin 3. bölümündeki dürüstlük kuralıyla aynıdır.

---

## 10. Başlangıç

1. **Yazara sor:** hat sayısı, bölüm boyutu, odak grup sayısı N, sessizlik eşiği ve bölüm başına büyük olay bütçesi. Yanıt gelmeden kayıt açma. "Sen seç" denirse öneri değerleri (3 odak grup, 3 bölüm sessizlik eşiği, bölüm başına 1 büyük olay) kullanılır ve tur günlüğüne not edilir.
2. **Dosyaları aç ve mevcut metni kaydet.** `evren/` ve 2. bölümdeki dosyalar oluşturulur; her dosyanın ilk satırına alan sırası yazılır. Yazarın onayladığı olgular `kesin`, geri kalanı `taslak` girer.
3. **İlk tur yalnızca okuma ve kayıttır.** Ekran dışı ilerleme yazarın ilk onayından sonra başlar.


---

## Paralel hikâye ve evren

Ayrıntı: `raporlar/10-evren-paralel.md`.

## Paralel hikâye ve kesişme (kaynaklı, ayrıntı raporda)
- Yan karakterin ekran dışı hayatı için ana test: karakter ana metinde "all but absent" olup yine de metnin sınırları içinde kurulur (Cook 2024, Critical Quarterly, doi:10.1111/criq.12785).
- Kesişme sahnesinde her hat diğerinin sonucunu değiştirmeli. Bir hat çıkarılınca yapı çözülmüyorsa hat gereklidir, yoksa fazladır (Michel).
- Kesişmeyi ilan etme ama önceden işaret eden bir ayrıntı bırak.
- Her hattı tek geçişte baştan sona oku (orta güven). Her sahnede kurulan kişi, yer, zaman ve bedensel kuralı o an tutarlılık belgesine yaz.
- Biyolojik kuralı paragrafla açıklama, bedende görünen somut sonuçla göster (orta güven).
- Zayıf: "braided" ile "parallel" ayrımı kaynaklar arasında net değil; story bible'ın etkisi ölçülmedi; storylet yaklaşımı romana uyarlama benim çıkarımım.
- Türkçe vampir kurgusunun ilk örnekleri biyolojik değil toplumsal korku metaforu (Kaya 2021, Kün); "ilk roman" iddiası kaynakta "sayılır" ifadesiyle.

## Uyarı
Ana hikâyeyi yazardan habersiz ilerletme; uydurulan her olgu taslak işaretlenir ve kullanıcıya bildirilir.


---

## Ek dosyalar

- `raporlar/umod/`: u-mod tasarımının kaynak raporları.
- `raporlar/10-evren-paralel.md`: paylaşılan evren ve paralel anlatı araştırması.
