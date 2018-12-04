import { Component, OnInit } from '@angular/core';
import { TwitterService } from '../twitter.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [TwitterService]
})
export class SearchComponent implements OnInit {

    input: string = '';
    stringIsEmpty: boolean = true;
    statusMessage: string = '';
    searchHistory = [];


    tweetEntry;
    //listOfTweets: string[] = [];

    listOfTweets: Object[] = [];

    constructor(private twitter: TwitterService) {    }


    checkString(input: String){
        if( input !== '' ){
            this.stringIsEmpty = false;
        }
      }


    onSearch(){
        this.statusMessage = 'User searched: ' + this.input;

        this.searchHistory.push(this.input);

        this.twitter.search(this.input).subscribe(tweetResponse => {
            console.log(JSON.stringify(tweetResponse));
            var searchedTweets = tweetResponse.data;
            this.listOfTweets = searchedTweets.statuses.map(tweetEntry =>
                ({"id": tweetEntry.id_str,
                "text": tweetEntry.text,
                "screenName": tweetEntry.screen_name,
                "favorited": false,
                "retweeted": false}))
            //console.log(JSON.stringify(this.listOfTweets));
        });



        // x => {

        // console.log(x.data.statuses.map(e => e.text));

        // // puts x.data into tweetEntry object
        // this.tweetEntry = x.data;

        // // pushes each text of tweetEntry object onto listOfTweets string[]
        // this.listOfTweets = this.tweetEntry.statuses.map(e=> e.text);

        // clear the input for next search
        this.input = '';
    //});
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



    ngOnInit(){

        }

}
