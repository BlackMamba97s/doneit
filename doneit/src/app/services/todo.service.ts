import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../constants/constant';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private httpClient: HttpClient) { }


  createTodo(todo){
    return this.httpClient.post(`${API_URL}/create-todo`, todo)
  }
}
