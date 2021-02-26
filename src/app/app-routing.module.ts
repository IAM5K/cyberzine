import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TeamComponent } from './team/team.component';

const approot= {path:'root', component:AppComponent} ;
const home = {path:'', component:HomeComponent} ;
const team = {path:'team', component:TeamComponent} ;
const routes: Routes = [home,approot,team];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
