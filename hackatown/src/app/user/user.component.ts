import { User } from '../user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: User = {
    id: 1,
    name: 'Simon Marcoux',
    usePerDay: 24.5,
    totalUsePerMonth: 680,
  };

  constructor() {
    console.log('user page');
  }

  ngOnInit() {
  }

}
