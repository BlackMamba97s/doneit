import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { PersonalCard } from 'src/app/models/personal-card/personal-card';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  private personalCard = new PersonalCard()
  private username: string
  private show = false

  constructor(private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.username = this.route.snapshot.params['username']
    this.userService.getUserPersonalCard(this.username).subscribe(
      result => {
        if (result) {
          this.show = true
          this.personalCard = result;
          console.log(this.personalCard)
        }
        else {
          console.log("errore")

        }
      },
      error => {
        console.error("Errore nella richiesta, ci scusiamo per il disagio.")
      }
    )
  }



}
