import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListImageMfccComponent } from './list-image-mfcc.component';

describe('ListImageMfccComponent', () => {
  let component: ListImageMfccComponent;
  let fixture: ComponentFixture<ListImageMfccComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListImageMfccComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListImageMfccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
