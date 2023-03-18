import initialState from "./InitialState";
import { setLoginUser, removeLoginUser } from "./reducers";

// reducer function
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "setLoginUser":
            return setLoginUser(state, action.payload);
        case "removeLoginUser":
            return removeLoginUser(state, action.payload);
        default:
            return state;
    }
}

export default reducer;