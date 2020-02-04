import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Event } from '../components/event/event.component';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.css']
})
export class EventCardComponent implements OnInit {

  @Input() eventPost: Event
  @Output() messageEvent = new EventEmitter<string>()

  constructor() { }

  ngOnInit() {
    console.log(this.eventPost)
  }

  

  openMap(){
    console.log("e mandalo sto cazzo di messaggio porco il dio ")
    this.messageEvent.emit(this.eventPost.placeId)
  }

}
