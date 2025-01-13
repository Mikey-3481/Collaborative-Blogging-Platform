import { v4 as uuidv4 } from "uuid";

export const REGISTER_REQUEST = "REGISTER_REQUEST";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";

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

export const registerUser =
  ({ name, email, password, role }) =>
  (dispatch) => {
    dispatch(registerRequest());
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
  };
