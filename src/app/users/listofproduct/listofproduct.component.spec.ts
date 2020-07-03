import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListofproductComponent } from './listofproduct.component';

describe('ListofproductComponent', () => {
  let component: ListofproductComponent;
  let fixture: ComponentFixture<ListofproductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListofproductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListofproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
