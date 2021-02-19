import * as types from "./types";

export const fetchUsersRequestAction = (data) => ({
  type: types.FETCH_USERS_REQUEST,
  payload: data,
});

export const fetchUsersAction = (data) => ({
  type: types.FETCH_USERS,
  payload: data,
});

export const setCustomUsersAction = (data) => ({
  type: types.SET_CUSTOM_USERS,
  payload: data,
});
