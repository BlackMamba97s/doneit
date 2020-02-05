import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../constants/constant';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  eventCreationResponse = -1;
  eventResponseMessage: BehaviorSubject<number>;

  constructor(private httpCLient: HttpClient) {
    this.eventResponseMessage = new BehaviorSubject(this.eventCreationResponse)
   }

   setEventCreationResponse(messageCode){
     this.eventResponseMessage.next(messageCode)
   }

  createEvent(event){
    return this.httpCLient.post<any>(`${API_URL}/create-event`,event)
  }

  getActiveEvents(){
    return this.httpCLient.get<Event[]>(`${API_URL}/active-event-list`)
  }

  getEventListByUsername(username){
    return this.httpCLient.get<Event[]>(`${API_URL}/event-list/users/`+username)
  }
  
  handleAddressChange($event){
    console.log($event)
  }
}
