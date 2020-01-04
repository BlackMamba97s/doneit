import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  private todo: Todo = new Todo()

  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }


  handleTodoCreation() {
    this.todoService.createTodo(this.todo).subscribe(
      response => {
        console.log(response)
      },
      error => {

      }
    )
  }

}


export class Todo {

  id: number
  title: string
  description: string
  publishedDate: Date

  constructor() { }

}