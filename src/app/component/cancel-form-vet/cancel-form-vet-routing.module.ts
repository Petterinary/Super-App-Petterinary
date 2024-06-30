import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CancelFormVetPage } from './cancel-form-vet.page';

const routes: Routes = [
  {
    path: '',
    component: CancelFormVetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CancelFormVetPageRoutingModule {}
