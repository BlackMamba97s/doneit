import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user/user.model';
import { Category } from 'src/app/models/category/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {


  private categories: Category[]
  private todo: Todo = new Todo()
  private todoId: number
  


  constructor(private todoService: TodoService, private categoryService: CategoryService,private activatedRoute: ActivatedRoute, private router: Router) { }


  ngOnInit() {
    this.todoId = this.activatedRoute.snapshot.params['id']
    if(this.todoId){ // se todoId è undefined vuol dire che si vuole creare un TODO
      this.retrieveTodo(this.todoId)
    }
    this.getCategories()
  }


  handleTodoCreation() {
    this.todoService.createTodo(this.todo).subscribe(
      response => {
        console.log(response)
      },
      error => {
        console.log(error)
      }
    )
    console.log(this.todo)
    
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

  getCategories(){
    this.categoryService.getAllCategories().subscribe(
      response =>{
        this.categories = response
        console.log(response)
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
  expirationDate: Date
  expired: boolean

  user: User
  category: Category


  constructor() { }

}