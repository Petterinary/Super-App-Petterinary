import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VvPaymentPageRoutingModule } from './vv-payment-routing.module';

import { VvPaymentPage } from './vv-payment.page';
import { GlobalModule } from '../global/global.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    GlobalModule,
    IonicModule,
    VvPaymentPageRoutingModule,
  ],
  declarations: [VvPaymentPage],
})
export class VvPaymentPageModule {}
