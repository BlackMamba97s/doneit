import { Component, OnInit, ViewChild } from '@angular/core';
import { EventService } from '../services/event.service';
import { DomSanitizer } from '@angular/platform-browser';
import { RefreshService } from '../services/refresh.service';

@Component({
  selector: 'app-event-board',
  templateUrl: './event-board.component.html',
  styleUrls: ['./event-board.component.css']
})
export class EventBoardComponent implements OnInit {

  eventList: Event[]
  isMapOpen = false
  placeId: string

  constructor(private eventService: EventService,
    private sanitizer: DomSanitizer, private refreshService: RefreshService) { }

  ngOnInit() {
    this.getActiveEvents()
    this.refreshService.eventRefreshMessage.subscribe(m => {
      this.getActiveEvents()
    })
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

  openMap($event){
    this.placeId = $event
    this.isMapOpen = true
  }

  closeMap(){
    this.isMapOpen = false
    this.placeId = null
  }

  sanitizeUrl(){
    return this.sanitizer.bypassSecurityTrustResourceUrl("https://www.google.com/maps/embed/v1/place?key=AIzaSyB1A4WVaFhrtCkvVdpx_cobXShk_RGtW-8&q=place_id:" + this.placeId)
  }

}
