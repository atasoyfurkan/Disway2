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
} from "./actionTypes";

export const uiScrollPosition = scrollPosition => {
  return {
    type: UI_SCROLL_POSITION,
    scrollPosition: scrollPosition
  };
};

export const loadHistory = data => {
  return {
    type: LOAD_HISTORY,
    data: data
  };
};

export const uiFinishLoading = () => {
  return {
    type: UI_FINISH_LOADING
  };
};
export const uiStartLoading = () => {
  return {
    type: UI_START_LOADING
  };
};
export const uiFinishLoadingExtra = () => {
  return {
    type: UI_FINISH_LOADING_EXTRA
  };
};
export const uiStartLoadingExtra = () => {
  return {
    type: UI_START_LOADING_EXTRA
  };
};

export const uiShowToast = (text, variant) => {
  return {
    type: UI_SHOW_TOAST,
    text: text,
    variant: variant
  };
};

export const uiCloseToast = () => {
  return {
    type: UI_CLOSE_TOAST
  };
};

export const uiStartCommentButton = () => {
  return {
    type: UI_START_COMMENT_BUTTON
  };
};
export const uiStopCommentButton = () => {
  return {
    type: UI_STOP_COMMENT_BUTTON
  };
};

export const uiStartLoginButton = () => {
  return {
    type: UI_START_LOGIN_BUTTON
  };
};
export const uiStopLoginButton = () => {
  return {
    type: UI_STOP_LOGIN_BUTTON
  };
};

export const uiStartRegisterButton = () => {
  return {
    type: UI_START_REGISTER_BUTTON
  };
};
export const uiStopRegisterButton = () => {
  return {
    type: UI_STOP_REGISTER_BUTTON
  };
};

export const uiStartSaveButton = () => {
  return {
    type: UI_START_SAVE_BUTTON
  };
};
export const uiStopSaveButton = () => {
  return {
    type: UI_STOP_SAVE_BUTTON
  };
};

export const uiDisplayVoteCard = data => {
  return {
    type: UI_DISPLAY_VOTE_CARD,
    data: data
  };
};

export const uiExpandVoteCard = data => {
  return {
    type: UI_EXPAND_VOTE_CARD,
    data: data
  };
};

export const handleShowToast = (text, variant) => {
  return dispatch => {
    dispatch(uiShowToast(text, variant));
  };
};
