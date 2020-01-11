import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../todo/todo.component';

@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.css']
})
export class TodoCardComponent implements OnInit {

  @Input() todo: Todo
  private showCorrectBody = 1

  constructor() {
  }

  ngOnInit() {
    console.log(this.todo)
  }


  handleTodoProposal(todoId) {
    console.log(todoId)
  }

  changeBody(numBody) {
    this.showCorrectBody = numBody
  }

}
