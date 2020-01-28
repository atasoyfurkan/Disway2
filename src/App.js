import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Redirect, Switch } from "react-router-dom";
import {
  getCurrentUser,
  getCurrentUserForProfileMoreDetails,
  getData,
  uiFinishLoading,
  uiStartLoading
} from "./store/actions/index";
import ToastNotification from "./components/toastNotification";
import SidebarCustom from "./components/sidebarCustom";
import NavBar from "./components/navBar";
import Home from "./screens/home";
import Akis from "./screens/akis";
import Profile from "./screens/profile";
import Logout from "./screens/logout";
import NotFound from "./screens/notFound";
import Terms from "./screens/terms";
import Privacy from "./screens/privacy";
import AboutUs from "./screens/aboutus";
import VoteCard from "./screens/voteCard";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

import ReactGA from "react-ga";

ReactGA.initialize("UA-154553324-2");
ReactGA.pageview("/");

class App extends Component {
  state = { navbarMargin: 0, sidebarShow: false, redirect: null };

  async componentDidMount() {
    this.props.onUiStartLoading();
    await this.props.onGetCurrentUser();
    await this.props.onGetCurrentUserForProfileMoreDetails();
    await this.props.onGetData();
    this.props.onUiFinishLoading();
  }

  handleSidebarShow = () => this.setState({ sidebarShow: true });
  handleSidebarClose = () => this.setState({ sidebarShow: false });

  onSize = size => {
    this.setState({ navbarMargin: size.height });
    this.setState({ redirect: <Redirect exact to="/" from="/profile" /> });
  };

  render() {
    return (
      <React.Fragment>
        <ToastNotification />
        <NavBar onClick={this.handleSidebarShow} onSize={this.onSize} />

        <SidebarCustom
          className="desktop-hidden"
          sidebarShow={this.state.sidebarShow}
          handleSidebarClose={this.handleSidebarClose}
        >
          {this.renderItems()}
        </SidebarCustom>

        <div className="mobile-hidden">{this.renderItems()}</div>
      </React.Fragment>
    );
  }
  renderItems = () => {
    return (
      <React.Fragment>
        <div style={{ marginTop: "50px" }} onClick={this.handleSidebarClose}>
          <Switch>
            {this.props.currentUser && <Redirect exact to="/akis" from="/" />}
            {!this.props.currentUser && <Redirect exact to="/" from="/akis" />}
            {!this.props.currentUser && this.state.redirect}

            <Route path="/akis" component={Akis} />
            <Route exact path="/" component={Home} />
            <Route path="/logout" component={Logout} />
            <Route path="/not-found" component={NotFound} />
            <Route path="/terms" component={Terms} />
            <Route path="/privacy" component={Privacy} />
            <Route path="/aboutus" component={AboutUs} />
            <Route path="/onerge" component={VoteCard} />
            <Route
              path="/profile"
              render={props => <Profile mode="myProfile" {...props} />}
            />
            <Route
              path="/visit"
              render={props => <Profile mode="visit" {...props} />}
            />
            <Redirect to="/not-found" />
          </Switch>
        </div>
      </React.Fragment>
    );
  };
}

const mapStateToProps = state => {
  return {
    currentUser: state.auth.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onGetCurrentUser: () => dispatch(getCurrentUser()),
    onGetCurrentUserForProfileMoreDetails: () =>
      dispatch(getCurrentUserForProfileMoreDetails()),
    onGetData: () => dispatch(getData()),

    onUiFinishLoading: () => dispatch(uiFinishLoading()),
    onUiStartLoading: () => dispatch(uiStartLoading())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
