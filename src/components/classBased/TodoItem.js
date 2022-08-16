import React from "react";
import styles from "./TodoItem.module.css";
export default class TodoItem extends React.Component {
  state = {
    editing: false,
  };
  handleEditing = () => {
    this.setState({
      editing: true,
    });
  };

  handleUpdatedDone = event => {
    if (event.key === "Enter") {
      this.setState({ editing: false })
    }
  }

  render() {
    let editMode = {};

    if (this.state.editing) {
      editMode.border = "2px solid";
      editMode.borderRadius = "3px";
    }
    return (
      <li className={styles.task} style={editMode}>
        <input
          type="checkbox"
          checked={this.props.todo.completed}
          onChange={() => this.props.handleChangeProps(this.props.todo.id)}
        />
        <div
          className={styles.taskField}
          contentEditable={this.state.editing}
          onDoubleClick={this.handleEditing}
          onChange={(e) => {
            this.props.setUpdate(e.target.textContent, this.props.todo.id);
          }}
          onKeyDown={this.handleUpdatedDone}
        >
          {this.props.todo.title}
        </div>
        <button
          type="button"
          onClick={() => this.props.removeProps(this.props.todo.id)}
          className={styles.removeBtn}
        >
          &#10006;
        </button>
      </li>
    );
  }
}
