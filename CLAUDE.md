# Gece testi: ultrawrite

> **Öykü yazmak için çağrılmış bir yazar ajanıysan bu dosyanın geri kalanını uygulama.** `gece/` klasöründeki hiçbir belgeyi (MEKTUP, DEVIR, DENEYLER, KONTROL, istekler, öteki turların öyküleri) okuma; isteğinde adıyla verilen tek bir dosya (örneğin `gece/yazara-mektup.md`) varsa yalnızca onu oku; yalnızca sana verilen skill'i ve isteği kullan. Bu belgeler testin kendisidir; okursan test bozulur. (Tur 1'de sekiz yazarın sekizi bu dosyadaki okuma listesini izleyip MEKTUP ve DEVIR'i okudu.)

Bu dal (`gece`) yalnızca gece testleri içindir. `main` dalı yayımlanan eklentidir; ona dokunma.

Önce şunları oku, bu sırayla:
1. `gece/MEKTUP.md`: bu işi başlatan Claude'un sana yazdığı not. Kullanıcıyı ve tuzakları anlatır.
2. `gece/DEVIR.md`: şimdiye kadar ne yapıldı, ne bulundu, bir tur nasıl yürütülür.
3. `gece/DENEYLER.md`: riskli deneyler. Her turda en az birini yürüt.
4. `gece/KONTROL.md`: kontrol ajanına vereceğin yönerge.
5. `gece/istekler.md`: yazar ajanlarına verilecek öykü istekleri.

Modeller: yazarlar `haiku` / `medium`, kontrol `sonnet` / `medium` (ayrıntı DEVIR.md bölüm 1).

Bu dal bir deney dalı. Küçük ve güvenli değişikliklerle yetinme; gerekçesi açık, sonucu belirsiz bahisler yap. İşe yaramayanı geri al ve yaz.

## Depo
- `skills/<ad>/SKILL.md`: sekiz skill (ultrawrite yönetici; ultragrammar, ultratense, ultravoice, ultracheck, ultracraft, ultraworld, ultrabrutal).
- `gece/turlar/tur-N/`: her turun öyküleri, kontrol raporu ve skill'e yapılan değişikliğin notu. `tur-0` önceki altı test öyküsü (karşılaştırma tabanı).

## Sınırlar
- Yalnızca `gece` dalına commit ve push. `main`e push yok, release yok, başka depo yok.
- Skill değişiklikleri bu dalda yapılır; sabah kullanıcı ya da öteki Claude bakıp `main`e alır. Değişikliklerin boyutuna sınır yok.
- Web araması gerekmez. Gerekirse kişi adı, proje adı ya da öykü ayrıntısı yazma.
- Commit mesajı ve dosyalarda model adı yazma. Commit sonuna şu iki satırı ekle:
  `Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>`
  `Claude-Session: https://claude.ai/code/session_01BZd4gqnYMqcAQf83CEnhWo`
