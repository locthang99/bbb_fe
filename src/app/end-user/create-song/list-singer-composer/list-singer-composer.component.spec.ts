import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSingerComposerComponent } from './list-singer-composer.component';

describe('ListSingerComposerComponent', () => {
  let component: ListSingerComposerComponent;
  let fixture: ComponentFixture<ListSingerComposerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListSingerComposerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSingerComposerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
