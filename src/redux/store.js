import { configureStore } from "@reduxjs/toolkit";
import itemReducer from "./reducers";
import authReducer from "./reducers/authReducer";

const store = configureStore({
  reducer: {
    item: itemReducer,
    auth: authReducer,
  },
});

export default store;
