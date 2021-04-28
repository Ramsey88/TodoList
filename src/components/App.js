import React from "react";
import ConnectedTodos from "./Todos";
import ConnectedGoals from "./Goals";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
class App extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(handleInitialData());
  }
  render() {
    if (this.props.loading === true) {
      return (
        <h3
          style={{
            textAlign: "center",
            position: "absolute",
            width: "300px",
            height: "200px",
            top: "50%",
            left: "50%",
            margin: "-100px 0 0 -150px",
          }}
        >
          Loading{"  "} <FontAwesomeIcon icon={faSpinner} spin />
        </h3>
      );
    }
    return (
      <div
        style={{
          margin: "auto",
          width: "20%",
          left: "20%",
          height: "200px",
          top: "20%",
          padding: "20px",
        }}
      >
        <ConnectedTodos />
        <ConnectedGoals />
      </div>
    );
  }
}

export default connect((state) => ({
  loading: state.loading,
}))(App);
