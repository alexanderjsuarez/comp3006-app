import { Component, OnInit } from '@angular/core';
import { SocketService } from 'src/app/services/socket.service';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  username: string;
  usernameDisplay: string = "inline";
  messageBoxDisplay: string = "none";
  
  newMessage: string;
  messageList: string[] = [];
  sentMessageList: string[] = [];
  connectionList: string[] = [];

  constructor(private socketService: SocketService) {}
  
  ngOnInit(): void {
    this.socketService.onUserJoined().subscribe((message: string) => {
      this.connectionList.push(message);
    });

    this.socketService.onNewMessage().subscribe((message: string) => {
      this.messageList.push(message);
    });
  }

  onClick(username: string): void {
    if(username) {
      this.username = username;
      this.usernameDisplay = "none";
      this.messageBoxDisplay = "flex";
      this.socketService.sendChooseName(username);
    }
  }

  sendMessage() {
    this.sentMessageList.push(this.newMessage);
    this.socketService.sendMessage(this.newMessage);
    this.newMessage = '';
  }
}
