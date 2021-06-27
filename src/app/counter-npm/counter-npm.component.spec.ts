import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterNpmComponent } from './counter-npm.component';

describe('CounterNpmComponent', () => {
  let component: CounterNpmComponent;
  let fixture: ComponentFixture<CounterNpmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounterNpmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterNpmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
