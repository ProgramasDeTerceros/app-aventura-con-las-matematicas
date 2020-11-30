import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Activity4Component } from './activity4.component';

describe('Activity4Component', () => {
  let component: Activity4Component;
  let fixture: ComponentFixture<Activity4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Activity4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Activity4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
