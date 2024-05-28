import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RincianConsulUvPageRoutingModule } from './rincian-consul-uv-routing.module';

import { RincianConsulUvPage } from './rincian-consul-uv.page';
import { GlobalModule } from '../../global/global.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    GlobalModule,
    IonicModule,
    RincianConsulUvPageRoutingModule,
  ],
  declarations: [RincianConsulUvPage],
})
export class RincianConsulUvPageModule {}
