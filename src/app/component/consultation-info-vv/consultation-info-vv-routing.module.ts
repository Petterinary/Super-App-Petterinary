import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsultationInfoVvPage } from './consultation-info-vv.page';

const routes: Routes = [
  {
    path: '',
    component: ConsultationInfoVvPage
  },  {
    path: 'rincian-consul-vv',
    loadChildren: () => import('./rincian-consul-vv/rincian-consul-vv.module').then( m => m.RincianConsulVvPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsultationInfoVvPageRoutingModule {}
