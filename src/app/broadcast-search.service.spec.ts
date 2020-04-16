import { TestBed } from '@angular/core/testing';

import { BroadcastSearchService } from './broadcast-search.service';

describe('BroadcastSearchService', () => {
  let service: BroadcastSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BroadcastSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
