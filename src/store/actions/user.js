import http from "../../services/httpService";
import { apiUrl } from "../../config.json";
import { SET_USER, SET_USER_MORE } from "./actionTypes";
import { getCurrentUser } from "./index";

const apiEndpoint = apiUrl + "/users";

export const setUser = user => {
  return {
    type: SET_USER,
    user: user
  };
};

export const setUserMore = user => {
  return {
    type: SET_USER_MORE,
    user: user
  };
};

export const register = user => {
  return async dispatch => {
    const response = await http.post(apiEndpoint, {
      email: user.email,
      password: user.password,
      username: user.username
    });
    return response;
  };
};

export const getCurrentUserWithDetails = () => {
  return async dispatch => {
    const currentUser = await dispatch(getCurrentUser());
    if (currentUser) {
      const response = await http.get(apiEndpoint + "/" + currentUser._id);
      dispatch(setUser(response.data));
    }
  };
};

export const getCurrentUserForProfileMoreDetails = () => {
  return async dispatch => {
    const currentUser = await dispatch(getCurrentUser());
    if (currentUser) {
      const response = await http.get(apiEndpoint + "/me/" + currentUser._id);
      dispatch(setUserMore(response.data));
    }
  };
};

export const getUserForProfileMoreDetailsById = id => {
  return async dispatch => {
    const response = await http.get(apiEndpoint + "/me/" + id);
    dispatch(setUser(response.data));
  };
};

// export const getUser = (id) => {
//   return async dispatch => {
//     //    dispatch(uiStartLoading());
//
//     const response = await http.get(apiEndpoint + "/" + id);
//     dispatch(setUser(response.data));
//
//     //    dispatch(uiStopLoading());
//   };
// };

export const updateUser = user => {
  return async dispatch => {
    const response = await http.put(apiEndpoint + "/" + user._id, user);
    dispatch(setUser(response.data));
  };
};
