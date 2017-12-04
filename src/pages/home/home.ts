import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, LoadingController, Refresher } from 'ionic-angular';
import { Page5Page } from '../page5/page5';
import { LoginPage } from '../login/login';

import { Geolocation } from '@ionic-native/geolocation';
import { CurrentLoc } from '../../interfaces/current-loc';

import { StorePage2Page } from '../store-page2/store-page2';
import { StorePage3Page } from '../store-page3/store-page3';
import { StorePage4Page } from '../store-page4/store-page4';
import { StorePage5Page } from '../store-page5/store-page5';
import { StorePage6Page } from '../store-page6/store-page6';
import { StorePage7Page } from '../store-page7/store-page7';
import { StorePage8Page } from '../store-page8/store-page8';
import { StorePage9Page } from '../store-page9/store-page9';
import { StorePage10Page } from '../store-page10/store-page10';
import { StorePage11Page } from '../store-page11/store-page11';

declare var google;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  userEmail: string = null;
  loader: LoadingController;
  refresher: Refresher;
  currentLoc: CurrentLoc = { lat: 0, lon: 0 };
  x: number = 0;
  y: number = 0;

  @ViewChild('map') mapElement: ElementRef;
  map: any;

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
      duration: 1000
    });

    loader.present();
  }

  isLoggedin() {
    if (window.localStorage.getItem('currentuser')) {
      console.log(window.localStorage.getItem('currentuser'));

      return true;
    }
  }

  ionViewDidLoad() {
    this.loadMap();
    this.showMyLocation();
  }

  doRefresh() {
    window.location.reload();
  }

  loadMap() {

    this.GeoLocation.getCurrentPosition().then((position) => {

      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

      let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }

      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

      this.addMarker(36.0805071, 129.394598, "<h4>9월애</h4>", StorePage1Page);  //9월애, 1
      this.addMarker(36.0841261, 129.3974612, "<h4>교동짬뽕</h4>", StorePage2Page); //교동짬뽕, 2
      this.addMarker(36.0787765, 129.4017, "<h4>구이촌</h4>", StorePage3Page);   //구이촌, 3
      this.addMarker(36.0821756, 129.401773, "<h4>국수나무</h4>", StorePage4Page);  //국수나무, 4
      this.addMarker(36.0810292, 129.3966427, "<h4>궁물촌</h4>", StorePage5Page); //궁물촌, 5
      this.addMarker(36.0815812, 129.3960486, "<h4>논스탠다드</h4>", StorePage6Page); //논스탠다드, 6
      this.addMarker(36.0805828, 129.4001778, "<h4>대원 도토리 수제비</h4>", StorePage7Page); //대원 도토리 수제비, 7
      this.addMarker(36.0800696, 129.3978667, "<h4>라라코스트</h4>", StorePage8Page); //라라코스트, 8
      this.addMarker(36.079668, 129.3972152, "<h4>서가앤쿡</h4>", StorePage9Page);  //서가앤쿡, 9
      this.addMarker(36.0812453, 129.4017762, "<h4>시골국밥</h4>", StorePage10Page); //시골국밥, 10
      this.addMarker(36.0859756, 129.3970781, "<h4>용강국밥</h4>", StorePage11Page); //용강국밥, 11
      this.addMarker(36.0805675, 129.3998909, "<h4>이동근 선산곱창 막창</h4>", StorePage12Page); //이동근 선산곱창 막창, 12
      this.addMarker(36.081606, 129.3992085, "<h4>전주명가 콩나물국밥</h4>", StorePage13Page);  //전주명가 콩나물국밥, 13
      this.addMarker(36.08097, 129.3975353, "<h4>정용중화</h4>", StorePage14Page);   //정용중화, 14
      this.addMarker(36.0819914, 129.3959307, "<h4>쿠킹빌리지 양식당</h4>", StorePage15Page); //쿠킹빌리지 양식당, 15
      this.addMarker(36.0836295, 129.3970606, "<h4>팔선</h4>", StorePage16Page); //팔선, 16
      this.addMarker(36.0802828, 129.4017585, "<h4>한양곱창전골</h4>", StorePage17Page); //한양곱창전골, 17
      this.addMarker(36.0856341, 129.3970144, "<h4>할매국밥</h4>", StorePage18Page); //할매국밥, 18
      this.addMarker(36.0834491, 129.3892483, "<h4>호원</h4>", StorePage19Page); //호원, 19
      this.addMarker(36.0767831, 129.3966629, "<h4>홍콩반점</h4>", StorePage20Page); //홍콩반점, 20

    }, (err) => {
      console.log(err);
    });
  }


  addMarker(x, y, name, store) {
    var storeLatLng = new google.maps.LatLng(x, y);

    var image = 'https://lh5.googleusercontent.com/Yk8Usoj1FPzbi_2lmrWktlTNPvGQjj7v9Sp8AFKiJMiK-wt8k9LP_RcPOzM-yZUop5S7TyjR3N1cwY1Tp-jt=w1920-h917';

    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: storeLatLng,
      icon: image
    });

    let content = name;

    google.maps.event.addListener(marker, 'dblclick', () => {
      this.navCtrl.push(store);
    });

    this.addInfoWindow(marker, content);
  }

  addInfoWindow(marker, content) {
    
        let infoWindow = new google.maps.InfoWindow({
          content: content
        });
    
        google.maps.event.addListener(marker, 'click', () => {
          infoWindow.open(this.map, marker);
        });
    
      }

  showMyLocation() {
    this.GeoLocation.watchPosition().subscribe((position) => {
      //this.x = position.coords.longitude;
      //this.y = position.coords.latitude;
      //let latLng = new google.maps.LatLng(this.x, this.y);

      var image = 'https://lh4.googleusercontent.com/lNBAcWnam6d6m6tMJsVuSVa1TgoqUcRsThNqdmfMHUDrdrSflYMM81Biu50sNlqi4lG9wctEmW8wEkYZdleD=w1920-h917';

      let marker = new google.maps.Marker({
        map: this.map,
        animation: google.maps.Animation.DROP,
        position: this.map.getCenter(),
        icon: image
      });

      let content = "<h4>You are here</h4>";

      this.addInfoWindow(marker, content);

    }, (err) => {
      console.log(err);
    });
  }

}

