import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsultationInfoVvVetPage } from './consultation-info-vv-vet.page';

const routes: Routes = [
  {
    path: '',
    component: ConsultationInfoVvVetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsultationInfoVvVetPageRoutingModule {}
