import {
    createStore,
    combineReducers,
    applyMiddleware
} from "redux";
import thunkMiddleware from "redux-thunk";
import apiMiddleware from "/middleware/api";
let globaleStore = false;
let baseMiddlewares = [thunkMiddleware, apiMiddleware];
export default (reducers, middlewares = [], initalState = {}) => {
    if (globaleStore) {
        return globaleStore;
    }
    middlewares = baseMiddlewares.concat(middlewares);
    globaleStore = createStore(combineReducers(reducers), initalState, applyMiddleware.apply(null, middlewares));
    return globaleStore;
}