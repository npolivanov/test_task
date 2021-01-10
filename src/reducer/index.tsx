import { combineReducers } from "redux";
import modal from "./modal";
import profile from "./profile";
import users from "./users";

export default combineReducers({
  modal,
  profile,
  users,
});
