import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@IonicPage()
@Component({
  selector: 'page-review-write',
  templateUrl: 'review-write.html',
})
export class ReviewWritePage {

  title: any;
  text: any;
  goAgain: any;
  isHeart: any;
  reviews : FirebaseListObservable<any[]>;
  userEmail: string;
  userName: string;
  storeName: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public af: AngularFireDatabase) {
    this.reviews = af.list('/reviews');
    this.storeName = navParams.get('storename');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReviewWritePage');
  }
  
  addReview() {
  
    if(this.goAgain == true) {
      this.isHeart = "heart";
    }
    else this.isHeart = "heart-outline";

    this.userEmail=window.localStorage.getItem('currentuser');//현재 아이디
    console.log(this.userEmail);

    var locofat=this.userEmail.indexOf('@');
    this.userName=this.userEmail.slice(0,locofat);
    console.log(this.userName);

    this.reviews.push({ text: this.text, goAgain: this.goAgain, isHeart: this.isHeart, storeName: this.storeName, writer: this.userName });
    
    this.navCtrl.pop();
  }
}
