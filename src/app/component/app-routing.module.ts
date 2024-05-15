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
