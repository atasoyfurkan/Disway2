import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
//import logger from "redux-logger";

import voteCardReducer from "./reducers/voteCard";
import uiReducer from "./reducers/ui";
import userReducer from "./reducers/user";
import authReducer from "./reducers/auth";

const rootReducer = combineReducers({
  voteCard: voteCardReducer,
  ui: uiReducer,
  user: userReducer,
  auth: authReducer
});

const configureStore = () => {
  //  return createStore(rootReducer, applyMiddleware(thunk, logger));
  return createStore(rootReducer, applyMiddleware(thunk));
};

export default configureStore;
