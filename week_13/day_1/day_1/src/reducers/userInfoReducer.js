import { SET_USERINFO } from "../action-types/userInfo-action-types.js";

const initialState = "";

const userInfo = (state = initialState, action) => {
	switch (action.type) {
		case SET_USERINFO:
			return (state = action.payload);
		default:
			return state;
	}
};
export default userInfo;
