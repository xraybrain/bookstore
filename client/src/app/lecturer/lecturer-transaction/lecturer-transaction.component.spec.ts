import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LecturerTransactionComponent } from './lecturer-transaction.component';

describe('LecturerTransactionComponent', () => {
  let component: LecturerTransactionComponent;
  let fixture: ComponentFixture<LecturerTransactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LecturerTransactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LecturerTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
