import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormPaymentTotalPage } from './form-payment-total.page';

const routes: Routes = [
  {
    path: '',
    component: FormPaymentTotalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormPaymentTotalPageRoutingModule {}
