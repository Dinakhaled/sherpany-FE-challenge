import { put, call } from "redux-saga/effects";
import { getUsers } from "../../network/apis/users";
import { fetchUsersAction } from "./actions";

export function* fetchUsersSaga({ payload }) {
  try {
    const response = yield call(getUsers, payload);
    yield put(fetchUsersAction(response.data));
  } catch (err) {
    console.log(err);
  }
}
