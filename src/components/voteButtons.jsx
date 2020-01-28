import React, { Component } from "react";

class voteButtons extends Component {
  render() {
    const { display, expand, onClick } = this.props;

    return (
      <div
        className={`ui two column grid butonlar d-${
          display ? "none" : expand ? "flex" : "none"
        }`}
      >
        <div className="column katiliyorum" onClick={() => onClick(true)}>
          Katılıyorum
        </div>
        <div className="column katilmiyorum" onClick={() => onClick(false)}>
          Katılmıyorum
        </div>
      </div>
    );
  }
}

export default voteButtons;
