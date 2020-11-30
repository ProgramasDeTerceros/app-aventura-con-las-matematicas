import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Activity5Component } from './activity5.component';

describe('Activity5Component', () => {
  let component: Activity5Component;
  let fixture: ComponentFixture<Activity5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Activity5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Activity5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
