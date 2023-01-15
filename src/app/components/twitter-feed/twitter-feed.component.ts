import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twitter-feed',
  templateUrl: './twitter-feed.component.html',
  styleUrls: ['./twitter-feed.component.css']
})
export class TwitterFeedComponent implements OnInit {
  twitterHandle: string;
  
  constructor() {}
  
  ngOnInit() {
    
  }
}
