import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsultationInfoUvVetPage } from './consultation-info-uv-vet.page';

const routes: Routes = [
  {
    path: '',
    component: ConsultationInfoUvVetPage
  },  {
    path: 'rincian-consul-uv-vet',
    loadChildren: () => import('./rincian-consul-uv-vet/rincian-consul-uv-vet.module').then( m => m.RincianConsulUvVetPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsultationInfoUvVetPageRoutingModule {}
