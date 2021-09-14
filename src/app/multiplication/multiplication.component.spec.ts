import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { DecimalGridSetComponent } from '../decimal-grid-set/decimal-grid-set.component';
import { DecimalGridComponent } from '../decimal-grid/decimal-grid.component';
import { EmojiSelectorComponent } from '../emoji-selector/emoji-selector.component';

import { MultiplicationComponent } from './multiplication.component';

describe('MultiplicationComponent', () => {
  let component: MultiplicationComponent;
  let fixture: ComponentFixture<MultiplicationComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiplicationComponent, DecimalGridSetComponent, DecimalGridComponent, EmojiSelectorComponent ],
      imports: [
        NoopAnimationsModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatFormFieldModule,
        MatInputModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
