import { SET_EMAIL } from "../action-types/email-action-types.js";

export const setEmail = (dispatch, inputValue) => {
	return dispatch({ type: SET_EMAIL, payload: inputValue });
};
