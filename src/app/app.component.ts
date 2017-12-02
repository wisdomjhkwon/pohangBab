import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { UserInformationPage } from '../pages/user-information/user-information';
import { Page5Page } from '../pages/page5/page5';
import { Page9Page } from '../pages/page9/page9';
import { Page8Page } from '../pages/page8/page8';
import { Page10Page } from '../pages/page10/page10';

import { ReviewData } from'./providers/review-data';
import {LoginPage} from '../pages/login/login';
import {SignupPage} from '../pages/signup/signup';

import { HomePage } from '../pages/home/home';



@Component({
  templateUrl: 'app.html',
  providers: [ ReviewData ]
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
    rootPage:any = LoginPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public reviewData: ReviewData) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    reviewData.load();
  }
  goToUserInformation(params){
    if (!params) params = {};
    this.navCtrl.setRoot(UserInformationPage);
  }goToHome(params){
    if (!params) params = {};
    this.navCtrl.setRoot(HomePage);
  }goToPage5(params){
    if (!params) params = {};
    this.navCtrl.setRoot(Page5Page);
  }goToPage9(params){
    if (!params) params = {};
    this.navCtrl.setRoot(Page9Page);
  }goToPage8(params){
    if (!params) params = {};
    this.navCtrl.setRoot(Page8Page);
  }goToPage10(params){
    if (!params) params = {};
    this.navCtrl.setRoot(Page10Page);
  }
}
