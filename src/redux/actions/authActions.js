import { v4 as uuidv4 } from "uuid";

export const USER_REQUEST = "USER_REQUEST";
export const USER_SUCCESS = "USER_SUCCESS";
export const USER_FAILURE = "USER_FAILURE";
export const USER_RESET = "USER_RESET";

const getUsers = () => JSON.parse(localStorage.getItem("users")) || [];
const setUsers = (users) =>
  localStorage.setItem("users", JSON.stringify(users));

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

export const resetState = () => ({
  type: USER_RESET,
});

export const sendUser = (data) => ({
  type: USER_SUCCESS,
  payload: data,
});

export const editContent = (data) => ({
  type: USER_SUCCESS,
  payload: data,
});

export const registerUser =
  ({ name, email, password, role }) =>
  (dispatch) => {
    dispatch(userRequest());
    setTimeout(() => {
      try {
        const users = getUsers();
        const userExists = users.some((user) => user.email === email);

        if (userExists) {
          dispatch(userFailure("User already exists!"));
        } else {
          const newUser = {
            id: uuidv4(),
            name,
            email,
            password,
            role,
            createdAt: new Date().toISOString(),
            avatar: "",
            summary: "",
          };
          users.push(newUser);
          setUsers(users);
          dispatch(userSuccess(newUser));
        }
      } catch (error) {
        dispatch(userFailure("Something went wrong!"));
      }
    }, 3000);
  };

export const loginUser =
  ({ email, password }) =>
  (dispatch) => {
    dispatch(userRequest());
    setTimeout(() => {
      try {
        const users = getUsers();
        const user = users.find((user) => user.email === email);
        if (user && user.password === password) {
          dispatch(userSuccess(user));
        } else {
          dispatch(userFailure("Invalid email or password!"));
        }
      } catch (error) {
        dispatch(userFailure("Something went wrong!"));
      }
    }, 3000);
  };

export const logoutUser = () => {
  return (dispatch) => {
    dispatch(userRequest());
    setTimeout(() => {
      try {
        localStorage.removeItem("currentUser");
        dispatch(resetState());
      } catch (error) {
        dispatch(userFailure("Something went wrong!"));
      }
    }, 3000);
  };
};

export const findUser = (id) => {
  return (dispatch) => {
    dispatch(userRequest);
    setTimeout(() => {
      try {
        const users = getUsers();
        const user = users.find((user) => user.id === id);

        dispatch(sendUser(user));
      } catch (error) {
        dispatch(userFailure(error));
      }
    }, 1000);
  };
};

export const editProfile = ({ id, name, avatar, summary }) => {
  return (dispatch) => {
    dispatch(userRequest);
    setTimeout(() => {
      try {
        const users = getUsers();
        const userIndex = users.findIndex((user) => user.id === id);

        if (userIndex === -1) {
          throw new Error("User not found!");
        }

        users[userIndex] = {
          ...users[userIndex],
          name,
          avatar,
          summary,
        };

        setUsers(users);

        dispatch(editContent(users[userIndex]));
      } catch (error) {
        dispatch(userFailure(error));
      }
    });
  };
};
