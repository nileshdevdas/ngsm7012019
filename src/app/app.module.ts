import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import {AdminModule} from './admin/admin.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TrailersComponent } from './trailers/trailers.component';
import { HomepageComponent } from './homepage/homepage.component';
import { MovielistsComponent } from './movielists/movielists.component';
import { MoviewreviewsComponent } from './moviewreviews/moviewreviews.component';
import { TVHomePageComponent } from './tvhome-page/tvhome-page.component';
import { EventsHomePageComponent } from './events-home-page/events-home-page.component';
import { FooterComponent } from './footer/footer.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { Test1Component } from './admin/test1/test1.component';
import { CallbackComponent } from './callback/callback.component';
import { AlwaysAuthGuard } from './authguard';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MyInterceptor } from './interceptor';
import { TestdirDirective } from './testdir.directive';
import { SimpleComponent } from './simple/simple.component';
import { PopupDirective } from './popup.directive';

const routes = [
  { path: '', component: HomepageComponent  },
  { path: 'callback' , component: CallbackComponent},
  { path: 'movies', component: HomepageComponent  ,   canActivate: [AlwaysAuthGuard]},
  { path: 'television', component: TVHomePageComponent },
  { path: 'events', component: Test1Component },
  { path: '**', component: NotFoundComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TrailersComponent,
    HomepageComponent,
    MovielistsComponent,
    MoviewreviewsComponent,
    TVHomePageComponent,
    EventsHomePageComponent,
    FooterComponent,
    NotFoundComponent,
    CallbackComponent,
    TestdirDirective,
    SimpleComponent,
    PopupDirective
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    AdminModule,
    RouterModule.forRoot(routes),
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: MyInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
