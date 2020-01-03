import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user/user.model';
import { LoginAuthenticationService } from 'src/app/services/login-authentication.service';
import { Router } from '@angular/router';
import { MessageCode } from 'src/app/models/response-message/message-code';
import { ResponseMessage } from 'src/app/models/response-message/response-message';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = new User('', '');
  responseMessage = new ResponseMessage('', new MessageCode())
  constructor(private loginAuth: LoginAuthenticationService, private router: Router) {}

  ngOnInit() {
  }

  handleLogin(){
    console.log(this.user)
    this.loginAuth.executeLoginAuthentication(this.user).subscribe(
      response => {
        let ciao: string = response.getMessage()
        console.log(ciao)
        //console.log(this.responseMessage.getMessageCode())
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
