import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistoryVetPageRoutingModule } from './history-vet-routing.module';

import { HistoryVetPage } from './history-vet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistoryVetPageRoutingModule
  ],
  declarations: [HistoryVetPage]
})
export class HistoryVetPageModule {}
