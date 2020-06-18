import { createStore, combineReducers } from "redux";
import { userReducer as user } from "./userReducer";
import { feedReducer as feed } from "./feedReducer";
export const root = combineReducers({
  user,
  feed,
});

export const store = createStore(root);
