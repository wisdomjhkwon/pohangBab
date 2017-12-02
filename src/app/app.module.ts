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
import { ReviewWritePage } from '../pages/review-write/review-write';
import { LoginPage } from '../pages/login/login';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Facebook } from '@ionic-native/facebook';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';


var firebaseConfig = {
  apiKey: "AIzaSyCKoR1T5iGSdX-cwuq94l_NtHDIwemXRmw",
  authDomain: "pohangbabreview.firebaseapp.com",
  databaseURL: "https://pohangbabreview.firebaseio.com",
  projectId: "pohangbabreview",
  storageBucket: "pohangbabreview.appspot.com",
  messagingSenderId: "831440344671"
};

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
    ReviewWritePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig), 
    AngularFireDatabaseModule
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
    ReviewWritePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Facebook
  ]
})
export class AppModule {}