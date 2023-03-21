import produce from "immer";

const AddMessage = (state, payload) => {
    return produce(state, draftState => {
            draftState.messages.push(payload);
    });
}

export default AddMessage;