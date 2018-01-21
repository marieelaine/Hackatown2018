import { Component, OnInit } from '@angular/core';

import { Marker } from '../Marker';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})


export class MapComponent implements OnInit {
  markers: Marker[];

  montrealLatitude: number = 45.5016889;
  montrealLongitude: number = -73.56725599999999;
  lat: number = 45.5016889;
  lng: number = -73.56725599999999;

  constructor() { }

  ngOnInit() {
    this.initMarkers();
    console.log("HELLO");
  }
  
  initMarkers(): void {
    this.markers = [];

    this.markers.push(new Marker());
    this.markers.push(new Marker());
    this.markers.push(new Marker());

    this.markers[0].latitude = 45.45;
    this.markers[0].longitude = -73.56725599999999;

    this.markers[1].latitude = 45.55;
    this.markers[1].longitude = -73.56725599999999;
    
    this.markers[2].latitude = 45.5;
    this.markers[2].longitude = -73.56725599999999;
  }

}
