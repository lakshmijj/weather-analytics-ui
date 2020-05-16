import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { ApiService } from 'src/app/services/api.service';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  searchForm = this.fb.group({    
    latitude: '',
      logitude: '',
      duration : ''
  });
  constructor(private fb: FormBuilder, private apiService: ApiService) { }

  ngOnInit() {
    // const filterChanges$ = this.searchForm.valueChanges
    //   .pipe(
    //     debounceTime(2500),
    //     distinctUntilChanged()
    //   );
    //   filterChanges$.subscribe((value) => {  
    //     this.apiService.filters(value);
    //   });  
  }  
  search(){

    this.apiService.filters(this.searchForm.value);
  }
}
