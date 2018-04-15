import React, { Component } from 'react';

import { firebaseApp, usersRef } from './../firebase';

import * as notify from './../constants/Notifys';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      website: ''
    };
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
  handleSubmit = (event) => {
    let { email, password, website } = this.state;
    firebaseApp.auth().createUserWithEmailAndPassword(email, password)
      .then(data => {
        usersRef.child(data.uid).set({
          website,
          uid: data.uid,
          isAdmin: false
        })
        this.props.changeNotify(notify.NOTI_TYPE_SUCCESS, notify.NOTI_SIGNUP_SUCCESSFULL_TITLE, notify.NOTI_SIGNUP_SUCCESSFULL_MESSAGE);
      })
      .catch(error => {
        this.props.changeNotify(notify.NOTI_TYPE_WARNING, notify.NOTI_SIGNIN_FAIL_TITLE, error.message);
      });
    this.setState({
      email: '',
      password: '',
      website: ''
    })
    event.preventDefault();
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form-horizontal">
        <div className="form-group">
          <label htmlFor="inputEmail3" className="col-sm-2 control-label">Email</label>
          <div className="col-sm-6">
            <input type="email" value={this.state.email} onChange={this.handleInputChange} name="email" className="form-control" placeholder="Email" />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="inputPassword3" className="col-sm-2 control-label">Password</label>
          <div className="col-sm-6">
            <input type="password" value={this.state.password} onChange={this.handleInputChange} name="password" className="form-control" placeholder="Password" />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="inputEmail3" className="col-sm-2 control-label">Website</label>
          <div className="col-sm-6">
            <input type="text" value={this.state.website} onChange={this.handleInputChange} name="website" className="form-control" placeholder="Website" />
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-offset-2 col-sm-6">
            <button type="submit" className="btn btn-success">Sign up</button>
          </div>
        </div>
      </form>
    );
  }
}

export default SignUp;
