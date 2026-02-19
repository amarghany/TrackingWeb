import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSilverProfit } from './edit-silver-profit';

describe('EditSilverProfit', () => {
  let component: EditSilverProfit;
  let fixture: ComponentFixture<EditSilverProfit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditSilverProfit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditSilverProfit);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
