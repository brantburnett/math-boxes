import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PyroComponent } from './pyro.component';

describe('PyroComponent', () => {
  let component: PyroComponent;
  let fixture: ComponentFixture<PyroComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PyroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PyroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
