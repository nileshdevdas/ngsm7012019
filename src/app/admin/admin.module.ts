import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Test1Component } from './test1/test1.component';
import { Test2Component } from './test2/test2.component';
import { Test3Component } from './test3/test3.component';
import { RouterModule } from '@angular/router';
const childRoutes = [
  { path: 'admin/test', component: Test2Component }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(childRoutes)
  ],
  exports: [
    Test1Component
  ],
  declarations: [Test1Component, Test2Component, Test3Component]
})
export class AdminModule { }
