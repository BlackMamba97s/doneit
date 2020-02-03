import { Component, OnInit, Renderer2 } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-generic-board',
  templateUrl: './generic-board.component.html',
  styleUrls: ['./generic-board.component.css']
})
export class GenericBoardComponent implements OnInit {

  activatedBoard: number = 0
  todoResponseMessage: number
  eventResponseMessage: number

  constructor(private todoService: TodoService, private eventService: EventService) { 
   
  }

  ngOnInit() {
    this.todoService.todoResponseMessage.subscribe(m => {
      this.todoResponseMessage = m
    })

    this.eventService.eventResponseMessage.subscribe(m =>{
      this.eventResponseMessage = m
    })
    
  }

  showBoard(board){
    this.activatedBoard = board
  }


  closeModal(){
    this.todoService.setTodoCreationResponse(-1)
    this.eventService.setEventCreationResponse(-1)
  }


}
