import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DecimalGridSetComponent } from './decimal-grid-set.component';

describe('DecimalGridSetComponent', () => {
  let component: DecimalGridSetComponent;
  let fixture: ComponentFixture<DecimalGridSetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DecimalGridSetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DecimalGridSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
