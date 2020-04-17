import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherHomeComponent } from './weather-home/weather-home.component';
import { WeatherSearchComponent } from './weather-search/weather-search.component';
import { ApiService } from './api.service';
import { HttpClientModule } from '@angular/common/http';
import { DesignAnimationComponent } from './design-animation/design-animation.component';
import { WeatherObj } from './models/weather-obj';

@NgModule({
  declarations: [
    AppComponent,
    WeatherHomeComponent,
    WeatherSearchComponent,
    DesignAnimationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
   
  ],
  providers: [ApiService], 
  bootstrap: [AppComponent]
})
export class AppModule {  }
