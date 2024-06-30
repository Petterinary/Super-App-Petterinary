import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmationPagePaymentPageRoutingModule } from './confirmation-page-payment-routing.module';

import { ConfirmationPagePaymentPage } from './confirmation-page-payment.page';
import { GlobalModule } from '../global/global.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    GlobalModule,
    IonicModule,
    ConfirmationPagePaymentPageRoutingModule,
  ],
  declarations: [ConfirmationPagePaymentPage],
})
export class ConfirmationPagePaymentPageModule {}
