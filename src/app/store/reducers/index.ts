import { ActionReducerMap } from '@ngrx/store'
import { penReducer, PenState } from './pen.reducer'

export interface State {
  pen: PenState
}

export const reducers: ActionReducerMap<State> = {
  pen: penReducer
}
