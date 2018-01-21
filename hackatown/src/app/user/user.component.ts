
import { Component, OnInit } from '@angular/core';
import ParallaxBackground from '../utils/parallaxBackground';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    const heroAnim = new ParallaxBackground();
  }

}
