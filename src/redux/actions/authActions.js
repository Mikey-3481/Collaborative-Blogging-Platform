import { v4 as uuidv4 } from "uuid";

export const REGISTER_REQUEST = "REGISTER_REQUEST";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";
export const LOGIN_REQUESET = "LOGIN_REQUESET";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

const getUsers = () => JSON.parse(localStorage.getItem("users")) || [];
const setUsers = (users) =>
  localStorage.setItem("users", JSON.stringify(users));

export const registerRequest = () => ({ type: REGISTER_REQUEST });

export const registerSuccess = (data) => ({
  type: REGISTER_SUCCESS,
  payload: data,
});

export const registerFailure = (error) => ({
  type: REGISTER_FAILURE,
  payload: error,
});

export const loginRequest = () => ({
  type: LOGIN_REQUESET,
});

export const loginSuccess = (data) => ({
  type: LOGIN_SUCCESS,
  payload: data,
});

export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: error,
});

export const registerUser =
  ({ name, email, password, role }) =>
  (dispatch) => {
    dispatch(registerRequest());
    setTimeout(() => {
      try {
        const users = getUsers();
        const userExists = users.some((user) => user.email === email);

        if (userExists) {
          dispatch(registerFailure("User already exists!"));
        } else {
          const newUser = { id: uuidv4(), name, email, password, role };
          users.push(newUser);
          setUsers(users);
          dispatch(registerSuccess(newUser));
        }
      } catch (error) {
        dispatch(registerFailure("Something went wrong!"));
      }
    }, 3000);
  };

export const loginUser =
  ({ email, password }) =>
  (dispatch) => {
    dispatch(loginRequest());
    setTimeout(() => {
      try {
        const users = getUsers();
        const user = users.find((user) => user.email === email);
        if (user && user.password === password) {
          dispatch(loginSuccess(user));
        } else {
          dispatch(loginFailure("Invalid email or password!"));
        }
      } catch (error) {
        dispatch(registerFailure("Something went wrong!"));
      }
    }, 3000);
  };
