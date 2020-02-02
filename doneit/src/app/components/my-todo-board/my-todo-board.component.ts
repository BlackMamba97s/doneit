import { Component, OnInit, ViewChild } from '@angular/core';
import { Todo } from '../todo/todo.component';
import { TodoService } from 'src/app/services/todo.service';
import { TodoCardComponent } from '../todo-card/todo-card.component';

@Component({
  selector: 'app-my-todo-board',
  templateUrl: './my-todo-board.component.html',
  styleUrls: ['./my-todo-board.component.css']
})
export class MyTodoBoardComponent implements OnInit {

  todoList: Todo[];
  currentTodo: Todo;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.getMyTodoList('published')
  }

  getMyTodoList(state) {
    this.todoService.getMyTodoList(state).subscribe(
      response => {
        console.log(response);
        this.todoList = response
      },
      error => {
        console.log(error)
      }

    )
  }

  receiveMessage($event) {
    this.currentTodo = $event
    console.log($event)
  }

  closeModal() {
    this.currentTodo = null;
  }

  acceptProposal(proposal) {
    console.log("proposal id: " + proposal.id)
    this.todoService.acceptProposal(this.currentTodo, proposal.id).subscribe(
      response => {
        console.log(response)
      },
      error => {
        console.log(error)
      }
    )
  }

  refuseProposal(proposal) {
    console.log("rifiuto la proposta:" + proposal.id)
    this.todoService.refuseProposal(proposal.id).subscribe(
      response => {
        console.log(response)
        this.updateProposal(proposal, "refused")
      },
      error => {
        console.log(error)
      }
    )
  }

  undoRefuse(proposal) {
    this.todoService.undoRefuseProposal(proposal.id).subscribe(
      response => {
        console.log(response)
        this.updateProposal(proposal, "in progress")
      },
      error => {
        console.log(error)
      }
    )
    console.log("annullo la proposta:" + proposal.id)
  }

  updateProposal(proposal, newState) {
    let i = this.currentTodo.proposals.indexOf(proposal);
    this.currentTodo.proposals[i].state = newState
  }

}
