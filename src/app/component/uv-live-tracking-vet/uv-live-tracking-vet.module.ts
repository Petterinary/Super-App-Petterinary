import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UvLiveTrackingVetPageRoutingModule } from './uv-live-tracking-vet-routing.module';

import { UvLiveTrackingVetPage } from './uv-live-tracking-vet.page';
import { GlobalModule } from '../global/global.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GlobalModule,
    UvLiveTrackingVetPageRoutingModule,
  ],
  declarations: [UvLiveTrackingVetPage],
})
export class UvLiveTrackingVetPageModule {}
