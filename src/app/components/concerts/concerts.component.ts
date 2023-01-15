import { Component, OnInit } from '@angular/core';
import { Concert } from 'src/app/interfaces/Concert';
import { ConcertService } from 'src/app/services/concert.service';

@Component({
  selector: 'app-concerts',
  templateUrl: './concerts.component.html',
  styleUrls: ['./concerts.component.css']
})
export class ConcertsComponent implements OnInit {
  p: number = 1;
  pageSize: number = 5;
  total: number = 5;
  concerts: Concert[];
  constructor(private concertService: ConcertService){}
  
  ngOnInit(): void {
    this.concertService.getConcerts().subscribe((concerts) => {
      this.concerts = concerts.sort((a, b) => a.date > b.date ? 1 : -1);
    });
  }
}

