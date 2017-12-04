import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StorePage1Page } from './store-page1';

@NgModule({
  declarations: [
    StorePage1Page,
  ],
  imports: [
    IonicPageModule.forChild(StorePage1Page),
  ],
})
export class StorePage1PageModule {}
