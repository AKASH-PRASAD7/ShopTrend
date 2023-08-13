import product from "./product/reducer";
import user from "./auth/reducer";
import { combineReducers } from "redux";

const rootReducter = combineReducers({
  product,
  user,
});

export default rootReducter;
