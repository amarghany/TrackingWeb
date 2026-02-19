import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCryptoProfit } from './edit-crypto-profit';

describe('EditCryptoProfit', () => {
  let component: EditCryptoProfit;
  let fixture: ComponentFixture<EditCryptoProfit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditCryptoProfit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditCryptoProfit);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
