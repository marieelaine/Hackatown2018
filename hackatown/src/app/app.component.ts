import { Component } from '@angular/core';
import { Users } from './users';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
})

export class AppComponent {
  private users: Users;

  constructor() { }

  ngOnInit() {
    this.users = new Users();
  }
}