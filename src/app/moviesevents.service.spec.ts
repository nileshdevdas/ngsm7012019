import { TestBed } from '@angular/core/testing';

import { MovieseventsService } from './moviesevents.service';

describe('MovieseventsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MovieseventsService = TestBed.get(MovieseventsService);
    expect(service).toBeTruthy();
  });
});
