import React, { Component } from "react";
import { connect } from "react-redux";
import logger from "../services/logService";
import {
  uiStartCommentButton,
  uiStopCommentButton,
  handleShowToast
} from "../store/actions/index";
import { url } from "../config";

class CommentTextarea extends Component {
  state = {
    text: "",
    remainingWord: 500
  };

  handleChange = e => {
    const text = e.currentTarget.value;
    this.setState({ text, remainingWord: 500 - text.length });
  };

  handleSubmit = async e => {
    this.props.onStartCommentButton();
    if (!this.props.user) {
      this.props.onShowToast("Yorum gönderebilmek için giriş yapınız", "red");
      this.props.onStopCommentButton();
      return;
    }

    const isComment = this.props.data.comments.find(element => {
      if (element && element.owner && element.owner._id === this.props.user._id)
        return element;
    });
    if (isComment) {
      this.props.onShowToast("En fazla bir yorum yapabilirsin", "red");
    } else {
      try {
        await this.props.onAddReason(this.state.text);
        this.props.onShowToast("Yorum gönderildi", "green");
      } catch (error) {
        this.props.onStopCommentButton();
        if (
          error.response &&
          (error.response.status === 500 || error.response.status === 400)
        ) {
          logger.log(error);
          this.props.onShowToast("Yorum gönderilemedi", "red");
          return;
        }
      }
    }
    this.setState({ text: "", remainingWord: 500 });

    this.props.onStopCommentButton();
  };

  render() {
    return (
      <div className="kullanici-yorum">
        <div
          className={`content ${
            this.props.vote ? "katiliyorum" : "katilmiyorum"
          }`}
        >
          <h3>
            <b>{this.props.vote ? "Katılıyorum " : "Katılmıyorum "}</b>
            çünkü;
          </h3>
          <div className="ui form">
            <div className="yorum">
              <img
                style={{ width: "45px", height: "45px", borderRadius: "50%" }}
                src={`${this.props.user ? this.props.user.ppLink : ""}`}
                alt=""
              />
              <div className="kutu">
                <textarea
                  rows="3"
                  maxLength="500"
                  value={this.state.text}
                  onChange={this.handleChange}
                />
                <span className="enter">{this.state.remainingWord}</span>
                <div
                  className={`ui blue button noborder mt-2 ${
                    this.props.commentButton ? "loading" : ""
                  }`}
                  onClick={this.handleSubmit}
                >
                  Gerekçeni Belirt
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    commentButton: state.ui.commentButton,
    user: state.user.moreData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onStartCommentButton: () => dispatch(uiStartCommentButton()),
    onStopCommentButton: () => dispatch(uiStopCommentButton()),
    onShowToast: (text, variant) => dispatch(handleShowToast(text, variant))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentTextarea);
