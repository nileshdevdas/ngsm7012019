import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent } from './simple.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

describe('SimpleComponent', () => {
  let component: SimpleComponent;
  let fixture: ComponentFixture<SimpleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleComponent ],
      imports : [
        HttpClientModule,
        HttpModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Must have  A Title ' , () => {
      expect(component.title).toEqual('Hello');
  });

});
