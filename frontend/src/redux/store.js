import { legacy_createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import authReducer from "./auth/auth.Reducer";

const rootReducer = combineReducers({
    auth : authReducer
});

const createComposer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = legacy_createStore(rootReducer , createComposer(applyMiddleware(thunk)))
export {store}