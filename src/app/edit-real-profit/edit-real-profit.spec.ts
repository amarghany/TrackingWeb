import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRealProfit } from './edit-real-profit';

describe('EditRealProfit', () => {
  let component: EditRealProfit;
  let fixture: ComponentFixture<EditRealProfit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditRealProfit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditRealProfit);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
