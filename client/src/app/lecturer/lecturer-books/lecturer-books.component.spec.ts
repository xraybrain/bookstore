import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LecturerBooksComponent } from './lecturer-books.component';

describe('LecturerBooksComponent', () => {
  let component: LecturerBooksComponent;
  let fixture: ComponentFixture<LecturerBooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LecturerBooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LecturerBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
