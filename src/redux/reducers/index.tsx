import { combineReducers } from "redux";
import dragReducer from "./dragReducer";

export default combineReducers({
  dragInfo: dragReducer,
});
