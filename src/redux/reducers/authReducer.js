import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGIN_REQUESET,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
} from "../actions/authActions";

const initialState = {
  loading: false,
  success: null,
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_REQUEST:
      return { ...state, loading: true, success: null, error: null };
    case REGISTER_SUCCESS:
      return { ...state, loading: false, success: action.payload, error: null };
    case REGISTER_FAILURE:
      return { ...state, loading: false, success: null, error: action.payload };
    case LOGIN_REQUESET:
      return { ...state, loading: true, success: null, error: null };
    case LOGIN_SUCCESS:
      return { ...state, loading: false, success: action.payload, error: null };
    case LOGIN_FAILURE:
      return { ...state, loading: false, success: null, error: action.payload };
    default:
      return state;
  }
};

export default authReducer;
