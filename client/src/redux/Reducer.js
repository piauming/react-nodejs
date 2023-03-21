import initialState from "./InitialState";
import { addMessage } from "./reducers";

// reducer function
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "addMessage":
            return addMessage(state, action.payload);
        default:
            return state;
    }
}

export default reducer;