import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { View1Component } from './view1/view1.component';
import { View2Component } from './view2/view2.component';


const routes: Routes = [{ path: 'one', component: View1Component },
{ path: 'two', component: View2Component },
{ path: '', redirectTo: 'two', pathMatch: 'full' }];
alert('routing');

@NgModule({
  // forChild doesn't create the routing service, need to add forRoot in main app module to do: 
  // https://stackoverflow.com/questions/46108581/no-provider-for-childrenoutletcontexts-injectionerror
  imports: [RouterModule.forChild(routes)], //forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
