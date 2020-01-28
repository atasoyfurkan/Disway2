import React, { Component } from "react";
import ContactModal from "./contactModal";

class Footer extends Component {
  state = {
    contactModalShow: false
  };

  contactModalClose = () => {
    this.setState({ contactModalShow: false });
  };

  render() {
    return (
      <React.Fragment>
        <footer className="a-bg-special-2  border-top border-light p-3 mx-0 a-fixed-bottom">
          <ul className="row list-inline text-uppercase text-center">
            <li className="col list-inline-item a-footer-item-1 a-footer-text">
              <a href="/terms" className="text-light">
                HİZMET POLİTİKASI
              </a>
            </li>
            <li className="col list-inline-item a-footer-item-2 a-footer-text">
              <a href="/privacy" className="text-light">
                GİZLİLİK SÖZLEŞMESİ
              </a>
            </li>
            <li className="col list-inline-item a-footer-item-3 a-footer-text">
              <a
                href="#"
                onClick={() => this.setState({ contactModalShow: true })}
                className="text-light"
              >
                İLETİŞİM
              </a>
            </li>
          </ul>
          <h6 className="pt-3 pb-2 text-center text-light">Sosyal Medya</h6>
          <ul className="list-inline text-center">
            <li className="list-inline-item mx-3 a-footer-social">
              <a
                href="https://www.facebook.com/referandom"
                className="text-light"
              >
                <i className="fa fa-facebook fa-2x" aria-hidden="true" />
              </a>
            </li>
            <li className="list-inline-item mx-3 a-footer-social">
              <a
                href="https://twitter.com/referandomcom"
                className="text-light"
              >
                <i className="fa fa-twitter-square fa-2x" aria-hidden="true" />
              </a>
            </li>
            <li className="list-inline-item mx-3 a-footer-social">
              <a
                href="https://www.instagram.com/referandom"
                className="text-light"
              >
                <i className="fa fa-instagram fa-2x" aria-hidden="true" />
              </a>
            </li>
          </ul>
        </footer>
        <ContactModal
          show={this.state.contactModalShow}
          onHide={this.contactModalClose}
        />
      </React.Fragment>
    );
  }
}

export default Footer;
