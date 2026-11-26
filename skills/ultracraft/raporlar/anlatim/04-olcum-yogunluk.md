# Ölçüm ve yoğunluk: sözcük/anlam oranı için bilimsel karşılıklar

Kapsam: Bir anlatımın sözcük sayısıyla anlattığı şey arasındaki oranı ölçen kavramlar (sözcüksel yoğunluk, önerme yoğunluğu, bilgi yoğunluğu), çeviri Türkçesinde açıklaştırma, büyük dil modellerinde gereksiz uzunluk ve okur tercihine dair deneyler. Çalışma, Haiku ajanlarıyla yapılmış tek turluk bir taramadır; doğrulanan kaynaklar aşağıda işaretli.

Not: Bu dosya, `arastirma/anlatim/` altındaki 01 ve 02 dosyalarından ayrı yazıldı. Ateşman okunabilirlik formülü ve TrGLUE istatistikleri `07-ritim-cumle.md` ile örtüşebilir; ayrıntılı çapraz kontrol yapılmadı.

## Bulgular

**1. Uniform bilgi yoğunluğu (UID): bilgi yükü cümleye eşit dağılınca anlaşılırlık artıyor.**
- Ne: Konuşmada bilgi (sürpriz, surprisal) birimler arasında dengeli dağılıyorsa işleme kolaylaşıyor; dalgalanma kabul edilebilirliği düşürüyor.
- Kaynak: Meister, Pimentel, Haller, Jäger, Cotterell, Levy (2021), "Revisiting the Uniform Information Density Hypothesis", EMNLP 2021. https://arxiv.org/abs/2109.11635
- Alıntı: "non-uniformity in information density is predictive of lower acceptability." (9 kelime)
- Kullanım: Bir cümlede bilgi bir yerde yığılıp başka yerde boşalmamalı. Pratik sonuç: tek bir cümlede üç yan cümle ve iki açıklama kuyruğu yerine, bilginin ağırlığını cümleye eşit dağıtmak. Kötü: "Yere, o adam, yorgunluktan ve bütün gün süren yürüyüşten sonra, sonunda düştü." İyi: "Yorgun adam yere düştü." Not: İyi örnek benim yazdığım uygulama örneğidir, kaynaklı değildir.
- Kanıt düzeyi: kanıtlı (ölçüm; ama dil üretimi ve kabul edilebilirlik deneyleri, edebi metin değil)
- Güvenilirlik: orta. Hipotez kendi içinde tartışmalı; yazarların kendisi "birçok yönü açık değil" diyor. Levy & Jaeger (2007) atfı bu sayfada doğrulanamadı.

