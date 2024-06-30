import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RekapKonsultasiUvPage } from './rekap-konsultasi-uv.page';

const routes: Routes = [
  {
    path: '',
    component: RekapKonsultasiUvPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RekapKonsultasiUvPageRoutingModule {}
