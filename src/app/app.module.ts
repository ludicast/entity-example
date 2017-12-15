import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store'


import { PenPanelComponent } from "./containers/pen-panel.component"
import { reducers } from "./store/reducers"

@NgModule({
  declarations: [
    AppComponent, PenPanelComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
