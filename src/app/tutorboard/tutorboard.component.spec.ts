import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorboardComponent } from './tutorboard.component';

describe('TutorboardComponent', () => {
  let component: TutorboardComponent;
  let fixture: ComponentFixture<TutorboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TutorboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
