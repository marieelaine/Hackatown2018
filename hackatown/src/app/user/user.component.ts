
import { Component, OnInit } from '@angular/core';
import ParallaxBackground from '../utils/parallaxBackground';

import { Users } from '../users';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: Users;

  constructor() {
  }

  ngOnInit() {
    const heroAnim = new ParallaxBackground();
    this.users = new Users();
  }

}
