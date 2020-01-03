import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { MessageCode } from '../models/response-message/message-code';
import { ResponseMessage } from '../models/response-message/response-message';

@Injectable({
  providedIn: 'root'
})
export class LoginAuthenticationService {

  constructor(private httpClient: HttpClient) { }


  executeLoginAuthentication(user){
    return this.httpClient.post<ResponseMessage>('http://localhost:8080/authenticate-user', user)
  }

  isUserLoggedIn(){
    return sessionStorage.getItem("username")
  }

}
