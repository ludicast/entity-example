import { CHANGE_IMAGE_SOURCE, ImageActions } from "../actions/image.actions"

export interface ImageState {
  source: string
}

export const initial: ImageState = {
  source: "/assets/cards/card1.jpg"
}

export const imageReducer = (state: ImageState = initial, action: ImageActions) => {
  switch (action.type) {
    case CHANGE_IMAGE_SOURCE:
      return {
        ...state, source: action.payload
      }

    default:
     return state
  }
}
