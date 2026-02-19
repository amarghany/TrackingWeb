import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealProfit } from './real-profit';

describe('RealProfit', () => {
  let component: RealProfit;
  let fixture: ComponentFixture<RealProfit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RealProfit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RealProfit);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
