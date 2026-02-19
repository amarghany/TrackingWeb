import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditGoldProfit } from './edit-gold-profit';

describe('EditGoldProfit', () => {
  let component: EditGoldProfit;
  let fixture: ComponentFixture<EditGoldProfit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditGoldProfit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditGoldProfit);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
