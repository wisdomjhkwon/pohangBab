import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-store-page1',
  templateUrl: 'store-page1.html',
})
export class StorePage1Page {

  storeName: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.storeName = navParams.get('storeName');
    console.log(this.storeName);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StorePage1Page');
  }

}
