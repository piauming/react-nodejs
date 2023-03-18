import produce from "immer";

const SetLoginUser = (state, payload) => {
    return produce(state, draftState => {
            draftState.user = payload;
    });
}

export default SetLoginUser;