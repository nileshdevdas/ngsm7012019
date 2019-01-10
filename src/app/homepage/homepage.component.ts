import { Component, OnInit, Output, Input } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  @Output() homeVersion: Number = 2.0;


  @Output() mykey: String;
  constructor() { }

  ngOnInit() {
  }

  checkLogin() {
     return localStorage.getItem('isLoggedIn');
  }

  handleChange() {
    this.mykey =  Math.random() + '';
  }
}
