import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalendrierPage } from './calendrier.page';

const routes: Routes = [
  {
    path: '',
    component: CalendrierPage
  },
  {
    path: 'classement',
    loadChildren: () => import('../classement/classement.module').then(m => m.ClassementPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalendrierPageRoutingModule {}
