import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalInfoSongComponent } from './total-info-song.component';

describe('TotalInfoSongComponent', () => {
  let component: TotalInfoSongComponent;
  let fixture: ComponentFixture<TotalInfoSongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalInfoSongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalInfoSongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
