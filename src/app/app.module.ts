import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Page6Page } from '../pages/page6/page6';
import { BusMapPage } from '../pages/bus-map/bus-map';
import { TabsControllerPage } from '../pages/tabs-controller/tabs-controller';
import { Page5Page } from '../pages/page5/page5';
import { UserInformationPage } from '../pages/user-information/user-information';
import { Page8Page } from '../pages/page8/page8';
import { Page9Page } from '../pages/page9/page9';
import { Page10Page } from '../pages/page10/page10';

import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { ReviewWritePage } from '../pages/review-write/review-write';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Facebook } from '@ionic-native/facebook';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';


import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthProvider } from '../providers/auth/auth';
import { StationListPage } from '../pages/station-list/station-list';

import { Stat1Page } from '../pages/stat1/stat1';
import { Stat2Page } from '../pages/stat2/stat2';
import { Stat3Page } from '../pages/stat3/stat3';
import { Stat4Page } from '../pages/stat4/stat4';
import { Stat5Page } from '../pages/stat5/stat5';
import { GoogleMaps } from '@ionic-native/google-maps';
import { Geolocation } from '@ionic-native/geolocation';



import { StorePage1Page } from '../pages/store-page1/store-page1';
import { StorePage2Page } from '../pages/store-page2/store-page2';
import { StorePage3Page } from '../pages/store-page3/store-page3';
import { StorePage4Page } from '../pages/store-page4/store-page4';
import { StorePage5Page } from '../pages/store-page5/store-page5';
import { StorePage6Page } from '../pages/store-page6/store-page6';
import { StorePage7Page } from '../pages/store-page7/store-page7';
import { StorePage8Page } from '../pages/store-page8/store-page8';
import { StorePage9Page } from '../pages/store-page9/store-page9';
import { StorePage10Page } from '../pages/store-page10/store-page10';
import { StorePage11Page } from '../pages/store-page11/store-page11';
import { StorePage13Page } from '../pages/store-page13/store-page13';
import { StorePage12Page } from '../pages/store-page12/store-page12';
import { StorePage14Page } from '../pages/store-page14/store-page14';
import { StorePage15Page } from '../pages/store-page15/store-page15';
import { StorePage16Page } from '../pages/store-page16/store-page16';
import { StorePage17Page } from '../pages/store-page17/store-page17';
import { StorePage18Page } from '../pages/store-page18/store-page18';
import { StorePage19Page } from '../pages/store-page19/store-page19';
import { StorePage20Page } from '../pages/store-page20/store-page20';



export const firebaseConfig = {
  apiKey: "AIzaSyBWKarN0Qk3ymtAZjBcrUDX76YOjh3KdVs",
  authDomain: "pohangbab.firebaseapp.com",
  databaseURL: "https://pohangbab.firebaseio.com",
  projectId: "pohangbab",
  storageBucket: "pohangbab.appspot.com",
  messagingSenderId: "458112688497"
}

/* 이거 지혜가 쓰던 디비임다.
var firebaseConfig = {
  apiKey: "AIzaSyCKoR1T5iGSdX-cwuq94l_NtHDIwemXRmw",
  authDomain: "pohangbabreview.firebaseapp.com",
  databaseURL: "https://pohangbabreview.firebaseio.com",
  projectId: "pohangbabreview",
  storageBucket: "pohangbabreview.appspot.com",
  messagingSenderId: "831440344671"
};
*/

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Page6Page,
    BusMapPage,
    TabsControllerPage,
    Page5Page,
    UserInformationPage,
    Page8Page,
    Page9Page,
    Page10Page,
    LoginPage,
    SignupPage,
    StationListPage,
    ReviewWritePage,
    Stat1Page,
    Stat2Page,
    Stat3Page,
    Stat4Page,
    Stat5Page,
    StorePage1Page,
    StorePage2Page,
    StorePage3Page,
    StorePage4Page,
    StorePage5Page,
    StorePage6Page,
    StorePage7Page,
    StorePage8Page,
    StorePage9Page,
    StorePage10Page,
    StorePage11Page,
    StorePage12Page,
    StorePage13Page,
    StorePage14Page,
    StorePage15Page,
    StorePage16Page,
    StorePage17Page,
    StorePage18Page,
    StorePage19Page,
    StorePage20Page,
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Page6Page,
    BusMapPage,
    TabsControllerPage,
    Page5Page,
    UserInformationPage,
    Page8Page,
    Page9Page,
    Page10Page,
    LoginPage,
    SignupPage,
    StationListPage,
    ReviewWritePage,
    Stat1Page,
    Stat2Page,
    Stat3Page,
    Stat4Page,
    Stat5Page,
    StorePage1Page,
    StorePage2Page,
    StorePage3Page,
    StorePage4Page,
    StorePage5Page,
    StorePage6Page,
    StorePage7Page,
    StorePage8Page,
    StorePage9Page,
    StorePage10Page,
    StorePage11Page,
    StorePage12Page,
    StorePage13Page,
    StorePage14Page,
    StorePage15Page,
    StorePage16Page,
    StorePage17Page,
    StorePage18Page,
    StorePage19Page,
    StorePage20Page,

  ],
  providers: [
    Geolocation,
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    Facebook,
    AuthProvider,
    GoogleMaps,
  ]
})
export class AppModule { }