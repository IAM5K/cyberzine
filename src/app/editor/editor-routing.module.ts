import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardPage } from './dashboard/dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: DashboardPage
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'queries',
    loadChildren: () => import('./queries/queries.module').then( m => m.QueriesPageModule)
  },
  {
    path: 'submissions',
    loadChildren: () => import('./submissions/submissions.module').then( m => m.SubmissionsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditorPageRoutingModule {}
