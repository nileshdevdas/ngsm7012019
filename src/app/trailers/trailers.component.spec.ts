import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrailersComponent } from './trailers.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';

describe('TrailersComponent', () => {
  let component: TrailersComponent;
  let fixture: ComponentFixture<TrailersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrailersComponent ],
      imports : [
        HttpModule,
        HttpClientModule,
        RouterModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrailersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
