import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: 'home',
  //   loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  // },
  {
    path: '',
    redirectTo: 'calendrier',
    pathMatch: 'full'
  },
  {
    path: 'classement',
    loadChildren: () => import('./classement/classement.module').then( m => m.ClassementPageModule)
  },
  {
    path: 'calendrier',
    loadChildren: () => import('./calendrier/calendrier.module').then( m => m.CalendrierPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
