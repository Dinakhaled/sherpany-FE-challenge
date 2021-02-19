import * as types from "./types";

const INITIAL_STATE = { keyword: "" };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.SEARCH:
      return { ...state, keyword: action.payload };
    default:
      return state;
  }
};
