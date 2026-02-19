import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePlatinumProfit } from './create-platinum-profit';

describe('CreatePlatinumProfit', () => {
  let component: CreatePlatinumProfit;
  let fixture: ComponentFixture<CreatePlatinumProfit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatePlatinumProfit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatePlatinumProfit);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
