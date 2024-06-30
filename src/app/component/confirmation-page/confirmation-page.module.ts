import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmationPagePageRoutingModule } from './confirmation-page-routing.module';

import { ConfirmationPagePage } from './confirmation-page.page';
import { GlobalModule } from '../global/global.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    GlobalModule,
    IonicModule,
    ConfirmationPagePageRoutingModule,
  ],
  declarations: [ConfirmationPagePage],
})
export class ConfirmationPagePageModule {}
