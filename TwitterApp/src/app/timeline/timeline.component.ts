import { Component, OnInit } from '@angular/core';
import { TwitterService } from '../twitter.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css'],
  providers: [TwitterService]
})
export class TimelineComponent implements OnInit {

  listOfTweets: Object[] = [];

  selectedItem: Object;

  constructor(private twitter: TwitterService) { }

  ngOnInit() {
    this.twitter.home("360").subscribe(tweetResponse => {
      var timeLineTweets = tweetResponse.data;
      this.listOfTweets = timeLineTweets.map(tweetEntry => 
        ({"id": tweetEntry.id_str, 
        "text": tweetEntry.full_text, 
        "favorited": false, 
        "retweeted": false}));
  
      console.log(this.listOfTweets);
    });
  }

  favoriteTweet(input) {  
    input.favorited = !input.favorited;

    console.log("favoriteTweet method called on id " + input.id);
    this.twitter.action('favorite', input.id, input.favorited)
    .subscribe(tweetResponse => console.log(tweetResponse));
  }

  retweetTweet(tweetEntry) {
    tweetEntry.retweeted = !tweetEntry.retweeted;

    console.log(tweetEntry.retweeted + "| retweetTweet method called id " + tweetEntry.id);
    this.twitter.action('retweet', tweetEntry.id, tweetEntry.retweeted)
    .subscribe(tweetResponse => console.log(tweetResponse));
  }

}
