import { STATE_DATA, SET_VOTE_CARD } from "../actions/actionTypes";

const initialState = {
  data: [],
  voteCard: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case STATE_DATA:
      return {
        ...state,
        data: action.data
      };
    case SET_VOTE_CARD:
      return {
        ...state,
        voteCard: action.data
      };
    default:
      return state;
  }
};

export default reducer;
