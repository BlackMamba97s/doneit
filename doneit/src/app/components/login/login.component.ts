import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user/user.model';
import { LoginAuthenticationService } from 'src/app/services/login-authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = new User('', '');
  
  constructor(private loginAuth: LoginAuthenticationService, private router: Router) {}

  ngOnInit() {
  }

  handleLogin(){
    console.log(this.user)
    this.loginAuth.executeLoginAuthentication(this.user).subscribe(
      response => {
        console.log(response)
        this.createUserSession()
        this.router.navigate(['home'])
      },
      error => {
        alert("errore")
      }
    );
  }


  createUserSession(){
    sessionStorage.setItem("username", this.user.getUsername());
  }

}
