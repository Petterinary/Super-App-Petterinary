import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsultationInfoUvPageRoutingModule } from './consultation-info-uv-routing.module';

import { ConsultationInfoUvPage } from './consultation-info-uv.page';
import { GlobalModule } from '../global/global.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    GlobalModule,
    IonicModule,
    ConsultationInfoUvPageRoutingModule,
  ],
  declarations: [ConsultationInfoUvPage],
})
export class ConsultationInfoUvPageModule {}
