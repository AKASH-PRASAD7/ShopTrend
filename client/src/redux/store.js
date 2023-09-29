import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducter from "./rootReducer";

const store = createStore(
  rootReducter,
  {},
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
