import { TestBed, inject } from '@angular/core/testing';

import { HttpInterCeptorService } from './http-inter-ceptor.service';

describe('HttpInterCeptorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpInterCeptorService]
    });
  });

  it('should be created', inject([HttpInterCeptorService], (service: HttpInterCeptorService) => {
    expect(service).toBeTruthy();
  }));
});
