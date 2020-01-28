import React from "react";
import { connect } from "react-redux";
import Joi from "joi-browser";
import { Checkbox } from "semantic-ui-react";
import FormClass from "../components/common/form";
import FooterCard from "../components/footerCard";
import {
  loginWithJwt,
  register,
  login,
  uiStartRegisterButton,
  uiStopRegisterButton,
  uiStartLoginButton,
  uiStopLoginButton,
  loadHistory
} from "../store/actions/index";

class Home extends FormClass {
  state = {
    data: { email: "", password: "", username: "" },
    errors: {},
    isRegister: true
  };

  schema = {
    username: Joi.string()
      .required()
      .label("Username"),
    email: Joi.string()
      .required()
      .email()
      .label("Email"),
    password: Joi.string()
      .required()
      .min(5)
      .label("Password")
  };

  componentDidMount() {
    this.props.onLoadHistory(this.props.history);
  }

  register = async () => {
    try {
      this.props.onStartRegisterButton();
      const response = await this.props.onRegister(this.state.data);
      this.props.onLoginWithJwt(response.headers["x-auth-token"]);
      window.location = "/akis";
      this.props.onStopRegisterButton();
    } catch (ex) {
      this.handleError(ex);
      this.props.onStopRegisterButton();
    }
  };

  login = async () => {
    try {
      this.props.onStartLoginButton();
      const { data } = this.state;
      await this.props.onLogin(data.username, data.password);
      window.location = "/akis";
      this.props.onStopLoginButton();
    } catch (ex) {
      this.handleError(ex);
      this.props.onStopLoginButton();
    }
  };

  handleError = ex => {
    if (ex.response && ex.response.status === 400) {
      const errors = { ...this.state.errors };
      errors.username = ex.response.data;
      this.setState({ errors });
    }
  };

  changeMode = () => {
    this.setState({ isRegister: !this.state.isRegister });
  };

  enterPressed = event => {
    const code = event.keyCode || event.which;
    if (code === 13) {
      if (this.state.isRegister) this.handleSubmit(event, this.register);
      else this.handleSubmit(event, this.login);
    }
  };

  render() {
    const { isRegister } = this.state;
    return (
      <React.Fragment>
        <main className="ui container a-main-home">
          <div
            className="ui two column doubling grid"
            style={{ minHeight: "100%" }}
          >
            <div className="row index" style={{ minHeight: "100%" }}>
              <div className="column d-flex align-items-start">
                <div className="ui container a-text-align">
                  <div className="invisible mobile-hidden m-0 p-0">
                    <h2 className="ui inverted header">Giris yap</h2>
                    <p className="ui inverted">Demokraside aktif ol!</p>
                  </div>
                  <h2
                    className="ui inverted header"
                    style={{ fontSize: "20px" }}
                  >
                    <i className="university icon" />
                    Meclis gündemini takip et,
                  </h2>
                  <h2
                    className="ui inverted header"
                    style={{ fontSize: "20px" }}
                  >
                    <img
                      src="img/referandom-w.svg"
                      style={{
                        width: "42px",
                        height: "42px",
                        marginTop: "-10px"
                      }}
                      alt=""
                    />{" "}
                    Oylamalara katıl,
                  </h2>
                  <h2
                    className="ui inverted header"
                    style={{ fontSize: "20px" }}
                  >
                    <i className="comment outline icon" /> Gerekçeni belirt,
                  </h2>
                  <h2
                    className="ui inverted header"
                    style={{ fontSize: "20px" }}
                  >
                    <i className="users icon" /> Demokraside aktif ol!
                  </h2>
                </div>
              </div>
              <div className="column d-flex align-items-start">
                <form className="ui large form">
                  <h2 className="ui inverted header">
                    {isRegister ? "Kayıt ol" : "Giriş yap"}
                  </h2>
                  <p className="ui inverted">Demokraside aktif ol!</p>
                  <div className="ui">
                    <div className="field">
                      <div className="ui left icon input d-flex flex-column">
                        <i className="user icon" />
                        {this.renderInput(
                          "username",
                          "Kullanıcı Adı",
                          "text",
                          "a-more-radius"
                        )}
                      </div>
                      {this.renderError("username")}
                    </div>
                    {isRegister && (
                      <div className="field">
                        <div className="ui left icon input d-flex flex-column">
                          <i className="envelope outline icon" />
                          {this.renderInput(
                            "email",
                            "E-posta adresi",
                            "text",
                            "a-more-radius"
                          )}
                        </div>
                        {this.renderError("email")}
                      </div>
                    )}
                    <div className="field">
                      <div className="ui left icon input d-flex flex-column">
                        <i className="lock icon" />
                        {this.renderInput(
                          "password",
                          "Şifre",
                          "password",
                          "a-more-radius"
                        )}
                      </div>
                      {this.renderError("password")}
                    </div>
                    <p
                      style={{ fontSize: "14px" }}
                      className={`text-white ${
                        this.state.isRegister ? "d-block" : "d-none"
                      } `}
                    >
                      Kaydolduğunda <a href="/terms">Hizmet Şartları</a> dahil
                      olmak üzere <a href="/privacy">Gizlilik Politikası'nı</a>{" "}
                      kabul etmiş olursun.
                    </p>
                    <div
                      className={`ui fluid large blue submit button a-more-radius ${
                        isRegister
                          ? this.props.registerButton
                            ? "loading"
                            : ""
                          : this.props.loginButton
                          ? "loading"
                          : ""
                      }`}
                      onClick={
                        isRegister
                          ? e =>
                              this.handleSubmit(
                                e,
                                this.register,
                                this.state.isRegister ? "register" : "login"
                              )
                          : e =>
                              this.handleSubmit(
                                e,
                                this.login,
                                this.state.isRegister ? "register" : "login"
                              )
                      }
                    >
                      {isRegister ? "Kayıt ol " : "Giriş yap "}
                    </div>
                    <p className="inverted" style={{ marginTop: "10px" }}>
                      {isRegister ? "Hesabın mı var? " : "Hesabın yok mu? "}
                      <a href="#" onClick={this.changeMode}>
                        {isRegister ? "Giriş Yap" : "Üye ol"}
                      </a>
                    </p>
                  </div>
                  <FooterCard mode="home" />

                  <div className="ui error message" />
                </form>
              </div>
            </div>
          </div>
        </main>
        <div className="referandummy">
          <img src="img/referandom-w.svg" alt="" />
        </div>
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => {
  return {
    registerButton: state.ui.registerButton,
    loginButton: state.ui.loginButton
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onLoginWithJwt: jwt => dispatch(loginWithJwt(jwt)),
    onRegister: user => dispatch(register(user)),
    onLogin: (username, password) => dispatch(login(username, password)),

    onStartRegisterButton: () => dispatch(uiStartRegisterButton()),
    onStopRegisterButton: () => dispatch(uiStopRegisterButton()),

    onStartLoginButton: () => dispatch(uiStartLoginButton()),
    onStopLoginButton: () => dispatch(uiStopLoginButton()),
    onLoadHistory: history => dispatch(loadHistory(history))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
