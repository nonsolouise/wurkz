import "./App.css";
import React, { Component } from "react";
import { connect } from "react-redux";

import TaskPage from "./components/taskPage";
import { createTask, editTask } from "./actions/index";

function mapStateToProps(state) {
  return {
    tasks: state.tasks,
  };
}

class App extends Component {
  onCreateTask = ({ title, description }) => {
    this.props.dispatch(createTask(title, description));
  };
  onStatusChange = (id, status) => {
    this.props.dispatch(editTask(id, status));
  };
  render() {
    console.log("props from app: ", this.props);
    return (
      <div className="App">
        <header className="App-header">
          <TaskPage
            tasks={this.props.tasks}
            onCreateTask={this.onCreateTask}
            onStatusChange={this.onStatusChange}
          />
        </header>
      </div>
    );
  }
}

export default connect(mapStateToProps)(App);
