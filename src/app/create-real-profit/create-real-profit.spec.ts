import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRealProfit } from './create-real-profit';

describe('CreateRealProfit', () => {
  let component: CreateRealProfit;
  let fixture: ComponentFixture<CreateRealProfit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateRealProfit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateRealProfit);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
