import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user/user.model';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User = new User('', '')

  constructor(private registerService: RegisterService) { }

  ngOnInit() {
  }

  handleRegister() {
    this.registerService.executeUserRegistration(this.user).subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log(error);
      }
    )
  }

}
