import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class LoginAuthenticationService {

  constructor(private httpClient: HttpClient) { }


  executeLoginAuthentication(user){
    return this.httpClient.post<any>('http://localhost:8080/authenticate-user', user)
  }

  isUserLoggedIn(){
    return sessionStorage.getItem("username")
  }

}
