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
  confirmPassword = ''
  responseMessage: ResponseMessage
  errorCode: number
  errorRegister = ''

  constructor(private loginAuth: LoginAuthenticationService, private registerService: RegisterService, private router: Router) { }

  ngOnInit() {
    if (this.loginAuth.isUserLoggedIn()) {
      this.router.navigate(['home']);
    }
  }

  handleRegister() {
    if (this.errorRegister != '') {
      this.errorRegister = '';
    }
    if (this.validate()) {
      this.registerService.executeUserRegistration(this.user).subscribe(
        data => {
          this.handleResponse(data)
        },
        error => {
          this.errorRegister = 'Errore durante la fase di registrazione, ci scusiamo per il disagio.'
        }
      )
    }
    else {

    }

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

  validate() {
    return this.validateField(this.user.getName(), "Nome non valido", /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g)
      && this.validateField(this.user.getSurname(), "Cognome non valido", /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g)
      && this.validateField(this.user.getUsername(), "Username non valido", /^[a-zA-Z0-9.\-_$@*!]{2,30}$/)
      && this.validateField(this.user.getEmail(), "Email non valida", /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
      && this.validateField(this.user.getPassword(), "Password non valida", /^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=[^0-9]*[0-9]).{8,}$/)
      && this.arePasswordsMatching()
  }


  validateField(field, message, regex) {

    if (!(field.match(regex))) {
      this.errorRegister += message + "<br>"
      return false;
    }
    return true;
  }

  arePasswordsMatching() {
    if (!(this.user.getPassword() === this.confirmPassword)) {
      console.log(this.user.getPassword());
      console.log(this.confirmPassword)
      this.errorRegister += "Le password non corrispondono" + "<br>"
      return false
    }
    return true
  }


}
