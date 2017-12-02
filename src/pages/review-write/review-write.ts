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
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public af: AngularFireDatabase) {
    this.reviews = af.list('/reviews');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReviewWritePage');
  }
  
  addReview() {
  
    if(this.goAgain == true) {
      this.isHeart = "heart";
    }
    else this.isHeart = "heart-outline";

    this.reviews.push({ title: this.title, text: this.text, goAgain: this.goAgain, isHeart: this.isHeart });
    
    this.navCtrl.pop();
  }
}
