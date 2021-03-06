import { ChangeDetectionStrategy, Component, Input, Output, EventEmitter } from "@angular/core"


const asNumber = (r, g, b) =>
  (r * 256 * 256) + (g * 256) + (b)

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: "color-picker",
  templateUrl: "./color-picker.component.html"
})
export class ColorPickerComponent {
  @Input() currentColor: number

  @Output() newColor =  new EventEmitter<number>()

  changeColor = (color) => this.newColor.next(color)
  hashColor = (color) =>
    `#${ color.toString(16).padStart(6, "0") }`

  colors = [
    asNumber(0, 0, 0),
    asNumber(255, 255, 255),
    asNumber(255, 0, 0),
    asNumber(0, 255, 0),
    asNumber(0, 0, 255),
    asNumber(255, 255, 0),
    asNumber(255, 0, 255),
    asNumber(0, 255, 255)
  ]
}
