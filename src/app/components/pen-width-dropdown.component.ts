import { Component, Input, Output, EventEmitter } from "@angular/core"

@Component({
  selector: "pen-width-dropdown",
  template: `
    <select #selectElem (change)="changeThickness(selectElem.value)">
      <option *ngFor="let val of vals" [value]="val">{{ val }}</option>
    </select>
`
})
export class PenWidthDropdownComponent {
  @Input() currentThickness: number
  @Output() newThickness =  new EventEmitter<number>()

  vals = [1,2,3,4,5,6,7,8,9,10]

  changeThickness = (thickness) => this.newThickness.next(thickness)
}
