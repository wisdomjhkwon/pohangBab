import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Page9Page } from '../page9/page9';

@Component({
  selector: 'page-page5',
  templateUrl: 'page5.html'
})
export class Page5Page {

  constructor(public navCtrl: NavController) {
  }
  goToPage9(params){
    if (!params) params = {};
    this.navCtrl.push(Page9Page);
  }
}
