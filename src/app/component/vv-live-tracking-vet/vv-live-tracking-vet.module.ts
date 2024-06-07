import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VvLiveTrackingVetPageRoutingModule } from './vv-live-tracking-vet-routing.module';

import { VvLiveTrackingVetPage } from './vv-live-tracking-vet.page';
import { GlobalModule } from '../global/global.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    GlobalModule,
    IonicModule,
    VvLiveTrackingVetPageRoutingModule,
  ],
  declarations: [VvLiveTrackingVetPage],
})
export class VvLiveTrackingVetPageModule {}
