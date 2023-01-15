import { Injectable } from '@angular/core';
import { Concert } from '../interfaces/Concert';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConcertService {
  private url: string = "https://comp3006-api.herokuapp.com/api/concerts";
  
  constructor(private http:HttpClient) { }

  getConcerts(): Observable<Concert[]> {
    return this.http.get<Concert[]>(this.url)
  }

  deleteConcert(concert: Concert): Observable<Concert> {

    return this.http.delete<Concert>(this.url + "/" + concert._id)
  }

  addConcert(concert: {}): Observable<Concert> {
    return this.http.post<Concert>(this.url, concert);
  }
  
}
