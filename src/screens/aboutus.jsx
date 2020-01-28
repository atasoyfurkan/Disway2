import React, { Component } from "react";
import { connect } from "react-redux";
import { loadHistory } from "../store/actions/index";

class AboutUs extends Component {
  componentDidMount() {
    this.props.onLoadHistory(this.props.history);
  }

  render() {
    return (
      <div className=" a-container text-white d-flex justify-content-center">
        <p>
          <b>Referandom.com;</b>{" "}
          <p>
            TBMM, İstanbul ve Ankara Büyükşehir Belediyelerinde görüşülen kanun
            tekliflerini ve önergeleri, oylama sonuçlarını ve siyasilerin nerede
            ne dediğini takip edebileceğiniz, oylamalara katılarak kendi
            görüşünüzü belirtebileceğiniz özgür politika platformudur.{" "}
          </p>
          <p>
            <b>Yenilik</b>
            <p>
              Demokrasi kültürü, bireylerin demokrasiye aktif ve bilinçli
              katılımının sağlanmadığı sürece gelişmeyecek ve ilerlemeyecektir.
              Referandom daha aktif ve bilinçli bir katılım için yeni dijital
              araçlarla demokrasinin yeniliği üzerinde çalışıyor.{" "}
            </p>
          </p>
          <p>
            <b>Katılım</b>
            <p>
              Bir toplumun ve bireylerin gelişimini desteklemek için katılımın
              şart olduğuna inanıyoruz. Sağlıklı bir katılımı sağlamak ve teşvik
              etmek için Referandom tüm farklı düşüncelere ev sahipliği yapıyor.
              Özgürlük ve sorumluluk çerçevesinde bireylere saygın bir katılım
              platformu hizmeti sunuyor.{" "}
            </p>
          </p>
          <p>
            <b>Kar amacı gütmeyen </b>
            <p>
              Kayıtlı bir dernek olarak, kar amacı gütmeyen durum, Referandom’un
              temel değerlerinden biridir. Çalışmalarımız, halkın yararına
              katılım konusunda yeni fikir ve yaklaşımların tanıtımını ve
              yayılmasını amaçlamaktadır.{" "}
            </p>
          </p>
          <p>
            <b>Açık kaynak</b>
            <p>
              İşimizi şeffaflaştırmaya ve başkaları tarafından da
              kullanılabilecek katma değer yaratmaya özellikle önem veriyoruz.
              Bu nedenle açık kaynaklı yazılımlar geliştiriyoruz, yani
              yazılımımızın kaynak kodu halka açık ve ücretsiz olarak
              görüntülenebilir, değiştirilebilir ve kullanılabilir.{" "}
            </p>
          </p>
          <p>
            <b>Bağımsızlık</b>
            <p>
              Kar amacı gütmeyen ve belirlediği ilkeler doğrultusunda ilerleyen
              bir dernek olarak, bağımsızlığımızı korumak için içeriğimizi ve
              faaliyetlerimizi sadece resmi kaynaklardan seçer ve işleriz.{" "}
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
)(AboutUs);
