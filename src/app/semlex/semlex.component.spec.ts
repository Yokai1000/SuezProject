import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SemlexComponent } from './semlex.component';

describe('SemlexComponent', () => {
  let component: SemlexComponent;
  let fixture: ComponentFixture<SemlexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SemlexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SemlexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
