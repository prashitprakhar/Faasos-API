import { TestBed, inject } from '@angular/core/testing';

import { AddNewProductService } from './add-new-product.service';

describe('AddNewProductService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddNewProductService]
    });
  });

  it('should be created', inject([AddNewProductService], (service: AddNewProductService) => {
    expect(service).toBeTruthy();
  }));
});
