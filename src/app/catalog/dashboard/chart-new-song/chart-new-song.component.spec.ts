import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartNewSongComponent } from './chart-new-song.component';

describe('ChartNewSongComponent', () => {
  let component: ChartNewSongComponent;
  let fixture: ComponentFixture<ChartNewSongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartNewSongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartNewSongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
