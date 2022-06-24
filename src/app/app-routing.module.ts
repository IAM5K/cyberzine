import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'team',
    loadChildren: () => import('./pages/team/team.module').then( m => m.TeamPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'faq',
    loadChildren: () => import('./pages/faq/faq.module').then( m => m.FaqPageModule)
  },
  {
    path: 'submission',
    loadChildren: () => import('./pages/rules/rules.module').then( m => m.RulesPageModule)
  },
  {
    path: 'editor/login',
    loadChildren: () => import('./editor/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'editor/dashboard',
    loadChildren: () => import('./editor/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'editor/queries',
    loadChildren: () => import('./editor/queries/queries.module').then( m => m.QueriesPageModule)
  },
  {
    path: 'editor/submissions',
    loadChildren: () => import('./editor/submissions/submissions.module').then( m => m.SubmissionsPageModule)
  },
  {
    path: 'reply',
    loadChildren: () => import('./editor/reply-modal/reply-modal.module').then( m => m.ReplyModalPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
