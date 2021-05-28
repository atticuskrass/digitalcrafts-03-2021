import { ADD_CHAMPION } from "../action-types/action-types.js";

const initialState = {
	leagueChampions: [{ club: "Manchester City", country: "England" }],
};

export const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_CHAMPION:
			return {
				state,
				leagueChampions: [{ club: "Liverpool F.C.", country: "England" }],
			};
		default:
			return state;
	}
};
