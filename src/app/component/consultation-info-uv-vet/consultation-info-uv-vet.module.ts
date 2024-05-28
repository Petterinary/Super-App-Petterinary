import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsultationInfoUvVetPageRoutingModule } from './consultation-info-uv-vet-routing.module';

import { ConsultationInfoUvVetPage } from './consultation-info-uv-vet.page';
import { GlobalModule } from '../global/global.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    GlobalModule,
    IonicModule,
    ConsultationInfoUvVetPageRoutingModule,
  ],
  declarations: [ConsultationInfoUvVetPage],
})
export class ConsultationInfoUvVetPageModule {}
