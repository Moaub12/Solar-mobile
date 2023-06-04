import { configureStore, combineReducers } from "@reduxjs/toolkit";

import appReducer from "./slices/app.slice";

const rootReducer = combineReducers({
  app: appReducer,
  // add more reducers
});

// const defaultMiddleware = getDefaultMiddleware({
//   serializableCheck: false,
//   immutableCheck: false,
// });
let defaultMiddlewares = {
  serializableCheck: false,
  immutableCheck: false,
};
const store = configureStore({
  reducer: rootReducer,
  // eslint-disable-next-line no-undef
  middleware: (getDefaultMiddleware) =>
    __DEV__
      ? getDefaultMiddleware(defaultMiddlewares)//.concat(logger)
      : getDefaultMiddleware(defaultMiddlewares),
});

export default store;
