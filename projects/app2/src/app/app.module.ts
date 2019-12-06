
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { View1Component } from './view1/view1.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    View1Component,
    NavComponent
  ],
  imports: [
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class App2SharedModule {}
