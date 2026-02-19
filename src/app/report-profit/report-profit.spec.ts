import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportProfit } from './report-profit';

describe('ReportProfit', () => {
  let component: ReportProfit;
  let fixture: ComponentFixture<ReportProfit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportProfit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportProfit);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
