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

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Facebook } from '@ionic-native/facebook';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthProvider } from '../providers/auth/auth';


export const firebaseConfig = {
  apiKey: "AIzaSyBWKarN0Qk3ymtAZjBcrUDX76YOjh3KdVs",
  authDomain: "pohangbab.firebaseapp.com",
  databaseURL: "https://pohangbab.firebaseio.com",
  projectId: "pohangbab",
  storageBucket: "pohangbab.appspot.com",
  messagingSenderId: "458112688497"
}

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
    SignupPage
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
    SignupPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    Facebook,
    AuthProvider
  ]
})
export class AppModule { }