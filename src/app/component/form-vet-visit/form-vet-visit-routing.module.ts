import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormVetVisitPage } from './form-vet-visit.page';

const routes: Routes = [
  {
    path: '',
    component: FormVetVisitPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormVetVisitPageRoutingModule {}
