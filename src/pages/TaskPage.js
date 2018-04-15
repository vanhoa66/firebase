import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import TaskDoingList from './../components/TaskDoingList'
import TaskFinishList from './../components/TaskFinishList'
import { actChangeNotify } from './../actions/index';

class TaskPage extends Component {
    render() {
        let { user } = this.props;

        if (user.isLoggin === false) {
            return <Redirect to="/signin" />;
        }
        return (
            <div className="row">
                < TaskDoingList user={user} changeNotify={this.props.changeNotify} />
                < TaskFinishList user={user} changeNotify={this.props.changeNotify} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}
const mapDispatchToProps = dispatch => {
    return {
        changeNotify: (style, title, content) => {
            dispatch(actChangeNotify(style, title, content));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskPage);