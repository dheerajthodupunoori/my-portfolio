import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualWorkExperienceComponent } from './individual-work-experience.component';

describe('IndividualWorkExperienceComponent', () => {
  let component: IndividualWorkExperienceComponent;
  let fixture: ComponentFixture<IndividualWorkExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndividualWorkExperienceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualWorkExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
