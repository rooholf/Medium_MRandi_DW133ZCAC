import React from "react";
import {Form } from "semantic-ui-react";
import { Component } from "react";

export default class SignInForm extends Component {
  state = {};

  handleChange = (e, { name, value }) => this.setState({ [name]: value });

  handleSubmit = () => {
    const { password, email } = this.state;

    this.setState({ submittedPassword: password, submittedEmail: email,email: '', password: ''  });
  };
  

  render() {
    const { password, email, submittedPassword, submittedEmail } = this.state;
    return (
      <div>
        <Form size="huge" onSubmit={this.handleSubmit}>
          <Form.Input
            name="email"
            value={email}
            placeholder="Your Email" 
            onChange={this.handleChange}
          />
          <Form.Input
              name="password"
              value={password}
              placeholder="Your Password"
              onChange={this.handleChange}
              type="password"
            />
          <Form.Button content="Submit"/>
        </Form>
        <strong>onChange:</strong>
        <pre>{JSON.stringify({ password, email }, null, 2)}</pre>
        <strong>onSubmit:</strong>
        <pre>{JSON.stringify({ submittedPassword, submittedEmail }, null, 2)}</pre>
      </div>
    );
  }
}
