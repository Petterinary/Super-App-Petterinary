import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VvLiveTrackingPage } from './vv-live-tracking.page';

const routes: Routes = [
  {
    path: '',
    component: VvLiveTrackingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VvLiveTrackingPageRoutingModule {}
