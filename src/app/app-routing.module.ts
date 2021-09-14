import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TeamComponent } from './team/team.component';
// import { FaqComponent } from './faq/faq.component';
// import { SubmissionComponent } from './submission/submission.component';

const approot= {path:'root', component:AppComponent} ;
const home = {path:'', component:HomeComponent} ;
const about = {path:'about', component:AboutComponent} ;
// const submission = {path:'submission', component:SubmissionComponent} ;
// const team = {path:'team', component:TeamComponent} ;
// const faq = {path:'faq', component:FaqComponent} ;
const routes: Routes = [home,approot,about];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
