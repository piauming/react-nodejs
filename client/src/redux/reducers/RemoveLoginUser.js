import produce from "immer";

const RemoveLoginUser = (state, payload) => {

    console.log("remove login user!!!");

    return produce(state, draftState => {
            draftState.user = {};
    });
}

export default RemoveLoginUser;