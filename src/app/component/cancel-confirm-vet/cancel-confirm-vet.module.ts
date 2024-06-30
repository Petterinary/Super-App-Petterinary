import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CancelConfirmVetPageRoutingModule } from './cancel-confirm-vet-routing.module';

import { CancelConfirmVetPage } from './cancel-confirm-vet.page';
import { GlobalModule } from '../global/global.module';

@NgModule({
  imports: [
    CommonModule,
    GlobalModule,
    FormsModule,
    IonicModule,
    CancelConfirmVetPageRoutingModule,
  ],
  declarations: [CancelConfirmVetPage],
})
export class CancelConfirmVetPageModule {}
