import { Component } from '@angular/core';
import { NavController, LoadingController, Refresher } from 'ionic-angular';
import { Page5Page } from '../page5/page5';
import { Page9Page } from '../page9/page9';

import { LoginPage } from '../login/login';

import {Geolocation} from '@ionic-native/geolocation';
import { CurrentLoc } from '../../interfaces/current-loc';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  userEmail: string = null;
  loader: LoadingController;
  refresher: Refresher;
  currentLoc: CurrentLoc = { lat: 0, lon: 0 };

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController, 
    public GeoLocation: Geolocation) {
    // window.localStorage.removeItem('currentuser');
    if (!this.isLoggedin()) {
      console.log('You are not logged in');
      this.navCtrl.push(LoginPage);
    }

    GeoLocation.getCurrentPosition().then(pos => {
      console.log('lat: ' + pos.coords.latitude
      + ', lon: ' + pos.coords.longitude);
      this.currentLoc.lat = pos.coords.latitude;
      this.currentLoc.lon = pos.coords.longitude;
      this.currentLoc.timestamp = pos.timestamp;
      });
    

    let loader = this.loadingCtrl.create({
      content: "Loading :)",
      duration: 2000
    });

    loader.present();

  }

  isLoggedin() {
    if (window.localStorage.getItem('currentuser')) {
      console.log(window.localStorage.getItem('currentuser'));

      return true;
    }
  }
  goToPage5(params) {
    if (!params) params = {};
    this.navCtrl.push(Page5Page);
  }

  goToPage9(params) {
    if (!params) params = {};
    this.navCtrl.push(Page9Page);
  }

  doRefresh(refresher) {
    setTimeout(() => {
      refresher.complete();
    }, 2000);
  }
}
