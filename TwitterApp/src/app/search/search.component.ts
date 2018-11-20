import { Component, OnInit } from '@angular/core';
import { TwitterService } from '../twitter.service';
// import { Tweet } from './tweet';

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
    listOfTweets: string[] = [];

    constructor(private twitter: TwitterService) {    }


    checkString(input: String){
        if( input !== '' ){
            this.stringIsEmpty = false;
        }
      }


    onSearch(){
        this.statusMessage = 'User searched: ' + this.input;

        this.searchHistory.push(this.input);

        this.twitter.search(this.input).subscribe(x => {

        console.log(x.data.statuses.map(e => e.text));

        // puts x.data into tweetEntry object
        this.tweetEntry = x.data;

        // pushes each text of tweetEntry object onto listOfTweets string[]
        this.listOfTweets = this.tweetEntry.statuses.map(e=> e.text);

        // clear the input for next search
        this.input = '';
    });
  }



    ngOnInit(){

        }

}
