import { configureStore } from '@reduxjs/toolkit';
import reducer from "./Reducer";
import initialState from "./InitialState";

const store = configureStore({
    reducer: reducer,
    preloadedState: initialState,
});

export default store;