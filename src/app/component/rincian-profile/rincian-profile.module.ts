import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RincianProfilePageRoutingModule } from './rincian-profile-routing.module';

import { RincianProfilePage } from './rincian-profile.page';
import { GlobalModule } from '../global/global.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GlobalModule,
    ReactiveFormsModule,
    RincianProfilePageRoutingModule,
  ],
  declarations: [RincianProfilePage],
})
export class RincianProfilePageModule {}
