import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RekapKonsultasiUvVetPage } from './rekap-konsultasi-uv-vet.page';

const routes: Routes = [
  {
    path: '',
    component: RekapKonsultasiUvVetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RekapKonsultasiUvVetPageRoutingModule {}
