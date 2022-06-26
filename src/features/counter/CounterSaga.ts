import { PayloadAction } from "@reduxjs/toolkit";
import { takeEvery, delay, put } from "redux-saga/effects";
import { incrementSaga, incrementSagaSuccess } from "./counterSlice";

export function* handleIncrmentSaga(action: PayloadAction<number>) {
  yield delay(2000);

  yield put(incrementSagaSuccess(action.payload));
}

export default function* counterSaga() {
  console.log("counter Saga");
  yield takeEvery(incrementSaga.toString(), handleIncrmentSaga);
}
