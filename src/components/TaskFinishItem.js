import React, { Component } from 'react';

import { tasksFinishRef } from './../firebase';

import * as notify from './../constants/Notifys';

class TaskFinishItem extends Component {
  handleDelete = (key) => {
    tasksFinishRef.child(key).remove();
    this.props.changeNotify(notify.NOTI_TYPE_DANGER, notify.NOTI_REMOVE_TASK_TITLE, notify.NOTI_REMOVE_TASK_MESSAGE);
  }

  render() {
    let task = { name: '', email: '', key: '' };
    task = (this.props.task !== undefined) ? this.props.task : task;
    let isAdmin = false;
    isAdmin = (this.props.isAdmin !== undefined) ? this.props.isAdmin : isAdmin;
    return (
      <li className="list-group-item">
        <p className="task">{task.name}</p><span className="author">
          <span className="glyphicon glyphicon-user" aria-hidden="true" />&nbsp;{task.email}</span>
        {this.showElmDelete(task, isAdmin)}
      </li>
    );
  }
  showElmDelete(task, isAdmin) {
    let xhtml = null;
    if (isAdmin) {
      return <button onClick={() => this.handleDelete(task.key)} type="button" className="btn btn-danger btn-xs">Delete</button>
    }
    return xhtml
  }
}

export default TaskFinishItem;
