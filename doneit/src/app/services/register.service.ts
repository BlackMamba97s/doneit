import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user/user.model';
import { MessageCode } from '../models/response-message/message-code';
import { ResponseMessage } from '../models/response-message/response-message';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private httpClient: HttpClient) { }


  executeUserRegistration(user: User){
    return this.httpClient.post<ResponseMessage>("http://localhost:8080/register-user", user);
  }

}
