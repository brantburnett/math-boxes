import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { DecimalGridSetComponent } from '../decimal-grid-set/decimal-grid-set.component';
import { DecimalGridComponent } from '../decimal-grid/decimal-grid.component';
import { EmojiSelectorComponent } from '../emoji-selector/emoji-selector.component';

import { ThreeDigitSubtractionComponent } from './three-digit-subtraction.component';

describe('MultiplicationComponent', () => {
  let component: ThreeDigitSubtractionComponent;
  let fixture: ComponentFixture<ThreeDigitSubtractionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreeDigitSubtractionComponent, DecimalGridSetComponent, DecimalGridComponent, EmojiSelectorComponent ],
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
    fixture = TestBed.createComponent(ThreeDigitSubtractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
