import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewCoursesComponent } from './interview-courses.component';

describe('InterviewCoursesComponent', () => {
  let component: InterviewCoursesComponent;
  let fixture: ComponentFixture<InterviewCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterviewCoursesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterviewCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
