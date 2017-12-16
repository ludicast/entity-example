import { PenActions, CHANGE_PEN_THICKNESS, CHANGE_PEN_COLOR } from "../actions/pen.actions"

export interface PenState {
  color: number
  thickness: number
}

export const initial: PenState = {
  color: 0x000000,
  thickness: 2
}

export const penReducer = (state: PenState = initial, action: PenActions): PenState => {
  switch (action.type) {
    case CHANGE_PEN_THICKNESS:
      return {
        ...state, thickness: action.payload
      }

    case CHANGE_PEN_COLOR:
      return {
        ...state, color: action.payload
      }

    default:
     return state
  }
}
