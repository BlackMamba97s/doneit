import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {


  private showChat = 1

  constructor() { }

  ngOnInit() {
  }

  handleChat(){
    if(this.showChat === 1){
      this.showChat = 0
    }
    else{
      this.showChat = 1
    }
  }

}
