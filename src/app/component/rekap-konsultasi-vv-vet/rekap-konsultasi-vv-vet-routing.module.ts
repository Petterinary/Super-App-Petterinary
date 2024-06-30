import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RekapKonsultasiVvVetPage } from './rekap-konsultasi-vv-vet.page';

const routes: Routes = [
  {
    path: '',
    component: RekapKonsultasiVvVetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RekapKonsultasiVvVetPageRoutingModule {}
