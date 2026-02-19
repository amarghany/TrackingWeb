import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditStockProfit } from './edit-stock-profit';

describe('EditStockProfit', () => {
  let component: EditStockProfit;
  let fixture: ComponentFixture<EditStockProfit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditStockProfit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditStockProfit);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
