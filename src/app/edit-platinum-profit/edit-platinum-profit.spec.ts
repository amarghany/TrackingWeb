import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPlatinumProfit } from './edit-platinum-profit';

describe('EditPlatinumProfit', () => {
  let component: EditPlatinumProfit;
  let fixture: ComponentFixture<EditPlatinumProfit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditPlatinumProfit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditPlatinumProfit);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
