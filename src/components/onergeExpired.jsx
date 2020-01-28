import React, { Component } from "react";
import { Progress } from "semantic-ui-react";
import { Doughnut } from "react-chartjs-2";
import { url } from "../config.json";
import ChartBar from "./chartBar";

class Onerge extends Component {
  state = {
    meclisChartData: {
      labels: ["Katılıyorum", "Katılmıyorum"],
      datasets: [
        {
          data: [this.props.data.meclis.agree, this.props.data.meclis.disagree],
          backgroundColor: ["#09c635", "#d31021"]
        }
      ]
    },
    meclisChartOptions: {
      responsive: false,
      legend: {
        labels: {
          fontColor: "white"
        }
      }
    }
  };
  render() {
    const {
      text,
      onergeyiVeren,
      date,
      category,
      backgroundImage,
      meclis
    } = this.props.data;
    const { display, chartData, chartOptions, mode, vote } = this.props;

    return (
      <div
        className={`ui segment icerik mb-0 ${
          display ? "a-more-radius mb-4" : ""
        }`}
      >
        <div className="content">
          <div
            className={`${
              mode === "profile"
                ? vote
                  ? "a-agree-card"
                  : "a-disagree-card"
                : "overlay"
            } ${display ? "a-more-radius" : ""}`}
          />
          <p className="info">{text}</p>
          <p className="sub">
            <span>
              <i className="user icon" /> {onergeyiVeren}
            </span>
            <span>
              <i className="calendar outline icon" /> {date}
            </span>
            <span>
              <i className="pencil alternate icon" />
              {category}
            </span>
          </p>
          <a href={this.props.data.url} className="onergeMetni">
            <i className="chain icon" />
            Önerge Metni
          </a>
          {display && (
            <div className="row justify-content-center d-flex text-white text-center my-3">
              <div className="col mb-4">
                <React.Fragment>
                  <h3>Referandom Sonuçları</h3>
                  <div className="d-flex justify-content-center">
                    <Doughnut data={chartData} options={chartOptions} />
                  </div>
                </React.Fragment>
              </div>
              <div className="col mb-4">
                <React.Fragment>
                  <h3>Meclis Sonuçları</h3>
                  <div className="d-flex justify-content-center">
                    <Doughnut
                      data={this.state.meclisChartData}
                      options={this.state.meclisChartOptions}
                    />
                  </div>
                </React.Fragment>
              </div>
            </div>
          )}
          <div className="text-white text-center a-meclis-bar ">
            <h3 className="text-center mt-2">
              Önerge durumu:
              {this.props.data.meclis.agree >
              this.props.data.meclis.disagree ? (
                mode === "profile" ? (
                  <span style={{ color: "#005c97" }}> Meclisten geçti</span>
                ) : (
                  <span style={{ color: "#09c635" }}> Meclisten geçti</span>
                )
              ) : mode === "profile" ? (
                <span style={{ color: "#005c97" }}> Meclisten geçmedi</span>
              ) : (
                <span style={{ color: "#d31021" }}> Meclisten geçmedi</span>
              )}
            </h3>
            {display && (
              <React.Fragment>
                <div className="row">
                  <ChartBar
                    textColor="orange"
                    parti="akp"
                    name="AKP"
                    meclis={this.props.data.meclis}
                  />
                  <ChartBar
                    textColor="red"
                    parti="chp"
                    name="CHP"
                    meclis={this.props.data.meclis}
                  />
                </div>
                <div className="row">
                  <ChartBar
                    textColor="purple"
                    parti="hdp"
                    name="HDP"
                    meclis={this.props.data.meclis}
                  />
                  <ChartBar
                    textColor="blue"
                    parti="mhp"
                    name="MHP"
                    meclis={this.props.data.meclis}
                  />
                </div>
                <div className="row">
                  <ChartBar
                    textColor="#1CA8E3"
                    parti="iyip"
                    name="İYİP"
                    meclis={this.props.data.meclis}
                  />
                  <ChartBar
                    textColor="#AEC0C7"
                    parti="bagimsiz"
                    name="BAĞIMSIZ"
                    meclis={this.props.data.meclis}
                  />
                </div>
              </React.Fragment>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Onerge;
