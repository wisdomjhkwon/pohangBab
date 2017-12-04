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



@Component({
  selector: 'page-stat4',
  templateUrl: 'stat4.html',
})
export class Stat4Page {
  @ViewChild('map') mapElement: ElementRef;
  map: GoogleMap;

  constructor(private googleMaps: GoogleMaps, public navCtrl: NavController) {

  }

  ionViewDidload() {
    this.loadMap();
  }



  loadMap() {


    let mapOptions: GoogleMapOptions = {
      camera: {
        target: {
          lat: 36.0786,
          lng: 129.3923,
        },
        zoom: 18
      }
    }

    this.map = this.googleMaps.create('map_canvas', mapOptions);

    this.map.one(GoogleMapsEvent.MAP_READY)
      .then(() => {
        console.log('Map is ready!');

        this.map.addMarker({
          title: 'Ionic',
          icon: 'blue',
          animation: 'DROP',
          position: {
            lat: 36.0786,
            lng: 129.3923,
          }
        })
          .then(marker => {
            marker.on(GoogleMapsEvent.MARKER_CLICK)
              .subscribe(() => {
                alert('clicked');
              });
          });
      });
  }
}