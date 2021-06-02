import { combineReducers } from "redux";
import userName from "./userReducer.js";
import email from "./emailReducer.js";
import userInfo from "./userInfoReducer.js";

const rootReducer = combineReducers({
	userName,
	email,
	userInfo,
});

export default rootReducer;
