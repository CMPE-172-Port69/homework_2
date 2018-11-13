import { Component, OnInit } from '@angular/core';
import { TwitterService } from '../twitter.service';

@Component({
  selector: 'app-update-status',
  templateUrl: './update-status.component.html',
  styleUrls: ['./update-status.component.css']
})
export class UpdateStatusComponent implements OnInit {

  input: string = '';
  stringIsEmpty: boolean = true;

  constructor(private twitter: TwitterService) { }

  checkString(input: String){
      if( input !== '' ){
          this.stringIsEmpty = false;
      }
    }

    updateStatus(){

        this.twitter.updateStatus(this.input).subscribe();

        // clear the input for next search
        this.input = '';
  }

  ngOnInit() {
  }

}
