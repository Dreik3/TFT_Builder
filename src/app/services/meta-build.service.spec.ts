import { TestBed } from '@angular/core/testing';

import { MetaBuildService } from './meta-build.service';

describe('MetaBuildServiceService', () => {
  let service: MetaBuildService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MetaBuildService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
