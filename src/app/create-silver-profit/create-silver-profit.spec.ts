import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSilverProfit } from './create-silver-profit';

describe('CreateSilverProfit', () => {
  let component: CreateSilverProfit;
  let fixture: ComponentFixture<CreateSilverProfit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateSilverProfit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateSilverProfit);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
