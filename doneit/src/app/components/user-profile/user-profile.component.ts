import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { PersonalCard } from 'src/app/models/personal-card/personal-card';
import { ActivatedRoute } from '@angular/router';
import { Followers } from 'src/app/models/followers';
import { User } from 'src/app/models/user/user.model';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  private personalCard = new PersonalCard()
  private username: string
  private show = false
  private followers: User[]
  private following: User[]
  private showCorrectPanel = 0;

  constructor(private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.username = this.route.snapshot.params['username']
    this.userService.getUserPersonalCard(this.username).subscribe(
      result => {
        if (result) {
          this.show = true
          this.personalCard = result;
        }
        else {
          console.log("errore")
        }
      },
      error => {
      }
    )
    this.userService.getUserFollowers(this.username).subscribe(
      result => {
        console.log(result)
        this.followers = result;
      }
    )
    this.userService.getUserFollowing(this.username).subscribe(
      result => {
        console.log(result)
        this.following = result;
      },
      error => {

      }
    )
  }

  followUser(username) {
    this.userService.followUser(username).subscribe(
      result => {

        console.log(result)

      },
      error => {
        console.log(error)
      }
    )
  }

  private changePanel(number) {
    this.showCorrectPanel = number;
  }


}
