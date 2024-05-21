import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsultationInfoUvPage } from './consultation-info-uv.page';

const routes: Routes = [
  {
    path: '',
    component: ConsultationInfoUvPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsultationInfoUvPageRoutingModule {}
