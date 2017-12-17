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
