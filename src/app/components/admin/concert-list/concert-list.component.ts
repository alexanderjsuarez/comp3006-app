import { Component, OnInit } from '@angular/core';
import { ConcertService } from 'src/app/services/concert.service';
import { Concert } from 'src/app/interfaces/Concert';

@Component({
  selector: 'app-concert-list',
  templateUrl: './concert-list.component.html',
  styleUrls: ['./concert-list.component.css']
})
export class ConcertListComponent implements OnInit  {
  
  concerts: Concert[];
  constructor(private concertService: ConcertService) { }
  ngOnInit(): void {
    this.concertService.getConcerts().subscribe((concerts) => {
      this.concerts = concerts.sort((a, b) => a.date > b.date ? 1 : -1);
    });
  }

  deleteConcert(concert: Concert): void {
    this.concertService.deleteConcert(concert).subscribe(() => {
      this.concerts = this.concerts.filter((c) => c._id !== concert._id);
    });
  }

  addConcert(concert: {}) {
    this.concertService.addConcert(concert).subscribe((concert)=> {
      this.concerts.push(concert);
  });
  }

}
