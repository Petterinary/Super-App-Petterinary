import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsultationInfoUvPage } from './consultation-info-uv.page';

const routes: Routes = [
  {
    path: '',
    component: ConsultationInfoUvPage,
  },
  {
    path: 'rincian-consul-uv',
    loadChildren: () =>
      import('./rincian-consul-uv/rincian-consul-uv.module').then(
        (m) => m.RincianConsulUvPageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsultationInfoUvPageRoutingModule {}
