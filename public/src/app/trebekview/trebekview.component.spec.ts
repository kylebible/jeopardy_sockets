import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrebekviewComponent } from './trebekview.component';

describe('TrebekviewComponent', () => {
  let component: TrebekviewComponent;
  let fixture: ComponentFixture<TrebekviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrebekviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrebekviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
