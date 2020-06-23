import { TeamState, TeamActionTypes, EDIT_TEAM } from "./types";

const initialState: TeamState = {
  id: undefined,
  name: undefined,
  logo: undefined,
};

export function teamReducer(
  state: TeamState = initialState,
  action: TeamActionTypes
): TeamState {
  switch (action.type) {
    case EDIT_TEAM:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}
