import { Component } from "@angular/core"
import { Store } from "@ngrx/store"

import { PenState } from '../store/reducers/pen.reducer'
import { State } from "../store/reducers"
import { Observable } from 'rxjs/Observable'
import { ChangePenThickness, ChangePenColor } from "../store/actions/pen.actions"

@Component({
  selector: "pen-panel",
  templateUrl: "./pen-panel.component.html"
})
export class PenPanelComponent {
  penData$: Observable<PenState>

  constructor(private store: Store<State>) {
    this.penData$ = store.select(state => state.pen)
  }

  changeColor = (color: number) => {
    this.store.dispatch(new ChangePenColor(color))
  }



  changeThickness = (thickness: number) => {
    this.store.dispatch(new ChangePenThickness(thickness))
  }
}
