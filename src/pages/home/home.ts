import { Component } from '@angular/core';
import { NavController, LoadingController, Refresher } from 'ionic-angular';
import { Page5Page } from '../page5/page5';
import { Page9Page } from '../page9/page9';

import { LoginPage } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  userEmail: string = null;
  loader: LoadingController;
  refresher: Refresher;

  constructor(public navCtrl: NavController,
    public loadingCtrl: LoadingController) {
    // window.localStorage.removeItem('currentuser');
    if (!this.isLoggedin()) {
      console.log('You are not logged in');
      this.navCtrl.push(LoginPage);
    }

    let loader = this.loadingCtrl.create({
      content: "Loading location data...",
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
