import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { View1Component } from './view1/view1.component';
import { NavComponent } from './nav/nav.component';

import { View2Component } from './view2/view2.component';

@NgModule({
  declarations: [
    AppComponent,
    View1Component,
    NavComponent,
    View2Component
  ],
  imports: [
    AppRoutingModule,
  ],
  bootstrap: [AppComponent]
})
export class App1SharedModule {}

