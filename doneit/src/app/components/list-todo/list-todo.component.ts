import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo/todo.component';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.css']
})
export class ListTodoComponent implements OnInit {

  todo: Todo[]

  constructor(private todoService: TodoService) { }

  ngOnInit() {
  
  }

  showTodo(){
    this.todoService.getTodoList().subscribe(
      response =>{
          this.todo = response
          console.log(response)
      },
      error => {
        console.log(error)
      }
    )
  }

  deleteTodo(todoId){
    this.todoService.deleteTodo(todoId).subscribe(
      response => {
        console.log(response)
        this.showTodo()
      },
      error => {
        console.log(error)
      }
    )
  }

}
