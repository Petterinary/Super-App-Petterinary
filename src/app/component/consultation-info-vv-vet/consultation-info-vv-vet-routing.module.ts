import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsultationInfoVvVetPage } from './consultation-info-vv-vet.page';

const routes: Routes = [
  {
    path: '',
    component: ConsultationInfoVvVetPage
  },  {
    path: 'rincian-consul-vv-vet',
    loadChildren: () => import('./rincian-consul-vv-vet/rincian-consul-vv-vet.module').then( m => m.RincianConsulVvVetPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsultationInfoVvVetPageRoutingModule {}
