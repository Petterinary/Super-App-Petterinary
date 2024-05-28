import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsultationInfoUvVetPage } from './consultation-info-uv-vet.page';

const routes: Routes = [
  {
    path: '',
    component: ConsultationInfoUvVetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsultationInfoUvVetPageRoutingModule {}
