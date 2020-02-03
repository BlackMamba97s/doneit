import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../constants/constant';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private httpCLient: HttpClient) { }

  createEvent(event){
    return this.httpCLient.post<any>(`${API_URL}/create-event`,event)
  }

  getActiveEvents(){
    return this.httpCLient.get<Event[]>(`${API_URL}/active-event-list`)
  }

  handleAddressChange($event){
    console.log($event)
  }
}
