import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RincianConsulVvPageRoutingModule } from './rincian-consul-vv-routing.module';

import { RincianConsulVvPage } from './rincian-consul-vv.page';
import { GlobalModule } from '../../global/global.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GlobalModule,
    RincianConsulVvPageRoutingModule,
  ],
  declarations: [RincianConsulVvPage],
})
export class RincianConsulVvPageModule {}
