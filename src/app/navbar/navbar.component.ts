import { Component, OnInit } from '@angular/core';
import { TrailerinfoService } from '../trailerinfo.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  service: TrailerinfoService;
  authService: AuthService;
  constructor(service: TrailerinfoService, authService: AuthService) {
      this.service = service;
      this.authService = authService;

  }
  handleLogin() {
      this.authService.login();
  }
  ngOnInit() {

  }

  sendEvent() {
      this.service.genreChangeEvent.next('xxxx');
  }
}
