# 1984 çözümleme sentezi (Celâl Üster çevirisi)

## 0. Veri durumu

Girdi: parça-01..20 JSONL (20 parça), denetim.jsonl (25 satır), sayfalar/ (S20–S342 arası 321 sayfa dosyası). Bozuk JSON satırı yok. Cümle kayıtları 6607 (önem 0/1/2: 2561 / 2942 / 1104). Sayfa kaydı 321 (her biri `sayfa` ve `akis`, çoğu `sayfa_notu` alanıyla); `sayfa_notu` alanının tüm kayıtlarda dolu olup olmadığı ölçülmedi. S125 ve S250 için kayıt ve sayfa dosyası yok; boş mu ayırıcı mı olduğu doğrulanmadı.

Önceki sürümdeki iki yanlış not düzeltildi: S170–S180 eksik değil, parça-10'da 316 cümleyle tam kapsanıyor. Önceki sürümdeki 6417 toplamı da eksik veriden geliyordu; geçerli toplam 6607.

## 1. Sayım

Önem dağılımı (0 / 1 / 2, satır sayısı):
- Kısım 1 (S20–S124): 782 / 834 / 371, toplam 1987; önem 2 oranı %18,7.
- Kısım 2 (S126–S249): 946 / 1129 / 367, toplam 2442; %15,0.
- Kısım 3 (S251–S326): 817 / 869 / 315, toplam 2001; %15,7.
- Ek (S327–S342): 16 / 110 / 51, toplam 177; %28,8.
- Genel: 1104 / 6607, %16,7.

Fark eksenleri, kısım kısım en sık beş (satır içinde birden çok eksen olabilir):
- Kısım 1: sözcük seçimi 603, söz dizimi ve vurgu 362, ton ve ironi 304, zaman ve kip 251, imge 210.
- Kısım 2: sözcük seçimi 466, imge 260, söz dizimi ve vurgu 258, ton ve ironi 224, söz dizimi 214 (bilginin sırası 205 de dikkat çekici).
- Kısım 3: tekrar ve geri çağırma 428, sözcük seçimi 364, ton ve ironi 233, söz dizimi 211, imge 200.
- Ek: sözcük seçimi 91, bilginin sırası 88, söz dizimi ve vurgu 60, eksiltme 34.

Etiket tutarsızlığı var: "söz dizimi" ile "söz dizimi ve vurgu", "uzunluk ve ritim" ile "ritim", "eksiltme", "söylenmeyen" ve "söylenmeyen (eksiltme)" ayrı sayıldı. Parça 10 sonrasında parantezli alt etiketler de (ör. "söz dizimi (iki nokta)") çoğaldı. Sayım ana eksene indirgenmedi; bu yüzden eksen toplamları tam tutarlı değil.

## 2. Winston–Julia ilişkisi (kısım 2)

Okuma sonucu: aşk çoğunlukla adıyla söylenmiyor. Duygu, başka kanallardan taşınıyor. Adıyla geçen satırlar var (S142.C9 "ilanı aşk", S148.C9 "katıksız aşk ya da katıksız şehvet"), ama bunlar yine de bir ayrımı yıkan ya da ters çeviren cümleler.

Taşıyıcı kanallar:
- Beden ve zemin: çançiçekleri bölümde ilk kez zemin olarak geçer ve yatağa dönüşür (S141.C1, S147.C22). Kuşağın çıkarılması bedenin yumuşamasıyla eşleşir (S144.C7).
- Duyu ve koku: sıradan çikolata yakılan çöp dumanına benzetilir, Julia'nınki lüksle okunur (S143.C3). Saç kokusu, önceki kilise kokusunu bastırır (S157.C14, S151.C9 ile birlikte okunuyor).
- İdeolojik çerçeve: arzu, Parti'ye karşı bir silah olarak yeniden adlandırılır (S147.C21). Sevgi, yozlaşmayla orantılı kurulur (S147.C9). Bu cümleler duyguyu adlandırmadan ölçüsünü değiştirir.
- Alaycı ve kaba dil: "kepazelik" (S149.C12), "belden aşağısıyla ilgilenen" (S179.C3). Sevgi sözcükleri ("bir tanem", "canım", "sevgilim") alayla birlikte gelir (S142.C6, S179.C1).
- Savaş dili: yatak sahnesi "karşı saldırı" gibi askerî sözcüklerle kapanır (S172.C12). Aşk ile savaş aynı cümlede birleşir.
- Zaman ve mekân: oda, "cam dünya" içinde donmuş bir kader olarak kurulur (S169.C26). Sonraki bölümde yakınlık "karayazgılı" gibi ölüm imgeleriyle yan yana gelir (S174.C5).

