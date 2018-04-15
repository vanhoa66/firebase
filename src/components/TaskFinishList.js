import React, { Component } from 'react';

import { tasksFinishRef } from './../firebase';

import TaskFinishItem from './TaskFinishItem'
import * as notify from './../constants/Notifys';

class TaskFinishList extends Component {
  constructor(props) {
    super(props);
    this.state = { tasks: [] };
  }

  componentWillMount() {
    tasksFinishRef.on('value', (items) => {
      let data = [];
      items.forEach((item) => {
        let { name, email } = item.val();
        let key = item.key;
        let task = { name, email, key };
        data.push(task);
      })
      this.setState({ tasks: data })
    });
  }

  handleClear = () => {
    tasksFinishRef.set([]);
    this.props.changeNotify(notify.NOTI_TYPE_DANGER, notify.NOTI_CLEARALL_TASK_TITLE, notify.NOTI_CLEARALL_TASK_MESSAGE);
  }

  render() {
    let user = { isAdmin: false }
    user = (this.props.user.info !== undefined) ? this.props.user.info : user;
    return (
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <div className="panel panel-success">
          <div className="panel-heading">
            <h3 className="panel-title">Task Finish</h3>
          </div>
          <div className="panel-body">
            {this.showTaskItem(this.state.tasks, user.isAdmin)}
          </div>
          <div className="panel-footer text-right">
            {this.showElmClearAll(user.isAdmin)}
          </div>
        </div>
      </div>
    );
  }
  showTaskItem(tasks, isAdmin) {
    let xhtml = null;
    if (tasks.length > 0) {
      xhtml = tasks.map((task, index) => {
        return < TaskFinishItem key={index} task={task} isAdmin={isAdmin} changeNotify={this.props.changeNotify}/>
      })
    }
    return <ul className="list-group">{xhtml}</ul>
  }
  showElmClearAll(isAdmin) {
    let xhtml = null;
    if (isAdmin) {
      return <button onClick={this.handleClear} type="button" className="btn btn-danger">Clear All</button>
    }
    return xhtml
  }
}


export default TaskFinishList;
