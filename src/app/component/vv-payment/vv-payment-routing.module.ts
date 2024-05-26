import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VvPaymentPage } from './vv-payment.page';

const routes: Routes = [
  {
    path: '',
    component: VvPaymentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VvPaymentPageRoutingModule {}
