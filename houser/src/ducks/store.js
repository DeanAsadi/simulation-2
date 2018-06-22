import { applyMiddleware, createStore } from "redux";
import promiseMiddleware from "redux-promise-middleware";

export default createStore(reducer, applyMiddleware(promiseMiddleware()));
