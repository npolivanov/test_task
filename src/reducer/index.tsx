import { combineReducers } from "redux";
import profile from "./profile";
import users from "./users";
import cards from "./cards";

export default combineReducers({
  profile,
  users,
  cards,
});
