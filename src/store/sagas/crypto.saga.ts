import { PayloadAction } from "@reduxjs/toolkit";
import { call, put, takeLatest } from "redux-saga/effects";

import { AppActions } from "store";
import { ResponseGenerator } from "store/types";
import api from "utils/api";

export function* getAllCryptoSaga() {
  try {
    yield put(AppActions.loading.setLoading());
    const result: ResponseGenerator = yield call(
      async () => await api().get("/crypto")
    );
    if (result.data) {
      yield put(AppActions.crypto.getAllCrypto(result.data));
    }
  } catch (err) {
    console.log(err);
  } finally {
    yield put(AppActions.loading.finishLoading());
  }
}

export function* getLogSaga(action: PayloadAction<string>) {
  try {
    yield put(AppActions.loading.setLoading());
    const result: ResponseGenerator = yield call(
      async () => await api().get(`/price/${action.payload}`)
    );
    if (result.data) {
      yield put(AppActions.crypto.getLog(result.data.log));
    }
  } catch (err) {
    console.log(err);
  } finally {
    yield put(AppActions.loading.finishLoading());
  }
}

export function* getLinkDataSaga(action: PayloadAction<number>) {
  try {
    yield put(AppActions.loading.setLoading());
    const result: ResponseGenerator = yield call(
      async () => await api().get(`/metadata/${action.payload}`)
    );
    if (result.data) {
      yield put(AppActions.crypto.getLinkData(result.data));
    }
  } catch (err) {
    console.log(err);
  } finally {
    yield put(AppActions.loading.finishLoading());
  }
}

export function* getOneCryptoSaga(action: PayloadAction<number>) {
  try {
    yield put(AppActions.loading.setLoading());
    const result: ResponseGenerator = yield call(
      async () => await api().get(`/crypto/${action.payload}`)
    );
    if (result.data) {
      yield put(AppActions.crypto.getOneCrypto(result.data));
    }
  } catch (err) {
    console.log(err);
  } finally {
    yield put(AppActions.loading.finishLoading());
  }
}

function* cryptoSaga() {
  yield takeLatest(
    AppActions.crypto.getAllCryptoRequest.type,
    getAllCryptoSaga
  );
  yield takeLatest(AppActions.crypto.getLogRequest.type, getLogSaga);
  yield takeLatest(AppActions.crypto.getLinkDataRequest.type, getLinkDataSaga);
  yield takeLatest(
    AppActions.crypto.getOneCryptoRequest.type,
    getOneCryptoSaga
  );
}

export default cryptoSaga;
