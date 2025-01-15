import { configureStore } from "@reduxjs/toolkit";
import itemReducer from "./reducers/modalReducer";
import authReducer from "./reducers/authReducer";

const store = configureStore({
  reducer: {
    auth: authReducer,
    item: itemReducer,
  },
});

export default store;
