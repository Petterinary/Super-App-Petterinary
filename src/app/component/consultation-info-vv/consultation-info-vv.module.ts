import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsultationInfoVvPageRoutingModule } from './consultation-info-vv-routing.module';

import { ConsultationInfoVvPage } from './consultation-info-vv.page';
import { GlobalModule } from '../global/global.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    GlobalModule,
    IonicModule,
    ConsultationInfoVvPageRoutingModule,
  ],
  declarations: [ConsultationInfoVvPage],
})
export class ConsultationInfoVvPageModule {}
