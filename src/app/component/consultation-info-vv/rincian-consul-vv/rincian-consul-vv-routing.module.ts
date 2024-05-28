import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RincianConsulVvPage } from './rincian-consul-vv.page';

const routes: Routes = [
  {
    path: '',
    component: RincianConsulVvPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RincianConsulVvPageRoutingModule {}
