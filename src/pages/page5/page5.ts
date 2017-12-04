import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Page9Page } from '../page9/page9';

import { AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import { StoreData } from '../../app/providers/store-data';
import { NavParams } from 'ionic-angular/navigation/nav-params';

@Component({
  selector: 'page-page5',
  templateUrl: 'page5.html'
})
export class Page5Page {

  storeInfo: FirebaseListObservable<any[]>;
  preserveSnapshot: true;
  storeName: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storeData: StoreData, public af: AngularFireDatabase) {
    /*
    let keyVal = navParams.get('key');

    console.log(keyVal);
    let str: string;
    str = '/infos/'+keyVal;
    console.log(str);

    storeData.getStore().then(theResult => {
      this.storeInfo = af.list(str);
    })
    */
  
    //console.log(this.storeInfo);

    console.log("------------");
    this.af.list('/음식점/9월애',{preserveSnapshot:true}).subscribe(snapshots=>{
          snapshots.forEach(snapshot=>{
            //console.log(snapshot.key,snapshot.val().영업시간); 
            this.storeName = snapshot.val();
            console.log(this.storeName);
          });
        })

  }
  goToPage9(params){
    if (!params) params = {};
    this.navCtrl.push(Page9Page, {storename: this.storeName});
  }
}
