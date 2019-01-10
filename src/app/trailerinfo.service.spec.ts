import { TestBed } from '@angular/core/testing';

import { TrailerinfoService } from './trailerinfo.service';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

describe('TrailerinfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpModule,
      HttpClientModule
    ]

  }));

  it('should be created', () => {
    const service: TrailerinfoService = TestBed.get(TrailerinfoService);
    expect(service).toBeTruthy();
  });
});
