import { SET_USERNAME } from "../action-types/user-action-types.js";

export const setUserName = (dispatch, inputValue) => {
	return dispatch({ type: SET_USERNAME, payload: inputValue });
};
