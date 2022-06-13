import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'classement',
        loadChildren: () => import('./classement/classement.module').then( m => m.ClassementPageModule)
      },
      {
        path: 'calendrier',
        loadChildren: () => import('./calendrier/calendrier.module').then( m => m.CalendrierPageModule)
      },
      {
        path: '',
        redirectTo: 'tabs/calendrier',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'tabs/calendrier',
    pathMatch: 'full'
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
