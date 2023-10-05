import { Injectable } from '@angular/core';
import { TodoList } from '../../Models/todo-list.model';
import { TodoItems } from '../../Models/todo-items.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todoListArray: TodoList[] = [];

  constructor() {

    const todoList = new TodoList('default');
    todoList.todos.push(new TodoItems('Somthing to do'));
    todoList.todos.push(new TodoItems('some other thing to do'));

    const todoList2 = new TodoList('work');
    todoList2.todos.push(new TodoItems('work to do'));
    todoList2.todos.push(new TodoItems('some tore work to do'));
    todoList2.todos.push(new TodoItems('and again work to do'));

    const todoList3 = new TodoList('Personnal');

    this.todoListArray.push(todoList);
    this.todoListArray.push(todoList2);
    this.todoListArray.push(todoList3);
    
   }

   getTodList(){
    return this.todoListArray;
   }
}
