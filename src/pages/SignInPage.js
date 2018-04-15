import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import SignIn from './../components/SignIn'
import { actChangeNotify } from './../actions/index';

class SignInPage extends Component {
    render() {
        let {user} = this.props;
		
		if(user.isLoggin === true) {
			return <Redirect to="/user" />;
		}
        return (
            <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
                <div className="panel panel-info">
                    <div className="panel-heading">
                        <h3 className="panel-title">Sign In</h3></div>
                    <div className="panel-body">
                        < SignIn changeNotify={this.props.changeNotify}/>
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
export default connect(mapStateToProps, mapDispatchToProps)(SignInPage);

