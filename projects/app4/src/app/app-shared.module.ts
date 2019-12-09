import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { View1Component } from './view1/view1.component';
import { NavComponent } from './nav/nav.component';
import { View2Component } from './view2/view2.component';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

alert('test');
@NgModule({
    declarations: [
      AppComponent,
      View1Component,
      NavComponent,
      View2Component
    ],
    imports: [
       //CommonModule,
      AppRoutingModule
    ],
    bootstrap: [AppComponent]
    
  })
  export class  App4SharedModule{
  }