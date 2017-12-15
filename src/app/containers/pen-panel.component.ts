import { Component } from "@angular/core"
import { Store } from "@ngrx/store"
import { PenState } from '../store/reducers/pen.reducer'
import { State } from "../store/reducers"
import { Observable } from 'rxjs/Observable'
import { ChangePenThickness, ChangePenColor } from "../store/actions/pen.actions"
@Component({
  selector: "pen-panel",
  template: `
<h1>{{ penData$ | async | json  }}</h1>
  <button style="background-color: black" (click)="newColor(0)">&nbsp;</button>
  <button style="background-color: white" (click)="newColor(255* 256 * 256 + 255 * 256 + 255)">&nbsp;</button>
  <button style="background-color: red" (click)="newColor(255* 256 * 256)">&nbsp;</button>
  <button style="background-color: yellow" (click)="newColor(255* 256 * 256 + 255 * 256)">&nbsp;</button>
  <button style="background-color: purple" (click)="newColor(255* 256 * 256 + 255)">&nbsp;</button>
  <button style="background-color: orange" (click)="newColor(255 * 256 + 255)">&nbsp;</button>
  <button style="background-color: green" (click)="newColor(255* 256)">&nbsp;</button>
  <button style="background-color: blue" (click)="newColor(255)">&nbsp;</button>
  <select #selectElem (change)="newThickness(selectElem.value)">
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
  </select>
`
})
export class PenPanelComponent {
  penData$: Observable<PenState>

  constructor(private store: Store<State>) {
    this.penData$ = store.select(state => state.pen)
  }

  newColor = (color: number) => {
    this.store.dispatch(new ChangePenColor(color))
  }
  newThickness = (thickness: number) => {
    this.store.dispatch(new ChangePenThickness(thickness))
  }
}
