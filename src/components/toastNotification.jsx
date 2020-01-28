import React, { Component } from "react";
import { connect } from "react-redux";
import { Toast } from "react-bootstrap";
import { uiCloseToast } from "../store/actions/index";

class ToastNotification extends Component {
  render() {
    return (
      <div className="a-toast-container">
        <Toast
          style={{ background: String(this.props.toast.variant) }}
          show={this.props.toast.show}
          animation={false}
          onClose={this.props.onClose}
          className="a-toast"
          delay={2000}
          autohide
        >
          <Toast.Header>
            <strong className="mr-auto">{this.props.toast.text}</strong>
          </Toast.Header>
        </Toast>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    toast: state.ui.toast
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onClose: () => dispatch(uiCloseToast())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToastNotification);
