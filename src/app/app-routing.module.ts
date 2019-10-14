import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfirmationComponent } from './components/confirmation.component';
import { ListComponent } from './components/list.component';
import { AppComponent } from './app.component';
import { DetailComponent } from './components/detail.component';

const routes: Routes = [
  {path:'',component:DetailComponent},
  {path:'home',component:DetailComponent},
  {path:'list',component:ListComponent},
  {path:'confirm',component:ConfirmationComponent},
   { path: "**", redirectTo: "/", pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }





