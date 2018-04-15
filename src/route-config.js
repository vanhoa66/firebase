import React from 'react';

import NotfoundPage from './pages/NotfoundPage';
import TaskPage from './pages/TaskPage';
import SignUpPage from './pages/SignUpPage';
import SignInPage from './pages/SignInPage';
import UserPage from './pages/UserPage';

const routes = [
    { path: '/', exact: true, main: () => <TaskPage /> },
    { path: '/task', exact: true, main: () => <TaskPage /> },
    { path: '/user', exact: true, main: () => <UserPage /> },
    { path: '/signin', exact: true, main: () => <SignInPage /> },
    { path: '/signup', exact: true, main: () => <SignUpPage /> },
    { path: '', exact: true, main: () => <NotfoundPage /> }
];

export default routes;
