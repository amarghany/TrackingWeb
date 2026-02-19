import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateGoldProfit } from './create-gold-profit';

describe('CreateGoldProfit', () => {
  let component: CreateGoldProfit;
  let fixture: ComponentFixture<CreateGoldProfit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateGoldProfit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateGoldProfit);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
