import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartRoleUserComponent } from './chart-role-user.component';

describe('ChartRoleUserComponent', () => {
  let component: ChartRoleUserComponent;
  let fixture: ComponentFixture<ChartRoleUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartRoleUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartRoleUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
