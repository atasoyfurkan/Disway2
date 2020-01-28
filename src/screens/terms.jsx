import React, { Component } from "react";
import { connect } from "react-redux";
import { loadHistory } from "../store/actions/index";

class Terms extends Component {
  componentDidMount() {
    this.props.onLoadHistory(this.props.history);
  }

  render() {
    return (
      <div className="a-container text-white d-flex justify-content-center">
        <p>
          <b>1. Kayıt Olma</b>
          <p>
            {" "}
            <b>ÖZET:</b> Referandom’u kullanmaya başlamak için lütfen gerçek
            kimliğinizi kullanarak bir hesap oluşturun. Bir kişiyi taklit
            ederseniz, Referandom’a erişiminiz engellenir ve hesabınız
            feshedilir. Lütfen hesabınız ve üzerinde yayınlanan herhangi bir şey
            için yasal bir sorumluluğunuz olduğunu unutmayın.{" "}
          </p>
          <p>
          <b>ÖZET:</b> Referandom’u kullanmak için 18 yaşından büyük olmalısınız.
            Referandom, yalnızca on sekiz (18) yaşında (ya da daha büyük) olan
            kullanıcılara yöneliktir. Referandom’u kullanarak, on sekiz yaşından
            büyük olduğunuzu ve tüm şart ve koşullarına uymayı kabul ettiğinizi
            beyan edersiniz. Çocukların Çevrimiçi Gizliliğini Koruma Yasası'na
            uygun olarak, 18 yaşın altında olduğuna inandığımız kullanıcılardan
            aldığımız bilgiler veritabanımızdan silinecektir.{" "}
          </p>
          <p>
          <b>ÖZET:</b> Sadece gerçek kişiler ve yetkili Referandom iş ortakları'nın
            bu zamanda hesap oluşturmasına ve sürdürmesine izin verilir. Bir
            topluluk adına kaydolursanız, bu şartı da bu topluluğa bağlarsınız.
            Referandom hesabınız, zaman zaman ve tamamen kendi takdirimize bağlı
            olarak kurduğumuz ve sürdürdüğümüz hizmet ve işlevlere erişmenizi
            sağlar. Farklı kullanıcı türleri için farklı hesap türleri
            oluşturabiliriz. Bir şirket, kuruluş veya başka bir kuruluş adına
            bir Referandom hesabı açarsanız, o zaman sizi ve bu topluluğı içeren
            ve topluluğun yetkili bir temsilcisi olduğunuzu beyan ve taahhüt
            edersiniz. İşletmeyi bu şartlara tabi kılma yetkisi ve bu şartları
            taraf adına kabul etmiş olursunuz. Bir üçüncü taraf hizmetiyle
            Referandom'a bağlayarak, söz konusu hizmetten bu hizmetin izin
            verdiği şekilde bilgilere erişmek, bunları kullanmak ve bu hizmet
            için giriş kimlik bilgilerinizi saklamak için bize izin vermiş
            olursunuz.{" "}
          </p>
          <p>
          <b>ÖZET:</b> Referandom’da güvenliği ciddiye alıyoruz. Lütfen hesabınızı
            güçlü bir parola ile koruyarak adil paylaşımınızı yapın. Hesabınızda
            herhangi bir şüpheli etkinlik fark ederseniz, lütfen hemen bize
            e-posta gönderin. Başka bir kullanıcının hesabını, kullanıcının
            bilgisi dahilinde olmadan kullanamazsınız. Hesabınızda gerçekleşen
            etkinlikten yalnızca siz sorumlusunuz ve hesap şifrenizi güvende
            tutmalısınız. Hesabınızla "güçlü" şifreler (büyük ve küçük harfler,
            sayılar ve sembollerin bir kombinasyonunu kullanan şifreler)
            kullanmanızı öneririz. Herhangi bir güvenlik ihlali veya hesabınızın
            yetkisiz kullanımı durumunda destek@referandom.com adresine derhal
            bildirmelisiniz. Referandom, hesabınızın izinsiz kullanılmasından
            kaynaklanan kayıplardan sorumlu olmayacaktır.{" "}
          </p>
          <p>
            {" "}
            <b>ÖZET:</b> Profil bilgilerinizi ve e-posta tercihlerinizi değiştirmek
            kolaydır. Ayarlarınıza erişmek için Referandom'da profilinize giriş
            yapın. Kullanıcı profilinizi ve web sitenizdeki ayarlar sayfanızdaki
            ayarları değiştirerek profilinizin Referandom ile nasıl etkileşimde
            bulunduğunuzu kontrol edebilirsiniz. Referandoma e-posta adresinizi
            sağlayarak, posta ile iletişim yerine yasaların gerektirdiği tüm
            bildirimler de dahil olmak üzere size hizmet ile ilgili bildirimleri
            göndermek için e-posta adresinizi kullanmamıza izin vermiş
            olursunuz. Ayrıca e-posta adresinizi, Referandom'un özelliklerinde
            yapılan değişiklikler ve özel teklifler gibi başka mesajlar
            göndermek için de kullanabiliriz. Bu tür e-posta mesajlarını almak
            istemiyorsanız, tercihlerinizi web sitenizdeki ayarlar sayfanızdan
            devre dışı bırakabilir veya değiştirebilirsiniz. Gözden geçirme,
            güncellemeler, geliştirmeler veya teklifler ile ilgili e-posta
            mesajları almanızı engelleyebilir. Genel olarak, hesabınızı
            sonlandırmak dışında, hizmetle ilgili duyurular ve yönetim mesajları
            gibi belirli iletişimleri almayı seçemezsiniz.{" "}
          </p>
          <p><b>2. Kabul Edilebilir Kullanım</b>
            <p>
            <b>ÖZET:</b> Referandom kullanırken sağduyunuzu kullanın. Herkesin
              deneyimini güvenli ve keyifli hale getirmeye yardımcı olur.
              Referandom'un (reklam ve kişiselleştirilmiş içeriklerin sağlanması
              dahil olmak üzere) özelliklerini ve işlevselliğini çalıştırması,
              sürdürmesi ve size sağlaması ayrıca sizinle doğrudan iletişim
              kurmak ve size izin vermek için birtakım verilen lisanslar
              gereklidir.{" "}
            </p>
            <p>
            <b>ÖZET:</b> Lütfen, Referandom hakkındaki düşüncelerinizi belirtmekten
              ve sosyal ağlarınızda paylaşmaktan çekinmeyin. Diğer
              kullanıcıların içeriğinizi göreceğini ve platformda onlarla
              etkileşimde bulunabilceğinizi unutmayın. Referandom’da sunulan
              içerik söz konusu olduğunda şunları hatırlayın: Sunduğumuz
              içeriğin sahibiyiz, sağladığınız içeriğin size ait olduğunu ve biz
              de kendi içeriğimizden sorumlu olduğumuzu kabul ediyoruz.
              Referandom ile siz arasında, yüklediğiniz, gönderdiğiniz,
              yayınladığınız, görüntülediğiniz veya başka bir yolla dağıttığınız
              herhangi bir bilgi, metin, veri, fotoğraf, ses, video, resim,
              grafik, bağlantı, logo ve diğer içerik veya materyallere
              sahipsiniz. Siz ve diğer kullanıcılar, materyalleri
              profillerinize, forumlarınıza, topluluklarınıza, diğer Referandom
              bölümlerine veya başkalarına yalnızca bu şartlara uygun olarak,
              Referandom yoluyla veya başka yollarla yükleyebilir, gönderebilir,
              yayınlayabilir, görüntüleyebilir ve dağıtabilirsiniz. Sınırlama
              olmaksızın bilgi, metin, veri, fotoğraf, ses, video, resim,
              grafik, logo, ticari marka, hizmet markası ve diğer içerik veya
              materyalleri, ilgili teknoloji ve yazılımı, görünüm ve izlenimi
              içerebilen Referandom içerikli tüm içerikler Referandom'un veya
              onun lisans verenlerinin mülküdür ve Referandom veya onun lisans
              verenleri tarafından sahip olunur. Size burada açıkça verilmeyen
              herhangi bir içerik hakkı Referandom tarafından saklıdır. Burada
              açıkça belirtilmedikçe, işbu koşullarda yer alan hiçbir şey,
              implikasyon veya başka bir şekilde olsun, fikri mülkiyet haklarına
              ilişkin herhangi bir lisans vermek olarak yorumlanamaz.
              Referandomun açık yazılı izni olmadan, hiçbir şekilde veya hiçbir
              şekilde, herhangi bir şekilde veya hiçbir şekilde yeniden
              üretilmemesini, değiştirmemeyi, kopyalamamayı, çerçevelememeyi,
              çoğaltmamayı, görüntülememeyi, göstermemeyi, iletmemeyi,
              dağıtmamayı, yayınlamamayı, satmamayı veya başka bir şekilde
              ticari olarak kullanmamayı kabul edersiniz. Şartlara uygun olarak
              ya da işbu şartlarda açıkça izin verilen şekilde, Referandom'da
              yayınlanan kendi materyalleriniz ile ilgili izin ve bu tür
              herhangi bir kullanım kesinlikle yasaktır. Referandom’dan özel
              yazılı izin almadıkça, aşağıdakileri yapamazsınız: (a) Şikayette
              görüntülenen içerik veya materyaller üzerinde veya bu içeriklerin
              yanında editöryal yorum, ticari materyal veya herhangi bir bilgi
              veya içerik çerçevelemek veya başka şekillerde vermek; veya (b)
              Referandom’u herhangi bir İçeriğe dayalı türevi eserleri
              hazırlamak da dahil olmak üzere, değiştirmek veya değiştirmek.{" "}
            </p>
            <p>
            <b>ÖZET:</b> Referandom yalnızca bu şartlara uygun olarak kullanmanıza
              izin verilmektedir. Referandom kullanırken geçerli tüm yasalara
              uymalısınız. Referandom tarafından size sunulan şartlar ve
              özellikler ve işlevsellikler uyarınca Referandom’a yalnızca ticari
              olmayan amaçlar için erişme ve kullanma hakkını vermektedir.
              Referandom kullanırken, geçerli tüm yerel ve uluslararası
              yasalara, tüzüklere, yönetmeliklere ve yönetmeliklere uymalısınız.
              Herhangi bir materyali ve Referandom’un geri kalanını kullanmanız
              tamamen sizin sorumluluğunuzdadır. Referandom, materyalleri
              yüklemenize, göndermenize veya dağıtmanıza, Referandom’u
              kullanmanıza, kişisel ve ticari olmayan kullanımınız için içeriği
              ve malzemeleri görüntülemenize, kopyalamanıza veya indirmenize
              izin verebilir:{" "}
            </p>
            <p>
            <b>ÖZET:</b> Referandom'da içerik yayınladığınızda, Referandom Topluluk
              Kuralları ve Telif Hakkı / Ticari Marka Politikaları dahil olmak
              üzere çeşitli politikalarımıza lütfen saygı gösterin. • Tüm
              materyallerinizin ve materyallerinizi göndermenin sonuçlarının
              tamamen sizin sorumluluğunuzda olduğunu ve bu koşullara, Gizlilik
              Politikasına ve Topluluk Kurallarımıza tabi olduğunu anlıyorsunuz.
              • Materyalinizin telif hakkı, ticari marka, tanıtım / gizlilik
              hakkı veya herhangi bir üçüncü şahsın fikri mülkiyetini veya
              mülkiyet hakkını ihlal etmediğini beyan ve garanti etmektesiniz.{" "}
            </p>
            <p>
            <b>ÖZET:</b> Gönderdiğiniz içeriğin belirli haklarını bize veriyorsunuz.
              İçeriğinizi artık görüntülememizi istemiyorsanız, içeriği
              Referandom’dan kaldırabilirsiniz. • Materyallerinizi Referandom
              üzerine göndererek, karşıya yükleyerek veya başka bir şekilde
              dağıtarak, diğer Referandom kullanıcılarının bu Materyallere
              erişebileceğini, görüntüleyebileceğini, görüntüleyebileceğini,
              depolayabileceğini ve indirebileceğini açıkça kabul etmiş
              olursunuz ve bu Materyalleri başkalarına verebilecek ve
              Referandom'a size ve diğer sürekli, devredilebilir,
              devredilebilen, dünyaya verilen her türlü hibe hakkını
              sağladığınızı beyan ve taahhüt etmektesiniz. Kullanım, kopyalama,
              çoğaltma, işleme, değiştirme, uyarlama, yayınlama, düzenleme
              hakları da dahil olmak ancak bunlarla sınırlı olmamak üzere, tüm
              amaçlar için Materyallerde (ahlaki haklar da dahil olmak üzere)
              tüm haklarınıza geniş, münhasır olmayan, telifsiz, lisans bu
              Materyalleri herhangi bir şekilde, medyada ya da teknolojide başka
              eserlere dahil etmek, aktarmak, dağıtmak, sergilemek ve bunları
              gerçekleştirmek. Referandoma materyaller sağlayarak, Referandom’un
              bu Materyalleri herhangi bir şekilde, medyada ve teknolojide
              sağlayıcısı olarak tanımlamasına izin verirsiniz. Materyalinizi
              Referandom’dan çıkararak, materyallerinizi sergileme hakkına
              ilişkin olarak bu lisansı iptal edebilirsiniz. • Referandom'un
              gönderdiğiniz veya postaladığınız herhangi bir materyalin
              depolanması, silinmesi veya başka bir şekilde kullanılması veya
              Referandom aracılığıyla gönderdiğiniz diğer e-postalar veya diğer
              iletişimler için hiçbir yükümlülüğünün veya sorumluluğunun
              olmadığını kabul edersiniz. Referandom, genel uygulamalarını ve
              sınırlarını istediği zaman, bildirimde bulunarak veya bildirmeden,
              kendi takdirine bağlı olarak değiştirme hakkını saklı tutar. •
              İçeriğinizdeki herhangi bir telif hakkı veya diğer mülkiyet hakkı
              bildirimini kaldırmayacak veya gizlemeyeceksiniz.{" "}
            </p>
            <p>
            <b>ÖZET:</b> Lütfen bizi hacklemeyin. • Referandom ile ilişkili herhangi
              bir yazılımın kaynak koduna erişemez, kullanamaz, değiştiremez,
              kopyalayamaz, tersine mühendislik uygulayamaz veya başka bir
              şekilde türetemezsiniz; • Referandom'un bilgisayar sistemlerine
              yetkisiz erişim sağlamaya veya herhangi bir sınırlama olmaksızın,
              herhangi bir şekilde yükleme veya başka bir şekilde yayınlama da
              dahil olmak üzere, bozulan, kaliteyi azaltan, performansa müdahale
              eden veya Referandom’un işlevselliğini bozan herhangi bir
              etkinlikte bulunmaya çalışamazsınız. Virüs ya da başka bir
              bilgisayar kodu, bozukluğu ya da işlevselliği kesintiye uğratmak,
              yok etmek ya da sınırlandırmak, ya da herhangi bir yazılım,
              donanım, telekomünikasyon, ağ, sunucu ya da diğer ekipmanı bozmak
              için tasarlanmış programlar ya da programlar içeren Referandom
              yoluyla ya da bu malzemeler yoluyla yapılan materyaller kullanmak
              yasaktır.{" "}
            </p>
            <p>
            <b>ÖZET:</b> Lütfen izin almadan verilerimizi kazımayın. • Referandom
              tarafından açıkça izin verilmedikçe, veri kazımak veya indirmek
              için örümcekler, robotlar, tarayıcılar, veri madenciliği araçları
              veya benzerleri dahil olmak üzere otomatik araçlar
              kullanamazsınız;{" "}
            </p>
            <p>
            <b>ÖZET:</b> Lütfen aldatmaca yapmayın. • Şartlar'da açıkça izin
              verilmedikçe veya Referandom'un önceden yazılı onayı alınmamışsa,
              yalnızca ticari nitelikte olan tüccar materyalleri aracılığıyla
              veya bunlarla para yatırmak, promosyon yapmak, reklam vermek
              amacıyla tevdi etmek suretiyle veya bu materyalleri başka bir
              şekilde yayınlamak veya herhangi bir şekilde yayınlamak için
              yükleyebilirsiniz. veya Topluluk Kurallarımızda açıkça
              belirtildiği üzere mal veya hizmet talep etmek yasaktır.{" "}
            </p>
            <p>
            <b>ÖZET:</b> Lütfen, Referandom'da izin verilen ve yasaklanan davranışlar
              hakkında daha fazla bilgi edinmek için Referandom Topluluk
              Kurallarını ziyaret edin.
            </p>
            • Zaman zaman güncellenen Referandom Topluluk Kurallarına uymayı
            kabul etmiş sayılırsınız.
            <p><b>3. Mobil Yazılım</b>
              <p>
              <b>ÖZET:</b> Mobil cihazlardayız! İşte birkaç mobile özel terim. Bir
                mobil cihaz ("Mobil Yazılım") aracılığıyla Referandom'a erişmek
                için mevcut yazılımımızı kullanabilir. Mobil Yazılımı kullanmak
                için mobil yazılımımız ile uyumlu bir mobil cihazınız olmalıdır.
                Referandom, mobil yazılımın mobil cihazınızla uyumlu olacağını
                garanti etmez. Mobil yazılım ile bağlantılı olarak kullanabilir
                ve bu servisler için kablosuz sağlayıcınızdan ek ücret alabilir.
                Bu tür ücretlerden yalnızca siz sorumlu olduğunuzu kabul
                edersiniz. Referandom, size, kişisel kullanımınız için sadece
                sizin tarafınızdan sahip olunan ya da kiraladığınız bir mobil
                cihaz üzerinde bir Referandom hesabı için mobil yazılımın
                derlenmiş bir kod kopyasını kullanmak için münhasır olmayan,
                devredilemez, geri alınabilir bir lisans vermektedir. Şunları
                yapamazsınız: (a) bu tür kısıtlamaların yasalarca açıkça
                yasaklandığı durumlar haricinde, Mobil Yazılımı değiştirmek,
                parçalara ayırmak, kaynak koda dönüştürmek veya tersine
                mühendislik uygulamak; (b) Mobil Yazılımı herhangi bir üçüncü
                tarafa kiralamak, kiraya vermek, ödünç vermek, yeniden satmak,
                alt lisanslamak, dağıtmak veya başka şekilde devretmek veya
                herhangi bir üçüncü taraf için zaman paylaşımı veya benzer
                hizmetler sağlamak üzere Mobil Yazılımı kullanmak; (c) Mobil
                Yazılımın herhangi bir kopyasını yapmak; (d) Mobil Yazılımın
                güvenlikle ilgili özelliklerini kaldırmak, atlatmak, devre dışı
                bırakmak, zarar vermek veya başka bir şekilde engellemek, Mobil
                Yazılım aracılığıyla erişilebilen herhangi bir içeriğin
                kullanımını veya kopyalanmasını veya bunların kullanımını
                kısıtlayan veya kısıtlayan özellikler veya Mobil cihazların
                kullanımıyla ilgili sınırlamaları zorlayan özellikler. Yazılım;
                veya (e) Mobil Yazılım üzerindeki telif hakkı ve diğer mülkiyet
                hakkı bildirimlerini silmek. Referandom'un zaman zaman Mobil
                Yazılımın güncellenmiş sürümlerini yayınlayabileceğini ve mobil
                cihazınızda kullandığınız Mobil Yazılım sürümünü otomatik olarak
                yükseltebileceğini kabul etmektesiniz. Mobil cihazınızda bu tür
                otomatik güncellemelere izin veriyorsunuz ve bu şartların ve
                koşulların söz konusu güncellemelere uygulanacağını kabul
                edersiniz. Referandom veya onun üçüncü taraf ortakları veya
                tedarikçileri, Mobil Yazılımdaki tüm hakları, hakları ve
                çıkarları (ve bunların herhangi bir kopyasını) muhafaza eder.
                İşbu Şartlar'da açıkça belirtilen durumlar haricinde, buradaki
                hak, yükümlülük veya yükümlülüklerin herhangi birini devretme
                girişimleriniz geçersizdir. Referandom, bu şartlar kapsamında
                açıkça verilmeyen tüm hakları saklı tutar.{" "}
              </p>
              <p><b>4. Sorumluluk ve Onay</b>
                <p>
                <b>ÖZET:</b> Belirli ortaklarla zaman zaman işbirliği yapabilmemize
                  rağmen, Referandom’da karşılaşabileceğiniz belirli bir kişi
                  veya kuruluşu desteklemiyoruz. Referandom’da biriyle bağlantı
                  kurmayı seçerseniz, bu ilişki sizin sorumluluğunuzdadır ve
                  sizin sorumluluğunuz sizdedir. Referandomda veya e-posta
                  iletilerinde sunulan içerik ve materyaller, çeşitli
                  kaynaklardan toplanır ve yalnızca genel bilgiler olarak
                  tasarlanmıştır. Herhangi bir içeriğin veya materyallerin
                  yükleniciye dahil edilmesi, Referandom bu tür bilgilerin
                  (organizasyon tanımları ve görevleri veya bağış miktarlarını
                  içerebilecek şekilde) onaylanması, temsil edilmesi veya
                  garanti edilmemesi veya doğruluğu, eksiksizliği veya
                  güncelliğini teşkil etmez veya göstermez. Web sitesi
                  aracılığıyla (Materyaller, İçerikler ve e-postalar dahil),
                  bireylere veya kurumlara erişebilirsiniz; Bununla birlikte, bu
                  kişi veya kuruluşların herhangi biriyle iletişim kurma veya
                  bunlarla ilgilenme tercihiniz tamamen sizin sorumluluğunuzdur
                  ve Referandom, üçüncü taraflarla yaptığınız işlemlere veya
                  anlaşmalara dahil değildir.{" "}
                </p>
                <p><b>5. Fikri Mülkiyet</b>
                  <p>
                  <b>ÖZET:</b> Kullanıcılarımızın, Referandom veya sebepler üzerine
                    içerik yayınlamak için yeterli haklara ve / veya izinlere
                    sahip olmaları gerekmektedir. İçeriğinizden herhangi
                    birinin, söz konusu içeriğe ilişkin haklarınızı veya
                    izinlerinizi ihlal edecek şekilde yayınlandığını
                    düşünüyorsanız, sorunla ilgili olarak size yardımcı
                    olabilmemiz için lütfen bize ulaşmak için aşağıdaki
                    yönergeleri kullanın. Patent, telif hakkı, ticari marka,
                    hizmet markası, ticari marka, ticari kıyafet, türev eserler,
                    ahlaki haklar, ticari sırlar ve İçerik ve / veya Referandom
                    ile ilişkili tescilli bilgi ve teknoloji dahil ancak
                    bunlarla sınırlı olmamak üzere fikri mülkiyet hakları;
                    Referandom tarafından sahip olunan veya lisanslanan
                    materyaller burada açıkça belirtilmedikçe, ne Referandom ne
                    de onun lisans verenleri, herhangi bir fikri mülkiyet
                    altındaki herhangi bir lisans ya da hak, ima, estoppel ya da
                    başka türlü bir şekilde size izin vermez. Fikri mülkiyet
                    hakkı hakları size ait değildir. İçerik veya Referandom ile
                    ilişkili fikri mülkiyet haklarını ihlal etmemeyi veya
                    bunlara itiraz etmemeyi kabul edersiniz. Referandom, telif
                    hakkı veya diğer fikri mülkiyet haklarının ihlali veya başka
                    bir sebepten dolayı, Referandom’u herhangi bir maddeyi
                    durdurma, devre dışı bırakma veya başka şekilde kaldırma
                    hakkını saklı tutar ve Referandom'a erişimi sonlandırır.
                    Referandom üzerindeki herhangi bir İçeriğin veya Malzemenin
                    telif haklarınızı ihlal ettiğini düşünüyorsanız,
                    Referandom’a posta yoluyla ulaşılabilen telif hakkı
                    temsilcisiyle iletişime geçin: Telif Hakkı Bölümü, adres ve
                    telefon; veya destek@referandom.com adresinden e-posta
                    gönderin. Sebepler üzerindeki herhangi bir İçeriğin veya
                    Malzemenin telif haklarınızı ihlal ettiğini düşünüyorsanız,
                    aşağıdaki adreste yer alan Kullanıcıların telif hakkı
                    temsilcisine başvurun: destek@referandom.com adresinden
                    e-posta gönderin. Bildirim aşağıdakileri içeren yazılı bir
                    iletişim olmalıdır: • İhlal edildiği iddia edilen münhasır
                    hakkın sahibi adına hareket etmeye yetkili bir kişinin
                    fiziksel veya elektronik imzası; • İhlal edildiği iddia
                    edilen telif hakkıyla korunan çalışmanın tanımlanması veya
                    Referandom'da birden fazla telif hakkı alınmış eserin tek
                    bir bildirim ile karşılanması durumunda, bu tür çalışmaların
                    temsili bir listesi; • İhlal ettiği iddia edilen ya da ihlal
                    edici faaliyet konusu olan ve kaldırılacak ya da erişimi
                    engellenecek olan malzemenin tanımlanması ve materyali
                    bulmamıza izin vermek için makul ölçüde yeterli bilgi; •
                    Şikâyette bulunan taraf ile iletişim kurmamıza izin verecek
                    yeterli bilgi, örneğin bir adres, telefon numarası ve varsa
                    şikayetçi tarafın irtibat kurulabileceği elektronik posta
                    adresi gibi. • İmzanın, materyalin şikayet edilen şekilde
                    kullanılmasının telif hakkı sahibi, temsilcisi veya yasa
                    tarafından izin verilmediğine dair iyi niyetli bir inanca
                    sahip olduğu; ve • Bildirimde yer alan bilgilerin doğru ve
                    yalancı cezaya tabi olduğuna dair bir imza, imza tarafının
                    ihlal edildiği iddia edilen münhasır hakkın sahibi adına
                    hareket etme yetkisine sahip olduğunu ifade eder.
                  </p>
                  <p><b>6. Tazminat</b>
                    <p>
                    <b>ÖZET:</b> Bir kişi, Referandom'a yaptığınız bir şey yüzünden
                      Referandom'a karşı yasal işlem başlatırsa, bu masraftan
                      siz sorumlu olacaksınız. Resmi kapasitesinde hareket eden
                      bir devlet kurumu veya resmi görevlisiyseniz
                      destek@referandom.com ‘dan bizimle iletişime geçin.
                      Referandom'u ve onun ilgili görevlilerini, direktörlerini,
                      çalışanlarını, temsilcilerini, temsilcilerini ve
                      iştiraklerini ve herhangi bir iddia, eylem veya talep ve
                      ilgili masraf ve giderlerden zararsız olarak tazmin
                      etmeyi, savunmayı ve tutmayı kabul edersiniz ( Sizin (veya
                      şifrenizi kullanan herhangi birinden) kaynaklanan makul
                      avukat ücretleri dahil): (a) Materyaller; (b) Referandom
                      kullanımı; (c) Diğer kullanıcılarla veya Referandom
                      üzerinde üçüncü taraflarla etkileşim; (d) bu Şartların
                      ihlali; veya (e) üçüncü tarafların fikri mülkiyet,
                      gizlilik veya diğer haklarının ihlali.{" "}
                    </p>
                    <p><b>7. Sorumluluk Reddi</b> </p>
                    <p>
                    <b>ÖZET:</b> Genç bir platformuz ve Referandom’u nasıl daha iyi
                      hale getireceğimize dair birçok planımız var. Daha fazla
                      özellik kat ettikçe ütülenecek bazı kıvrımlar olacak,
                      lütfen bizimle paylaşın. Bu nedenlerden ötürü, geçerli
                      hizmet size herhangi bir garanti olmaksızın "olduğu gibi"
                      sunulmaktadır. ŞARTLARDA AÇIKÇA BELİRTİLMİŞ OLSA,
                      REFERANDOM REKLAMLAR, LİNKLER VE E-POSTALAR) DAHİL OLMAK
                      ÜZERE “OLDUĞU GİBİ” VE “HERHANGİ BİR GARANTİ OLMAKSIZIN”
                      OLDUĞU GİBİ SAĞLANMAKTADIR. REFERANDOM, HERHANGİ BİR
                      MALZEME VEYA HERHANGİ BİR İLGİLİ ÜRÜN, EKİPMAN VEYA
                      HİZMETLERİN DOĞRULUĞU, LEGALİTESİ, UYGULAMASI,
                      GERÇEKLEŞTİRİLMESİ VEYA DİĞER KALİTELERİNİ GARANTİ ETMEZ
                      VEYA GARANTİ ETMEZ. REFERANDOM, BURADA YASALARIN İZİN
                      VERDİĞİ AZAMİ ÖLÇÜDE: SATILABİLİRLİK, BELİRLİ BİR AMACA
                      UYGUNLUK VE İHLAL EDİLMEMESİ İLE İLGİLİ ZIMNİ GARANTİLER
                      DE DAHİL ANCAK BUNLARLA SINIRLI OLMAMAK ÜZERE AÇIK VEYA
                      ZIMNİ GARANTİLER; ANCAK BUNLARLA SINIRLI OLMAYAN DİĞER
                      GARANTİLER: KESİNTİSİZ KULLANIM; WEB SİTESİNİN
                      KULLANILABİLİRLİĞİ; KONTAMİNASYON VEYA TAHLİYE
                      ÖZELLİKLERİNİ ETKİLEYEN VİRÜSLER, KELİMELER, TRUVA ATLARI;
                      REFERANDOM YA DA BUNLARLA SAĞLANAN BİLGİLERİN DOĞRULUĞU,
                      TAMAMLANMASI, GÜVENİLİRLİĞİ, ZAMANINDA, PARA BİRİMİ VE
                      YARARLI OLMASI; VE YOLSUZLUK BAKIMIYLA İLGİLİ HERHANGİ BİR
                      ÇALIŞMA YOKSULUĞU VE İŞLETME HİZMETİ. REFERANDOM, YASAL,
                      VERGİ VEYA DİĞER MESLEKİ TAVSİYE VEYA HİZMETLERİN
                      HÜKÜMLERİNDE MÜDAHELE EDİLMEMEKTEDİR VE REFERANDOM’UN
                      HERHANGİ BİR YASAL, VERGİ VEYA DİĞER MESLEKİ TAVSİYE
                      İÇERMEDİĞİNİ KABUL ETMİŞ OLURSUNUZ.
                    </p>
                    <p><b>8. Sorumluluk Sınırlaması</b> </p>
                    <p>
                    <b>ÖZET:</b> Referandom deneyiminizi güvenli ve keyifli hale
                      getirmek için çok çalışıyoruz. Ancak, Referandom’u (çoğu
                      Internet servisinde olduğu gibi) kendi sorumluluğunuzda
                      kullandığınızı ve herhangi bir doğrudan veya dolaylı
                      zarardan sorumlu tutulamayacağımızı lütfen unutmayın.{" "}
                    </p>
                    <p><b>9. Bağlantılar</b> </p>
                    <p>
                    <b>ÖZET:</b> Referandom’un bir parçası olmayan Referandom ile
                      ilgili linkleri ve diğer referansları görebilirsiniz. Aksi
                      belirtilmedikçe üçüncü taraflarla hiçbir ilgimizin
                      olmadığını unutmayın. Referandom kullanıcıları, Referandom
                      üzerindeki üçüncü taraf web sitelerine (reklam verenler ve
                      diğerleri dahil) bağlantılar sağlayabilir. Üçüncü
                      taraflar, Referandom’un kontrolü altında değildir ve
                      Referandom üçüncü şahıs web sitelerindeki içeriklerinden
                      veya davranışlarından sorumlu değildir. Üçüncü bir şahısla
                      etkileşimde bulunursanız veya Referandom’dan bir üçüncü
                      taraf web sitesine erişirseniz, bunu kendi
                      sorumluluğunuzda yaparsınız. Referandom bağlantıyı
                      kolaylık sağlamak için kullanmaktadır ve bağlantının
                      eklenmesi, Referandom’un üçüncü taraf web sitelerinde yer
                      alan içeriği onayladığı, beyan ettiği, taahhüt ettiği veya
                      kabul ettiği anlamına gelmez veya ima etmez.{" "}
                    </p>
                    <p><b>10. Anlaşma</b> </p>
                    <p>
                      Zaman zaman değiştirdiğimiz Şartlar ve Gizlilik Politikası
                      ve sizinle birlikte girdiğimiz diğer yazılı anlaşmalar siz
                      ve Referandom arasındaki tüm sözleşmeyi oluşturur. Bu
                      şartların herhangi bir hükmünün hukuka aykırı, geçersiz
                      veya herhangi bir nedenle uygulanamaz olması halinde, bu
                      hüküm bu şartlardan ayrılabilir olarak kabul edilir ve
                      kalan hükümlerin geçerliliğini ve uygulanabilirliğini
                      etkilemez.{" "}
                    </p>
                    <p><b>11. Değişiklikler</b> </p>
                    <p>
                    <b>ÖZET:</b> Bu dünyada değişmeyen tek şey değişmedir. Gelecekte,
                      güncellemek zorunda kalacağımız şeyler olabilir.
                      Yaptığımız zaman size bildirmek için elimizden gelenin en
                      iyisini yapacağız. Bu şartları herhangi bir zamanda
                      değiştirmek için kendi takdirimize bağlı olarak hakkımızı
                      saklı tutuyoruz. Bu şartlarda yapılacak değişiklikler,
                      Referandom aracılığıyla size sunulacak veya size e-posta
                      yoluyla gönderilecektir. Tüm değişiklikler tüm
                      kullanıcılara gönderildikten sonra yürürlüğe girer.
                      Değişikliklerin yayınlanmasını takiben Referandom’u
                      kullanmaya devam etmeniz, değişikliklere ilişkin
                      sözleşmenizdir ve bu şartların o zamanki geçerli sürümüne
                      bağlı kalırsınız. Bu şartlarda yapılan herhangi bir
                      değişiklik sizin için kabul edilemez ise, Referandom’u
                      kullanmaya devam etmemelisiniz. Referandom, tamamen kendi
                      takdirine bağlı olarak, bu şartların herhangi bir hükmünün
                      ihlali de dahil olmak üzere, herhangi bir sınırlama
                      olmaksızın, Referandom’un tümüne veya bir kısmına
                      erişiminizi askıya alma veya reddetme hakkını saklı tutar.
                      Referandom ayrıca, herhangi bir zamanda size bildirimde
                      bulunmaksızın Referandom’u değiştirme hakkını saklı tutar.{" "}
                    </p>
                    <p><b>12. Genel</b> </p>
                    <p>
                      Referandom’a bir işletme kuruluşu veya başka bir kuruluş
                      olarak kaydoluyorsanız, kuruluşu bu şartlara tabi kılma ve
                      işbu sözleşmenin tüm koşullarını kabul etme yetkisine
                      sahip olduğunuzu beyan edersiniz. Bu hükümler, yasa
                      hükümleri ihtilafı göz önüne alınmadan Türkiye Cumhuriyeti
                      yasalarına tabidir. Referandom, herhangi bir sebepten
                      ötürü herhangi bir hak veya yükümlülüğü Şartlar kapsamında
                      başka bir tarafa bildirmeksizin veya izin vermeden
                      devredebilir.{" "}
                    </p>
                    <p><b>13. Fesih</b> </p>
                    <p>
                      {" "}
                      Referandom, tamamen kendi takdirine bağlı olarak,
                      bildirimde bulunarak veya bildirimde bulunmadan, kayıt
                      işleminizi, şartları ve Referandom’a tümüyle veya bir
                      kısmına erişiminizi askıya alma veya feshetme hakkını
                      saklı tutar. Şartların sona ermesi üzerine
                      yükümlülükleriniz ve Referandom’un hakları ve
                      feragatnameleri devam eder, ancak Referandom’u kullanma
                      hakkınız derhal sona erer. Referandom’un sizin veya
                      başkalarının ihlaline karşı harekete geçmemesi,
                      Referandom’un sonraki veya benzer ihlallere ilişkin olarak
                      hareket etme hakkından feragat ettirmemektedir.{" "}
                    </p>
                  </p>
                </p>
              </p>
            </p>
          </p>
        </p>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onLoadHistory: history => dispatch(loadHistory(history))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Terms);
