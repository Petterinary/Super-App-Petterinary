import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RekapKonsultasiVvVetPageRoutingModule } from './rekap-konsultasi-vv-vet-routing.module';

import { RekapKonsultasiVvVetPage } from './rekap-konsultasi-vv-vet.page';
import { GlobalModule } from '../global/global.module';

@NgModule({
  imports: [
    CommonModule,
    GlobalModule,
    FormsModule,
    IonicModule,
    RekapKonsultasiVvVetPageRoutingModule,
  ],
  declarations: [RekapKonsultasiVvVetPage],
})
export class RekapKonsultasiVvVetPageModule {}
