import React, { Component } from 'react';

import { tasksDoingRef } from './../firebase';

import TaskDoingItem from './TaskDoingItem'
import FormAddTask from './FormAddTask'


class TaskDoingList extends Component {

  constructor(props) {
    super(props);
    this.state = { tasks: [] };
  }

  componentWillMount() {
    tasksDoingRef.on('value', (items) => {
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

  render() {
    return (
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <div className="panel panel-info">
          <div className="panel-heading">
            <h3 className="panel-title">Task Doing</h3></div>
          <div className="panel-body">
            {this.showTaskItem(this.state.tasks)}
          </div>
          <div className="panel-footer text-right">
            < FormAddTask user={this.props.user} changeNotify={this.props.changeNotify} />
          </div>
        </div>
      </div>
    );
  }
  showTaskItem(tasks) {
    let xhtml = null;
    if (tasks.length > 0) {
      xhtml = tasks.map((task, index) => {
        return < TaskDoingItem key={index} task={task} changeNotify={this.props.changeNotify} />
      })
    }
    return <ul className="list-group">{xhtml}</ul>
  }
}

export default TaskDoingList;
