import { Component } from '@angular/core';
import { TodoService } from './services/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todo';
  newItem:string = '';
  listTodo:any[]= [];
  constructor(private todoService:TodoService){
    this.getTodoList()
  }

  getTodoList(){
    this.todoService.getTodoList().subscribe((response:any) => {
      console.log(response)
      this.listTodo = response;
    })
  }
  newElement(){
    console.log(this.newItem)
    let createItem = {
      title: this.newItem,
      completed: false,
      userId: 1
    }
    this.todoService.addTodoElement(createItem).subscribe((response => {
      console.log('added new ',response)
      this.getTodoList()
    }))
  }

  removeElement(data:any){
    this.todoService.removeTodoElement(data.id).subscribe((response => {
      console.log('removed ',response)
      this.getTodoList()
    }))
  }
}
