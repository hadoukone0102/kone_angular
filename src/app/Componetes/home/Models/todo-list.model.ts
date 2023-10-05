import { TodoItems } from "./todo-items.model";

export class TodoList{
    id:number = Date.now() + Math.round(Math.random() * 1000);
    name:string ='';
    todos:TodoItems[] = [];

    constructor(name: string){
        this.name = name;
    }
    
}