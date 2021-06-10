import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPredictTypeComponent } from './detail-predict-type.component';

describe('DetailPredictTypeComponent', () => {
  let component: DetailPredictTypeComponent;
  let fixture: ComponentFixture<DetailPredictTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailPredictTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailPredictTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
