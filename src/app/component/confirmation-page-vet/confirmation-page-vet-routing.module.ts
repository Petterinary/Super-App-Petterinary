import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfirmationPageVetPage } from './confirmation-page-vet.page';

const routes: Routes = [
  {
    path: '',
    component: ConfirmationPageVetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfirmationPageVetPageRoutingModule {}
