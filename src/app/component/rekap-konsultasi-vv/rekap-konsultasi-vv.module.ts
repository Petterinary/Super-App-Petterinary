import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RekapKonsultasiVvPageRoutingModule } from './rekap-konsultasi-vv-routing.module';

import { RekapKonsultasiVvPage } from './rekap-konsultasi-vv.page';
import { GlobalModule } from '../global/global.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GlobalModule,
    RekapKonsultasiVvPageRoutingModule,
  ],
  declarations: [RekapKonsultasiVvPage],
})
export class RekapKonsultasiVvPageModule {}
