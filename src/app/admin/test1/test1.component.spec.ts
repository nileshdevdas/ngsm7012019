import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Test1Component } from './test1.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('Test1Component', () => {
  let component: Test1Component;
  let fixture: ComponentFixture<Test1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Test1Component ],
      imports: [RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Test1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
