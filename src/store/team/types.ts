export const EDIT_TEAM = "EDIT_TEAM";

export interface Team {
  id: number;
  name: string;
  logo: string;
}

export interface TeamState {
  id: number | undefined;
  name: string | undefined;
  logo: string | undefined;
}

export interface EditAction {
  type: typeof EDIT_TEAM;
  payload: Team;
}

export type TeamActionTypes = EditAction;
