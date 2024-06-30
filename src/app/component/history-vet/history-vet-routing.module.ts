import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistoryVetPage } from './history-vet.page';

const routes: Routes = [
  {
    path: '',
    component: HistoryVetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistoryVetPageRoutingModule {}
