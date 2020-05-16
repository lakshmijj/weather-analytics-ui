import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-analytics-list',
  templateUrl: './analytics-list.component.html',
  styleUrls: ['./analytics-list.component.scss']
})
export class AnalyticsListComponent implements OnInit {
  timestampDuration = [1589646532, 1558024132, 1526488132, 1494952132,1463416132, 1431793732];
  dailyWeather = [];
  
  constructor(private apiService: ApiService) { }

  ngOnInit() {
     this.apiService.filters$.subscribe(values => {
       this.dailyWeather = []
       if(values.latitude && values.logitude){    
         if(!values.duration) values.duration = 0;           
         this.searchWeather(values.latitude, values.logitude, values.duration);
       }
     })
  }

  searchWeather(lat, long, duration){  
    console.log(lat);
    console.log(long);
    console.log(duration);
    this.timestampDuration.forEach((val, k) => {
      if(k <= duration){
        this.apiService.getWeatherUpdate(lat, long, val).subscribe(response => {
          this.dailyWeather.push(response['daily']['data']);
        });
      }
    });
    console.log(this.dailyWeather);
  }

}