Sayfa notlarında Julia ya da Winston'ın ilişkisine değinen notlar anahtar sözcükle bulundu (91 not). Bu, yalnız bulma amaçlıydı; yargı notların okunmasına dayanıyor. Kısım 2 bu yüzden "aşkın adı az, etkisi çok taşıyıcıda" diye özetleniyor. Çiçek, koku ve kireç benzetmesi gibi seçimler çevirmenin kararıdır, metnin aynısı değildir.

En iyi 15 örnek (önem 2 ağırlıklı):
1. S141.C1 (çançiçekleri zemin)
2. S143.C3 (çikolata ve çöp dumanı)
3. S144.C5 (at ve samanı)
4. S147.C9 (yozlaşmayla orantılı sevgi)
5. S147.C21 (arzu siyasallaşır)
6. S148.C9 (katıksız aşk ya da şehvet)
7. S147.C22 (ağaçlardan dökülmüş çiçekler)
8. S142.C9 (aşk ilanının tersi)
9. S151.C9 (güvercin pisliği kokusu)
10. S153.C5 (on altıda altmışlık üye, düz ses)
11. S157.C14 (saç kokusu, kilise kokusunun yerine geçer)
12. S169.C26 (oda ve yaşam eşit tutulur)
13. S172.C12 (karşı saldırı, mahrem an)
14. S174.C5 (karayazgılı, umarsız tutku)
15. S179.C1 (canım, reddin sıcaklığı)

## 3. Teknik listesi

Her teknik, fark alanındaki eksen olarak alındı. Sayılar tüm kısımların toplamıdır; kimlikler önem 2 örneklerinden.

1. Sözcük seçimi (1524): Tek sözcüğün tutumu taşıması. Kısım 1'de yoğun (603). Örnek: S24.C9, S38.C19, S39.C3.
2. Tekrar ve geri çağırma (820): Önceki bir ifadenin, sahnenin ya da kavramın yinelenmesi. Kısım 3'te yoğun (428). Örnek: S34.C10, S36.C7, S178.C15.
3. Söz dizimi ve vurgu (802) ile söz dizimi (547): Cümle yapısı ile vurgu, sıralama, anafora ve yan cümle yığınları. Kısım 1 ve 2'de birlikte yoğun. Örnek: S27.C14, S33.C15, S173.C9.
4. Ton ve ironi (787): Tutumu sözcükle değil alaylı ya da tırnaklı kullanımla vermek. Kısım 1 ve 3'te yoğun. Örnek: S36.C7, S37.C2, S179.C1.
5. İmge (687): Benzetme ve nesne yoluyla duyguyu veya yargıyı taşımak. Kısım 2'de yoğun (260). Örnek: S24.C9, S37.C15, S143.C3.
6. Bilginin sırası (593): Bilginin hangi sırayla verildiği ve neyin geciktirildiği. Kısım 2 (205) ve ekte (88). Örnek: S38.C16, S39.C14, S42.C12.
7. Zaman ve kip (540): -mış, -mıştı, -acak, -ıyor gibi kiplerle zamanın tutumu değiştirilmesi. Kısım 1 (251). Örnek: S38.C7, S43.C12, S170.C6.
8. Bakış açısı ve iç ses (472, ayrıca "bakış açısı" 159): Anlatıcının ya da karakterin içinden konuşması. Kısım 1 (175). Örnek: S33.C15, S37.C2, S178.C15.
9. Uzunluk ve ritim (376): Uzun ve kısa cümle geçişleri. Kısım 1 (155). Örnek: S27.C14, S37.C9, S159.C10.
10. Eksiltme ve söylenmeyen (340, üç etiket toplamı): Adın ya da nedenin geciktirilmesi, söylenmeyenin okura bırakılması. Ekte (34). Örnek: S56.C6, S60.C4, S180.C5.

## 4. Denetim

Denetim 25 satırda yapıldı: var 20, kısmen 5, zorlama 0 (0/25). Denetim, parça 10 tamamlanmadan önce 1052 önem-2 satırından çekilmiş bir örneklemdi; tüm cümleleri kapsamaz, bu yüzden zorlama oranı küçük örneklemde güçlü bir kanıt değil.

