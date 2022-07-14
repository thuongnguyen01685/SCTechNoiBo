import { combineReducers } from "redux";
import auth from "./authReducer";
import notify from "./notifyReducer";
import purchases from "./purchasesReducer";
import approved from "./approvedReducer";

export default combineReducers({
  auth,
  notify,
  purchases,
  approved,
});
