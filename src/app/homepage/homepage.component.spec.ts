import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageComponent } from './homepage.component';
import { MovielistsComponent } from '../movielists/movielists.component';
import { Movie } from '../movielists/movie';
import { MoviewreviewsComponent } from '../moviewreviews/moviewreviews.component';
import { TrailersComponent } from '../trailers/trailers.component';
import { Test1Component } from '../admin/test1/test1.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

describe('HomepageComponent', () => {
  let component: HomepageComponent;
  let fixture: ComponentFixture<HomepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomepageComponent,
        MovielistsComponent,
        MoviewreviewsComponent,
        TrailersComponent,
        Test1Component
      ], 
      imports : [
        RouterTestingModule,
        HttpClientModule,
        HttpModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
