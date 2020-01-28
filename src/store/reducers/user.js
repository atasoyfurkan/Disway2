import { SET_USER, SET_USER_MORE } from "../actions/actionTypes";

const initialState = {
  data: null,
  moreData: null,
  otherUser: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        otherUser: action.user
      };
    case SET_USER_MORE:
      return {
        ...state,
        moreData: action.user
      };
    default:
      return state;
  }
};

export default reducer;
