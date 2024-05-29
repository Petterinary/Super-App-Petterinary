import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RincianConsulUvVetPage } from './rincian-consul-uv-vet.page';

const routes: Routes = [
  {
    path: '',
    component: RincianConsulUvVetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RincianConsulUvVetPageRoutingModule {}
