import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeVetPageRoutingModule } from './home-vet-routing.module';

import { HomeVetPage } from './home-vet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeVetPageRoutingModule
  ],
  declarations: [HomeVetPage]
})
export class HomeVetPageModule {}
