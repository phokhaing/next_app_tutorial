import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { HYDRATE, createWrapper } from "next-redux-wrapper";
import users from "./slices/userSlice";
import dashboard from "./slices/dashboardSlice";

const combinedReducer = combineReducers({
  dashboard,
  users,
});

const rootReducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    };
    return nextState;
  } else {
    return combinedReducer(state, action);
  }
};

export const makeStore = () =>
  configureStore({
    reducer: rootReducer,
  });

export const wrapper = createWrapper(makeStore, { debug: true });
