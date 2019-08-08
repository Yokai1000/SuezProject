import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GsmServicesComponent } from './gsm-services.component';

describe('GsmServicesComponent', () => {
  let component: GsmServicesComponent;
  let fixture: ComponentFixture<GsmServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GsmServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GsmServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
