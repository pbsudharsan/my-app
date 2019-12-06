import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { View1Component } from './view1/view1.component';
import { NavComponent } from './nav/nav.component';
import { View2Component } from './view2/view2.component';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AppComponent,
    View1Component,
    NavComponent,
    View2Component
  ],
  imports: [
     CommonModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
  
})
export class  App4SharedModule{
}



alert('test');

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    CommonModule,
    App4SharedModule,

    // Necessary to create the routing service and forChild doesn't create it 
    // https://stackoverflow.com/questions/46108581/no-provider-for-childrenoutletcontexts-injectionerror
    RouterModule.forRoot([])
  ],
  bootstrap: [AppComponent]
})
export class App4CoreModule {
}

