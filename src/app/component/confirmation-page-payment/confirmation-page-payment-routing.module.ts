import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfirmationPagePaymentPage } from './confirmation-page-payment.page';

const routes: Routes = [
  {
    path: '',
    component: ConfirmationPagePaymentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfirmationPagePaymentPageRoutingModule {}
