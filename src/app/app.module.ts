import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store'


import { PenPanelComponent } from "./containers/pen-panel.component"
import { ColorPickerComponent } from "./components/color-picker.component"
import { PenWidthDropdownComponent } from "./components/pen-width-dropdown.component"
import { reducers } from "./store/reducers"

@NgModule({
  declarations: [
    AppComponent, PenPanelComponent, ColorPickerComponent, PenWidthDropdownComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
