import { Todo } from './../todo';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {

  @Input() todo: Todo = {
    id: 0,
    conteudo: "teste 2",
    modelo: "modelo1"
  }

  widthTodo():string{
    if(this.todo.conteudo.length >= 256){
      return 'todo-g'
    }else{
      return 'todo-p'
    }
  }
}
