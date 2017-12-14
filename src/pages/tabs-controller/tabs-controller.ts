import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { BusMapPage } from '../bus-map/bus-map';

@Component({
  selector: 'page-tabs-controller',
  templateUrl: 'tabs-controller.html'
})
export class TabsControllerPage {

  tab1Root: any = HomePage;
  tab2Root: any = BusMapPage;
  constructor(public navCtrl: NavController) {
    console.log("hihi");
  }
  
}
