import React, { Component } from "react";

class ExpandButton extends Component {
  render() {
    const {
      vote,
      onClick,
      role,
      role2,
      display,
      text,
      mode,
      expired
    } = this.props;

    return (
      <div className={`ui grid butonlar d-${display ? "block" : "none"}`}>
        <div
          className={`column ${
            vote
              ? "katiliyorum"
              : expired
              ? "a-profile-daralt katilmiyorum"
              : "katilmiyorum"
          } ${
            role === "collapse"
              ? "a-daralt a-more-radius"
              : mode === "profile"
              ? "a-profile-daralt"
              : ""
          }`}
          onClick={onClick}
        >
          {text}
          <i
            className={`fa fa-chevron-${
              role === "expand" ? "down" : role2 === "viewAll" ? "" : "up"
            } ml-3`}
            aria-hidden="true"
          />
        </div>
      </div>
    );
  }
}

export default ExpandButton;
