import {
  LOGIN,
  LOGOUT,
  LoginPayload,
  LoginAction,
  LogoutAction,
} from "./types";

export function login(payload: LoginPayload): LoginAction {
  return {
    type: LOGIN,
    payload,
  };
}

export function logout(): LogoutAction {
  return {
    type: LOGOUT,
  };
}
