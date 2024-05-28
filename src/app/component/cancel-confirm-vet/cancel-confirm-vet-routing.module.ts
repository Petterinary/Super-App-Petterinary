import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CancelConfirmVetPage } from './cancel-confirm-vet.page';

const routes: Routes = [
  {
    path: '',
    component: CancelConfirmVetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CancelConfirmVetPageRoutingModule {}
