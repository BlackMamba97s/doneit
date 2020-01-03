import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user/user.model';
import { RegisterService } from 'src/app/services/register.service';
import { Router } from '@angular/router';
import { LoginAuthenticationService } from 'src/app/services/login-authentication.service';
import { ResponseMessage } from 'src/app/models/response-message/response-message';
import { MessageCode } from 'src/app/models/response-message/message-code';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User = new User('', '')
  responseMessage: ResponseMessage
  errorCode: number
  errorRegister: string

  constructor(private loginAuth: LoginAuthenticationService, private registerService: RegisterService, private router: Router) { }

  ngOnInit() {
    if (this.loginAuth.isUserLoggedIn()) {
      this.router.navigate(['home']);
    }
  }

  handleRegister() {
    this.registerService.executeUserRegistration(this.user).subscribe(
      data => {
        this.handleResponse(data)
      },
      error => {
        this.errorRegister = 'Errore durante la fase di registrazione, ci scusiamo per il disagio.'
      }
    )
  }

  handleResponse(data) {
    this.responseMessage = data;
    this.errorCode = this.responseMessage.messageCode;
    switch (this.errorCode) {
      case MessageCode.SUCCESSFUL_REGISTER:
        console.log("Registrazione effettuata con successo");
        this.router.navigate(['login'])
        break
    }
  }

}
