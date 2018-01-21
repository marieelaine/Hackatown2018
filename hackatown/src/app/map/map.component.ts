import { Component, OnInit } from '@angular/core';

import { User } from '../user';
import { Users } from '../users';

declare var MarkerClusterer: any;
declare var google: any;
declare var TweenMax: any;

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
  }


  ngOnInit() {
    this.users = new Users();
    const google = (window as any).google;
    setTimeout(() => { 
      this.initMap();
     }, 2000);
  }

  initMap(): void {
    var infowindow = new google.maps.InfoWindow();
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 8,
      center: { lat: this.centerLatitude, lng: this.centerLongitude }
    });

    for(var i = 0; i < this.users.getUsers().length ; i++) {
      var marker = new google.maps.Marker({
        position: this.users.getUsers()[i].localisation,
        map: map
      });

      marker.addListener('click', (e) => {
        map.setCenter(e.latLng);
        let tempUser = this.users.getUser(e.latLng);
        console.log(tempUser);

        TweenMax.to(window, 0.5, { scrollTo: '.community-user-details', ease: Expo.easeOut});
      });
    }

  } // fin de initmap

}
