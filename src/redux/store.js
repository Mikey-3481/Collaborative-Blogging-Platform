import { configureStore } from "@reduxjs/toolkit";
import itemReducer from "./reducers/modalReducer";
import authReducer from "./reducers/authReducer";
import postReducer from "./reducers/postReducer";
import commentReducer from "./reducers/commentReducer";

const store = configureStore({
  reducer: {
    auth: authReducer,
    item: itemReducer,
    post: postReducer,
    comment: commentReducer,
  },
});

export default store;
