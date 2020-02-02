import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.css']
})
export class ChatboxComponent implements OnInit {

  private showChat = true;
  private closeChat = false;

  constructor() { }

  ngOnInit() {
  }


  handleChatBox() {
    if (this.showChat) {
      this.showChat = false;
    }
    else {
      this.showChat = true;
    }
  }

  closeChatBox() {
    this.closeChat = true
  }

  openChat(){
    this.closeChat = false;
    this.showChat = true;
  }

}
