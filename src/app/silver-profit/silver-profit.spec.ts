import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SilverProfit } from './silver-profit';

describe('SilverProfit', () => {
  let component: SilverProfit;
  let fixture: ComponentFixture<SilverProfit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SilverProfit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SilverProfit);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
