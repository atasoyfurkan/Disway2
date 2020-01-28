import React, { Component } from "react";
import { Spinner } from "react-bootstrap";

class LoadingSpinner extends Component {
  render() {
    return (
      <div
        className={`justify-content-center text-white mb-4  d-${
          this.props.isLoaded ? "none" : "flex"
        }`}
        style={{ marginTop: "250px" }}
      >
        <Spinner animation="border" />
      </div>
    );
  }
}

export default LoadingSpinner;
