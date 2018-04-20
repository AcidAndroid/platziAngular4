import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms'; //Necesario para hacer 2 way binding


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
     FormsModule //Necesario para hacer 2 way binding
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
