import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeVetPage } from './home-vet.page';

const routes: Routes = [
  {
    path: '',
    component: HomeVetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeVetPageRoutingModule {}
