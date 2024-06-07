import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UvLiveTrackingPageRoutingModule } from './uv-live-tracking-routing.module';

import { UvLiveTrackingPage } from './uv-live-tracking.page';
import { GlobalModule } from '../global/global.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    GlobalModule,
    IonicModule,
    UvLiveTrackingPageRoutingModule,
  ],
  declarations: [UvLiveTrackingPage],
})
export class UvLiveTrackingPageModule {}