**2. Sözcüksel yoğunluk (Ure, Halliday): içerik sözcüğü oranı yazılı metinde daha yüksek.**
- Ne: Sözcüksel yoğunluk, içerik sözcüklerinin toplam sözcüğe oranıdır. Ure (1971) bu oranı tanımlamış, Halliday (1985) paydayı yeniden ele almıştır. Yazılı metinler konuşmadan genelde daha yoğundur.
- Kaynak: Ure (1971) ve Halliday (1985) birincil kaynakları DOĞRULANAMADI. İkincil kaynak: https://en.wikipedia.org/wiki/Lexical_density
- Alıntı: DOĞRULANAMADI (birincil kaynak açılamadı).
- Kullanım: Bu bir ölçüm araçtır, bir kural değildir. "Sözcüksel yoğunluk" ile "az sözcük" aynı şey değil: sözcüksel yoğunluğu yüksek bir metin, içerik sözcükleri (isim, fiil, sıfat) ağırlıklı ama gereksiz sözcüklerle dolu olabilir. Ölçüm, işlevsel sözcüklerin (zamir, edat, bağlaç) oranını da hesaba katmalı.
- Kanıt düzeyi: folklor/ölçüm tanımı (birincil kaynak doğrulanmadı)
- Güvenilirlik: düşük. Formüller kaynaklar arasında farklı (Wikipedia'da 100 çarpanı var, bazı kaynaklarda yok; başka bir kaynakta yazılı İngilizce için 3-6 aralığı veriliyor).

**3. Önerme (fikir) yoğunluğu: anlatılan olguya oranla sözcük sayısı.**
- Ne: Önerme yoğunluğu, bir metindeki önerme (olgu/yargı) sayısının sözcük sayısına bölümüdür. Snowdon ve arkadaşlarının (1996) yöntemi, Brown ve arkadaşları (2008) ise bunu otomatik hesaplamıştır.
- Kaynak: Brown, Snodgrass, Kemper, Herman, Covington (2008) "Idea Density" (https://www.ai.uga.edu/sites/default/files/inline-files/caspr/BrownSnodgrassKemperHermanCovington2008.pdf). Çok dilli karşılaştırma: Kaise, Tsuchiya, Oya, PACLIC 2025 (https://aclanthology.org/2025.paclic-1.25.pdf); Türkçe değeri bu özette yok.
- Alıntı: DOĞRULANAMADI (tam metin açılmadı).
- Kullanım: Felsefemizin en doğrudan karşılığı bu ölçüdür: "kaç fikir / kaç sözcük". Türkçede bir sözcük (ekler yoluyla) birden çok önermeyi taşıyabildiği için, İngilizce önerme sayımı Türkçeye birebir uygulanamaz; Türkçe için ayrı bir ölçüm gerekir.
- Kanıt düzeyi: kanıtlı (ölçüm yöntemi), Türkçe uygulaması yok
- Güvenilirlik: orta. Yöntem sağlam; Türkçe değeri yok.

**4. Okur tercihi: kısa ve basit metin, çoğu durumda daha iyi okunuyor.**
- Ne: Harvard Shorenstein'ın (Shulman, Markowitz, Rogers, 2024) Washington Post ve Upworthy'den 30.000'den fazla alan deneyi, sade başlıkların daha çok tıklandığını gösteriyor. Gazeteciler ve yazarlar bu tercihi paylaşmıyor.
- Kaynak: Shulman, Markowitz, Rogers, "Reading dies in complexity", Science Advances, Haziran 2024. https://www.hks.harvard.edu/publications/reading-dies-complexity-online-news-consumers-prefer-simple-writing
- Alıntı: "did not show this pattern" (4 kelime; yazarların gazeteciler için kullandığı ifade)
- Kullanım: Başlıkta ve kısa metinde sadelik işe yarıyor. Ama etki küçük: tıklama oranı 2,1'e 2,0 (özet haberde aktarılan örnek) **[DENETİM: bu rakam makalede bulunamadı; doğrulanana kadar kullanma]**. Bu yüzden "sade yaz" kuralı kanıtlı; "her cümle kısa olsun" kanıtlı değil.
- Kanıt düzeyi: kanıtlı (büyük alan deneyi), ama tıklama ölçüsü, anlama değil
- Güvenilirlik: yüksek (ölçüt ve büyüklük), orta (dış geçerlilik: başlıklar)

**5. Web metninde kısa sürüm anlamı kaybetmedi.**
- Ne: Nielsen Norman Group'un 21 teknik kullanıcıyla yaptığı deneyde, yeniden yazılmış metin daha çok tercih edildi ve anlama düşmedi.
- Kaynak: NN/g, "Applying Writing Guidelines to Web Pages" (http://www.nngroup.com/articles/applying-writing-guidelines-web-pages)
- Alıntı: "concise writing is not inconsistent with comprehensive writing." (8 kelime)
- Kullanım: Kısa metin kapsamı azaltmak zorunda değil. Kaynağın kendi sözcük sayıları birbirini tutmuyor (2.232 ve 2.425; yüzde 54 oranıyla çelişiyor), bu yüzden tek bir oran olarak almayın.
- Kanıt düzeyi: zanaat (kullanıcı çalışması, küçük örneklem)
- Güvenilirlik: düşük-orta. n=21, rakamlar tutarsız, yazar kurumsal bir yayın.

**6. Ayrıntılı (uzatılmış) metin: okuma süresi artıyor, anlamada kazanç yok.**
- Ne: Kent State lisans öğrencisi çalışmasında, açıklamalı ve açıklamasız ders metinleri karşılaştırıldı. Açıklamalı olanlar daha uzun sürede okundu; hatırlama ve anlama düzeyi benzer kaldı.
- Kaynak: Kent State lisans araştırması (oaks.kent.edu, 2018 özet sayfası). Bu çalışmanın tam metni ve kaynakçası DOĞRULANAMADI; sadece özet sayfası görüldü.
- Alıntı: DOĞRULANAMADI.
- Kullanım: Bulgu, "açıklama ekleme" dürtüsünü sınırlıyor: açıklama eklemenin bedeli okuma süresi.
- Kanıt düzeyi: zayıf (küçük, tam metin yok)
- Güvenilirlik: düşük.

**7. EFL okurlarda sadeleştirilmiş metin anlamayı artırdı.**
- Ne: 25 Japon üniversite öğrencisiyle yapılan çalışmada sadeleştirilmiş metin, hem metin tabanı (textbase) hem durum modeli (situation model) düzeyinde anlamayı artırdı.
- Kaynak: Ogiso, T. (2019), "Effects of Text Revision on EFL Readers' Comprehension: Simplified vs. Elaborated Text", ARELE 30, s. 241-255. https://www.jstage.jst.go.jp/article/arele/30/0/30_241/_article/-char/en
- Alıntı: "the simplified text facilitated readers' understanding at both the textbase and situation-model levels." (14 kelime)
- Kullanım: Yabancı okurlar için sadeleştirme anlamayı artırıyor. Ama bu, yerli okur için "daha az sözcük" demek değil; sadeleştirme bilgi çıkarmak değil, yapıyı açmak demek.
- Kanıt düzeyi: kanıtlı (deney), küçük örneklem
- Güvenilirlik: orta-düşük (25 kişi).

**8. Büyük dil modelleri: ödül modeli uzun yanıtları tercih ediyor (uzunluk yanlılığı).**
- Ne: Park, Rafailov, Ermon, Finn (2024), "Disentangling Length from Quality in DPO": düzenlenmemiş DPO modeli, insan geri bildirim veri setine göre çok daha uzun yanıt üretiyor; yazarlar bu yanıtların "twice as long on average" olduğunu bildiriyor.
- Kaynak: arXiv:2403.19159 (https://arxiv.org/abs/2403.19159). Tam metin PDF'den doğrulandı.
- Alıntı: "the un-regularized DPO model produces answers twice as long on average" (12 kelime)
- Kullanım: Bu bulgu felsefemizle doğrudan ilgili değil, ama yanlılığın kaynağını gösteriyor: insan ve model değerlendiricileri uzunluğu kaliteyle karıştırabiliyor. Bu ilke, yazarın "uzun = iyi" sanısına karşı bir uyarıdır.
- Kanıt düzeyi: kanıtlı (ölçüm, model çıktısı)
- Güvenilirlik: yüksek (birincil kaynak, PDF doğrulandı)

**9. Uzunluk yanlılığı: sonraki çalışmalar da aynı yönü doğruluyor, düzeltme önerileri var.**
- Ne: Kim, Oh, Lee (Kasım 2025) ödül modellerinde uzunluk yanlılığını ölçüyor: 49.861 çiftin %47,43'ünde yalnızca uzunluk değişince tercih tersine dönüyor. Ayrıca düzeltilmiş modelde ortalama yanıt uzunluğu 2.048'den 1.118'e düşmüş (tablodan hesaplanan yaklaşık %45; yazarlar bu oranı vermiyor).
- Kaynak: arXiv:2511.12573, "Mitigating Length Bias in RLHF through a Causal Lens" (https://arxiv.org/html/2511.12573v1)
- Alıntı: "conflating verbosity with quality" (4 kelime)
- Kullanım: Model çıktıları için "uzun ve kapsamlı görünen yanıt" çoğu zaman ölçüt değil; düzeltilmiş modelin çıktısı kısalmış ama kalitesi artmış görünüyor (AlpacaEval kazanma oranı 18,97'den 37,18'e çıkmış; PPO_HRO ile karşılaştırma).
- Kanıt düzeyi: kanıtlı (ölçüm)
- Güvenilirlik: orta. Önprint, hakemsiz; uzunluk yüzdesi tablodan hesaplandı.

**10. Çeviride açıklaştırma (explicitation): kökeni tartışmalı, evrensel olup olmadığı açık.**
- Ne: Blum-Kulka'nın açıklaştırma hipotezi, çevirinin kaynak metinden daha açık ve bağlantılı olduğunu öne sürer. Klaudy bunu dört türe ayırmış. Séguinot tanımı dar buluyor; Blum-Kulka (2010) "çeviriye özgü açıklaştırma" kavramını terk etmeyi tartışmış. Zufferey ve Cartoni çok değişkenli analiz öneriyor.
- Kaynak: Blum-Kulka (1986) birincil metni DOĞRULANAMADI. Tartışma için arama özetlerine dayanarak: Zufferey & Cartoni, Target 26(3) (https://benjamins.com/online/target/articles/target.26.3.02zuf) sayfası 403 verdi, DOĞRULANAMADI. Meta 2020 incelemesi (erudit) Anubis doğrulamasına takıldı, DOĞRULANAMADI.
- Alıntı: DOĞRULANAMADI.
- Kullanım: Çeviri Türkçesinin uzunluğunu "açıklaştırma"ya bağlamak için kanıt henüz yeterli değil; bu bir hipotez, yasa değil.
- Kanıt düzeyi: folklor/hipotez (kaynak tartışmalı)
- Güvenilirlik: orta (kavramın varlığı), düşük (Türkçeye uygulanabilirlik)

**11. Türkçe okunabilirlik: Ateşman (1997) ilk Türkçe formülü; ortalamalar bu formülün girdisi.**
- Ne: Ateşman (1997), Flesch formülünü Türkçeye uyarlamış; Kavun ve Maden (2024) bu formülün Türkiye'deki okunabilirlik tezlerinde en çok kullanılanı olduğunu gösteriyor (32 tezin 12'sinde yalnız Ateşman; toplamda 26'sında).
- Kaynak: Kavun, M. & Maden, A. (2024), ÇÜTAD 9(2), 824-837. https://doi.org/10.32321/cutad.1501929 (PDF'den doğrulandı). Ateşman, E. (1997), "Türkçede okunabilirliğin ölçülmesi", A.Ü. TÖMER Dil Dergisi, 58.
- Alıntı: Ateşman'ın ilk formülü hakkında: "Türkçe için ilk okunabilirlik formülünü geliştiren Ateşman" (9 kelime, makaleden).
- Kullanım: Türkçe için hece ve cümle ortalamasına dayanan ölçüm var; felsefemizle uyumlu olarak sözcük başına hece (yoğunluk) ve cümle başına sözcük (uzunluk) birlikte ölçülebilir.
- Kanıt düzeyi: kanıtlı (ölçüm aracı), katsayılar doğrulanamadı
- Güvenilirlik: orta. Formül katsayıları (198,825; 40,175; 2,610) arama özetinde geçiyor, birincil kaynakta doğrulanamadı; bu katsayılara güvenmeyin.

**12. Türkçe sözcük başına biçimbirim: ölçüm farklı tokenizasyona göre değişiyor.**
- Ne: TrGLUE (Altınok, arXiv:2512.22100, 2025) Türkçe veri setinde token başına ortalama 2,25 biçimbirim (medyan 2, %95 persentil 5) bildiriyor. Aynı çalışmanın tablosunda Türkçe ve İngilizce sözcük sayıları karışık: CoLA'da Türkçe daha uzun (12,48'e 7,81), QQP'de daha kısa (7,52'ye 11,25). Yazar, Türkçe bölünmelerin sözcük sayısı için "işleme artifact'ları" uyarısında bulunuyor.
- Kaynak: https://arxiv.org/abs/2512.22100 (PDF metninden doğrulandı: tablo 6 ve morfem histogramı).
- Alıntı: "TrGLUE contains on average 2.25 morphemes/token" (7 kelime)
- Kullanım: Türkçede bir sözcük, İngilizcedeki birkaç sözcüğe karşılık gelebilir ("gideceksin" = "you will go"). Ama tablo, "Türkçe her zaman daha kısa" sonucunu vermiyor. Bu yüzden İngilizce-Türkçe sözcük oranı için tek sayı yok; kendi metninizde sayın.
- Kanıt düzeyi: kanıtlı (ölçüm), ama tokenizasyona bağlı
- Güvenilirlik: orta. Tek bir veri seti; sözcük sayıları tartışmalı.

**13. İngilizce-Türkçe paralel metinde sözcük oranı: doğrudan ölçüm bulunamadı.**
- Ne: Kaynak metne göre çevirinin sözcük artışını doğrudan ölçen bir Türkçe derlem çalışması bulunamadı. Belirtikleştirme üzerine bir TÜBİTAK proje raporu var, ama özetinde sözcük sayısı karşılaştırması yok.
- Kaynak: Arama sonuçları; DergiPark'taki proje raporu tam metinde kontrol edilmedi.
- Kullanım: Bu boşluk gerçek bir fırsat: kendi paralel derlem ölçümü yapılabilir (kaynak ve çeviri sözcük sayıları, sözcük başına hece ve cümle başına sözcük).
- Kanıt düzeyi: yok (boşluk)
- Güvenilirlik: —

## Skill'e önerilen kurallar

1. Uzunluğu kaliteyle karıştırma: sözcük sayısı tek başına ölçüt değil; "kaç fikir / kaç sözcük" oranına bak (bulgu 3, 8, 9).
2. Bilgiyi cümle içinde dengeli dağıt: bir cümlede yığılma ve boşluk yerine eşit yük (bulgu 1).
3. Başlık ve kısa metinde sadelik kanıtlı; "her cümle kısa" kuralı kanıtlı değil (bulgu 4).
4. Açıklama eklemenin bedeli okuma süresi; eklemeden önce okura gerçekten gerekip gerekmediğini sor (bulgu 6, zayıf kanıt).
5. Sadeleştirme anlamayı azaltmaz, yabancı okurda artırabilir; sadeleştirme ile özü kesmeyi ayır (bulgu 7, 5).
6. Türkçe için sözcük başına hece ve cümle başına sözcük birlikte ölçülsün (bulgu 11); katsayıları birincil kaynaktan doğrulamadan kullanma.
7. Türkçe-İngilizce sözcük oranı için genel bir sayı verme; metin başına kendi sayını ölç (bulgu 12, 13).
8. Açıklaştırma hipotezini çeviri Türkçesinin kanıtı olarak sunma; hipotez olarak tut (bulgu 10).

## Felsefeyle ilişki

Destekleyen: UID (bulgu 1) ve önerme yoğunluğu (bulgu 3) doğrudan "anlatılana oranla sözcük" ilkesinin bilimsel karşılığıdır. Ölçüm yöntemi mevcut, Türkçe uygulaması yok. Sadelik (bulgu 4, 5, 7) "az sözcük" yönünü destekliyor.

Sınırlayan: (a) Sözcük sayısı kendi başına kalite değil; ödül modelleri uzunluğu kaliteyle karıştırıyor (bulgu 8, 9), bu da "uzun = kötü" sanısının da yanlış olabileceğini gösteriyor. (b) Okur tercihi çalışmaları (bulgu 4) başlık ve tıklamaya dayanıyor; anlama için sonuçlar daha az net. (c) Açıklık ve yoğunluk farklı: aşırı eksiltme anlamı kaybettirebilir; bu tartışmada tam bir kanıt yok. (d) Türkçe sözcük sayısı, İngilizceye göre bile tutarlı değil (bulgu 12); "Türkçe daha kısa" iddiası kanıtsız.

## Doğrulanamayanlar

- Levy & Jaeger (2007) atfı ve başlığı (bulgu 1).
- Ure (1971) ve Halliday (1985) birincil kaynakları (bulgu 2).
- Snowdon ve arkadaşları (1996) ve Kaise ve arkadaşları (2025) Türkçe değeri (bulgu 3).
- Blum-Kulka (1986) birincil metni; Zufferey & Cartoni ve Meta 2020 incelemesi (bulgu 10).
- Kent State çalışmasının tam metni (bulgu 6).
- Ateşman formül katsayıları ve Türkçe ortalamalar (2,6 hece; 10 sözcük) birincil kaynakta görülmedi (bulgu 11).
- Yerel İngilizce-Türkçe sözcük artışı ölçümü: bulunamadı (bulgu 13).

## Çelişkili ya da zayıf çıkanlar

- "Türkçe çevirisi daha kısa olur" (TrGLUE özeti): kendi tablosunda çelişiyor; bazı veri setlerinde Türkçe çok daha uzun (SST-2: 9,22'ye 47,3). Bu iddia kanıtlı değil.
- UID "evrensel" bir yasa değil; yazarların kendisi açık sorunlar olduğunu söylüyor (bulgu 1).
- Okur tercihi (bulgu 4) yalnızca başlıklarda güçlü; uzun metinde anlama için aynı güç yok (bulgu 5, 6).
- Ure yoğunluk formülü ve ölçek farkları (bulgu 2): Wikipedia'daki 100 çarpanı ile başka kaynaktaki 3-6 aralığı karışık; bu iki tanım karıştırılmamalı.
- Blum-Kulka hipotezi: yaygın biçimde "çeviri her zaman açıklaştırır" olarak aktarılıyor; kaynaklar bunu tartışmalı görüyor (bulgu 10).
- Kaynakların kendi sayıları tutarsız: NN/g (2.232 ve 2.425, yüzde 54 oranı) (bulgu 5).
