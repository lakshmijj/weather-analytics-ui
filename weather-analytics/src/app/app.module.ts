import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AnalyticsComponent } from './components/analytics/analytics.component';
import { AnalyticsListComponent } from './components/analytics-list/analytics-list.component';
import { AnalyticsMapComponent } from './components/analytics-map/analytics-map.component';
import { APP_BASE_HREF } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AnalyticsComponent,
    AnalyticsListComponent,
    AnalyticsMapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBh4xMx11q_vGvZI4tajHEkTNSQZjbBRqw'
    })
  ],
  providers: [{
    provide: APP_BASE_HREF, useValue: '/'
  }],
  entryComponents: [DashboardComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
