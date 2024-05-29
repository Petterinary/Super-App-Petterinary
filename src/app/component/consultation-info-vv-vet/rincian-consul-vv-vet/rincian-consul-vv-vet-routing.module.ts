import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RincianConsulVvVetPage } from './rincian-consul-vv-vet.page';

const routes: Routes = [
  {
    path: '',
    component: RincianConsulVvVetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RincianConsulVvVetPageRoutingModule {}
