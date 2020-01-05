import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  private todo: Todo = new Todo()
  private todoId: number

  constructor(private todoService: TodoService, private activatedRoute: ActivatedRoute, private router: Router) { }


  ngOnInit() {
    this.todoId = this.activatedRoute.snapshot.params['id']
    if(this.todoId){ // se todoId è undefined vuol dire che si vuole creare un TODO
      this.retrieveTodo(this.todoId)
    }
    
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

  handleTodoUpdate(){
    this.todoService.updateTodo(this.todo).subscribe(
      response => {
        this.router.navigate(['home'])
      },
      error => {
        console.log(error)
      }
    )
  }

  retrieveTodo(todoId){
    this.todoService.getTodo(todoId).subscribe(
      response => {
        this.todo = response
      },
      error => {
        console.log(error)
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