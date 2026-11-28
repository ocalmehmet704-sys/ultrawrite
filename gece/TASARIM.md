# Tasarım: kâğıt ve su (storyboard)

Tek fikir: yapay zekâ Türkçeyi kirletir, skill temizler. Tek imge: kirli yazılı kâğıt suya daldırılır, mürekkep suda çözülür, kâğıt temiz ve doğru metinle çıkar. Su = arınma.

## a) İzleyici nerede, ne görüyor
- Berrak, sığ bir havuzun hemen üstünde ayakta, **dik aşağı** bakıyor. Göz yüzeyden ~1,8 m yukarıda, dip yüzeyden ~0,9 m aşağıda. Dar görüş açısı (FOV ~30°): ekranın her yeri aynı uzaklıkta, ufuk yok, gökyüzü yok, sis yok, uzakta seyrekleşen ızgara yok.
- **Dip:** düşük poligonlu taşlar, tepeden bakınca düz gölgeli üçgen mozaik. Tepeler (sığ) açık turkuaz ve kum; çukurlar (derin) koyu, doygun deniz yeşili. Ekranın üstü ve altı aynı ölçekte.
- **Işık:** gündüz güneş tepeye yakın, hafif sağ üstte. Dipte yavaş kayan ince kostik ağları. Yüzeyde seyrek, küçük, yumuşak parıltı lekeleri (dalga yüzleri güneşi yansıttıkça). Gece: ay ışığı, lacivert su, dip loş ama seçilir, kostik çok silik ve soğuk, parıltı birkaç gümüş nokta.
- **Yüzey:** sakin. Küçük dalgalar yalnız dibi kırarak hafifçe kıvırır (normal haritası gibi); yüzeyin kendisi görünmez, ne gördüğümüzü büker. Tepeden bakınca yansıma neredeyse yok.
- **Kâğıtlar:** yüzeyde, ekrana paralel, yaprak gibi düz yatar. Krem, ince doku, köşeler keskin, kenarları suya değdiği yerde hafif ıslak koyu. Gölgeleri **dibe** düşer: güneş yönünde sağ-aşağı kaymış (~20-30 px), derinlik kadar bulanık, kostikle hafifçe kırılmış. Salınım: en fazla ±0,5° eğilme ve ±%0,5 ölçek (kalkıp inme tepeden bakınca ölçek demektir, ekranda yukarı-aşağı kayma değil). Büyük sayfalar neredeyse sabit.
- **Menü:** üstte ince düz kâğıt şerit; kaydırırken yerinde kalan tek arayüz ödünü. Salınmaz, kısa gölge.

## b) Sayfa açılınca ilk 5 saniye
- 0,0 s: Su ve dip zaten orada (WebGL yüklenene kadar aynı renkte düz CSS zemini; geçiş 1 s içinde yumuşak). Hero kâğıdı yüzeyde: "O yere çarpmıştı." yazılı, dönen kart sağda yüzüyor.
- 0,4-1,3 s: "O yere çarpmıştı." üstüne kiremit çizgi çekilir.
- 1,3 s: Hero kâğıdı arınma döngüsüne girer (aşağıdaki evreler; yalnız ilk görünümde bir kez).
- 1,3-5,5 s: Kâğıt iner, mürekkep çözülür, aynı yerde "Düştü." belirir, kâğıt çıkar. Bu sırada dönen kart kendi döngüsüne başlamaz; hero bitince başlar (aynı anda iki olay yok).

