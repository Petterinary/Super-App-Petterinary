import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UvLiveTrackingPage } from './uv-live-tracking.page';

const routes: Routes = [
  {
    path: '',
    component: UvLiveTrackingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UvLiveTrackingPageRoutingModule {}
