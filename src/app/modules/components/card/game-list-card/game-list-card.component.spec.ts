import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameListCardComponent } from './game-list-card.component';

describe('GameListCardComponent', () => {
  let component: GameListCardComponent;
  let fixture: ComponentFixture<GameListCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameListCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameListCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
