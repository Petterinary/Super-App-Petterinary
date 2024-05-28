import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsultationInfoVvVetPageRoutingModule } from './consultation-info-vv-vet-routing.module';

import { ConsultationInfoVvVetPage } from './consultation-info-vv-vet.page';
import { GlobalModule } from '../global/global.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    GlobalModule,
    IonicModule,
    ConsultationInfoVvVetPageRoutingModule,
  ],
  declarations: [ConsultationInfoVvVetPage],
})
export class ConsultationInfoVvVetPageModule {}
