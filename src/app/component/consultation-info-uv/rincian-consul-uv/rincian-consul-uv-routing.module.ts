import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RincianConsulUvPage } from './rincian-consul-uv.page';

const routes: Routes = [
  {
    path: '',
    component: RincianConsulUvPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RincianConsulUvPageRoutingModule {}
