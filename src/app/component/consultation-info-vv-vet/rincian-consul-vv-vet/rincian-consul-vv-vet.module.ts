import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RincianConsulVvVetPageRoutingModule } from './rincian-consul-vv-vet-routing.module';

import { RincianConsulVvVetPage } from './rincian-consul-vv-vet.page';
import { GlobalModule } from '../../global/global.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GlobalModule,
    RincianConsulVvVetPageRoutingModule,
  ],
  declarations: [RincianConsulVvVetPage],
})
export class RincianConsulVvVetPageModule {}
