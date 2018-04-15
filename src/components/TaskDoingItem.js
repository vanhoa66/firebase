import React, { Component } from 'react';

import { tasksDoingRef, tasksFinishRef } from './../firebase';

import * as notify from './../constants/Notifys';

class TaskDoingItem extends Component {

  handleCompleted = (task) => {
    tasksDoingRef.child(task.key).remove();
    tasksFinishRef.push(task);
    this.props.changeNotify(notify.NOTI_TYPE_SUCCESS, notify.NOTI_COMPLETED_TASK_TITLE, notify.NOTI_COMPLETED_TASK_MESSAGE);
  }
  render() {
    let task = { name: '', email: '' };
    task = (this.props.task !== undefined) ? this.props.task : task;
    return (
      <li className="list-group-item">
        <p className="task">{task.name}</p>
        <span className="author">
          <span className="glyphicon glyphicon-user" aria-hidden="true" />&nbsp;{task.email}</span>
        <button onClick={() => this.handleCompleted(task)} type="button" className="btn btn-warning btn-xs">Completed</button>
      </li>
    );
  }
}

export default TaskDoingItem;
