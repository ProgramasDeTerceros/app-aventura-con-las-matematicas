import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTurnComponent } from './card-turn.component';

describe('CardTurnComponent', () => {
  let component: CardTurnComponent;
  let fixture: ComponentFixture<CardTurnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardTurnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardTurnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
