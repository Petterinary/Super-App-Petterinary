import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CancelFormVetPageRoutingModule } from './cancel-form-vet-routing.module';

import { CancelFormVetPage } from './cancel-form-vet.page';
import { GlobalModule } from '../global/global.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    GlobalModule,
    IonicModule,
    CancelFormVetPageRoutingModule,
  ],
  declarations: [CancelFormVetPage],
})
export class CancelFormVetPageModule {}
