import React, { Component } from "react";
import ContactModal from "./contactModal";

class Footer extends Component {
  state = {
    contactModalShow: false
  };

  contactModalClose = () => {
    this.setState({ contactModalShow: false });
  };

  href = link => {
    this.props.history.push(link);
    window.scrollTo(0, 0);
  };

  render() {
    return (
      <React.Fragment>
        <footer id="profile-footer">
          <a
            className={`img-cover cursor-point ${
              this.props.mode === "home" ? "d-none" : "d-block"
            }`}
            onClick={() => this.href("/")}
          >
            <img
              src="img/referandom-w.svg"
              alt=""
              srcSet=""
              width="30"
              height="30"
            />
          </a>
          <div className="ui inverted text">
            <a
              className="item cursor-point"
              onClick={() => this.href("/terms")}
            >
              <span>Kullanım Şartları</span>
            </a>
            <a
              className="item cursor-point"
              onClick={() => this.href("/privacy")}
            >
              <span>Gizlilik Politikası</span>
            </a>
            <a
              className="item cursor-point"
              onClick={() => this.href("/aboutus")}
            >
              <span>Hakkımızda</span>
            </a>
            <a
              className="item"
              href="#"
              onClick={() => this.setState({ contactModalShow: true })}
            >
              <span>İletişim</span>
            </a>
          </div>
          <div className="ui inverted text social">
            <a
              className="item"
              target="_blank"
              rel="noopener noreferrer"
              href="https://facebook.com/referandom"
            >
              <i className="facebook f icon" />
            </a>
            <a
              className="item"
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com/referandomcom"
            >
              <i className="twitter icon" />
            </a>
            <a
              className="item"
              target="_blank"
              rel="noopener noreferrer"
              href="https://instagram.com/referandom"
            >
              <i className="instagram icon" />
            </a>
            <a
              className="item"
              target="_blank"
              rel="noopener noreferrer"
              href="https://medium.com/@referandom"
            >
              <i className="medium icon" />
            </a>
          </div>
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
