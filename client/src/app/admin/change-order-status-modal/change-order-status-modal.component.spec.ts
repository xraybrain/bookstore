import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeOrderStatusModalComponent } from './change-order-status-modal.component';

describe('ChangeOrderStatusModalComponent', () => {
  let component: ChangeOrderStatusModalComponent;
  let fixture: ComponentFixture<ChangeOrderStatusModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeOrderStatusModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeOrderStatusModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
