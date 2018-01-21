import { Component, OnInit } from '@angular/core';

import { User } from '../user';
import { Users } from '../users';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})


export class MapComponent implements OnInit {
  users:Users;

  montrealLatitude: number = 45.5016889;
  montrealLongitude: number = -73.56725599999999;

  constructor() { }

  ngOnInit() {
    this.users = new Users();
  }
  

}
