import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatinumProfit } from './platinum-profit';

describe('PlatinumProfit', () => {
  let component: PlatinumProfit;
  let fixture: ComponentFixture<PlatinumProfit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlatinumProfit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlatinumProfit);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
