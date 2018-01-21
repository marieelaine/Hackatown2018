import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.css']
})
export class AchievementsComponent implements OnInit {
  achievement = {
    id: 1,
    title: 'Être le meilleur',
    resume: 'Lorem ipsum dolor sit amet',
    description: 'Lorem ipsum ddolor sit amet dolor sit amet',
    completed: false
  };

  constructor() { }

  ngOnInit() {
  }

}
