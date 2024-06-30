import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RincianProfilePage } from './rincian-profile.page';

const routes: Routes = [
  {
    path: '',
    component: RincianProfilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RincianProfilePageRoutingModule {}
