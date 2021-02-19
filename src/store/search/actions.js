import * as types from "./types";

export const setSearchKeyword = (data) => ({
  type: types.SEARCH,
  payload: data,
});
