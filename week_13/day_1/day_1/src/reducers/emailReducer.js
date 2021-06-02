import { SET_EMAIL } from "../action-types/email-action-types.js";

const initialState = "";

const email = (state = initialState, action) => {
	switch (action.type) {
		case SET_EMAIL:
			return (state = action.payload);
		default:
			return state;
	}
};

export default email;
