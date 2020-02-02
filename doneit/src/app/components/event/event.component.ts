import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  eventPost: Event = new Event()

  constructor(private eventService: EventService) { }

  ngOnInit() {
  }


  handleEventCreation(){
    this.eventService.createEvent(this.eventPost).subscribe(
      response => {
        console.log(response)
      },
      error => {
        console.log(error)
      }
    )
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
