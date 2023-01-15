import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Concert } from 'src/app/interfaces/Concert';

@Component({
  selector: 'app-add-concert',
  templateUrl: './add-concert.component.html',
  styleUrls: ['./add-concert.component.css']
})
export class AddConcertComponent implements OnInit{
  @Output() onAddConcert: EventEmitter<{}> = new EventEmitter();
  
  name: string;
  location: string;
  genre: string;
  date: string;
  twitterHandle: string;
  
  ngOnInit(): void {
  }

  onSubmit(): void {
    if(!this.name || !this.location || !this.genre || !this.date || !this.twitterHandle){
      alert("Fields cannot be blank!");
      return;
    }
    
    const newConcert = {
      name: this.name,
      location: this.location,
      genre: this.genre,
      date: this.date,
      twitterHandle: this.twitterHandle
    };

    this.onAddConcert.emit(newConcert);

    this.name = "";
    this.location = "";
    this.genre = "";
    this.date = "";
    this.twitterHandle = "";
  }

}
