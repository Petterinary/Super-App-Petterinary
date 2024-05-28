import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VvLiveTrackingPageRoutingModule } from './vv-live-tracking-routing.module';

import { VvLiveTrackingPage } from './vv-live-tracking.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VvLiveTrackingPageRoutingModule
  ],
  declarations: [VvLiveTrackingPage]
})
export class VvLiveTrackingPageModule {}
