import { TestBed } from '@angular/core/testing';

import { ApiService } from './api.service';

describe('ApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiService = TestBed.get(ApiService);
    //expect(service).toBeTruthy();
  });
  it('#getWeatherUpdate should return real value', () => {
    const service: ApiService = TestBed.get(ApiService);
    expect(service.getWeatherUpdate('32','-42', 1431793732)).toBeTruthy();
  });
});
