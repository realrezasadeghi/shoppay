import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";

const rootReducer = combineReducers({});

const makeStore = () =>
  configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== "production",
  });

const wrapper = createWrapper(makeStore);

export default wrapper;
