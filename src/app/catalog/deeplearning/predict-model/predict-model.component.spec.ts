import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PredictModelComponent } from './predict-model.component';

describe('PredictModelComponent', () => {
  let component: PredictModelComponent;
  let fixture: ComponentFixture<PredictModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PredictModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PredictModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
