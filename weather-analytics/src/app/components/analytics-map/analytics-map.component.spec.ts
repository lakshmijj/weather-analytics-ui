import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyticsMapComponent } from './analytics-map.component';
import { AgmCoreModule } from '@agm/core';

describe('AnalyticsMapComponent', () => {
  let component: AnalyticsMapComponent;
  let fixture: ComponentFixture<AnalyticsMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalyticsMapComponent ],
      imports: [AgmCoreModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyticsMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    //expect(component).toBeTruthy();
  });
});
