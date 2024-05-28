import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfilePage } from './profile.page';
import { ServiceSelectionRegisterComponent } from './component/service-selection-register/service-selection-register.component';
import { ConfirmationRegisterComponent } from './component/confirmation-register/confirmation-register.component';

const routes: Routes = [
  {
    path: '',
    component: ProfilePage,
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./component/register/register.module').then(
        (m) => m.RegisterPageModule
      ),
  },
  {
    path: 'register-vet',
    loadChildren: () =>
      import('./component/register-vet/register-vet.module').then(
        (m) => m.RegisterVetPageModule
      ),
  },
  {
    path: 'service-selection-register',
    component: ServiceSelectionRegisterComponent,
  },
  {
    path: 'confirmation-register',
    component: ConfirmationRegisterComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilePageRoutingModule {}
