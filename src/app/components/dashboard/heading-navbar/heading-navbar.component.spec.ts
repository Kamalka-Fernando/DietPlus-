import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadingNavbarComponent } from './heading-navbar.component';

describe('HeadingNavbarComponent', () => {
  let component: HeadingNavbarComponent;
  let fixture: ComponentFixture<HeadingNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadingNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadingNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
