import {
  COMMENT_REQUEST,
  COMMENT_FAILURE,
  COMMENT_SUCCESS,
} from "../actions/commentActions";

const initialCommentState = {
  commentLoading: false,
  commentSuccess: null,
  commentError: null,
};

const commentReducer = (state = initialCommentState, action) => {
  switch (action.type) {
    case COMMENT_REQUEST:
      return {
        ...state,
        commentLoading: true,
        commentSuccess: null,
        commentError: null,
      };
    case COMMENT_SUCCESS:
      return {
        ...state,
        commentLoading: false,
        commentSuccess: action.payload,
        commentError: null,
      };
    case COMMENT_FAILURE:
      return {
        ...state,
        commentLoading: false,
        commentSuccess: null,
        commentError: action.payload,
      };
    default:
      return state;
  }
};

export default commentReducer;
