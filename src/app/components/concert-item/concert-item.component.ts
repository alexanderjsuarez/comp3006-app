import { Component, Input } from '@angular/core';
import { Concert } from 'src/app/interfaces/Concert';

@Component({
  selector: 'app-concert-item',
  templateUrl: './concert-item.component.html',
  styleUrls: ['./concert-item.component.css']
})
export class ConcertItemComponent {
  @Input() concert: Concert;
  @Input() dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

  constructor() {}

  onClick(): void {
    let div = document.getElementById('twt');
    if(div) div.innerHTML = "";
    (<any>window).twttr.widgets.createTimeline(
      {
        sourceType: 'profile',
        screenName: this.concert.twitterHandle
      },
      document.getElementById('twt'),
      {
        width: '500',
        height: '1300',
      });
  }
}
