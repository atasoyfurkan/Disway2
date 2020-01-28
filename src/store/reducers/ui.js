import {
  LOAD_HISTORY,
  UI_FINISH_LOADING,
  UI_START_LOADING,
  UI_FINISH_LOADING_EXTRA,
  UI_START_LOADING_EXTRA,
  UI_SHOW_TOAST,
  UI_CLOSE_TOAST,
  UI_START_COMMENT_BUTTON,
  UI_STOP_COMMENT_BUTTON,
  UI_START_LOGIN_BUTTON,
  UI_STOP_LOGIN_BUTTON,
  UI_START_REGISTER_BUTTON,
  UI_STOP_REGISTER_BUTTON,
  UI_START_SAVE_BUTTON,
  UI_STOP_SAVE_BUTTON,
  UI_DISPLAY_VOTE_CARD,
  UI_EXPAND_VOTE_CARD,
  UI_SCROLL_POSITION
} from "../actions/actionTypes";

const initialState = {
  isLoaded: false,
  isLoadedExtra: false,
  toast: {
    text: "Beklenmedik bir hata gerçekleşti",
    show: false,
    variant: "white"
  },
  commentButton: false,
  loginButton: false,
  registerButton: false,
  saveButton: false,
  uiVoteCards: [],
  scrollPosition: 0,
  history: undefined
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UI_SCROLL_POSITION:
      return {
        ...state,
        scrollPosition: action.scrollPosition
      };
    case LOAD_HISTORY:
      return {
        ...state,
        history: action.data
      };
    case UI_FINISH_LOADING:
      return {
        ...state,
        isLoaded: true
      };
    case UI_START_LOADING:
      return {
        ...state,
        isLoaded: false
      };
    case UI_FINISH_LOADING_EXTRA:
      return {
        ...state,
        isLoadedExtra: true
      };
    case UI_START_LOADING_EXTRA:
      return {
        ...state,
        isLoadedExtra: false
      };
    case UI_SHOW_TOAST:
      return {
        ...state,
        toast: {
          ...state.toast,
          text: action.text,
          show: true,
          variant: action.variant
        }
      };
    case UI_CLOSE_TOAST:
      return {
        ...state,
        toast: {
          ...state.toast,
          show: false
        }
      };
    case UI_START_COMMENT_BUTTON:
      return {
        ...state,
        commentButton: true
      };
    case UI_STOP_COMMENT_BUTTON:
      return {
        ...state,
        commentButton: false
      };
    case UI_START_LOGIN_BUTTON:
      return {
        ...state,
        loginButton: true
      };
    case UI_STOP_LOGIN_BUTTON:
      return {
        ...state,
        loginButton: false
      };
    case UI_START_REGISTER_BUTTON:
      return {
        ...state,
        registerButton: true
      };
    case UI_STOP_REGISTER_BUTTON:
      return {
        ...state,
        registerButton: false
      };
    case UI_START_SAVE_BUTTON:
      return {
        ...state,
        saveButton: true
      };
    case UI_STOP_SAVE_BUTTON:
      return {
        ...state,
        saveButton: false
      };
    case UI_DISPLAY_VOTE_CARD:
      return {
        ...state,
        uiVoteCards: [...state.uiVoteCards, action.data]
      };
    case UI_EXPAND_VOTE_CARD:
      return {
        ...state,
        uiVoteCards: [...state.uiVoteCards, action.data]
      };
    default:
      return state;
  }
};

export default reducer;
