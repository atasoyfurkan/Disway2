import React from "react";
import { connect } from "react-redux";
import ImageUploader from "react-images-upload";
import { Modal, Button, Spinner } from "react-bootstrap";
import Joi from "joi-browser";
import FormClass from "./common/form";
import {
  uiStartSaveButton,
  uiStopSaveButton,
  updateUser,
  handleShowToast
} from "../store/actions/index";
import { url } from "../config.json";
import { storage } from "../firebase";

class EditModal extends FormClass {
  state = {
    data: {
      name: this.props.user.name,
      status:
        this.props.user.status ===
        "Student at University. Loves to build new tools using popular technologies as a creator."
          ? "Kişisel bilgi eklenmedi."
          : this.props.user.status,
      website:
        this.props.user.website === "No website"
          ? "Website eklenmedi"
          : this.props.user.website,
      email: this.props.user.email,
      location:
        this.props.user.location === "No Location"
          ? "Lokasyan eklenmedi"
          : this.props.user.location
    },
    errors: {},
    picture: null,
    pictureLink: this.props.user.ppLink,
    pictureLoading: false
  };

  schema = {
    name: Joi.string(),
    status: Joi.string(),
    website: Joi.string(),
    email: Joi.string()
      .required()
      .email()
      .label("Email"),
    location: Joi.string()
  };

  doSubmit = async () => {
    try {
      this.props.onStartSaveButton();
      const user = {
        ...this.props.user,
        ...this.state.data,
        ppLink: this.state.pictureLink
      };
      await this.props.onUpdateUser(user);
      this.props.onHide();
      this.props.onShowToast("Değiştirildi", "green");
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.email = ex.response.data;
        this.setState({ errors });
      }
      console.log(ex);
      this.props.onStopSaveButton();
      this.props.onShowToast("Değiştirilemedi", "red");
    }
    this.props.onStopSaveButton();
  };

  handleUploadImage = async () => {
    const uploadTask = storage
      .ref(`image/${this.state.picture && this.state.picture.name}`)
      .put(this.state.picture);
    await uploadTask.on(
      "state_changed",
      snapshot => {},
      error => {
        console.log(error);
      },
      () => {
        storage
          .ref("image")
          .child(this.state.picture.name)
          .getDownloadURL()
          .then(pictureLink => {
            this.setState({ pictureLink, pictureLoading: false });
          });
      }
    );
  };

  enterPressed = event => {
    const code = event.keyCode || event.which;
    if (code === 13) {
      this.handleSubmit(event, null, "editProfil");
    }
  };

  onDrop = async (pictureFiles, pictureDataURLs) => {
    this.state.pictureLoading = true;
    this.forceUpdate();
    this.state.picture = pictureFiles.pop();
    this.handleUploadImage();
  };

  render() {
    const { user } = this.props;
    return (
      <React.Fragment>
        {user && (
          <Modal show={this.props.show} onHide={this.props.onHide}>
            <Modal.Header closeButton>
              <Modal.Title>Düzenle</Modal.Title>
            </Modal.Header>

            <Modal.Body style={{ padding: 0 }}>
              <div className="ui segment profile">
                <div className="ui image cover">
                  <img
                    style={{ borderRadius: 0 }}
                    src="https://firebasestorage.googleapis.com/v0/b/refern-7c476.appspot.com/o/Politics.jpg?alt=media&token=77a5187b-a9fb-4233-b872-672ea19bbdbd"
                    alt="cover"
                  />
                </div>
                <div className="content">
                  <div className="info">
                    <div
                      className={`ui avatar image ${
                        this.state.pictureLoading
                          ? "d-flex justify-content-center align-items-center"
                          : ""
                      }`}
                    >
                      {!this.state.pictureLoading && (
                        <img src={this.state.pictureLink} alt="profil" />
                      )}
                      {this.state.pictureLoading && (
                        <Spinner animation="border" variant="dark" />
                      )}
                    </div>
                    <div className="header" href="#">
                      <div className="d-flex" style={{ overFlow: "hidden" }}>
                        <div style={{ width: "91%" }} className="mr-2">
                          {this.renderBootstrapInput(
                            "name",
                            "İsim",
                            "name",
                            "",
                            false
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bio">
                    <ImageUploader
                      fileContainerStyle={{
                        background: "transparent",
                        display: "inline",
                        margin: "0",
                        padding: "0"
                      }}
                      buttonStyles={{ marginTop: "-10px", marginLeft: "-11px" }}
                      withIcon={false}
                      withLabel={false}
                      buttonText="Değiştir"
                      onChange={this.onDrop}
                      imgExtension={[".jpg", ".gif", ".png", ".gif", ".jpeg"]}
                      maxFileSize={5242880}
                      singleImage={true}
                    />
                    {this.renderTextArea(
                      "status",
                      "Kişisel bilgiler",
                      3,
                      "mb-2",
                      false
                    )}
                    <div className="ui left icon input d-flex flex-column mb-2">
                      {this.renderInput(
                        "website",
                        "İnternet sitesi",
                        "website",
                        ""
                      )}
                      <i className="chain icon" />
                    </div>
                    <div className="ui left icon input d-flex flex-column mb-2">
                      {this.renderInput("email", "E-posta", "email", "")}
                      <i className="envelope icon" />
                    </div>
                    {this.renderError("email")}
                    <div className="ui left icon input d-flex flex-column">
                      {this.renderInput("location", "Konum", "location", "")}
                      <i className="map marker alternate icon" />
                    </div>
                  </div>
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button
                className={`ui blue button duzenle ${
                  this.props.saveButton ? "loading" : ""
                }`}
                onClick={e => this.handleSubmit(e, null, "editProfil")}
              >
                Kaydet
              </Button>
            </Modal.Footer>
          </Modal>
        )}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    saveButton: state.ui.saveButton,
    user: state.auth.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onStartSaveButton: () => dispatch(uiStartSaveButton()),
    onStopSaveButton: () => dispatch(uiStopSaveButton()),
    onUpdateUser: user => dispatch(updateUser(user)),
    onShowToast: (text, variant) => dispatch(handleShowToast(text, variant))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditModal);
