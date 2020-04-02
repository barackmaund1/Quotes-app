import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotesHighlightComponent } from './quotes-highlight.component';

describe('QuotesHighlightComponent', () => {
  let component: QuotesHighlightComponent;
  let fixture: ComponentFixture<QuotesHighlightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuotesHighlightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotesHighlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
