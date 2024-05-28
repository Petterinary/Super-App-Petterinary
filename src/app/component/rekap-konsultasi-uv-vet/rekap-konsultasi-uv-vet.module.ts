import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RekapKonsultasiUvVetPageRoutingModule } from './rekap-konsultasi-uv-vet-routing.module';

import { RekapKonsultasiUvVetPage } from './rekap-konsultasi-uv-vet.page';
import { GlobalModule } from '../global/global.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    GlobalModule,
    IonicModule,
    RekapKonsultasiUvVetPageRoutingModule,
  ],
  declarations: [RekapKonsultasiUvVetPage],
})
export class RekapKonsultasiUvVetPageModule {}
