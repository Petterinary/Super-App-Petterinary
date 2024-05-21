import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },

  {
    path: 'service-selection/:vetId',
    loadChildren: () =>
      import('./service-selection/service-selection.module').then(
        (m) => m.ServiceSelectionPageModule
      ),
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./profile/profile.module').then((m) => m.ProfilePageModule),
  },
  {
    path: 'history',
    loadChildren: () =>
      import('./history/history.module').then((m) => m.HistoryPageModule),
  },  {
    path: 'form-user-visit',
    loadChildren: () => import('./form-user-visit/form-user-visit.module').then( m => m.FormUserVisitPageModule)
  },
  {
    path: 'consultation-info-uv',
    loadChildren: () => import('./consultation-info-uv/consultation-info-uv.module').then( m => m.ConsultationInfoUvPageModule)
  },
  {
    path: 'confirmation-page',
    loadChildren: () => import('./confirmation-page/confirmation-page.module').then( m => m.ConfirmationPagePageModule)
  },


  // {
  //   path: 'global',
  //   loadChildren: () =>
  //     import('./global/global.module').then((m) => m.GlobalModule),
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
