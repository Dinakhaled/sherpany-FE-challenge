import * as types from "./types";

const INITIAL_STATE = {
  list: localStorage.getItem("nationalites")
    ? JSON.parse(localStorage.getItem("nationalites"))
    : [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.SELECTED_NATIONALITIES:
      return { ...state, list: action.payload };
    default:
      return state;
  }
};
