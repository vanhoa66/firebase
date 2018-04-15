import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import User from './../components/User'
import { actChangeNotify } from './../actions/index';

class UserPage extends Component {
    render() {
        let { user } = this.props;

        if (user.isLoggin === false) {
            return <Redirect to="/signin" />;
        }
        return (
            <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
                <div className="panel panel-info">
                    <div className="panel-heading">
                        <h3 className="panel-title">User</h3></div>
                    <div className="panel-body">
                        <User changeNotify={this.props.changeNotify} />
                    </div>
                </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
