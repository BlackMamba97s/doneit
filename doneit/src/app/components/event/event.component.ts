import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event.service';
import { MessageCode } from 'src/app/models/response-message/message-code';
import { NgbTypeaheadConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  eventPost: Event = new Event()
  eventResponseMessage: number
  constructor(private eventService: EventService) {
  }

  ngOnInit() {
    this.eventService.eventResponseMessage.subscribe( e =>{
      this.eventResponseMessage = e
    });
  }


  handleEventCreation(){
    
    this.eventService.createEvent(this.eventPost).subscribe(
      response => {
        console.log(response)
        this.eventService.setEventCreationResponse(MessageCode.EVENT_CREATED)
      },
      error => {
        console.log(error)
      }
    )
    
    
  }

  handleAddressChange($event){
    this.eventPost.place = $event.formatted_address
   }
   
}

export class Event{
  id: number
  title: string
  description: string
  date: Date
  place: string

  constructor(){}
}
