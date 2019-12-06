import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {App1SharedModule} from '../../projects/app1/src/app/app.module';
import {App2SharedModule} from '../../projects/app2/src/app/app.module';
import {App3SharedModule} from '../../projects/app3/src/app/app.module';
import { NavComponent } from './nav/nav.component';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
