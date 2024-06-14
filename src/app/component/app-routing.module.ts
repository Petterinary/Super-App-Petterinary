import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfirmationComponent } from './confirmation/confirmation.component';
// import { AppComponent } from './app.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
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
    path: 'form-user-visit/:vetId',
    loadChildren: () =>
      import('./form-user-visit/form-user-visit.module').then(
        (m) => m.FormUserVisitPageModule
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
    path: 'form-vet-visit',
    loadChildren: () =>
      import('./form-vet-visit/form-vet-visit.module').then(
        (m) => m.FormVetVisitPageModule
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
    path: 'vv-live-tracking',
    loadChildren: () =>
      import('./vv-live-tracking/vv-live-tracking.module').then(
        (m) => m.VvLiveTrackingPageModule
      ),
  },
  {
    path: 'vv-payment',
    loadChildren: () =>
      import('./vv-payment/vv-payment.module').then(
        (m) => m.VvPaymentPageModule
      ),
  },
  {
    path: 'rekap-konsultasi-vv',
    loadChildren: () =>
      import('./rekap-konsultasi-vv/rekap-konsultasi-vv.module').then(
        (m) => m.RekapKonsultasiVvPageModule
      ),
  },
  {
    path: 'rekap-konsultasi-uv',
    loadChildren: () =>
      import('./rekap-konsultasi-uv/rekap-konsultasi-uv.module').then(
        (m) => m.RekapKonsultasiUvPageModule
      ),
  },
  {
    path: 'home-vet',
    loadChildren: () =>
      import('./home-vet/home-vet.module').then((m) => m.HomeVetPageModule),
  },
  {
    path: 'consultation-info-uv-vet',
    loadChildren: () =>
      import('./consultation-info-uv-vet/consultation-info-uv-vet.module').then(
        (m) => m.ConsultationInfoUvVetPageModule
      ),
  },
  {
    path: 'consultation-info-vv-vet',
    loadChildren: () =>
      import('./consultation-info-vv-vet/consultation-info-vv-vet.module').then(
        (m) => m.ConsultationInfoVvVetPageModule
      ),
  },
  {
    path: 'cancel-form-vet',
    loadChildren: () =>
      import('./cancel-form-vet/cancel-form-vet.module').then(
        (m) => m.CancelFormVetPageModule
      ),
  },
  {
    path: 'history-vet',
    loadChildren: () =>
      import('./history-vet/history-vet.module').then(
        (m) => m.HistoryVetPageModule
      ),
  },
  {
    path: 'confirmation-page-vet',
    loadChildren: () =>
      import('./confirmation-page-vet/confirmation-page-vet.module').then(
        (m) => m.ConfirmationPageVetPageModule
      ),
  },
  {
    path: 'cancel-confirm-vet',
    loadChildren: () =>
      import('./cancel-confirm-vet/cancel-confirm-vet.module').then(
        (m) => m.CancelConfirmVetPageModule
      ),
  },
  {
    path: 'rekap-konsultasi-vv-vet',
    loadChildren: () =>
      import('./rekap-konsultasi-vv-vet/rekap-konsultasi-vv-vet.module').then(
        (m) => m.RekapKonsultasiVvVetPageModule
      ),
  },
  {
    path: 'rekap-konsultasi-uv-vet',
    loadChildren: () =>
      import('./rekap-konsultasi-uv-vet/rekap-konsultasi-uv-vet.module').then(
        (m) => m.RekapKonsultasiUvVetPageModule
      ),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginPageModule),
  },

  {
    path: 'confirmation',
    component: ConfirmationComponent,
  },
  {
    path: 'uv-live-tracking-vet',
    loadChildren: () =>
      import('./uv-live-tracking-vet/uv-live-tracking-vet.module').then(
        (m) => m.UvLiveTrackingVetPageModule
      ),
  },
  {
    path: 'vv-live-tracking-vet',
    loadChildren: () =>
      import('./vv-live-tracking-vet/vv-live-tracking-vet.module').then(
        (m) => m.VvLiveTrackingVetPageModule
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
