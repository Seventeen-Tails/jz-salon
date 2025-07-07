import { TestBed } from '@angular/core/testing';

import { LocalDao } from './local-dao';

describe('LocalDao', () => {
  let service: LocalDao;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalDao);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
