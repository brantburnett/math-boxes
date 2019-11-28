import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PyroComponent } from './pyro.component';

describe('PyroComponent', () => {
  let component: PyroComponent;
  let fixture: ComponentFixture<PyroComponent>;

  beforeEach(async(() => {
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
