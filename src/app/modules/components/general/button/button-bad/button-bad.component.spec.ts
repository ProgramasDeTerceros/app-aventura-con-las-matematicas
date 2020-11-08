import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonBadComponent } from './button-bad.component';

describe('ButtonBadComponent', () => {
  let component: ButtonBadComponent;
  let fixture: ComponentFixture<ButtonBadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonBadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonBadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
