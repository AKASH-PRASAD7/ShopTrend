import product from "./product/reducer";
import { combineReducers } from "redux";

const rootReducter = combineReducers({
  product,
});

export default rootReducter;
