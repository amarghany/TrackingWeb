import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoldProfit } from './gold-profit';

describe('GoldProfit', () => {
  let component: GoldProfit;
  let fixture: ComponentFixture<GoldProfit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoldProfit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoldProfit);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
