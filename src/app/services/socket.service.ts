import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { io } from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  public message$: BehaviorSubject<string> = new BehaviorSubject('');
  public connection$: BehaviorSubject<string> = new BehaviorSubject('');
  constructor() { }
  
  private socket = io('https://comp3006-api.herokuapp.com');

  public onUserJoined = () => {
    this.socket.on('user joined', (username) =>{
      this.connection$.next(`${this.timeStamp()} ${username} has joined the room!`);
    });
    return this.connection$.asObservable();
  };
  
  public onNewMessage = () => {
    this.socket.on('new message', (data) => {
      this.message$.next(`${this.timeStamp()} ${data.username}: ${data.message}`);
    });
    return this.message$.asObservable();
  };

  public onDisconnect = () => {
    this.socket.on('user left', (username) =>{
      this.connection$.next(`${this.timeStamp()} ${username} has disconnected! :(`);
    });
    return this.connection$.asObservable();
  };

	public sendMessage(message: string) {
    this.socket.emit('new message', message);
  }

  public sendChooseName(username: string) {
    this.socket.emit('choose name', username);
  }

  private timeStamp() : string {
    let date: Date = new Date();
    let timeStamp: string =`[${date.toTimeString().split(' ')[0]}]`
    console.log(timeStamp);
    return timeStamp;
  }
}
