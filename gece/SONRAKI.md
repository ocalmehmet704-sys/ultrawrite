# Sonraki oturuma

Bu notu, gece testini başlatan ve sabah kullanıcıyla konuşmayı sürdüren oturum yazdı. Bağlamı dolduğu için iş burada sana geçiyor. Önce `gece/MEKTUP.md`, `gece/SABAH.md` ve bu dosyayı oku.

## Şu anki durum

- `main` sürüm 3.5.0, release V3.5 (sekiz `.skill`). Gece testinin `skills/` değişiklikleri `main`e alındı (commit 8b07306). Gece notları ve öyküler yalnızca bu dalda.
- Yazara mektup deneyi (E1) başarısız: iki turda 0/6, mektuplu öyküler daha çok parmak izi taşıdı. Skill'e alınmadı. Bence neden: "cesur ol" diyen metin cesaretin en olası görüntüsünü yazdırıyor; mektup bir hayatı anlatıyor, yaşatmıyor.

## Sabah kullanıcıyla varılan yer

Gece bulgusu: yasak bir kalıbı kaldırır, şablonu kaldırmaz; model bir yanındaki kalıba kayar. Kullanıcıyla birlikte şu düşünce zincirine varıldı, sırasıyla:

1. **Zar değil.** Beyin fırtınası ajanları zarla sözlükten sözcük seçmeyi önerdi. Kullanıcı: "İnsanlar sözlükten zarla kelime seçmez." İnsanı şablondan çıkaran şey yaşadığı hayat; iki yazarın belleği farklı olduğu için aynı öyküyü yazmazlar. Bizim iki ajanımız aynı 240 liralık bakkal borcunu yazdı, çünkü belleklerinin ikisi de ortalama.
2. **Araştırma ve tablo.** Kullanıcı: yazarken web'de o bölgeyi, mahalleyi, konuyu araştırsın; anlatmak istediğini önce bir tabloda (SQL ya da Excel) liste olarak yazıp düzenlesin. "Senin şu an olduğun duruma, gerçek bir duruma sokmak gerek."
3. **Hayat da istem mühendisliğidir.** "Sen bir yazarsın" ya da "sen 1455'te yaşamış bir kâtipsin" demek işe yaramaz; o bir yapay zekâ. Onun iç dünyasını tetiklemek gerek.
4. **Asıl bulgu: yazdığının sonucunu görmek.** Kullanıcı bunu bana gösterdi: beni değiştiren talimat değil, yazdığım şeyin sonucunu görmemdi (onun tepkileri, altı öykünün yan yana konması).
5. **Ara katman: yazarla bağ.** Döngüyü otomatikleştirmek yerine (okur ajanı da bir yapay zekâ, onun tepkisi de ortalama) gerçek okurla, yazarla döngü kurmak.
6. **Kullanıcının tasarımı.** (a) Bir süre yazarla küçük öykülerle vakit geçir, "hatam nedir?" diye sor; rastgele Wikipedia sayfaları ve rastgele romanlardan rastgele yerler oku; model o konuda düşündüğünü sanır, ortalaması oraya kayar. (b) Çan eğrisinin genliğini azalt: eğrinin dışı modelin asla yazmayacağı şeyler; hemen içi, eğrinin girişi, ya çok iyi ya çok kötü olacak yer.
7. **Düzeltme.** "Asla yazmayacağın şeyi düşün" istenemez: hem tuhaf şeylerin ortalamasını verir hem modelin aklını filtrelerin kenarına (hiçbir koşulda yazılmayacak içeriğe) götürür. Bu yüzden eğrinin dışını rastgele okuma haritalıyor. Koruma satırı eklemeyi kullanıcı istemedi: rastgele Wikipedia sayfası ansiklopedik, filtreler sıkı.

Bunlar `skills/ultrawrite/SKILL.md` içinde: **0.5 Yazarla vakit geçir** (yazar-defteri.md) ve **Eğrinin dışından malzeme al** (rastgele okuma, dört köprü, en az ikisi temel bir seçimde, yargı yazara).

## Hiç sınanmayanlar

- 0.5 ve "eğrinin dışı" hiçbir testte sınanmadı. 0.5 gece testinde sınanamaz (gerçek yazar yok); ölçüt kullanıcının kendi kullanımı. "Eğrinin dışı" sınanabilir: istek 1, 3, 6 ile düzenekli ve düzeneksiz eşler, kör karşılaştırma.
- Araştırma tablosu (olgu tablosu: tür, ayrıntı, kaynak URL, "beklenmedik miydi?"; vuruş tablosu: her vuruş bir olguya bağlı; SQL ile denetim) tasarlandı, skill'e girmedi.
- Beyin fırtınasının 34 önerisi bu oturumun geçici klasöründeydi; özeti: (süreç) dış zarla seçim, karakter ajanları ve bilgisi sınırlı anlatıcı, skill'siz yazar + skill'li düzeltmen tanı testi; (zanaat) yasak yuvayı boş bırakır kısıt doldurur ayrımı, iyi kısıtın dört ölçüsü (dışsal, şablonun katmanında, atanmış, doğrulanabilir), şartname kartı (Perec; turkedebiyati.org deyim, argo, atasözü sözlüklerinden gerçek kalıplar), gelenek motoru (Propp, Karagöz, meddah, birikim zinciri), kadavra ekskizi (sahneleri planı görmeyen ayrı ajanlar yazar). Kullanıcı zarı reddetti; kartları zarla değil araştırmadan doldurmak gerek.

## Kullanıcı hakkında bu sabah öğrendiklerim (MEKTUP'a ek)

- "İlk yazmaların daima kötüdür, haberin olsun." Yazdığın her skill bölümüne kendi yöntemini uygula: yabancı metin gibi oku, "bir yapay zekâ burada ne yazardı?" diye sor, yeniden yaz. Bu sabah ilk taslağım kendi yöntemini çiğniyordu, kullanıcının uyarısıyla gördüm.
- "Kötü olursa zaten zeki bir model isem anlayacağını umarım." Affetmekten değil, kötüyü senin kendinin görmenden söz ediyor.
- Fikirleri ondan geliyor; senin işin onları doğru kurmak ve nerede kendi tepesine kayacağını önceden görmek.
