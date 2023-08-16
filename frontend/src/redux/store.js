import { legacy_createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import authReducer from "./auth/action.reducer";
import formReducer from "./form/form.reducer";

const rootReducer = combineReducers({
    auth : authReducer,
    form : formReducer
});

const createComposer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = legacy_createStore(rootReducer , createComposer(applyMiddleware(thunk)))
export {store}