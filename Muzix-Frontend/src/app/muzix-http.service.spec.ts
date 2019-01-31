import { TestBed } from '@angular/core/testing';

import { MuzixHttpService } from './muzix-http.service';

describe('MuzixHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MuzixHttpService = TestBed.get(MuzixHttpService);
    expect(service).toBeTruthy();
  });
});
