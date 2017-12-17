import { EntityState, EntityAdapter, createEntityAdapter } from "@ngrx/entity"

export interface Coordinate {
  x: number,
  y: number
}

export interface Line {
  id: string
  color: number
  thickness: number
  coords: Coordinate[]
}

export interface LineState extends EntityState<Line> {
  selectedLineId: string | null
}

export const adapter: EntityAdapter<Line> = createEntityAdapter<Line>();
