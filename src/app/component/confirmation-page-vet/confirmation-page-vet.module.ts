import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmationPageVetPageRoutingModule } from './confirmation-page-vet-routing.module';

import { ConfirmationPageVetPage } from './confirmation-page-vet.page';
import { GlobalModule } from '../global/global.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GlobalModule,
    ConfirmationPageVetPageRoutingModule,
  ],
  declarations: [ConfirmationPageVetPage],
})
export class ConfirmationPageVetPageModule {}
