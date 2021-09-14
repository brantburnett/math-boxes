import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { DecimalGridComponent } from '../decimal-grid/decimal-grid.component';

import { DecimalGridSetComponent } from './decimal-grid-set.component';

describe('DecimalGridSetComponent', () => {
  let component: DecimalGridSetComponent;
  let fixture: ComponentFixture<DecimalGridSetComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DecimalGridSetComponent, DecimalGridComponent ]
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
