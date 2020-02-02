import { Component, OnInit } from '@angular/core';
import { EventService } from '../services/event.service';

@Component({
  selector: 'app-event-board',
  templateUrl: './event-board.component.html',
  styleUrls: ['./event-board.component.css']
})
export class EventBoardComponent implements OnInit {

  eventList: Event[]

  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.getActiveEvents()
  }

  getActiveEvents(){
    this.eventService.getActiveEvents().subscribe(
      response => {
        console.log(response)
        this.eventList = response
      },
      error => {
        console.log(error)
      }
    )
  }

}
