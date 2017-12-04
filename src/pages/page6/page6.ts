import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { Page5Page } from '../page5/page5';
import { Page9Page } from '../page9/page9';

@Component({
  selector: 'page-page6',
  templateUrl: 'page6.html'
})
export class Page6Page {

  constructor(public navCtrl: NavController) {
  }
  goToPage5(params){
    if (!params) params = {};
    this.navCtrl.push(Page5Page, {key: '-L-RZ1yQdozAR40qygft'});

  }goToPage9(params){
    if (!params) params = {};
    this.navCtrl.push(Page9Page);
  }
}
