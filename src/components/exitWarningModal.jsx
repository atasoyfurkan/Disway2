import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import { handleShowToast } from "../store/actions/index";
import { url } from "../config";

class ExitWarningModal extends Component {
  render() {
    return (
      <Modal
        size="sm"
        show={this.props.show}
        onHide={this.props.onHide}
        centered
        dialogClassName="radius-modal d-flex justify-content-center"
      >
        <Modal.Body className="d-flex flex-column justify-content-center align-items-center text-center">
          <img
            style={{ width: "40px", height: "40px" }}
            className="img"
            src={url + "img/favicon.png"}
            alt="logo"
          />
          <h3>Referandom'dan çıkış yapılsın mı?</h3>
          <p>İstediğin zaman tekrar oturum açabilirsin.</p>
          <div className="d-flex">
            <Button
              variant="secondary"
              style={{ marginRight: "20px" }}
              className="a-more-radius px-4 py-2"
              onClick={this.props.onHide}
            >
              İptal
            </Button>
            <a href="/logout">
              <Button className="a-more-radius px-4 py-2">Çıkış yap</Button>
            </a>
          </div>
        </Modal.Body>
      </Modal>
    );
  }
}

export default ExitWarningModal;
