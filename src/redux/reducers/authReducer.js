import {
  USER_REQUEST,
  USER_SUCCESS,
  USER_FAILURE,
  USER_RESET,
} from "../actions/authActions";

const initialAuthState = {
  loading: false,
  success: null,
  error: null,
  currentUser: null,
};

const authReducer = (state = initialAuthState, action) => {
  switch (action.type) {
    case USER_REQUEST:
      return { ...state, loading: true, success: null, error: null };
    case USER_SUCCESS:
      return { ...state, loading: false, success: action.payload, error: null };
    case USER_FAILURE:
      return { ...state, loading: false, success: null, error: action.payload };
    case USER_RESET:
      return { ...state, loading: false, success: null, error: null };
    default:
      return state;
  }
};

export default authReducer;
