import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleObservablesComponent } from './example-observables.component';

describe('ListComponent', () => {
  let component: ExampleObservablesComponent;
  let fixture: ComponentFixture<ExampleObservablesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ExampleObservablesComponent]
    });
    fixture = TestBed.createComponent(ExampleObservablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
