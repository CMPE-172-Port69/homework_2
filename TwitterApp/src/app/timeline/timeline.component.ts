import { Component, OnInit } from '@angular/core';
import { TwitterService } from '../twitter.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css'],
  providers: [TwitterService]
})
export class TimelineComponent implements OnInit {

  listOfTweets: [];

  constructor(private twitter: TwitterService) { }

  ngOnInit() {
    this.twitter.home().subscribe(tweetResponse => {
      //var timeLineTweets = tweetResponse.data;
      this.listOfTweets = tweetResponse.data.map(tweetEntry => ({"id": tweetEntry.id_str, "text" :tweetEntry.full_text}));
  
      console.log(this.listOfTweets);
    });
  }

  favoriteTweet(input) {
    console.log("favoriteTweet method called on id " + input);
    this.twitter.action('favorite', input, true)
    .subscribe(tweetResponse => console.log(tweetResponse));
  }

  retweetTweet(input) {
    console.log("retweetTweet method called id " + input);
    this.twitter.action('retweet', input, true)
    .subscribe(tweetResponse => console.log(tweetResponse));
  }

}
