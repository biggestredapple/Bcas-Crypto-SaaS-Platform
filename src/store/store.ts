import { combineReducers, configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import rootSaga from "./sagas";

import {
  loadingReducer,
  loadingActions,
  cryptoActions,
  cryptoReducer,
} from "./slices";

const reducer = combineReducers({
  loading: loadingReducer,
  crypto: cryptoReducer,
});

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  preloadedState: {},
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serialzableCheck: false, thunk: false }).concat(
      sagaMiddleware
    ),
});

export const AppActions = {
  loading: loadingActions,
  crypto: cryptoActions,
};

sagaMiddleware.run(rootSaga);

export * as AppActionTypes from "./types";

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
