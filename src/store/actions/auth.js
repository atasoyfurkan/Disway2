//EXPIRY DATE FOR TOKEN REQUIRED *******
import jwtDecode from "jwt-decode";
import http from "../../services/httpService";
import { apiUrl } from "../../config.json";
import { SET_CURRENT_USER } from "./actionTypes";

const apiEndpoint = apiUrl + "/auth";
const tokenKey = "token";

export const setCurrentUser = user => {
  return {
    type: SET_CURRENT_USER,
    user: user
  };
};

export const login = (username, password) => {
  return async dispatch => {
    const { data: jwt } = await http.post(apiEndpoint, { username, password });
    await localStorage.setItem(tokenKey, jwt);
  };
};

export const loginWithJwt = jwt => {
  return async dispatch => {
    await localStorage.setItem(tokenKey, jwt);
  };
};

export const getCurrentUser = () => {
  return async dispatch => {
    try {
      const jwt = await getJwt();
      const currentUser = jwtDecode(jwt);
      dispatch(setCurrentUser(currentUser));
      return currentUser;
    } catch (error) {
      return null;
    }
  };
};

export const logout = () => {
  return async dispatch => {
    await localStorage.removeItem(tokenKey);
  };
};

export const getJwt = () => {
  return localStorage.getItem(tokenKey);
};

http.setJwt(getJwt());
