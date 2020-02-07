import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Provider } from "react-redux";
import App from './App/App'
import store from "./js/store/index";

ReactDOM.render(
    <Provider store={store}>
        <App></App>
    </Provider>, document.getElementById('root'));

