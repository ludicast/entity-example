import { Action } from '@ngrx/store';

export const CHANGE_PEN_THICKNESS = "CHANGE_PEN_THICKNESS"
export const CHANGE_PEN_COLOR = "CHANGE_PEN_COLOR"

export class ChangePenThickness implements Action {
  type = CHANGE_PEN_THICKNESS
  constructor (public readonly payload: number) {
  }
}

export class ChangePenColor implements Action {
  type = CHANGE_PEN_COLOR
  constructor (public readonly payload: number) {
  }
}

export type PenActions = ChangePenThickness | ChangePenColor
