import { TestBed, inject } from '@angular/core/testing';

import { ClanImportService } from './clan-import.service';

describe('ClanImportService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClanImportService]
    });
  });

  it('should be created', inject([ClanImportService], (service: ClanImportService) => {
    expect(service).toBeTruthy();
  }));
});
