import React from "react";
import { connect } from "react-redux";
import { Modal, Button, Form, InputGroup } from "react-bootstrap";
import Joi from "joi-browser";
import FormClass from "./common/form";
import { sendContact } from "../services/contactService";
import { handleShowToast } from "../store/actions/index";

class ContactModal extends FormClass {
  state = {
    data: { message: "", email: "" },
    errors: {}
  };

  schema = {
    message: Joi.string()
      .required()
      .label("Mesaj"),
    email: Joi.string()
      .required()
      .label("Email")
  };

  doSubmit = async () => {
    try {
      const { data } = this.state;
      await sendContact(data);
      this.props.onHide();
      this.props.onShowToast("Gönderildi", "green");
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.username = ex.response.data;
        this.setState({ errors });
      }
      this.props.onShowToast("Gönderilmedi", "red");
    }
  };

  render() {
    return (
      <Modal show={this.props.show} onHide={this.props.onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Bize Ulaşın!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group>
              {this.renderTextArea("message", "Mesajını gir", 5)}
            </Form.Group>
            <Form.Group>
              <InputGroup>
                {this.renderBootstrapInput(
                  "email",
                  "Email",
                  "email",
                  "rounded-0"
                )}

                <InputGroup.Append>
                  <Button
                    variant="danger"
                    className="text-uppercase rounded-0"
                    type="submit"
                  >
                    Gönder
                  </Button>
                </InputGroup.Append>
              </InputGroup>
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onShowToast: (text, variant) => dispatch(handleShowToast(text, variant))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(ContactModal);
