import http from "../../services/httpService";
import { apiUrl } from "../../config.json";
import { STATE_DATA, SET_VOTE_CARD } from "./actionTypes";

const apiEndpoint = apiUrl + "/main-cards";

export const stateData = data => {
  return {
    type: STATE_DATA,
    data: data
  };
};

export const setVoteCard = data => {
  return {
    type: SET_VOTE_CARD,
    data: data
  };
};

export const getData = () => {
  return async dispatch => {
    const respond = await http.get(apiEndpoint);
    dispatch(stateData(respond.data));
    return respond;
  };
};

export const getVoteCardById = id => {
  return async dispatch => {
    const respond = await http.get(apiEndpoint + "/" + id);
    dispatch(setVoteCard(respond.data));
  };
};

export const updateVoteCard = voteCard => {
  return async dispatch => {
    const response = await http.put(apiEndpoint + "/" + voteCard._id, voteCard);
    console.log(voteCard);
  };
};
