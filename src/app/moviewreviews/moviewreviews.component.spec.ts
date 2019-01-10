import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviewreviewsComponent } from './moviewreviews.component';

describe('MoviewreviewsComponent', () => {
  let component: MoviewreviewsComponent;
  let fixture: ComponentFixture<MoviewreviewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviewreviewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviewreviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
