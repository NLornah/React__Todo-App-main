import React, { Component } from "react";
import ListView from "../ListView/ListView";
import TableView from "../TableView/TableView";
import TodoController from "../Controller/TodoController";
import TodoForm from "../TodoForm/TodoForm";
import { Modal, ModalBody, ModalHeader } from "reactstrap";

export class Todos extends Component {
  state = {
    todos: [
      {
        id: "01",
        text: "Main text",
        description: "simple desc",
        time: new Date(),
        isSelect: false,
        isComplete: false,
      },
      {
        id: "02",
        text: "Main text",
        description: "simple desc",
        time: new Date(),
        isSelect: false,
        isComplete: false,
      },
    ],

    isOpenModal: false,
    searchTerm: "",
    view: "list",
    filter: "all",
  };

  toggleSelect = (todoId) => {
    const todos = [...this.state.todos];
    const todo = todos.find((t) => t.id === todoId);
    todo.isSelect = !todo.isSelect;

    this.setState({ todos });
  };
  toggleComplete = (todoId) => {
    const todos = [...this.state.todos];
    const todo = todos.find((t) => t.id === todoId);
    todo.isComplete = !todo.isComplete;

    this.setState({ todos });
  };

  toggleForm = () => {
    this.setState({
      isOpenModal: !this.state.isOpenModal,
    });
  };

  performSearch = () => {
    return this.state.todos.filter((todo) =>
      todo.text.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    );
  };

  handleSearch = (value) => {
    this.setState({ searchTerm: value });
  };

  createTodo = (todo) => {
    todo.id = Math.random().toString();
    todo.time = new Date();
    todo.isSelect = false;
    todo.isComplete = false;

    const todos = [todo, ...this.state.todos];

    this.setState({ todos });

    this.toggleForm();
  };

  clearSelected = () => {
    const todos = this.state.todos.filter((todo) => !todo.isSelect);

    this.setState({ todos });
  };

  clearCompleted = () => {
    const todos = this.state.todos.filter((todo) => !todo.isComplete);

    this.setState({ todos });
  };

  reset = () => {
    this.setState({
      isOpenModal: false,
      searchTerm: "",
      view: "list",
      filter: "all",
    });
  };

  changeView = (e) => {
    this.setState({ view: e.target.value });
  };

  handleFilter = (filter) => {
    this.setState({ filter });
  };

  performFilter = (todos) => {
    const { filter } = this.state;

    if (filter === "completed") return todos.filter((todo) => todo.isComplete);
    if (filter === "running") return todos.filter((todo) => !todo.isComplete);
    else return todos;
  };

  getView = () => {
    let todos = this.performSearch();
    todos = this.performFilter(todos);
    return this.state.view === "list" ? (
      <ListView
        todos={todos}
        toggleSelect={this.toggleSelect}
        toggleComplete={this.toggleComplete}
      />
    ) : (
      <TableView
        todos={todos}
        toggleSelect={this.toggleSelect}
        toggleComplete={this.toggleComplete}
      />
    );
  };

  render() {
    return (
      <div>
        <h1 className="display-6 text-center">React Todo</h1>
        <TodoController
          term={this.state.searchTerm}
          handleSearch={this.handleSearch}
          toggleForm={this.toggleForm}
          view={this.state.view}
          changeView={this.changeView}
          clearSelected={this.clearSelected}
          clearCompleted={this.clearCompleted}
          reset={this.reset}
          handleFilter={this.handleFilter}
        />

        <div>{this.getView()}</div>

        <Modal isOpen={this.state.isOpenModal} toggle={this.toggleForm}>
          <ModalHeader toggle={this.toggleForm}>
            Create new todo item
          </ModalHeader>
          <ModalBody>
            <TodoForm createTodo={this.createTodo} />
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default Todos;
