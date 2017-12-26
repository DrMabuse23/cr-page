import { TestBed, inject } from '@angular/core/testing';

import { FightEventResolverService } from './fight-event-resolver.service';

describe('FightEventResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FightEventResolverService]
    });
  });

  it('should be created', inject([FightEventResolverService], (service: FightEventResolverService) => {
    expect(service).toBeTruthy();
  }));
});
