import React, { Component } from "react";

class InputTodo extends Component {
  state = {
    title: "",
  };
  onChange = (e) => {
    this.setState({
      title: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.title.trim()) {
      this.props.addTodoProps(this.state.title);
      this.setState({
        title: "",
      });
    } else {
      alert("Please add a Task");
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="field-input-to-do">
        <input
          type="text"
          placeholder="Add Todo..."
          value={this.state.title}
          className="input-to-do"
          onChange={this.onChange}
        />
        <button
        className="submit-btn">
            +
        </button>
      </form>
    );
  }
}

export default InputTodo;
