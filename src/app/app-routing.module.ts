import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
declare var System: any;

const routes: Routes = [
  { path: 'main', loadChildren: () => import('projects/app1/src/app/app.module').then(x => x.App1SharedModule) },
  {path: 'app2', loadChildren: () => import('projects/app2/src/app/app.module').then(x => x.App2SharedModule) },
  {path: 'app3', loadChildren: () => import('projects/app3/src/app/app.module').then(x => x.App3SharedModule) },
  {path: 'app4', loadChildren: () => import('projects/app4/src/app/app-shared.module').then(x => x.App4SharedModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
