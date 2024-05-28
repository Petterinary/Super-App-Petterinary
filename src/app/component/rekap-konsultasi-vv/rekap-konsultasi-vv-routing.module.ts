import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RekapKonsultasiVvPage } from './rekap-konsultasi-vv.page';

const routes: Routes = [
  {
    path: '',
    component: RekapKonsultasiVvPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RekapKonsultasiVvPageRoutingModule {}
