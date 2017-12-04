import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ReviewData } from '../../app/providers/review-data';
import { ReviewWritePage } from '../review-write/review-write';

import { AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import { NavParams } from 'ionic-angular/navigation/nav-params';

@Component({
  selector: 'page-page9',
  templateUrl: 'page9.html'
})
export class Page9Page {

  reviews2: any;
  arrData: any;
  reviews: any;
  te: any;
  //heartIcon: string = "heart";
  storeName: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public reviewData: ReviewData, public af: AngularFireDatabase) {
    reviewData.getReviews().then(theResult => {
      this.reviews = af.list('/reviews');
    });

    // store num param 에서 넘겨와야함
      this.storeName =navParams.get('storename');


    
  }

  clickAdd() {
    this.navCtrl.push(ReviewWritePage, {storename: this.storeName});
  }

}

/*
arrData=[]
  data:string;

  reviews: FirebaseListObservable<any[]>;
  //heartIcon: string = "heart";

  constructor(public navCtrl: NavController, public reviewData: ReviewData, public af: AngularFireDatabase) {
    reviewData.getReviews().then(theResult => {
      this.reviews = af.list('/reviews');
    })

    this.data="/음식점/"+"9월애";
    //
    this.af.list(this.data).subscribe(_data=>{
      this.arrData=_data;
      console.log(this.arrData);
    });
    //

    */

    /*
        reviewData.getReviews().then(theResult => {
      this.reviews2 = af.object('/reviews/-L-RNAUvMGxzSMOQ48s4');
      this.reviews = af.list('/reviews');
      
      console.log(this.reviews);
    })
    
    this.af.list('/reviews/-L-ROD1mJLZccUa3Qvlu').subscribe(_data => {
      this.arrData=_data;
      console.log(this.arrData);
      console.log(this.arrData[2].$value);
        })
        */