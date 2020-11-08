import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonOkComponent } from './button-ok.component';

describe('ButtonOkComponent', () => {
  let component: ButtonOkComponent;
  let fixture: ComponentFixture<ButtonOkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonOkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonOkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
