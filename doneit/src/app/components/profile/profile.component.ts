import { Component, OnInit } from '@angular/core';
import { PersonalCard } from 'src/app/models/personal-card/personal-card';
import { UserService } from 'src/app/services/user.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {


  private personalCard = new PersonalCard()


  constructor(private userService: UserService,
    private _sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.userService.getMyPersonalCard().subscribe(
      result => {
        this.personalCard = result;
      }
    )
  }


}
