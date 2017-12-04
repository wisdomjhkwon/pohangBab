import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Page9Page } from '../page9/page9';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'page-store-page1',
  templateUrl: 'store-page1.html',
})
export class StorePage1Page {

  storeName: any;
  Data: Map<any, any>;
  constructor(public navCtrl: NavController, public navParams: NavParams, public af: AngularFireDatabase) {
    this.storeName = navParams.get('storeName');
    console.log(this.storeName);

    var myMap = new Map();
    this.af.list('/음식점/'+this.storeName, { preserveSnapshot: true }).subscribe(snapshots=> {
      snapshots.forEach(snapshot => {
        myMap.set(snapshot.key, snapshot.val())
        this.Data = myMap;
        if(this.Data.get("메뉴")) {
          console.log(this.Data.get("메뉴"));
        }
      })
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StorePage1Page');
  }
  goToPage9(params){
    if (!params) params = {};
    this.navCtrl.push(Page9Page, {storename: this.storeName});
  }
}
