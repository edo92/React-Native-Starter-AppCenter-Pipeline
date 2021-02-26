import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import app from "./reducer/app";

const rootReducer = combineReducers({
  app,
});

// Creating store and apply thunk redux middleware
const configureStore = () => {
  return createStore(rootReducer, applyMiddleware(thunk));
};

export default configureStore;
