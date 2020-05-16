import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public filters$ = new BehaviorSubject<any>({});
  constructor(private http: HttpClient) { }

  filters(filters) {
    this.filters$.next(filters);
  }
  getWeatherUpdate(latitude, logitude, timestamp){
    
    const proxy = 'https://cors-anywhere.herokuapp.com/';
    const apiUrl = 'https://api.darksky.net/forecast/0b67f8f549800f7bdeccc85500ba9324';
          
    return this.http.get(`${proxy}${apiUrl}/${latitude},${logitude},${timestamp}`).pipe(
      map((response) => {
          return response;
      })
    );    
    
  }
}
