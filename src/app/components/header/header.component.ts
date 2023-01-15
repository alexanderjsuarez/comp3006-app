import { Component } from '@angular/core';
import { ConcertService } from 'src/app/services/concert.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  
  
  title: string = 'Concerto 🎶';
  constructor(private concertService: ConcertService){}

}
