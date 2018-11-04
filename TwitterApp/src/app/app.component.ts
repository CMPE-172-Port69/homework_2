import { Component, OnInit } from '@angular/core';
import { TwitterService } from './twitter.service';
import { Tweet } from './tweet';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TwitterService]
})


export class AppComponent implements OnInit {

  title = 'TwitterApp';
  user;
  // t: Tweet = {
  //  id: 1234;
  //   text: 'bllblals';
  // };
  tweets: Tweet[] = [];
  bananaTweet;
  string: string;
  text: string[] = [];

  constructor(private twitter: TwitterService) {}

   // manually subscribe to observable returned by user()
  ngOnInit() {
  this.twitter.user().subscribe(x => this.user = x.data);


  this.twitter.search('banana').subscribe(x => { 
    console.log(x.data.statuses.map(e => e.text)); 
    this.bananaTweet = x.data;
    this.text = this.bananaTweet.statuses.map(e => e.text);
  });


  

  }
}