## c) Arınma döngüsü (hero bir kez; dönen kart her örnekte)
| Evre | Fizik | Ekranda | Süre |
|---|---|---|---|
| 1. Yazılı | Kâğıt yüzeyde | Yapay zekâ cümlesi net | 1500 ms (kart) |
| 2. Çizilme | Kalemle üstü çizilir | Kiremit çizgi soldan sağa | 800 ms |
| 3. Dalma | Kâğıt bastırılıp ~30 cm derine iner | Yalnız uzaklaşma: perspektifle %13-15 küçülür (translateZ, eğme yok), suyun rengini alır, kontrastı düşer, dalga kırılmasıyla hafifçe kıvrılır, üstünden kostik geçer, kenarları yumuşar. Gölgesi kâğıda yaklaşır ve keskinleşir (dibe yaklaşıyor). Dalma anında yüzeyde kâğıdın çevresinde **daire** halka dalga, kenarda ince düzensiz köpük çizgisi | 1400 ms |
| 4. Kabarcık | Kâğıdın altında kalan hava kenarlardan kaçar | Az sayıda (10-16) kabarcık: küçük ve bulanık başlar, izleyiciye yaklaştıkça büyür ve netleşir, yüzeyde küçük bir halka olup söner. Ekranda yana ya da yukarı akmaz | 300-2000 ms arası |
| 5. Çözülme | Suda eriyen mürekkep | Harfler bulanır, kırılmayla dağılır, hafif bulut olur, soldan sağa ilerleyen bir çözülmeyle söner | 1700 ms (dalmanın 500. ms'inde başlar) |
| 6. Boş kâğıt | Su altında temiz kâğıt | Kısa durgunluk | 300 ms |
| 7. Belirme | Fotoğrafın banyo tepsisinde belirmesi gibi (döngünün tek fiziksel olmayan adımı, bilerek: metafor) | Düzeltilmiş metin (kartta + açıklama) aynı yönde açılan bir maskeyle soluktan koyuya belirir | 1000 ms |
| 8. Çıkış | Kâğıt yüzeye döner, su üstünden akar | Ölçek ve renk geri gelir, gölge eski kaymasına döner; yüzeyde küçük daire halka ve birkaç damla | 1200 ms |
| 9. Durgun | | Düzeltilmiş metin net, okunur | 4300 ms (kart), hero kalıcı |

Kâğıt hiç değişmez, yalnız üstündeki metin değişir. Kartta sonraki örnek: düzeltilmiş metin solar, yeni yapay zekâ cümlesi aynı kâğıda yazılır (evre 1).

## d) Kaydırınca
- Kaydırmak, havuz boyunca yürümek demek. Yüzeydeki kâğıtlar sayfa hızında kayar; dip daha uzakta olduğu için **daha yavaş** kayar (1,8 / 2,7 ≈ 0,67 kat): gerçek paralaks, gösteriş değil. Halka dalgalar yüzeyle birlikte kayar.
- Bölüm kâğıtları zaten suyun üstünde yüzüyor; kaydırınca "belirme" animasyonu yok.
- İmleç suyun üstünde yavaş geçince parmak değmiş gibi küçük bir daire halka; tık biraz daha büyük halka. Kâğıdın üstünde halka yok.

## e) Bilerek yapmayacaklarım
Ufuk, gökyüzü gradyanı, sis; eğik kamera; ekranda yukarı-aşağı kayan kâğıt salınımı; derinlik için rotateX; cam/buzlu panel, backdrop-filter; çift kabuk kart, kart içinde kart; 2 px'ten büyük köşe; hap düğme; kartın içinde alttan dolan su ya da su çizgisi; ayrı şerit kâğıt, biri gidip diğerinin gelmesi; sürekli kıpırdayan her şey (yalnız su ve kâğıtların çok hafif salınımı sürekli); tek parlak beyaz köpük lekesi; yana/yukarı akan kabarcık; elips halka; ekranı kaplayan parıltı halısı; kaydırma kütüphanesi; aynı anda iki arınma olayı.

## f) İtirazlar nasıl karşılanıyor
- "Havadan yere bakıyoruz": kamera dik aşağı, dar FOV; derinlik = ekrandan uzaklaşma (küçülme + renk + kırılma).
- "Alttan dolmayacak": suyun çizgisi ya da dolan katman yok; kâğıt bütün olarak suyun altına iner.
- "Kâğıtlar değişmeyecek": tek kâğıt iner ve çıkar; yalnız metin değişir.
- "Slop": cam, blur, hap, büyük köşe, iç kart, sürekli kıpırtı ve gösteriş efekti yok; tek olay anlamlı olan arınma.
- "Yukarıdan bakmıyor": ufuk ve perspektif seyrekleşmesi kaldırılır; dip ekranın her yerinde aynı ölçekte, halkalar daire.

## Kendime sorduklarım (fiziğe ters düşen var mı?)
- Batan kâğıdın gölgesi: dibe yaklaştıkça kâğıda yaklaşır ve keskinleşir; eskiden sabit kayıktı, düzeltilecek.
- Salınım: kalkıp inme tepeden ölçek olarak görünür, ekranda dikey kayma olarak değil; düzeltilecek.
- Kabarcık sayısı: kâğıdın altında az hava olur; fırtına değil, bir avuç kabarcık.
- Belirme fiziksel değil; banyo tepsisi metaforu olarak açıkça seçildi.
- Sabit menü: tek arayüz ödünü.
- Reduced-motion: tek durgun kare; başlıkta çizili "O yere çarpmıştı." ve altında "Düştü.", kartta çizili yapay zekâ cümlesi, düzeltme ve açıklama birlikte. JS yoksa aynı, zemin düz CSS su rengi (ufuksuz). WebGL/CDN yoksa aynı tepeden üçgen mozaiğin durgun 2B çizimi.
