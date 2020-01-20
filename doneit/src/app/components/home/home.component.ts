import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegisterService } from 'src/app/services/register.service';
import { LoginAuthenticationService } from 'src/app/services/login-authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private display = 0;

  constructor(private httpClient: HttpClient, private loginAuth: LoginAuthenticationService) { }

  ngOnInit() {
    this.verifyIfFirstLogin()
  }

  verifyIfFirstLogin(){
    this.loginAuth.checkIfFirstLoginRequest().subscribe(
      result => {
        console.log(result);
      },
      error => {

      }
    )
  }

}
