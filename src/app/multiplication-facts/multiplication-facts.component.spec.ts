import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiplicationFactsComponent } from './multiplication-facts.component';

describe('MultiplicationFactsComponent', () => {
  let component: MultiplicationFactsComponent;
  let fixture: ComponentFixture<MultiplicationFactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiplicationFactsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiplicationFactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
