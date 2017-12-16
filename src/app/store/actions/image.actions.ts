import { Action } from '@ngrx/store';

export const CHANGE_IMAGE_SOURCE = "CHANGE_IMAGE_SOURCE"

export class ChangeImageSource implements Action {
  type = CHANGE_IMAGE_SOURCE
  constructor (public readonly payload: string) {
  }
}

export type ImageActions = ChangeImageSource
