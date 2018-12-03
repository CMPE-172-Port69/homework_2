import { Component, OnInit, Input } from '@angular/core';
import { TwitterService } from '../twitter.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [TwitterService]
})
export class ProfileComponent implements OnInit {

  @Input() user: any;

  constructor(private twitter: TwitterService) { }

  ngOnInit() {
  	this.twitter.user().subscribe(x => this.user = x.data);
  }

}
