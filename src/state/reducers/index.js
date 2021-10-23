import { combineReducers } from "redux";
import accountReducer from "./accountReducer";
import groupsReducer from "./groupsReducer";

const reducers = combineReducers({
  accounts: accountReducer,
  groups: groupsReducer,
});

export default reducers;
