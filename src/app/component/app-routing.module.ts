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
  },
  {
    path: 'form-user-visit',
    loadChildren: () =>
      import('./form-user-visit/form-user-visit.module').then(
        (m) => m.FormUserVisitPageModule
      ),
  },
  {
    path: 'form-vet-visit',
    loadChildren: () =>
      import('./form-vet-visit/form-vet-visit.module').then(
        (m) => m.FormVetVisitPageModule
      ),
  },
  {
    path: 'consultation-info-uv',
    loadChildren: () =>
      import('./consultation-info-uv/consultation-info-uv.module').then(
        (m) => m.ConsultationInfoUvPageModule
      ),
  },
  {
    path: 'consultation-info-vv',
    loadChildren: () =>
      import('./consultation-info-vv/consultation-info-vv.module').then(
        (m) => m.ConsultationInfoVvPageModule
      ),
  },
  {
    path: 'confirmation-page',
    loadChildren: () =>
      import('./confirmation-page/confirmation-page.module').then(
        (m) => m.ConfirmationPagePageModule
      ),
  },
  {
    path: 'uv-live-tracking',
    loadChildren: () =>
      import('./uv-live-tracking/uv-live-tracking.module').then(
        (m) => m.UvLiveTrackingPageModule
      ),
  },
  {
    path: 'uv-payment',
    loadChildren: () =>
      import('./uv-payment/uv-payment.module').then(
        (m) => m.UvPaymentPageModule
      ),
  },
  {
    path: 'confirmation-page-payment',
    loadChildren: () =>
      import(
        './confirmation-page-payment/confirmation-page-payment.module'
      ).then((m) => m.ConfirmationPagePaymentPageModule),
  },
  {
    path: 'rekap-konsultasi-uv',
    loadChildren: () =>
      import('./rekap-konsultasi-uv/rekap-konsultasi-uv.module').then(
        (m) => m.RekapKonsultasiUvPageModule
      ),
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
