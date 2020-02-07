import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event.service';
import { MessageCode } from 'src/app/models/response-message/message-code';
import { NgbTypeaheadConfig } from '@ng-bootstrap/ng-bootstrap';
import { User } from 'src/app/models/user/user.model';
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { EventPartecipation } from 'src/app/models/eventPartecipations';

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
    this.eventService.eventResponseMessage.subscribe(e => {
      this.eventResponseMessage = e
    });
  }


  handleEventCreation() {

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

  handleAddressChange($event) {
    this.eventPost.place = $event.formatted_address
    this.eventPost.placeId = $event.place_id
  }


}

export class Event {
  id: number
  title: string
  description: string
  date: Date
  place: string
  placeId: string
  user: User
  eventPartecipations: EventPartecipation[] = []

  constructor() { }
}
