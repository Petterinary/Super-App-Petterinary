import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import { BottomBarComponent } from './bottom-bar/bottom-bar.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [HeaderBarComponent, BottomBarComponent],
  imports: [IonicModule, CommonModule],
  exports: [HeaderBarComponent, BottomBarComponent],
})
export class GlobalModule {}
