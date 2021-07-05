import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyBillComponent } from './my-bill.component';

describe('MyBillComponent', () => {
  let component: MyBillComponent;
  let fixture: ComponentFixture<MyBillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyBillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
