import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EmojiSelectorComponent } from './emoji-selector.component';

describe('EmojiSelectorComponent', () => {
  let component: EmojiSelectorComponent;
  let fixture: ComponentFixture<EmojiSelectorComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EmojiSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmojiSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
