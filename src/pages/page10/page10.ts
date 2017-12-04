import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Component({
  selector: 'page-page10',
  templateUrl: 'page10.html'
})
export class Page10Page {

  storeName: any;
  storeInfo: any;
  storeMenu: any;
  storeAddr: any;
  storeHash: any;
  reviews: any;
  infos: FirebaseListObservable<any[]>;

  constructor(public navCtrl: NavController, public af: AngularFireDatabase, public navParams: NavParams) {
    this.infos = af.list('/infos')
  }

  storeRequest() {
    this.infos.push({
      storeName: this.storeName,
      storeMenu: this.storeMenu,
      storeAddr: this.storeAddr,
      storeHash: this.storeHash,
      storeInfo: this.storeInfo,
      reviews: 0
    });
    //pop하기 전에 등록 요청 완료 창을 띄우면 좋을 것 같다.
    
    this.navCtrl.pop();


  }
}
