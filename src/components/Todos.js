import React from "react";
import { connect } from "react-redux";
import List from "./List";
import {
  handleAddTodo,
  handleDeleteTodo,
  handleToggle,
} from "../actions/todos";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";

class Todos extends React.Component {
  addItem = (e) => {
    e.preventDefault();
    this.props.dispatch(
      handleAddTodo(this.input.value, () => (this.input.value = ""))
    );
  };
  removeItem = (todo) => {
    this.props.dispatch(handleDeleteTodo(todo));
  };
  toggleItem = (id) => {
    this.props.dispatch(handleToggle(id));
  };
  render() {
    return (
      <div>
        <p
          style={{
            color: "#424242",
            fontFamily:
              '"Adobe Caslon Pro", "Hoefler Text", Georgia, Garamond, Times, serif',
            letterSpacing: "0.1em",
            textTransform: "lowercase",
            lineHeight: "145%",
            fontSize: "25pt",
            fontVariant: "small-caps",
          }}
        >
          <FontAwesomeIcon icon={faList} size="xs" />
          {"   "}Todo list
        </p>
        <div style={{ margin: "auto" }} className="ui action input">
          <input
            style={{
              fontSize: "18px",
            }}
            type="text"
            placeholder="Add Todo"
            ref={(input) => (this.input = input)}
          />
          <button
            style={{
              fontSize: "18px",
            }}
            className="ui teal right icon button"
            onClick={this.addItem}
          >
            <i className="plus icon"></i>
          </button>
        </div>
        <List
          toggle={this.toggleItem}
          item={this.props.todos}
          remove={this.removeItem}
        />
      </div>
    );
  }
}
export default connect((state) => ({
  todos: state.todos,
}))(Todos);
