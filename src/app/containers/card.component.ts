import { Component } from "@angular/core"
import { Store } from "@ngrx/store"

import { ImageState } from '../store/reducers/image.reducer'
import { State } from "../store/reducers"
import { Observable } from 'rxjs/Observable'
import { ChangeImageSource } from '../store/actions/image.actions'
@Component({
  selector: "card",
  template: `
    <img [src]="source | async" width="500" height="500" style="border: 2px solid black"/>
    <hr />
    <div class="container">
      <img [style.border]="(source | async) ==  cardString(i) ? '3px solid black' : ''" class="img-thumbnail" (click)="setCardImage(i)" *ngFor="let i of [1,2,3,4,5,6]" [src]="cardString(i)" width="50" height="50"/>
    </div>
  `
})
export class CardComponent {
  cardString = (index) => "/assets/cards/card" + index + ".jpg"

  source: Observable<string>
  setCardImage = (index) => {
    console.log("clicking image", index)
    this.store.dispatch(
      new ChangeImageSource(this.cardString(index))
    )
  }

  constructor(private store: Store<State>) {
    this.source = store.select(state => state.image.source)
  }
}
