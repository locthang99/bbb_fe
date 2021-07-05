import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartReactionMySongComponent } from './chart-reaction-my-song.component';

describe('ChartReactionMySongComponent', () => {
  let component: ChartReactionMySongComponent;
  let fixture: ComponentFixture<ChartReactionMySongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartReactionMySongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartReactionMySongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
