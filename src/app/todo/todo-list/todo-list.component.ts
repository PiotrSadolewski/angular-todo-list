import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { Todo } from '../models/todo';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent{
  constructor(private readonly todoService: TodoService) {}

  todos$: Observable<Todo[]> = this.todoService.getTodos();



  // updateTodo(todo: Todo) {
  //   this.todoService.updateTodo(todo);
  // }

  // async newTodo(title: string) {
  //   await this.todoService.addTodo(title);
  //   this.todos = this.todoService.todos;
  // }
}
