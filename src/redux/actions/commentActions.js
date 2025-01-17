import { v4 as uuidv4 } from "uuid";

export const USER_REQUEST = "USER_REQUEST";
export const USER_SUCCESS = "USER_SUCCESS";
export const USER_FAILURE = "USER_FAILURE";

const getComments = () => JSON.parse(localStorage.getItem("comments")) || [];
const setComments = (comments) =>
  localStorage.setItem("comments", JSON.stringify(comments));

export const userRequest = () => ({
  type: USER_REQUEST,
});

export const userSuccess = (data) => ({
  type: USER_SUCCESS,
  payload: data,
});

export const userFailure = (error) => ({
  type: USER_FAILURE,
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
    const filteredComments = comments.filter((item) => itme.id !== id);
    setComments(filteredComments);
    dispatch(userSuccess(filteredComments));
  } catch (error) {
    dispatch(userFailure(error));
  }
};
