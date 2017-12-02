import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Stat1Page } from '../stat1/stat1';
import { Stat2Page } from '../stat2/stat2';
import { Stat3Page } from '../stat3/stat3';
import { Stat4Page } from '../stat4/stat4';
import { Stat5Page } from '../stat5/stat5';


@Component({
  selector: 'page-station-list',
  templateUrl: 'station-list.html',
})
export class StationListPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StationListPage');
  }

  goToPageStat1(){
    this.navCtrl.push(Stat1Page);
  }

  goToPageStat2(){
    this.navCtrl.push(Stat2Page);
  }

  goToPageStat3(){
    this.navCtrl.push(Stat3Page);
  }

  goToPageStat4(){
    this.navCtrl.push(Stat4Page);
  }

  goToPageStat5(){
    this.navCtrl.push(Stat5Page);
  }
}
