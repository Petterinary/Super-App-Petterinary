import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UvLiveTrackingPageRoutingModule } from './uv-live-tracking-routing.module';

import { UvLiveTrackingPage } from './uv-live-tracking.page';
import { GlobalModule } from '../global/global.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    GlobalModule,
    ReactiveFormsModule,
    IonicModule,
    UvLiveTrackingPageRoutingModule,
  ],
  declarations: [UvLiveTrackingPage],
})
export class UvLiveTrackingPageModule {}
