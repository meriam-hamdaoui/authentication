import { configureStore } from "@reduxjs/toolkit";
import useReducer from "./useReducer";
const store = configureStore({
  reducer: {
    user: useReducer,
  },
});

export default store;
