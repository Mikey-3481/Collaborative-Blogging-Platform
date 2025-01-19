import {
  LEAVE_COMMENT,
  FETCH_COMMENTS,
  DELETE_COMMENT,
  COMMENT_REQUEST,
  COMMENT_FAILURE,
} from "../actions/commentActions";

const initialCommentState = {
  commentLoading: false,
  commentError: null,
  commentState: [],
};

const commentReducer = (state = initialCommentState, action) => {
  switch (action.type) {
    case COMMENT_REQUEST:
      return {
        ...state,
        commentLoading: true,
        commentError: null,
      };
    case LEAVE_COMMENT:
      return {
        ...state,
        commentLoading: false,
        commentState: [...state.commentState, action.payload],
        commentError: null,
      };
    case FETCH_COMMENTS:
      return {
        ...state,
        commentLoading: false,
        commentState: action.payload,
        commentError: null,
      };
    case DELETE_COMMENT:
      return {
        ...state,
        commentLoading: false,
        commentState: action.payload,
        commentError: null,
      };
    case COMMENT_FAILURE:
      return {
        ...state,
        commentLoading: false,
        commentError: action.payload,
      };
    default:
      return state;
  }
};

export default commentReducer;
