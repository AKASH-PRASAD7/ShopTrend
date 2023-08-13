import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducter from "./rootReducer";

const store = createStore(rootReducter, {}, applyMiddleware(thunk));

export default store;
