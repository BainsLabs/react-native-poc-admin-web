import { combineReducers } from "redux";
import employee from "./employeeReducer";
import admin from "./adminReducer";

export default combineReducers({
  employee,
  admin
});
