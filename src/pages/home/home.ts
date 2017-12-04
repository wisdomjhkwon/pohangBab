import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, LoadingController, Refresher } from 'ionic-angular';
import { Page5Page } from '../page5/page5';
import { LoginPage } from '../login/login';

import { Geolocation } from '@ionic-native/geolocation';
import { CurrentLoc } from '../../interfaces/current-loc';

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
  goToPage5(params) {
    if (!params) params = {};
    this.navCtrl.push(Page5Page);
  }

  pageRecall(params) {
    if (!params) params = {};
    this.navCtrl.push(HomePage);
  }

  doRefresh(refresher) {
    setTimeout(() => {
      refresher.complete();
    }, 2000);
  }

  // 위도,경도로 거리 계산하는 함수인데, 쓰잘데기 없습니다.
  getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
    var R = 6371; // Radius of the earth in km
    var dLat = this.deg2rad(lat2 - lat1);  // deg2rad below
    var dLon = this.deg2rad(lon2 - lon1);
    var a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2)
      ;
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c; // Distance in km
    return d;
  }

  //얘도 마찬가지고요.
  deg2rad(deg) {
    return deg * (Math.PI / 180)
  }

  ionViewDidLoad() {
    this.loadMap();
    
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

    }, (err) => {
      console.log(err);
    });
  }

  
  addMarker() {
    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: this.map.getCenter()
    });

    let content = "<h4>Information!</h4>";

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
      this.x = position.coords.longitude;
      this.y = position.coords.latitude;

      let latLng = new google.maps.LatLng(this.x, this.y);

      let marker = new google.maps.Marker({
        map: this.map,
        animation: google.maps.Animation.DROP,
        position: this.map.getCenter()
      });

      let content = "<h4>You are here</h4>";

      this.addInfoWindow(marker, content);

    }, (err) => {
      console.log(err);
    });
  }

}

