import { TestBed } from '@angular/core/testing';

import { DepositionsService } from './depositions.service';

describe(`${DepositionsService.name}`, () => {
  let service: DepositionsService;

  beforeEach(() => {
    service = new DepositionsService();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return an array of depositions', () => {
    const depositions = service.getDepositions();

    expect(depositions).toBeInstanceOf(Array);
    expect(depositions.length).toBe(3);
  });
});
