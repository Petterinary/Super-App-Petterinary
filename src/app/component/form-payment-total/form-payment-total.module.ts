import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormPaymentTotalPageRoutingModule } from './form-payment-total-routing.module';

import { FormPaymentTotalPage } from './form-payment-total.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormPaymentTotalPageRoutingModule
  ],
  declarations: [FormPaymentTotalPage]
})
export class FormPaymentTotalPageModule {}
