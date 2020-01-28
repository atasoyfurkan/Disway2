import React, { Component } from "react";
import { connect } from "react-redux";
import { url } from "../config";

class Comment extends Component {
  state = { isUpvote: false };

  componentWillUpdate() {
    if (this.props.user)
      this.state.isUpvote = this.props.data.upvotedUsers.includes(
        this.props.user._id
      );
  }

  href = link => {
    this.props.history.push(link);
    window.scrollTo(0, 0);
  };

  render() {
    const { owner, text, upvote, vote } = this.props.data;

    return (
      owner && (
        <div className="column">
          <div
            className={`ui segment yorum a-more-radius ${
              vote ? "green" : "red"
            }`}
          >
            <a
              className="info"
              onClick={() => this.href(`${url}visit/${owner._id}`)}
            >
              <div className="ui avatar image">
                <img src={owner.ppLink} alt="" />
              </div>
              <div className="header" href="#">
                <h3>{owner.name ? owner.name : owner.username}</h3>
                <p className="sub">
                  <i className="bookmark icon" />
                  <b>{vote ? "Katılmak" : "Katılmamak"}</b> için
                  {this.props.best ? " en iyi " : " "} sebep.
                </p>
              </div>
            </a>
            <p className="content">{text}</p>
            <div
              className={`ui button destekle a-more-radius ${
                this.state.isUpvote ? "yellow" : "basic"
              }`}
              onClick={this.props.onUpvote}
            >
              <i
                className={`hand paper icon ${
                  this.state.isUpvote ? "" : "yellow"
                }`}
              />
              <span className="text">
                Destekle{this.state.isUpvote ? "ndi " : " "}
              </span>
              <b>{upvote}</b>
            </div>
            {(this.props.myComment ||
              (this.props.user && this.props.user.isAdmin)) &&
              !this.props.best && (
                <div
                  className="ui button destekle a-more-radius red float-right"
                  onClick={this.props.onDelete}
                >
                  <i className="times icon" />
                  <span className="text">Sil</span>
                </div>
              )}
          </div>
        </div>
      )
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user.moreData
  };
};

export default connect(mapStateToProps)(Comment);
