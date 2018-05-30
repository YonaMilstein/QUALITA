import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VodPage } from './vod';

@NgModule({
  declarations: [
    VodPage,
  ],
  imports: [
    IonicPageModule.forChild(VodPage),
  ],
})
export class VodPageModule {}
