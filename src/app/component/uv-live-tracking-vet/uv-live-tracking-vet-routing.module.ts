import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UvLiveTrackingVetPage } from './uv-live-tracking-vet.page';

const routes: Routes = [
  {
    path: '',
    component: UvLiveTrackingVetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UvLiveTrackingVetPageRoutingModule {}
