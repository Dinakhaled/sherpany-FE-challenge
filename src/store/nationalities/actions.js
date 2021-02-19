import * as types from "./types";

export const setSelectedNationalites = (data) => ({
  type: types.SELECTED_NATIONALITIES,
  payload: data,
});
