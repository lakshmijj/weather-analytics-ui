import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-analytics-map',
  templateUrl: './analytics-map.component.html',
  styleUrls: ['./analytics-map.component.scss']
})
export class AnalyticsMapComponent implements OnInit {
  lat: number = -23.8779431;
  lng: number = -49.8046873;
  zoom: number = 2;
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.filters$.subscribe(values => {
      this.lat = values.latitude;
      this.lng = values.longitude;
    });
  }

}
