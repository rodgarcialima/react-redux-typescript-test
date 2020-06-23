import { EDIT_TEAM, Team, EditAction } from "./types";

export function editTeam(payload: Team): EditAction {
  return {
    type: EDIT_TEAM,
    payload,
  };
}
