import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyticsListComponent } from './analytics-list.component';
import { ApiService } from 'src/app/services/api.service';
import { HttpClientModule } from '@angular/common/http';

describe('AnalyticsListComponent', () => {
  let component: AnalyticsListComponent;
  let fixture: ComponentFixture<AnalyticsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalyticsListComponent ],
      providers: [ApiService],
      imports: [HttpClientModule]  
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyticsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
