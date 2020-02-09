import { Component, OnInit, ViewChild } from '@angular/core';
import { EventService } from 'src/app/services/event.service';
import { MessageCode } from 'src/app/models/response-message/message-code';
import { NgbTypeaheadConfig } from '@ng-bootstrap/ng-bootstrap';
import { User } from 'src/app/models/user/user.model';
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NgForm } from '@angular/forms';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete';
import { EventPartecipation } from 'src/app/models/eventPartecipations';
import { TOUCH_BUFFER_MS } from '@angular/cdk/a11y';


@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  eventPost: Event = new Event()
  eventResponseMessage: number
  selectedPlace: string
  
  constructor(private eventService: EventService) {
  }

  ngOnInit() {
    this.eventService.eventResponseMessage.subscribe(e => {
      this.eventResponseMessage = e
    });
  }


  handleEventCreation() {
    if(this.checkFields() && this.isPlaceCorrect()){
      this.eventService.createEvent(this.eventPost).subscribe(
        response => {
          console.log(response)
          this.eventService.setEventCreationResponse(MessageCode.EVENT_CREATED)
          this.cleanFields()
        },
        error => {
          console.log(error)
        }
      )
      
    }
  }

  handleAddressChange($event) {
    this.selectedPlace = $event.formatted_address
    this.eventPost.place = $event.formatted_address
    this.eventPost.placeId = $event.place_id
  }


   cleanFields(){
    this.eventPost = new Event()
    this.selectedPlace = null
   }

   checkFields(){
     if(!this.eventPost.title){
       this.eventPost.title = ''
       return false
     }

     if(!this.eventPost.description){
       this.eventPost.description = ''
       return false
     }

     if(!this.eventPost.date){
       this.eventPost.date = new Date("")
       return false
     }

     if(!this.eventPost.place){
       this.eventPost.place = ''
       return false
     }

     return true
   }

   isPlaceCorrect(){
     return this.selectedPlace == this.eventPost.place
   }

   checkDate(){
     if(this.eventPost.date){
       if(this.eventPost.date.toString() === "Invalid Date"){
         return true
       }else{
         return false
       }
     }else{
       return false
     }
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
  eventPartecipations: EventPartecipation[]

  constructor() { }
}
