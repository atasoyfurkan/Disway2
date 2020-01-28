import React, { Component } from "react";
import { Button, Alert, Form } from "react-bootstrap";
import Joi from "joi-browser";

class FormClass extends Component {
  state = {
    data: {},
    errors: {}
  };

  validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.data, this.schema, options);
    if (!error) return null;

    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };

  handleSubmit = (e, callback, mode) => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} });

    if (errors && mode !== "editProfil") {
      if (
        !(
          mode === "login" &&
          !errors.username &&
          !errors.password &&
          errors.email
        )
      )
        return;
    }
    if (errors && mode === "editProfil" && errors.email) {
      return;
    }
    if (callback) callback();
    else this.doSubmit();
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) {
      errors[input.name] = errorMessage;
    } else delete errors[input.name];

    const data = { ...this.state.data };
    data[input.name] = input.value;

    this.setState({ data, errors });
  };

  translateText = error => {
    if (error === '"Email" must be a valid email')
      return "Geçerli bir E-posta adresi girin";

    if (error === '"Username" is not allowed to be empty')
      return "Kullanıcı adı boş bırakılamaz";
    if (error === '"Email" is not allowed to be empty')
      return "E-posta boş bırakılamaz";
    if (error === '"Password" is not allowed to be empty')
      return "Şifre boş bırakılamaz";
    if (error === '"Mesaj" is not allowed to be empty')
      return "Mesaj boş bırakılamaz";

    if (error === '"Password" length must be at least 5 characters long')
      return "Şifrenin uzunluğu en az 5 karakter olmalı";
    else return error;
  };

  renderError = name => {
    return (
      this.state.errors[name] && (
        <Alert className="a-more-radius mt-2" variant="danger">
          {this.translateText(this.state.errors[name])}
        </Alert>
      )
    );
  };

  renderButton = (label, type = "submit", variant = "primary") => {
    return (
      <Button variant={variant} block type={type}>
        {label}
      </Button>
    );
  };

  renderInput = (name, placeholder, type = "text", className = "") => {
    const { data } = this.state;

    return (
      <React.Fragment>
        <input
          className={className}
          name={name}
          type={type}
          placeholder={placeholder}
          value={data[name]}
          onKeyPress={this.enterPressed}
          onChange={this.handleChange}
        />
      </React.Fragment>
    );
  };

  renderBootstrapInput = (
    name,
    placeholder,
    type = "text",
    className = "",
    error = true
  ) => {
    const { data, errors } = this.state;

    return (
      <React.Fragment>
        <Form.Control
          className={className}
          name={name}
          id={name}
          type={type}
          placeholder={placeholder}
          value={data[name]}
          onKeyPress={this.enterPressed}
          onChange={this.handleChange}
        />
        {error && errors[name] && (
          <Alert variant="danger"> {this.translateText(errors[name])}</Alert>
        )}
      </React.Fragment>
    );
  };

  renderTextArea = (name, placeholder, rows, className = "", error = true) => {
    const { data, errors } = this.state;

    return (
      <React.Fragment>
        <Form.Control
          className={className}
          name={name}
          id={name}
          as="textarea"
          placeholder={placeholder}
          rows={rows}
          value={data[name]}
          onChange={this.handleChange}
        />
        {error && errors[name] && (
          <Alert variant="danger">{this.translateText(errors[name])}</Alert>
        )}
      </React.Fragment>
    );
  };
}

export default FormClass;
