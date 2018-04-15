import React, { Component } from 'react';
import { connect } from 'react-redux'
import { firebaseApp } from './../firebase'

import { actLogOut } from '../actions';

class User extends Component {

  handleLogOut = () => {
    firebaseApp.auth().signOut()
      .then(() => {
        // Sign-out successful.
      }).catch((error) => {
        console.log(error)
      });

  }
  // handleSetAdmin = () => {
  //   let user = this.props.user.info;
  //   if (user.isAdmin) {
  //     usersRef.child(user.uid).update({ isAdmin: false })
  //       .catch(error => console.log(error));
  //   } else {
  //     usersRef.child(user.uid).update({ isAdmin: true })
  //       .catch(error => console.log(error));
  //   }
  // }
  render() {
    let user = { email: '', uid: '', website: '', isAdmin: false };
    user = (this.props.user.info !== undefined) ? this.props.user.info : user;
    return (
      <div>
        <h4>Email: {user.email}</h4>
        <h4>UserID: {user.uid}</h4>
        <h4>Website: {user.website}</h4>
        <h4>Admin: {(user.isAdmin) ? "isAdmin" : "No admin"}</h4>
        <button onClick={this.handleLogOut} type="submit" className="btn btn-success">Logout</button>
        {/* <button onClick={this.handleSetAdmin} type="submit" className="btn btn-success">SetAdmin</button> */}
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
    logOut: () => {
      dispatch(actLogOut());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(User);

