import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ErrorMesagesComponent } from './components/error-mesages/error-mesages.component';


@NgModule({
  declarations: [
    AppComponent,
    ErrorMesagesComponent
  ],
  imports: [
  	ReactiveFormsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
