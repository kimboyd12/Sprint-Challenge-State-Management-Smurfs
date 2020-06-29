import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { appReducer } from './reducers/index';
import { Provider } from 'react-redux';

import "./index.css";
import App from "./components/App";


const logger = ({ getState }) => next => action => {
    console.log("Dispatching action:", action);
    next(action);
}

let store = createStore(appReducer, applyMiddleware(logger, thunk));

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>
, document.getElementById("root"));
