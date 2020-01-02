import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user/user.model';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private httpClient: HttpClient) { }


  executeUserRegistration(user: User){
    return this.httpClient.post<any>("http://localhost:8080/register-user", user);
  }

}
