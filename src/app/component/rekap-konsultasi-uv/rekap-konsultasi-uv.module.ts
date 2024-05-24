import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RekapKonsultasiUvPageRoutingModule } from './rekap-konsultasi-uv-routing.module';

import { RekapKonsultasiUvPage } from './rekap-konsultasi-uv.page';
import { GlobalModule } from '../global/global.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    GlobalModule,
    IonicModule,
    RekapKonsultasiUvPageRoutingModule,
  ],
  declarations: [RekapKonsultasiUvPage],
})
export class RekapKonsultasiUvPageModule {}
