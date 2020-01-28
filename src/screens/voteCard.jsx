import React, { Component } from "react";
import { connect } from "react-redux";
import Onerge from "../components/onerge";
import Comment from "../components/comment";
import CommentTextarea from "../components/commentTextarea";
import SharePanel from "../components/sharePanel";
import VoteButtons from "../components/voteButtons";
import LoadingSpinner from "../components/loadingSpinner";
import OnergeExpired from "../components/onergeExpired";
import logger from "../services/logService";
import {
  updateVoteCard,
  updateUser,
  updateComment,
  deleteCommentForOneVoteCard,
  addCommentForOneVoteCard,
  upvoteCommentForOneVoteCard,
  handleShowToast,
  loadHistory
} from "../store/actions/index";

class VoteCard extends Component {
  state = {
    data: null,
    display: false,
    expand: true,
    vote: null,
    chartData: null,
    chartOptions: {
      responsive: false,
      legend: {
        labels: {
          fontColor: "white"
        }
      }
    }
  };

  componentDidMount() {
    this.props.onLoadHistory(this.props.history);
  }

  loadData() {
    if (this.state.data || !this.props.isLoaded) return;

    const id = this.props.history.location.pathname.slice(8);
    const data = this.props.data.find(item => item._id === id);
    this.setState({ data });

    this.setState({
      chartData: {
        labels: ["Katılıyorum", "Katılmıyorum"],
        datasets: [
          {
            data: [data.agree, data.disagree],
            backgroundColor: ["#09c635", "#d31021"]
          }
        ]
      }
    });

    let index = -1;
    if (this.props.user)
      this.props.user.votedCards.forEach((value, i) => {
        if (value.mainCard && value.mainCard._id === data._id) index = i;
      });

    if (index !== -1) {
      const vote = this.props.user.votedCards[index].vote;
      this.setState({ vote });
    }
    if (this.props.user) this.setState({ expand: true });
    this.setState({ display: true });
  }

  handleVote = async vote => {
    this.setState({ vote });
    const voteCard = { ...this.state.data };
    voteCard[vote ? "agree" : "disagree"] =
      this.state.data[vote ? "agree" : "disagree"] + 1;
    const index = vote ? 0 : 1;

    const chartData = { ...this.state.chartData };
    chartData.datasets[0].data[index] = voteCard[vote ? "agree" : "disagree"];

    try {
      await this.props.onUpdateVoteCard(voteCard);
    } catch (error) {
      if (error.response && error.response.status === 400) {
        logger.log(error);
        this.props.onShowToast("Oy kullanabilmek için giriş yapınız", "red");
        return;
      }
    }

    this.setState({ display: true, vote, chartData });

    let user = { ...this.props.user };
    user.votedCards.push({
      mainCard: voteCard._id,
      vote: vote
    });
    user.numberOfVote = user.votedCards.length;
    await this.props.onUpdateUser(user);
  };

  handleExpand = () => {
    if (this.state.expand) this.setState({ display: false, expand: false });
    else this.setState({ display: true, expand: true });
  };

  handleAddComment = async text => {
    let comment = {
      owner: this.props.user,
      date: "10 minutes ago",
      text: text,
      vote: this.state.vote,
      upvote: 0,
      mainCardId: this.state.data._id,
      upvotedUsers: []
    };
    await this.props.onAddCommentForOneVoteCard(comment);
  };

  handleUpvote = async comment => {
    if (!this.props.user) {
      this.props.onShowToast("Destekleyebilmek için giriş yapınız", "red");
      return;
    }

    this.props.onUpvoteCommentForOneVoteCard(comment);
    this.forceUpdate();
    await this.props.onUpdateComment(comment);
  };

  handleDelete = async comment => {
    try {
      await this.props.onDeleteComment(comment, this.state.data._id);
      this.props.onShowToast("Yorum başarıyla silindi", "green");
    } catch (error) {
      this.props.onShowToast("Yorum silinemedi", "red");
    }
  };

  handleComments = vote => {
    let comments = [];
    this.state.data.comments
      .slice(0)
      .reverse()
      .forEach(item => {
        if (item.vote === vote) {
          comments.push(item);
        }
      });
    return comments;
  };

  render() {
    this.loadData();
    return (
      <React.Fragment>
        <LoadingSpinner isLoaded={this.props.isLoaded} />
        {this.props.isLoaded && this.state.data && (
          <main
            className="row justify-content-center d-flex"
            style={{ marginTop: "70px" }}
          >
            <div className="col-11 col-sm-10 col-md-9 col-lg-6" id="onergeler">
              <div className="onerge">
                {!this.state.data.expired && (
                  <Onerge
                    data={this.state.data}
                    display={this.state.display}
                    chartData={this.state.chartData}
                    chartOptions={this.state.chartOptions}
                  />
                )}
                {this.state.data.expired && (
                  <OnergeExpired
                    data={this.state.data}
                    display={this.state.display}
                    chartData={this.state.chartData}
                    chartOptions={this.state.chartOptions}
                  />
                )}

                <VoteButtons
                  display={this.state.display}
                  expand={this.state.expand}
                  onClick={this.handleVote}
                />
                <div className={`d-${this.state.display ? "block" : "none"}`}>
                  {!this.state.data.expired && (
                    <CommentTextarea
                      data={this.state.data}
                      vote={this.state.vote}
                      onAddReason={this.handleAddComment}
                    />
                  )}
                  <SharePanel data={this.state.data} vote={this.state.vote} />

                  {this.state.data.comments[0] && (
                    <div className="row">
                      <div className="col-md-6 yorumlar">
                        {this.handleComments(true).map(
                          element =>
                            element.owner && (
                              <div className="mb-4" key={element._id}>
                                <Comment
                                  myComment={
                                    this.props.user &&
                                    element.owner._id === this.props.user._id
                                  }
                                  data={element}
                                  history={this.props.history}
                                  onDelete={() => this.handleDelete(element)}
                                  onUpvote={() => this.handleUpvote(element)}
                                />
                              </div>
                            )
                        )}
                      </div>
                      <div className="col-md-6 yorumlar">
                        {this.handleComments(false).map(
                          element =>
                            element.owner && (
                              <div className="mb-4" key={element._id}>
                                <Comment
                                  myComment={
                                    this.props.user &&
                                    element.owner._id === this.props.user._id
                                  }
                                  data={element}
                                  history={this.props.history}
                                  onDelete={() => this.handleDelete(element)}
                                  onUpvote={() => this.handleUpvote(element)}
                                />
                              </div>
                            )
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </main>
        )}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user.moreData,
    data: state.voteCard.data,
    isLoaded: state.ui.isLoaded
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onUpdateVoteCard: voteCard => dispatch(updateVoteCard(voteCard)),
    onUpdateUser: user => dispatch(updateUser(user)),
    onAddCommentForOneVoteCard: comment =>
      dispatch(addCommentForOneVoteCard(comment)),
    onUpdateComment: comment => dispatch(updateComment(comment)),
    onDeleteComment: comment => dispatch(deleteCommentForOneVoteCard(comment)),
    onUpvoteCommentForOneVoteCard: comment =>
      dispatch(upvoteCommentForOneVoteCard(comment)),
    onShowToast: (text, variant) => dispatch(handleShowToast(text, variant)),
    onLoadHistory: history => dispatch(loadHistory(history))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VoteCard);
