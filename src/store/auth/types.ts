export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

export interface AuthState {
  id: number | undefined;
  email: string | undefined;
  firstName: string | undefined;
  lastName: string | undefined;
}

export interface LoginPayload {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
}

export interface LoginAction {
  type: typeof LOGIN;
  payload: LoginPayload;
}

export interface LogoutAction {
  type: typeof LOGOUT;
}

export type AuthActionTypes = LoginAction | LogoutAction;
