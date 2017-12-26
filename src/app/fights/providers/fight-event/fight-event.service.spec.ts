import { TestBed, inject } from '@angular/core/testing';

import { FightEventService } from './fight-event.service';

describe('FightEventService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FightEventService]
    });
  });

  it('should be created', inject([FightEventService], (service: FightEventService) => {
    expect(service).toBeTruthy();
  }));
});
