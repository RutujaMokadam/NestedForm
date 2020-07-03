import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogintoappComponent } from './logintoapp.component';

describe('LogintoappComponent', () => {
  let component: LogintoappComponent;
  let fixture: ComponentFixture<LogintoappComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogintoappComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogintoappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
