import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UvPaymentPage } from './uv-payment.page';

const routes: Routes = [
  {
    path: '',
    component: UvPaymentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UvPaymentPageRoutingModule {}
