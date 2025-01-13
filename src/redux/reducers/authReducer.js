import {
  USER_REQUEST,
  USER_SUCCESS,
  USER_FAILURE,
  LOG_OUT,
} from "../actions/authActions";

const initialState = {
  loading: false,
  success: null,
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_REQUEST:
      return { ...state, loading: true, success: null, error: null };
    case USER_SUCCESS:
      return { ...state, loading: false, success: action.payload, error: null };
    case USER_FAILURE:
      return { ...state, loading: false, success: null, error: action.payload };
    case LOG_OUT:
      return { ...state, loading: false, success: null, error: null };
    default:
      return state;
  }
};

export default authReducer;
