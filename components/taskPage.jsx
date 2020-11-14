import React, { Component } from "react";

class TaskPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm: false,
      title: "",
      description: "",
    };
  }

  toggleFormField = () => this.setState({ showForm: !this.state.showForm });
  setTitle = (event) => this.setState({ title: event.target.value });
  setDesciption = (event) => this.setState({ description: event.target.value });
  onCreateTask = () => {
    this.props.onCreateTask({
      title: this.state.title,
      description: this.state.description,
    });
    console.log("task added");
    this.setState({
      title: "",
      description: "",
      showForm: false,
    });
  };

  render() {
    const { tasks } = this.props;
    const filterUnstarted = tasks.filter((task) => task.status === "unstarted");
    const filterUnfinished = tasks.filter((task) => task.status === "finished");
    const filterInProgress = tasks.filter(
      (task) => task.status === "in progress"
    );

    return (
      <div>
        <div>
          <div className="container mt-3 p-1">
            <div className="row">
              <div className="col-1 col-md-3 ml-auto">
                <p
                  className="text-center text-bold text-white"
                  style={{ cursor: "pointer" }}
                  onClick={this.toggleFormField}
                >
                  + New Task
                </p>
              </div>
            </div>
            {this.state.showForm && (
              <div className="row">
                <div className="col-md-12">
                  <input
                    className="form-control"
                    type="text"
                    value={this.state.title}
                    placeholder="enter task title"
                    onChange={this.setTitle}
                  />
                  <input
                    className="form-control mt-2"
                    type="text"
                    value={this.state.description}
                    placeholder="enter 
                    task description"
                    onChange={this.setDesciption}
                  />
                </div>
                <div className="col-md-1 ml-auto">
                  <button
                    className="btn btn-danger btn-block mt-2"
                    onClick={this.onCreateTask}
                  >
                    add
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="container mt-3 p-3">
          <div className="row">
            <div className="col-4 col-md-4">
              <h5 className="text-warning">Unstarted</h5>
              <div className="mt-3">
                <TaskCard
                  tasks={filterUnstarted}
                  className="mt-3"
                  onStatusChange={this.props.onStatusChange}
                />
              </div>
            </div>
            <div className="col-4 col-md-4">
              <h5 className="text-light">In progress</h5>
              <div className="mt-3">
                <TaskCard
                  tasks={filterInProgress}
                  className="mt-3"
                  onStatusChange={this.props.onStatusChange}
                />
              </div>
            </div>
            <div className="col-4 col-md-4">
              <h5 className="text-primary">Finished</h5>
              <div className="mt-3">
                <TaskCard
                  tasks={filterUnfinished}
                  className="mt-3"
                  onStatusChange={this.props.onStatusChange}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TaskPage;

const TaskCard = (props) => {
  return (
    <div className="p-3">
      {props.tasks.map((task) => {
        return (
          <div className="bg-white mt-3 p-2">
            <div>
              <select
                className="form-control"
                name="status"
                value={task.status}
                onChange={(e) => {
                  props.onStatusChange(task.id, e.target.value);
                  console.log(task.id, task.status)
                }}
              >
                <option value="finished">finsihed</option>
                <option value="unstarted">unstarted</option>
                <option value="in progress">in progress</option>
              </select>
              <h6 className="bg-danger text-bold text-white p-2 mt-2">
                {task.title}
              </h6>
            </div>
            <p> {task.description} </p>
          </div>
        );
      })}
    </div>
  );
};
