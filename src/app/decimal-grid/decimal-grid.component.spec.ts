import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DecimalGridComponent } from './decimal-grid.component';

describe('DecimalGridComponent', () => {
  let component: DecimalGridComponent;
  let fixture: ComponentFixture<DecimalGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DecimalGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DecimalGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
