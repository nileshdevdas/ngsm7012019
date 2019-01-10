import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovielistsComponent } from './movielists.component';

describe('MovielistsComponent', () => {
  let component: MovielistsComponent;
  let fixture: ComponentFixture<MovielistsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovielistsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovielistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
