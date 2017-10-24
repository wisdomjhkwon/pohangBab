import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Page6Page } from '../page6/page6';
import { Page5Page } from '../page5/page5';
import { Page9Page } from '../page9/page9';

@Component({
  selector: 'page-bus-map',
  templateUrl: 'bus-map.html'
})
export class BusMapPage {

  constructor(public navCtrl: NavController) {
  }
  goToPage6(params){
    if (!params) params = {};
    this.navCtrl.push(Page6Page);
  }goToPage5(params){
    if (!params) params = {};
    this.navCtrl.push(Page5Page);
  }goToPage9(params){
    if (!params) params = {};
    this.navCtrl.push(Page9Page);
  }
}
