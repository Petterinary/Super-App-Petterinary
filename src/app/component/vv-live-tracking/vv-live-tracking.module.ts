import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VvLiveTrackingPageRoutingModule } from './vv-live-tracking-routing.module';

import { VvLiveTrackingPage } from './vv-live-tracking.page';
import { GlobalModule } from '../global/global.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GlobalModule,
    VvLiveTrackingPageRoutingModule,
  ],
  declarations: [VvLiveTrackingPage],
})
export class VvLiveTrackingPageModule {}
