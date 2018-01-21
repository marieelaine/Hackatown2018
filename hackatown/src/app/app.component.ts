import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
})

export class AppComponent {
  user_data: any;
  constructor() { }

  ngOnInit() {
    this.user_data = require('./data_user.json');
    console.log(this.user_data);
  }
}