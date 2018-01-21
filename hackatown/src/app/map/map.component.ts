import { Component, OnInit } from '@angular/core';

import { User } from '../user';
import { Users } from '../users';

declare var MarkerClusterer: any;
declare var google: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent implements OnInit {
  users: Users;
  centerLongitude = -73.56725599999999;
  centerLatitude = 45.5016889;


  constructor() { 
    const google = (window as any).google;
  }


  ngOnInit() {
    this.users = new Users();
    setTimeout(() => { 
      this.initMap();
     }, 2000);
  }

  initMap(): void {
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 3,
      center: {lat: this.centerLatitude, lng: this.centerLongitude}
    });

    for(var i = 0; i < 1 ; i++) {
      var marker = new google.maps.Marker({
        position: this.users.getUsers()[i].localisation,
        map: map
      });

      marker.addListener('click', function(e) {
        map.setZoom(3);
        map.setCenter(marker.getPosition());
      })

    }

  } //fin de initmap




}
