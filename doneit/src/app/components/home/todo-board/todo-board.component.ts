import { Component, OnInit } from '@angular/core';
import { Todo } from '../../todo/todo.component';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-board',
  templateUrl: './todo-board.component.html',
  styleUrls: ['./todo-board.component.css']
})
export class TodoBoardComponent implements OnInit {

  todoList: Todo[];

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.showAllTodo()
  }

  showAllTodo() {
    this.todoService.getAllTodo().subscribe(
      response => {
        this.todoList = response;
        console.log(response)
      },
      error => {
        console.log(error)
      }
    )
  }

}
