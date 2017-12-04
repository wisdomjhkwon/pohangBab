import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Page9Page } from '../page9/page9';
import { AngularFireDatabase } from 'angularfire2/database';
import { ReviewData } from '../../app/providers/review-data';

@Component({
  selector: 'page-store-page1',
  templateUrl: 'store-page1.html',
})
export class StorePage1Page {

  storeName: any;
  Data: Map<any, any>;
  menu: any;
  /*
  async getInfo(name): Promise<any> {
    try { var myMap = new Map();
    await this.af.list('/음식점/'+name, { preserveSnapshot: true }).subscribe(snapshots=> {
      snapshots.forEach(snapshot => {
        myMap.set(snapshot.key, snapshot.val())
        this.Data = myMap;
        if(this.Data.get("메뉴")) {
          console.log(this.Data.get("메뉴"));
          this.menu=this.Data.get("메뉴");
        }
        console.log(this.menu);
      })
    });
  }catch(e) {
    console.log(e);
  }
  }*/
  infos: any;
  constructor(public navCtrl: NavController, public reviewData: ReviewData, public navParams: NavParams, public af: AngularFireDatabase) {
    this.storeName = navParams.get('storeName');
    this.menu = navParams.get('menu');

    reviewData.getReviews().then(theResult => {
      this.infos = af.list('/infos');
    });
    //console.log(this.storeName);
    //console.log('--');
    //console.log(this.menu);

    // var l=this.menu;
    //console.log(this.menu.get('국밥포장'));
  
    /*
    var myMap = new Map();
    this.af.list('/음식점/'+this.storeName, { preserveSnapshot: true }).subscribe(snapshots=> {
      snapshots.forEach(snapshot => {
        myMap.set(snapshot.key, snapshot.val())
        this.Data = myMap;
        if(this.Data.get("메뉴")) {
          console.log(this.Data.get("메뉴"));
          this.menu=this.Data.get("메뉴");
        }
        console.log(this.menu);
      })
    })
*/
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad StorePage1Page');
    //this.getInfo(this.storeName);
    
  }
  goToPage9(params){
    if (!params) params = {};
    this.navCtrl.push(Page9Page, {storename: this.storeName});
  }

}
