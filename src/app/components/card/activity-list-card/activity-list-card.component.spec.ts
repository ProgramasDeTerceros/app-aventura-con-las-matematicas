import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityListCardComponent } from './activity-list-card.component';

describe('ActivityListCardComponent', () => {
  let component: ActivityListCardComponent;
  let fixture: ComponentFixture<ActivityListCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivityListCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityListCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
