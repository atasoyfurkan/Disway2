import React, { Component } from "react";
import { Progress } from "semantic-ui-react";

class ChartBar extends Component {
  render() {
    const { parti, meclis, name, textColor } = this.props;
    return (
      <React.Fragment>
        <div className="col">
          <h4 style={{ color: "white" }}>
            {meclis[parti].name ? meclis[parti].name : name}
          </h4>
          {meclis[parti].agree === 0 && meclis[parti].disagree === 0 && (
            <Progress
              className="bg-secondary border border-light"
              percent={100}
            />
          )}
          {!(meclis[parti].agree === 0 && meclis[parti].disagree === 0) && (
            <Progress
              className="bg-danger border border-light"
              percent={
                (meclis[parti].agree * 100) /
                (Number(meclis[parti].agree) + Number(meclis[parti].disagree))
              }
              success
            />
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default ChartBar;
