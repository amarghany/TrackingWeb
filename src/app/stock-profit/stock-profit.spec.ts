import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockProfit } from './stock-profit';

describe('StockProfit', () => {
  let component: StockProfit;
  let fixture: ComponentFixture<StockProfit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StockProfit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockProfit);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
