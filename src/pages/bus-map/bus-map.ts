import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';



@Component({
  selector: 'page-bus-map',
  templateUrl: 'bus-map.html'
})

export class BusMapPage {

  @ViewChild('map') mapElement: ElementRef;
  map: any;

  constructor(public navCtrl: NavController) {

  }

  ionViewDidEnter() {
    this.loadMap();
  }

  loadMap() {

    let latLng = new google.maps.LatLng(36.0877, 129.3964);

    let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

    

  }
}