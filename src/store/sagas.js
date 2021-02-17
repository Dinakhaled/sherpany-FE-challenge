import { takeEvery } from "redux-saga/effects";
import * as usersTypes from "./users/types";
import { fetchUsersSaga } from "./users/sagas";

export function* watchAll() {
  yield takeEvery(usersTypes.FETCH_USERS_REQUEST, fetchUsersSaga);
}
