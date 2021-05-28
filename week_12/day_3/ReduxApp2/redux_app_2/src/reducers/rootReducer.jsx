const initialState = {
    userName: "",
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case "CHANGE_USERNAME_TO_JOE":
            return { ...state, userName: "Joe"}
        default:
            return state;
    }
}
export default rootReducer;