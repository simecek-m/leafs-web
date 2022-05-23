import {
  ACTION_TYPE_LOGIN,
  ACTION_TYPE_LOGOUT,
  ACTION_TYPE_LOCALE,
} from "store/actions";

import { DEFAULT_LOCALE } from "conf";

export const initialState = {
  user: null,
  locale: DEFAULT_LOCALE,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPE_LOGIN:
      return {
        ...state,
        user: action.payload,
      };
    case ACTION_TYPE_LOGOUT:
      return {
        ...state,
        locale: DEFAULT_LOCALE,
        user: null,
      };
    case ACTION_TYPE_LOCALE:
      return {
        ...state,
        locale: action.payload,
      };
    default:
      return state;
  }
}

export default reducer;
