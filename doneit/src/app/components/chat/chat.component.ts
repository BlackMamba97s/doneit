import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user/user.model';
import { UserService } from 'src/app/services/user.service';
import { PersonalCard } from 'src/app/models/personal-card/personal-card';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  private personalCards: PersonalCard[]
  private imagePath: string[]
  private messageIncoming;
  private messageSent;
  private currentUser = new PersonalCard()
  private contactsNumber = 0
  private index = -1;
  private showInboxMessage = false;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getAllUsers().subscribe(
      result => {
        this.personalCards = result
        this.contactsNumber = this.personalCards.length
      }
    )
  }

  getMessage(personalCard, index) {
    this.showInboxMessage = true;
    this.index = index
    this.currentUser = personalCard;
    console.log(index)
  }

  isActive(i) {
    return this.index === i;
  }


}
