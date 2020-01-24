import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../todo/todo.component';
import { TodoService } from 'src/app/services/todo.service';
import { ɵAnimationGroupPlayer } from '@angular/animations';

@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.css']
})
export class TodoCardComponent implements OnInit {

  @Input() todo: Todo
  private showCorrectBody = 1
  
  
  constructor(private todoService: TodoService) {
  }

  ngOnInit() {
    
  }


  handleTodoProposal() {
    this.todoService.sendProposal(this.todo).subscribe(
      response => {
        console.log(response)
      },
      error => {

      }
    )
  }

  changeBody(numBody) {
    this.showCorrectBody = numBody
  }

  alreadyProposed(){
    if(this.todo.proposals.length != 0){
      for(let proposal of this.todo.proposals){
        if(proposal.user.username == sessionStorage.getItem("username")){
          return true;
        }
      }
      return false;
    }else{
      return false;
    }
  }

  getProponentsNumber(){
    return this.todo.proposals.length
  }


}
