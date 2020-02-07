
import React from 'react';
import HomePage from '.././Containers/HomePage/HomePage';
import LoginPage from '.././Containers/LoginPage/LoginPage';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ProfilePage from '../Containers/ProfilePage/ProfilePage';

export default class App extends React.Component {

    render() {

        return (
            <Router>
                <Route path="/" exact component={HomePage} />
                <Route path="/home" exact component={HomePage} />
                <Route path="/login" exact component={LoginPage} />
                <Route path="/profile" exact component={ProfilePage} />
            </Router>

        );
    }
}