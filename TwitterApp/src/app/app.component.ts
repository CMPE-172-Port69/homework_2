import { Component, OnInit } from '@angular/core';
import { TwitterService } from './twitter.service';
import { Tweet } from './tweet';
import { OktaAuthService } from '@okta/okta-angular';
import { Router } from "@angular/router";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TwitterService]
})


export class AppComponent implements OnInit {

  title = 'TwitterApp';
  user;
  tweets: Tweet[] = [];
  bananaTweet;
  string: string;
  text: string[] = [];
  isAuthenticated: boolean;

  constructor(private twitter: TwitterService, private router: Router, public oktaAuth: OktaAuthService) {
    this.oktaAuth.$authenticationState.subscribe(isAuthenticated => this.isAuthenticated = isAuthenticated)
  }


  async ngOnInit() {
  // calls user API and puts the response in user object
  this.twitter.user().subscribe(x => this.user = x.data);

  this.isAuthenticated = await this.oktaAuth.isAuthenticated();

  }
  login() {
    this.oktaAuth.loginRedirect();
  }
  logout() {
    this.oktaAuth.logout('/');
  }
}
