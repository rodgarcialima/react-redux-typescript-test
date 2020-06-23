import { AuthState, AuthActionTypes, LOGIN, LOGOUT } from "./types";

const initialState: AuthState = {
  id: undefined,
  email: undefined,
  firstName: undefined,
  lastName: undefined,
};

export function authReducer(
  state: AuthState = initialState,
  action: AuthActionTypes
): AuthState {
  switch (action.type) {
    case LOGIN:
      return {
        ...action.payload,
      };
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
}
