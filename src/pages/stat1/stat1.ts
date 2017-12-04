import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker
} from '@ionic-native/google-maps';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { StorePage1Page } from '../store-page1/store-page1';
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
import { StorePage12Page } from '../store-page12/store-page12';
import { StorePage13Page } from '../store-page13/store-page13';
import { StorePage14Page } from '../store-page14/store-page14';
import { StorePage15Page } from '../store-page15/store-page15';
import { StorePage16Page } from '../store-page16/store-page16';
import { StorePage17Page } from '../store-page17/store-page17';
import { StorePage18Page } from '../store-page18/store-page18';
import { StorePage19Page } from '../store-page19/store-page19';
import { StorePage20Page } from '../store-page20/store-page20';
import { Page9Page } from '../page9/page9';

declare var google;

@Component({
  selector: 'page-stat1',
  templateUrl: 'stat1.html',
})

export class Stat1Page {

  @ViewChild('map') mapElement: ElementRef;
  map: any;

  constructor(private googlemaps: GoogleMaps, public navCtrl: NavController, public GeoLocation: Geolocation) {

  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter stat1page');
    this.loadMap();
    this.addCenterMarker();
    this.addMarker(36.0805071, 129.394598, "9월애", StorePage1Page);  //9월애, 1
    this.addMarker(36.0841261, 129.3974612, "교동짬뽕", StorePage2Page); //교동짬뽕, 2
    this.addMarker(36.0787765, 129.4017, "구이촌", StorePage3Page);   //구이촌, 3
    this.addMarker(36.0821756, 129.401773, "국수나무", StorePage4Page);  //국수나무, 4
    this.addMarker(36.0810292, 129.3966427, "궁물촌", StorePage5Page); //궁물촌, 5
    this.addMarker(36.0815812, 129.3960486, "논스탠다드", StorePage6Page); //논스탠다드, 6
    this.addMarker(36.0805828, 129.4001778, "대원 도토리 수제비", StorePage7Page); //대원 도토리 수제비, 7
    this.addMarker(36.0800696, 129.3978667, "라라코스트", StorePage8Page); //라라코스트, 8
    this.addMarker(36.079668, 129.3972152, "서가앤쿡", StorePage9Page);  //서가앤쿡, 9
    this.addMarker(36.0812453, 129.4017762, "시골국밥", StorePage10Page); //시골국밥, 10
    this.addMarker(36.0859756, 129.3970781, "용강국밥", StorePage11Page); //용강국밥, 11
    this.addMarker(36.0805675, 129.3998909, "이동근 선산곱창 막창", StorePage12Page); //이동근 선산곱창 막창, 12
    this.addMarker(36.081606, 129.3992085, "전주명가 콩나물국밥", StorePage13Page);  //전주명가 콩나물국밥, 13
    this.addMarker(36.08097, 129.3975353, "정용중화", StorePage14Page);   //정용중화, 14
    this.addMarker(36.0819914, 129.3959307, "쿠킹빌리지 양식당", StorePage15Page); //쿠킹빌리지 양식당, 15
    this.addMarker(36.0836295, 129.3970606, "팔선", StorePage16Page); //팔선, 16
    this.addMarker(36.0802828, 129.4017585, "한양곱창전골", StorePage17Page); //한양곱창전골, 17
    this.addMarker(36.0856341, 129.3970144, "할매국밥", StorePage18Page); //할매국밥, 18
    this.addMarker(36.0834491, 129.3892483, "호원", StorePage19Page); //호원, 19
    this.addMarker(36.0767831, 129.3966629, "홍콩반점", StorePage20Page); //홍콩반점, 20

  }

  loadMap() {

    let latLng = new google.maps.LatLng(36.081921, 129.406153);

    let mapOptions = {
      center: latLng,
      zoom: 16,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
  }

  addInfoWindow(marker, content, index) {
    content = '<h4>'+content+'</h4>';
    let infoWindow = new google.maps.InfoWindow({
      content: content
      
    });

    google.maps.event.addListener(marker, 'dblclick', () => {
      setTimeout(() => {//여기서 가게 디테일페이지로 넘어감
        this.navCtrl.push(Page9Page, {storename: content});
      }, 600);
    });

    google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker);
    });

  }

  addCenterMarker() {
    let index = null;
    var image = 'https://lh6.googleusercontent.com/6FEX2UWkE89jTqjYZDNnV1-tTHT5PGlpFTE4-a_-XQVo_7x0HS0Z-6mloUenlbLSPK9qg5X3XxXEBK3p4-XK=w1920-h917';
    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: this.map.getCenter(),
      icon: image 
    });

    let content = "<h4>세차장</h4>";

    this.addInfoWindow(marker, content, index);
  }

  addMarker(lat, lng, content, index){
    var image = 'https://lh5.googleusercontent.com/Yk8Usoj1FPzbi_2lmrWktlTNPvGQjj7v9Sp8AFKiJMiK-wt8k9LP_RcPOzM-yZUop5S7TyjR3N1cwY1Tp-jt=w1920-h917';
    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: {
        lat: lat,
        lng: lng
      },
      icon: image
    });

    this.addInfoWindow(marker, content, index);
  }
}