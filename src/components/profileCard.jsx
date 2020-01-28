import React, { Component } from "react";
import { connect } from "react-redux";
import { url } from "../config.json";
import EditModal from "./editModal";

class ProfileCard extends Component {
  state = {
    editModalShow: false
  };

  editModalClose = () => {
    this.setState({ editModalShow: false });
  };

  render() {
    let { user, mode } = this.props;
    if (this.props.visitedUser) user = this.props.visitedUser;

    return (
      <React.Fragment>
        {user && (
          <React.Fragment>
            <div className="ui segment profile a-profile-card ">
              <div className="ui image cover">
                <img src="https://firebasestorage.googleapis.com/v0/b/refern-7c476.appspot.com/o/Politics.jpg?alt=media&token=77a5187b-a9fb-4233-b872-672ea19bbdbd"></img>
              </div>
              <div className="content">
                <a className="info" href="#">
                  <div className="ui avatar image">
                    <img src={user.ppLink} alt="" />
                  </div>
                  <div className="header" href="#">
                    <h3>{user.name ? user.name : user.username}</h3>
                    <p>@{user.username}</p>
                  </div>
                  {(mode === "myProfile" || mode === "akis") && (
                    <div
                      className="ui blue button duzenle a-more-radius"
                      onClick={() => this.setState({ editModalShow: true })}
                    >
                      Düzenle
                    </div>
                  )}
                </a>
                <p className="bio">
                  {user.status !==
                  "Student at University. Loves to build new tools using popular technologies as a creator."
                    ? user.status
                    : "Kişisel bilgi eklenmedi."}
                </p>
                <ul className="links">
                  <li>
                    <i className="chain icon" />
                    <a
                      href={
                        user.website
                          ? "http://" + user.website
                          : "https://www.referandombeta.herokuapp.com"
                      }
                    >
                      {user.website !== "No website"
                        ? user.website
                        : "Website eklenmedi"}
                    </a>
                  </li>
                  <li>
                    <i className="envelope icon" />{" "}
                    <a href={`mailto:${user.email}`}>{user.email}</a>
                  </li>
                  <li>
                    <i className="map marker alternate icon" />{" "}
                    {user.location !== "No Location"
                      ? user.location
                      : "Lokasyon eklenmedi"}
                  </li>
                </ul>
              </div>
              <div className="extra content">
                <div className="ui two column grid">
                  <div className="column">
                    <i className="check icon" />
                    {user.numberOfVote} Oy
                  </div>
                  <div className="column right aligned">
                    <i className="comment icon" />
                    {user.numberOfComment} Yorum
                  </div>
                </div>
              </div>
            </div>
          </React.Fragment>
        )}
        <EditModal
          show={this.state.editModalShow}
          onHide={this.editModalClose}
          user={this.props.user}
        />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user.moreData
  };
};

export default connect(mapStateToProps)(ProfileCard);
