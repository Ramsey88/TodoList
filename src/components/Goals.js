import React from "react";
import { connect } from "react-redux";
import List from "./List";
import { handleAddGoal, handleDeleteGoal } from "../actions/goals";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullseye } from "@fortawesome/free-solid-svg-icons";
class Goals extends React.Component {
  addItem = (e) => {
    e.preventDefault();
    this.props.dispatch(
      handleAddGoal(this.input.value, () => (this.input.value = ""))
    );
  };
  removeItem = (goal) => {
    this.props.dispatch(handleDeleteGoal(goal));
  };

  render() {
    return (
      <div>
        <div
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
          <FontAwesomeIcon icon={faBullseye} size="xs" />
          {"   "}Goals list
        </div>
        <div
          style={{
            fontSize: "18px",
          }}
          className="ui action input"
        >
          <input
            type="text"
            placeholder="Add Goal"
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
        <List item={this.props.goals} remove={this.removeItem} />
      </div>
    );
  }
}
export default connect((state) => ({
  goals: state.goals,
}))(Goals);
