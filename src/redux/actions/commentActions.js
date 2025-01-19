import { v4 as uuidv4 } from "uuid";

export const LEAVE_COMMENT = "LEAVE_COMMENT";
export const FETCH_COMMENTS = "FETCH_COMMENTS";
export const DELETE_COMMENT = "DELETE_COMMENT";
export const COMMENT_REQUEST = "COMMENT_REQUEST";
export const COMMENT_FAILURE = "COMMENT_FAILURE";

const getComments = () => JSON.parse(localStorage.getItem("comments")) || [];
const setComments = (comments) =>
  localStorage.setItem("comments", JSON.stringify(comments));

export const userRequest = () => ({
  type: COMMENT_REQUEST,
});

export const userFailure = (error) => ({
  type: COMMENT_FAILURE,
  payload: error,
});

export const fetchComments = (id) => (dispatch) => {
  dispatch(userRequest());
  setTimeout(() => {
    try {
      const comments = getComments();
      const commentsToSend = comments.filter((data) => data.blog === id);
      dispatch({
        type: FETCH_COMMENTS,
        payload: commentsToSend,
      });
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
    dispatch({
      type: LEAVE_COMMENT,
      payload: newComment,
    });
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
    dispatch({
      type: DELETE_COMMENT,
      payload: filteredComments,
    });
  } catch (error) {
    dispatch(userFailure(error));
  }
};
