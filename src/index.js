import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import LoginReducer from "./LoginReducer";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import CovidReducer from "../src/Containers/CovidReducer";
import App from "../src/Containers/App";

let composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let reducer = combineReducers({
  login: LoginReducer,
  covid: CovidReducer,
});
let store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
let app = (
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/">
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

ReactDOM.render(app, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
