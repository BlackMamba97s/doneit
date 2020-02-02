import { Component, OnInit } from '@angular/core';
import { PersonalCard } from '../models/personal-card/personal-card';
import { User } from '../models/user/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.css']
})
export class ChatboxComponent implements OnInit {

  private showChat = false;
  private closeChat = true;
  private personalCards: PersonalCard[]

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getAllUsers().subscribe(
      result => {
        this.personalCards = result;
        console.log(this.personalCards)
      }
    )
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

  openChat() {
    this.closeChat = false;
    this.showChat = true;
  }

}
