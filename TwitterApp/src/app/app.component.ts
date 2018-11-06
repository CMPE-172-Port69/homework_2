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


  ngOnInit() {
  // calls user API and puts the response in user object
  this.twitter.user().subscribe(x => this.user = x.data);

  // // calls the search API and puts the response into text array string[]
  // this.twitter.search('banana').subscribe(x => {
  //   //prints out the json onto the console
  //   console.log(x.data.statuses.map(e=> e.text));

  //   //puts x.data into bananaTweet object
  //   this.bananaTweet = x.data;
  //   this.text = this.bananaTweet.statuses.map(e=> e.text);
  // });




  }
}
