import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCryptoProfit } from './create-crypto-profit';

describe('CreateCryptoProfit', () => {
  let component: CreateCryptoProfit;
  let fixture: ComponentFixture<CreateCryptoProfit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateCryptoProfit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateCryptoProfit);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
