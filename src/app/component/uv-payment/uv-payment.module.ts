import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UvPaymentPageRoutingModule } from './uv-payment-routing.module';

import { UvPaymentPage } from './uv-payment.page';
import { GlobalModule } from '../global/global.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GlobalModule,
    UvPaymentPageRoutingModule,
  ],
  declarations: [UvPaymentPage],
})
export class UvPaymentPageModule {}
