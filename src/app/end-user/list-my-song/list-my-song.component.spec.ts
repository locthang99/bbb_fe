import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMySongComponent } from './list-my-song.component';

describe('ListMySongComponent', () => {
  let component: ListMySongComponent;
  let fixture: ComponentFixture<ListMySongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListMySongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMySongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
