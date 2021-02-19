import { combineReducers } from "redux";
import users from "./users/reducers";
import search from "./search/reducers";
import nationalities from "./nationalities/reducers";

export default combineReducers({
  users,
  search,
  nationalities,
});
