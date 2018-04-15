import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import { firebaseApp, usersRef } from './firebase'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import appReducers from './reducers/index';

import App from './components/App';
import { logIn, actLogOut } from './actions'
const store = createStore(
    appReducers, /* preloadedState, */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

firebaseApp.auth().onAuthStateChanged(function (user) {
    if (user) {
         // User is signed in.
        let userInfo = {
            email: user.email,
            uid: user.uid,
            website: '',
            isAdmin: false
        }
        usersRef.child(user.uid).once('value')
            .then(data => {
                userInfo.website = data.val().website;
                userInfo.isAdmin = data.val().isAdmin;
                store.dispatch(logIn(userInfo))
            })
            .catch(error => console.log(error))
    } else {
        // User is signed out.
        store.dispatch(actLogOut())
    }
});

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));
registerServiceWorker();
