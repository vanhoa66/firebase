import React, { Component } from 'react';

import { tasksDoingRef } from './../firebase';
import * as notify from './../constants/Notifys';

class FormAddTask extends Component {
  constructor(props) {
    super(props);
    this.state = { task: '' };
  }

  handleChange = (event) => {
    this.setState({ task: event.target.value });
  }

  handleSubmit = (event) => {
    let { email } = this.props.user.info;
    let taskInfo = {
      name: this.state.task,
      email
    }
    tasksDoingRef.push(taskInfo);
    this.props.changeNotify(notify.NOTI_TYPE_SUCCESS, notify.NOTI_ADD_TASK_TITLE, notify.NOTI_ADD_TASK_MESSGAE);
    this.setState({ task: '' });
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form-inline">
        <div className="form-group">
          <input value={this.state.task} onChange={this.handleChange} type="text" name="task" className="form-control" placeholder="Task" />
        </div>
        <button type="submit" className="btn btn-info">Add</button>
      </form>
    );
  }
}

export default FormAddTask;
