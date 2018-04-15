import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';


// const menus = [
//   { to: '/task', exact: true, name: 'Task' },
//   { to: '/user', exact: true, name: 'User' },
//   { to: '/signin', exact: true, name: 'SignIn' },
//   { to: '/signup', exact: true, name: 'SignUp' }
// ]
class Menu extends Component {
  componentDidMount() {
    this.createMenu();
  }

  render() {
    return (
      <div className="list-group">
        {this.showMenus()}
      </div>
    );
  }

  createMenu() {
    let { user } = this.props;

    let menus = [];

    if (user.isLoggin === true) { //login
      menus.push({ to: '/task', exact: true, name: 'Task' });
      menus.push({ to: '/user', exact: true, name: 'User' });
    } else {
      menus.push({ to: '/signin', exact: true, name: 'Signin' });
      menus.push({ to: '/signup', exact: true, name: 'Signup' });
    }

    return menus;
  }

  showMenus() {
    let xhtml = null;
    let menus = this.createMenu();
    if (menus.length > 0) {
      xhtml = menus.map((menu, index) => {
        return <NavLink key={index} to={menu.to} className="list-group-item " aria-current="false" href="/user">{menu.name}</NavLink>
      })
    }
    return xhtml;
  }
}
const mapStateToProps = state => {
  return {
    user: state.user
  }
}
export default connect(mapStateToProps, null, null, { pure: false })(Menu);

