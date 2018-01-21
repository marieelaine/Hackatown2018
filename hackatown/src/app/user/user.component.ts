
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
<<<<<<< HEAD

=======
  user: User = {
    id: 1,
    name: 'Simon Marcoux',
    imageSrc: 'https://www.webfuel.com/blog/hero-banner.jpg',
    usePerDay: 24.5,
    totalUsePerMonth: 680,
    achievementsList: [1, 2, 3],
    localisation: {
        lat: 42.33333,
        lng: -43.3333
    }
  };
>>>>>>> 9d867d0167563785d402f2bc07b5f289ca8af2b0

  constructor() {
  }

  ngOnInit() {
  }

}
