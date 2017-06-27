import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValuechoicesComponent } from './valuechoices.component';

describe('ValuechoicesComponent', () => {
  let component: ValuechoicesComponent;
  let fixture: ComponentFixture<ValuechoicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValuechoicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValuechoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
