import React, { Component } from "react";
import { connect } from "react-redux";
import { loadHistory } from "../store/actions/index";

class NotFound extends Component {
  componentDidMount() {
    this.props.onLoadHistory(this.props.history);
  }

  render() {
    return (
      <div className="d-flex text-white justify-content-center text-center mb-4">
        <h1>SAYFA BULUNAMADI</h1>
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
)(NotFound);
