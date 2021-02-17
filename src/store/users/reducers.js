import * as types from "./types";

const INITIAL_STATE = { list: [], apiInfo: {} };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.FETCH_USERS:
      return {
        ...state,
        list: [...state.list, ...action.payload.results],
        apiInfo: action.payload.info,
      };
    default:
      return state;
  }
};
