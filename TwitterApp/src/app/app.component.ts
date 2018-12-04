import { Component, OnInit } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';
import { Router } from "@angular/router";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {

  title = 'TwitterApp';
  isAuthenticated: boolean;

  constructor(private router: Router, public oktaAuth: OktaAuthService) {
    this.oktaAuth.$authenticationState.subscribe(isAuthenticated => this.isAuthenticated = isAuthenticated)
  }


  async ngOnInit() {

  this.isAuthenticated = await this.oktaAuth.isAuthenticated();
  console.log('is authenticated: ' + this.isAuthenticated);
  }
  login() {
    this.oktaAuth.loginRedirect();
  }
  logout() {
    this.oktaAuth.logout('/');
  }
}
