import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TVHomePageComponent } from './tvhome-page.component';

describe('TVHomePageComponent', () => {
  let component: TVHomePageComponent;
  let fixture: ComponentFixture<TVHomePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TVHomePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TVHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
