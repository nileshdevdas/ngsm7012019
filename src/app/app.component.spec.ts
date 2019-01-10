import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpModule, Http} from '@angular/http';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { Test1Component } from './admin/test1/test1.component';
import {RouterModule, Router} from '@angular/router';
import { MovielistsComponent } from './movielists/movielists.component';
import { MoviewreviewsComponent } from './moviewreviews/moviewreviews.component';
import { HomepageComponent } from './homepage/homepage.component';
import { TrailersComponent } from './trailers/trailers.component';
import { HttpClientModule } from '@angular/common/http';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        NavbarComponent,
        MovielistsComponent,
        MoviewreviewsComponent,
        FooterComponent,
        Test1Component
      ],
      imports: [
        RouterTestingModule,
        HttpModule,
        RouterModule,
        HttpClientModule
      ],
      providers: [
        HttpModule
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'imdbtest'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('imdbtest');
  });

});
