import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessfullcheckoutComponent } from './successfullcheckout.component';

describe('SuccessfullcheckoutComponent', () => {
  let component: SuccessfullcheckoutComponent;
  let fixture: ComponentFixture<SuccessfullcheckoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccessfullcheckoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessfullcheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
