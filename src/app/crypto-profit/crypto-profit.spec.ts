import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptoProfit } from './crypto-profit';

describe('CryptoProfit', () => {
  let component: CryptoProfit;
  let fixture: ComponentFixture<CryptoProfit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CryptoProfit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CryptoProfit);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
