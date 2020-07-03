import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LogintoappComponent } from './logintoapp/logintoapp.component'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    LogintoappComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    MatButtonModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
