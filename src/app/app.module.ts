import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { Store } from '../store';

// feature modules

// containers
import { AppComponent } from './app.component';

// components

// routes
export const ROUTES: Routes = [];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES)
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    Store
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}

/*
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyA5wyDgmPE1kySmuM9LKpIjLnHHo5nuGcM",
    authDomain: "art-tracker-app.firebaseapp.com",
    databaseURL: "https://art-tracker-app.firebaseio.com",
    projectId: "art-tracker-app",
    storageBucket: "art-tracker-app.appspot.com",
    messagingSenderId: "791055169648"
  };
  firebase.initializeApp(config);
*/