import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateStockProfit } from './create-stock-profit';

describe('CreateStockProfit', () => {
  let component: CreateStockProfit;
  let fixture: ComponentFixture<CreateStockProfit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateStockProfit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateStockProfit);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
