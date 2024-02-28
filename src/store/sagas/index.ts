import { all, fork } from "redux-saga/effects";
import cryptoSaga from "./crypto.saga";

function* rootSaga() {
  yield all([fork(cryptoSaga)]);
}

export default rootSaga;
