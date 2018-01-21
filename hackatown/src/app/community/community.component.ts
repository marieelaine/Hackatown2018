import { Component, OnInit } from '@angular/core';
import { Users } from '../users';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.css']
})
export class CommunityComponent implements OnInit {
  users: Users;

  constructor() { }

  ngOnInit() {
    this.users = new Users();

  }

  writeValues(): void {

  }

}
