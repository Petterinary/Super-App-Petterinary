import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RincianConsulUvVetPageRoutingModule } from './rincian-consul-uv-vet-routing.module';

import { RincianConsulUvVetPage } from './rincian-consul-uv-vet.page';
import { GlobalModule } from '../../global/global.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GlobalModule,
    RincianConsulUvVetPageRoutingModule,
  ],
  declarations: [RincianConsulUvVetPage],
})
export class RincianConsulUvVetPageModule {}
