import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ReviewData } from '../../app/providers/review-data';

@Component({
  selector: 'page-page9',
  templateUrl: 'page9.html'
})
export class Page9Page {

  reviews: Array<Object> = []
  constructor(public navCtrl: NavController, public reviewData: ReviewData) {
    reviewData.getReviews().then(theResult => {
      this.reviews = theResult;
    })
  }


}
