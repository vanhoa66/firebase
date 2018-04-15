import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import Title from './Title'
import Menu from './Menu'
import Notify from './Notify';
import routes from './../route-config';

// let routes = [
//   { path: '/', exact: true, main: () => <TaskPage /> },
//   { path: '/task', exact: true, main: () => <TaskPage /> },
//   { path: '/user', exact: true, main: () => <UserPage /> },
//   { path: '/signin', exact: true, main: () => <SignInPage /> },
//   { path: '/signup', exact: true, main: () => <SignUpPage /> }
// ]
class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Title />
          <Notify />
          <div className="row">
            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
              <Menu />
            </div>
            <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
              {this.showRoute(routes)}
            </div>
          </div>
        </div>
      </Router>
    );
  }
  showRoute(router) {
    let xhtml = null;
    if (routes.length > 0) {
      xhtml = routes.map((route, index) => {
        return (
          <Route key={index} exact={route.exact} path={route.path} component={route.main} />
        );
      });
    }

    return <Switch>{xhtml}</Switch>;
  }
}

export default App;
