import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { reducer } from "./reducer";

const tamKart = combineReducers({
  reducer,
});

const store = configureStore({
  reducer: globRed,
});

export default store;