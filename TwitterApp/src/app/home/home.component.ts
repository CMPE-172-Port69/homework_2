import { Component, OnInit } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';
import { TwitterService } from '../twitter.service';
import { Router } from "@angular/router";

interface ResourceServerExample {
	label: String;
	url: String;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [TwitterService]
})
export class HomeComponent implements OnInit {
	resourceServerExamples: Array<ResourceServerExample>;
	userName: string;
	isAuthenticated: boolean;
	user;

  constructor(private twitter: TwitterService, public oktaAuth: OktaAuthService) { 
  	this.oktaAuth.$authenticationState.subscribe(isAuthenticated => this.isAuthenticated = isAuthenticated)
  }
  
  login() {
  	this.oktaAuth.loginRedirect()
  	if(this.isAuthenticated){
  		console.log('is authenticated');
  	}
  }

  async ngOnInit() {
this.twitter.user().subscribe(x => this.user = x.data);

  	this.isAuthenticated = await this.oktaAuth.isAuthenticated();
  	if (this.isAuthenticated) {
  		const userClaims = await this.oktaAuth.getUser();
  		this.userName = userClaims.name;
  	}
  }

}
