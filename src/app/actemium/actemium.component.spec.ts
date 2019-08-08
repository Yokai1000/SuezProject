import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActemiumComponent } from './actemium.component';

describe('ActemiumComponent', () => {
  let component: ActemiumComponent;
  let fixture: ComponentFixture<ActemiumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActemiumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActemiumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
