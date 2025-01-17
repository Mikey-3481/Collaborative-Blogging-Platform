import {
  USER_REQUEST,
  USER_SUCCESS,
  USER_FAILURE,
} from "../actions/commentActions";

const initialCommentState = {
  loading: false,
  success: null,
  error: null,
};

const commentReducer = (state = initialCommentState, action) => {
  switch (action.type) {
    case USER_REQUEST:
      return { ...state, loading: true, success: null, error: null };
    case USER_SUCCESS:
      return { ...state, loading: false, success: action.payload, error: null };
    case USER_FAILURE:
      return { ...state, loading: false, success: null, error: action.payload };
    default:
      return state;
  }
};

export default commentReducer;
