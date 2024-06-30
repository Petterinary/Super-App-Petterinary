import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormUserVisitPage } from './form-user-visit.page';

const routes: Routes = [
  {
    path: '',
    component: FormUserVisitPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormUserVisitPageRoutingModule {}
