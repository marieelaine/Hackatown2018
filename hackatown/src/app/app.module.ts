import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { AgmCoreModule } from '@agm/core';
import { MapComponent } from './map/map.component';
import { UserComponent } from './user/user.component';
import { AppRoutingModule } from './/app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDY4X_beiW7jijC-n0kCBpYMBzmks1tMuA'
    }),
    AppRoutingModule
  ],
  providers: [],
  declarations: [ AppComponent, MapComponent, UserComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
