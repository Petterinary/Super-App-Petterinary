import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VvLiveTrackingVetPage } from './vv-live-tracking-vet.page';

const routes: Routes = [
  {
    path: '',
    component: VvLiveTrackingVetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VvLiveTrackingVetPageRoutingModule {}
