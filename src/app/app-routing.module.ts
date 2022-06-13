import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: 'home',
  //   loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  // },
  // {
  //   path: '',
  //   redirectTo: 'tabs',
  //   pathMatch: 'full'
  // },
  // {
  //   path: 'classement',
  //   loadChildren: () => import('./tabs/classement/classement.module').then(m => m.ClassementPageModule)
  // },
  // {
  //   path: 'calendrier',
  //   loadChildren: () => import('./tabs/calendrier/calendrier.module').then(m => m.CalendrierPageModule)
  // },
  {
    path: 'course',
    loadChildren: () => import('./tabs/course/course.module').then(m => m.CoursePageModule)
  },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
