import { v4 as uuidv4 } from "uuid";

export const COMMENT_REQUEST = "COMMENT_REQUEST";
export const COMMENT_SUCCESS = "COMMENT_SUCCESS";
export const COMMENT_FAILURE = "COMMENT_FAILURE";

const getComments = () => JSON.parse(localStorage.getItem("comments")) || [];
const setComments = (comments) =>
  localStorage.setItem("comments", JSON.stringify(comments));

export const userRequest = () => ({
  type: COMMENT_REQUEST,
});

export const userSuccess = (data) => ({
  type: COMMENT_SUCCESS,
  payload: data,
});

export const userFailure = (error) => ({
  type: COMMENT_FAILURE,
  payload: error,
});

export const fetchComments = () => (dispatch) => {
  dispatch(userRequest());
  setTimeout(() => {
    try {
      const comments = getComments();
      dispatch(userSuccess(comments));
    } catch (error) {
      dispatch(userFailure(error));
    }
  }, 1000);
};

export const leaveComment = (data) => (dispatch) => {
  dispatch(userRequest());
  try {
    const comments = getComments();
    const newComment = {
      id: uuidv4(),
      createdAt: new Date().toISOString(),
      ...data,
    };
    comments.push(newComment);
    setComments(comments);
    dispatch(userSuccess(newComment));
  } catch (error) {
    dispatch(userFailure(error));
  }
};

export const deleteComment = (id) => (dispatch) => {
  dispatch(userRequest());
  try {
    const comments = getComments();
    const filteredComments = comments.filter((item) => item.id !== id);
    setComments(filteredComments);
    dispatch(userSuccess(filteredComments));
  } catch (error) {
    dispatch(userFailure(error));
  }
};
