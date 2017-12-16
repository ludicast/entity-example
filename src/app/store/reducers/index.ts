import { ActionReducerMap } from '@ngrx/store'
import { penReducer, PenState } from './pen.reducer'
import { imageReducer, ImageState } from './image.reducer'

export interface State {
  pen: PenState
  image: ImageState
}

export const reducers: ActionReducerMap<State> = {
  pen: penReducer,
  image: imageReducer
}
