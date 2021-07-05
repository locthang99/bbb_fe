import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupChangePwdComponent } from './popup-change-pwd.component';

describe('PopupChangePwdComponent', () => {
  let component: PopupChangePwdComponent;
  let fixture: ComponentFixture<PopupChangePwdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupChangePwdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupChangePwdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
