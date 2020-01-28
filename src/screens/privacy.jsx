import React, { Component } from "react";
import { connect } from "react-redux";
import { loadHistory } from "../store/actions/index";

class Privacy extends Component {
  componentDidMount() {
    this.props.onLoadHistory(this.props.history);
  }

  render() {
    return (
      <div className=" a-container text-white d-flex justify-content-center">
        <p>
          <p>
            <b>1.TOPLADIĞIMIZ VE KULLANDIĞIMIZ BİLGİLER</b>{" "}
          </p>
          <p>
            {" "}
            Referandom’daki deneyimizi iyileştirmek ve geliştirmek için bazı
            bilgileri topluyoruz. Hangi verileri saklıyoruz? Servis
            politikamızda da belirttiğimiz gibi doğum tarihi, cinsiyet,
            kullanıcı adı, e-posta adresi, adres ve şifre bilgilerinizi
            saklıyoruz. Katıldığınız Referandom’lar ve rol aldığınız
            etkinliklerdeki bilgileriniz açık olarak görülebilir. Ayrıca,
            platformumuzdaki hareketlerinizi ve girdiğiniz içerikleri de
            saklıyoruz. Referandom tüm bunları paylaşma hakkını saklı tutar.{" "}
          </p>
          <p>
            Referandom’daki deneyiminizi arttırmak için çerezleri kullanıyoruz.
            Referandom, web sayfası kullanımını kolaylaştırmak için kendisinin
            ve üçüncü partinin çerezlerini kullanır ve böylece içeriğinin daha
            kullanışlı olmasını sağlar. Dolayısıyla 34/2002 11 Temmuz
            Mevzuatında belirtilen, sosyal bilgi servisleri ve elektronik
            ticaret (LSSI) için, <i>“Çerez İdaresi”</i> olarak bilinen İspanyol
            Mevzuatına uyumlaştırılmış, Directive 2009/136/EC’a bağlı
            kalınmıştır. Bu çerezler sayfaya bir sonraki girişinizde sizi
            tanımamızı sağlar.{" "}
          </p>
          <p>
            <b>2. PAYLAŞABİLDİĞİMİZ BİLGİLER</b>
          </p>
          <p>
            Referandom bir toplumsal dayanışma platformudur. Arama motorlarının
            sonuçlarında kullanıcı adınız, profil fotoğrafınız ve hareketleriniz
            gözükebilir. Ayrıca kişisel bilgilerinizi şu kişilerle
            paylaşabiliriz, Kampanya sponsorlarıyla Kampanyanın hedef kitlesiyle
            ve sahibi ile İş ortaklarımızla Herhangi bir hukuk sürecinde{" "}
          </p>
          <p>
            <b>
              3. BİLGİLERİNİZİN DEPOLANMASI VE GÜVENLİĞİNİZ BİZİM İÇİN ÖNEMLİ
            </b>
          </p>
          <p>
            Referandom bilgilerinizin güvenliğini önemser Lütfen hesabınızı
            güçlü bir şifreyle koruyun ve herhangi bir şüpheli aktivitede bize
            destek@referandom.com adresinden ulaşın. Referandom, Türkiye
            Cumhuriyeti yasalarında belirtildiği üzere bazı bilgilerinizi
            izniniz olmaksızın bazı kurumlarla paylaşma hakkını saklı tutar.{" "}
          </p>
          <p>
            <b>4. 18 YAŞINDAN KÜÇÜK KULLANICILAR</b>
          </p>
          <p>
            İçeriklerimiz 18 yaş altı kullanıcıları hedef almamakla beraber,
            kullanıcılar paylaştığı içerik ve yorumlardan kendileri sorumludur.
            18 yaş altı kullanıcılara ait hesapları mümkün olduğunca hızlı bir
            şekilde temizlemeye çalışıyoruz, bu konu ile alakalı
            destek@referandom.com ‘dan bize ulaşabilirsiniz.
          </p>
          <p>
            <b>5. GÜNCELLEME VE DEĞİŞTİRME</b>
          </p>
          <p>
            İşbu sözleşmede yer alan maddeleri değiştirme ve düzenleme hakkımızı
            saklı tutarız. Sözleşmedeki maddelere uymayan kullanıcıların
            hesaplarını silme hakkına sahibiz. Bu sözleşme ile alakalı herhangi
            bir soru için destek@referandom.com adresinden iletişim
            kurabilirsiniz.
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
)(Privacy);
