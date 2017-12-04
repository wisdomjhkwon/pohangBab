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

declare var google;

@Component({
  selector: 'page-stat2',
  templateUrl: 'stat2.html',
})

export class Stat2Page {

  @ViewChild('map') mapElement: ElementRef;
  map: any;

  constructor(private googlemaps: GoogleMaps, public navCtrl: NavController, public GeoLocation: Geolocation) {

  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter stat1page');
    this.loadMap();
    this.addCenterMarker();
    this.addMarker(36.0805071, 129.394598, "<h4>9월애</h4>", StorePage1Page);  //9월애
    this.addMarker(36.0841261, 129.3974612, "<h4>교동짬뽕</h4>", StorePage1Page); //교동짬뽕
    this.addMarker(36.0787765, 129.4017, "<h4>구이촌</h4>", StorePage1Page);   //구이촌
    this.addMarker(36.0821756, 129.401773, "<h4>국수나무</h4>", StorePage1Page);  //국수나무
    this.addMarker(36.0810292, 129.3966427, "<h4>궁물촌</h4>", StorePage1Page); //궁물촌
    this.addMarker(36.0815812, 129.3960486, "<h4>논스탠다드</h4>", StorePage1Page); //논스탠다드
    this.addMarker(36.0805828, 129.4001778, "<h4>대원 도토리 수제비</h4>", StorePage1Page); //대원 도토리 수제비
    this.addMarker(36.0800696, 129.3978667, "<h4>라라코스트</h4>", StorePage1Page); //라라코스트
    this.addMarker(36.079668, 129.3972152, "<h4>서가앤쿡</h4>", StorePage1Page);  //서가앤쿡
    this.addMarker(36.0812453, 129.4017762, "<h4>시골국밥</h4>", StorePage1Page); //시골국밥
    this.addMarker(36.0859756, 129.3970781, "<h4>용강국밥</h4>", StorePage1Page); //용강국밥
    this.addMarker(36.0805675, 129.3998909, "<h4>이동근 선산곱창 막창</h4>", StorePage1Page); //이동근 선산곱창 막창
    this.addMarker(36.081606, 129.3992085, "<h4>전주명가 콩나물국밥</h4>", StorePage1Page);  //전주명가 콩나물국밥
    this.addMarker(36.08097, 129.3975353, "<h4>정용중화</h4>", StorePage1Page);   //정용중화
    this.addMarker(36.0819914, 129.3959307, "<h4>쿠킹빌리지 양식당</h4>", StorePage1Page); //쿠킹빌리지 양식당
    this.addMarker(36.0836295, 129.3970606, "<h4>팔선</h4>", StorePage1Page); //팔선
    this.addMarker(36.0802828, 129.4017585, "<h4>한양곱창전골</h4>", StorePage1Page); //한양곱창전골
    this.addMarker(36.0856341, 129.3970144, "<h4>할매국밥</h4>", StorePage1Page); //할매국밥
    this.addMarker(36.0834491, 129.3892483, "<h4>호원</h4>", StorePage1Page); //호원
    this.addMarker(36.0767831, 129.3966629, "<h4>홍콩반점</h4>", StorePage1Page); //홍콩반점
  }

  loadMap() {

    let latLng = new google.maps.LatLng(36.081789, 129.398608);

    let mapOptions = {
      center: latLng,
      zoom: 16,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
  }

  addInfoWindow(marker, content) {

    let infoWindow = new google.maps.InfoWindow({
      content: content
    });

    google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker);
    });

  }

  addCenterMarker() {
    var image = 'https://lh6.googleusercontent.com/6FEX2UWkE89jTqjYZDNnV1-tTHT5PGlpFTE4-a_-XQVo_7x0HS0Z-6mloUenlbLSPK9qg5X3XxXEBK3p4-XK=w1920-h917';
    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: this.map.getCenter(),
      icon: image 
    });

    let content = "<h4>하나로</h4>";

    this.addInfoWindow(marker, content);
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

    google.maps.event.addListener(marker, 'dblclick', () => {
      this.navCtrl.push(index);
    });
    this.addInfoWindow(marker, content);
  }
}