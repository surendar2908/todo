import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient:HttpClient) { }

  addTodoElement(newItem:any){
    return this.httpClient.post('https://jsonplaceholder.typicode.com/todos',JSON.stringify(newItem),this.httpOptions)
  }

  getTodoList(){
    return this.httpClient.get('https://jsonplaceholder.typicode.com/todos',this.httpOptions)
  }

  removeTodoElement(id:any){
    return this.httpClient.delete('https://jsonplaceholder.typicode.com/todos/' + id ,this.httpOptions)
  }
}
