import React, { Component } from "react";
import { Icon, Menu, Sidebar, List } from "semantic-ui-react";
import { connect } from "react-redux";
import ContactModal from "./contactModal";
import ExitWarningModal from "./exitWarningModal";

class SidebarCustom extends Component {
  state = {
    contactModalShow: false,
    exitWarningModalShow: false
  };

  contactModalClose = () => {
    this.setState({ contactModalShow: false });
  };

  exitWarningModalClose = () => {
    this.setState({ exitWarningModalShow: false });
  };

  href = link => {
    this.props.history.push(link);
    window.scrollTo(0, 0);
    this.props.handleSidebarClose();
  };

  render() {
    return (
      <React.Fragment>
        <Sidebar.Pushable
          style={{ transform: "none" }}
          className={`${this.props.className}`}
        >
          {this.props.user && (
            <Sidebar
              as={Menu}
              animation="overlay"
              icon="labeled"
              inverted
              onHide={this.props.handleSidebarClose}
              vertical
              visible={this.props.sidebarShow}
              className="w-75 a-sidebar"
              style={{ position: "fixed" }}
            >
              <div className="d-flex justify-content-start mt-4 ml-4 mb-2">
                <a onClick={() => this.href("/profile")}>
                  <img
                    src={this.props.user.ppLink}
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%"
                    }}
                    alt=""
                  />
                </a>
              </div>
              <div className="d-flex justify-content-start flex-column text-left ml-4 mb-3">
                <h3 className="mb-0">
                  {this.props.user.name
                    ? this.props.user.name
                    : this.props.user.username}
                </h3>
                <p className="text-muted">@{this.props.user.username}</p>
              </div>

              <Menu.Item
                className="p-4"
                as="a"
                onClick={() => this.href("/profile")}
              >
                <List className="d-flex justify-content-start" size="huge">
                  <Icon className="mr-3" name="user" />
                  Profil
                </List>
              </Menu.Item>
              <Menu.Item
                className="p-4"
                as="a"
                onClick={() => this.href("/terms")}
              >
                <List className="d-flex justify-content-start" size="huge">
                  <Icon className="mr-3" name="file alternate" />
                  Kullanım Şartları
                </List>
              </Menu.Item>
              <Menu.Item
                className="p-4"
                as="a"
                onClick={() => this.href("/privacy")}
              >
                <List className="d-flex justify-content-start" size="huge">
                  <Icon className="mr-3" name="privacy" />
                  Gizlilik Politikası
                </List>
              </Menu.Item>
              <Menu.Item
                className="p-4"
                as="a"
                onClick={() => this.href("/aboutus")}
              >
                <List className="d-flex justify-content-start" size="huge">
                  <Icon className="mr-3" name="users" />
                  Hakkımızda
                </List>
              </Menu.Item>
              <Menu.Item
                className="p-4"
                as="a"
                onClick={() => this.setState({ contactModalShow: true })}
              >
                <List className="d-flex justify-content-start" size="huge">
                  <Icon className="mr-3" name="envelope" />
                  İletişim
                </List>
              </Menu.Item>
              <Menu.Item
                className="p-4"
                as="a"
                onClick={() => this.setState({ exitWarningModalShow: true })}
              >
                <List className="d-flex justify-content-start" size="huge">
                  <Icon className="mr-3" name="times" />
                  Çıkış yap
                </List>
              </Menu.Item>
            </Sidebar>
          )}

          <Sidebar.Pusher style={{ minHeight: "100%", height: "100%" }}>
            {this.props.children}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
        <ContactModal
          show={this.state.contactModalShow}
          onHide={this.contactModalClose}
        />

        <ExitWarningModal
          show={this.state.exitWarningModalShow}
          onHide={this.exitWarningModalClose}
        />
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => {
  return {
    user: state.user.moreData,
    history: state.ui.history
  };
};

export default connect(mapStateToProps)(SidebarCustom);
