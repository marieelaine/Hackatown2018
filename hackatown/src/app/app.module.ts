import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { AgmCoreModule } from '@agm/core';
import { MapComponent } from './map/map.component';
import { UserComponent } from './user/user.component';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './/app-routing.module';
import { AchievementsComponent } from './achievements/achievements.component';

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
  declarations: [ AppComponent, MapComponent, UserComponent, AboutComponent, AchievementsComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
