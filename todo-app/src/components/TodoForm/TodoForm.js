import { Form, FormGroup, Label, Input, Button } from "reactstrap";

import React, { Component } from "react";

export class TodoForm extends Component {
  state = {
    text: "",
    description: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  submitHandler = (e) => {
    e.preventDefault();

    this.props.createTodo(this.state);

    e.target.reset();
    this.setState({
      text: "",
      description: "",
    });
  };

  render() {
    return (
      <Form onSubmit={this.submitHandler}>
        <FormGroup>
          <Label>Enter Task</Label>
          <Input
            type="text"
            name="text"
            value={this.state.text}
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label>Enter short Description</Label>
          <input
            type="textarea"
            name="description"
            value={this.state.description}
            onChange={this.handleChange}
          />
        </FormGroup>

        <Button type="submit">Create Task</Button>
      </Form>
    );
  }
}

export default TodoForm;
