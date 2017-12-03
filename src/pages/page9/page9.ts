import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ReviewData } from '../../app/providers/review-data';
import { ReviewWritePage } from '../review-write/review-write';

import { AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';



@Component({
  selector: 'page-page9',
  templateUrl: 'page9.html'
})
export class Page9Page {

  reviews: FirebaseListObservable<any[]>;
  //heartIcon: string = "heart";

  constructor(public navCtrl: NavController, public reviewData: ReviewData, public af: AngularFireDatabase) {
    reviewData.getReviews().then(theResult => {
      this.reviews = af.list('/reviews');
    })
    
  }

  clickAdd() {
    this.navCtrl.push(ReviewWritePage);
  }

}
