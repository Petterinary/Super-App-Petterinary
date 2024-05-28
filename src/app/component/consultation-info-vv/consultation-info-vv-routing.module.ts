import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsultationInfoVvPage } from './consultation-info-vv.page';

const routes: Routes = [
  {
    path: '',
    component: ConsultationInfoVvPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsultationInfoVvPageRoutingModule {}
