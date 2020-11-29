import { TestBed } from '@angular/core/testing';

import { GeneratorCardsService } from './generator-cards.service';

describe('GeneratorCardsService', () => {
  let service: GeneratorCardsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeneratorCardsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
