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
  selector: 'page-stat1',
  templateUrl: 'stat1.html',
})
export class Stat1Page {

  @ViewChild('map') mapElement: ElementRef;
  map: GoogleMap;

  constructor(private googleMaps: GoogleMaps, public navCtrl: NavController) {

  }

  ionViewDidload() {
    this.loadMap();
  }

  loadMap() {
    let latLng = new google.maps.LatLng(36.0819, 129.4061);

    let mapOptions: GoogleMapOptions = {
      camera: {
        target: {
          lat: 36.0819,
          lng: 129.4061,
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
            lat: 43.0741904,
            lng: -89.3809802
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