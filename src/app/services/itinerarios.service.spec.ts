import { TestBed } from '@angular/core/testing';

import { ItinerariosService } from './itinerarios.service';

describe('ItinerariosService', () => {
  let service: ItinerariosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItinerariosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