Kısmen kalan beş yorum ve nedenleri:
- S255.C7: jiletin tekrar geçtiği doğru, ama "kaçış aracı" ve intihar yorumu cümlede yok.
- S239.C4: üç nokta açık bırakma doğru, ama liste altı değil beş eylem içeriyor.
- S243.C5: "bir öncekiyle" karşılaştırma cümlede yok.
- S339.C7: "B sözcüklerinin kapsayıcılığı" cümlede yok; belirsiz düşünce doğru.
- S196.C8: "sorgunun son sorusu" cümleden ya da kanıttan doğrulanmıyor.

Zorlama olmayan yorumlarda da ortak hata: cümlede olmayan bir sayım, karşılaştırma ya da çıkarım yapılıyor. Bu tür yorumlar "kısmen" olarak işaretleniyor.

## 5. Kural karşılaştırması

Kurallar metinle yalnız kısmen sınanabildi: biçim eşleşmesi regex ile, anlam kararı okuma örneklemiyle. Her kuralın yanındaki sayı yalnız aday sayısıdır; tek tek doğrulanmadı.

- K1 (kişi eki varken zamir yok): 13 aday (örn. S53.C2, S142.C2, S143.C13). İhlal sayılmadı; tek tek okunmadı. Durum: ölçülmedi.
- K2 (-mıştı, dayanak olay olmadan): biçim eşleşmesi 577 (örn. S20.C12, S21.C6, S22.C16). Dayanak olay kontrolü yapılmadı. Durum: ölçülmedi. Bu sayı -mıştı kullanımının sıklığını gösterir, ihlali değil.
- K3 (gereksiz yeniden anlatma): okuma örneklemi dışında ölçülmedi.
- K4 (silmeden önce süre/derece/tutum/koşul bilgisi): okunan örneklerde "o kadar" (S141.C19) ve "bir tür" (S142.C9) gibi sözcükler tutum taşıyor; silinmemeli. Destekliyor.
- K5 (ögeyi akış geri getirebilirse düşür): ölçülmedi.
- K6 (adı eşanlamlıyla değiştirme): ölçülmedi. Çeviride "Julia" ve "kız" arasındaki geçişler birkaç yerde sıkı (S140.C14, S142.C1); yorum yapılmadı.
- K7 (boş fiil + isim yerine tek fiil): 27 aday (etti, eyledi, yaptı gibi). Tek tek okunmadı.
- K8 (konuşan belliyken "dedi" yok): 75 aday (örn. S39.C9, S40.C2, S55.C3). Tek tek okunmadı; çiğnediği kesin değil.
- K9 (düşünce soru/ünlem olarak, "düşündü" eklenmeden): 65 aday (örn. S36.C10, S37.C17, S43.C11). Tek tek okunmadı.
- K10–K15: okuma örneklemi dışında ölçülmedi. K14 (İngilizce sözcük sırası) için kısmi sinyal: "kireç gibi" (S150.C10) Türkçe deyimle kurulmuş; bu kurala uyuyor.

Kuralı çiğnediği hâlde işe yarayan cümleler (okunanlar):
- S148.C9: "katıksız" tekrarı, K13 süsü gibi görünür ama aşk ve şehvet ayrımını yıkan bir içerik taşıyor. Süsün işe yaradığı sınır budur.
- S143.C3: çikolata-çöp dumanı benzetmesi, K10 ve K13 sınırında, ama lüks ve Parti ayrımını taşıyor.
- S177.C4: "Demesi" isim-fiil yapısı; kuralın anlamı eke toplamaktan çekinme (K15) ile uyuşmuyor görünse de belleğin güvenilmezliği bu yapıyla okura geçiyor.

Ana ilke ("Bir cümle, anlattığı şeye oranla iş görmeyen sözcük taşıdığı ölçüde kötüdür") bu okumada tek tek sınanmadı. Bu nedenle genel hüküm verilmiyor.

## 6. Sınırlar

- Denetim örneklemi 25 satır; sonuç genel kanıt değil.
- Kural karşılaştırmasında yalnız okunan örnekler kararı destekliyor; regex sayıları ihlal değil aday sayısı.
- S125 ve S250 sayfalarında içerik yok ya da kayıt dışı; içerikleri ölçülmedi.
