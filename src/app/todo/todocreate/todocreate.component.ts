import { TodoserviceService } from './../../todoservice.service';
import { Todo } from './../todo';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todocreate',
  templateUrl: './todocreate.component.html',
  styleUrls: ['./todocreate.component.css']
})
export class TodocreateComponent {

  todo: Todo = {
    conteudo: '',
    modelo: ""
  }

  constructor(
    private service: TodoserviceService,
    private router: Router
  ){}

  createTodo(){
    this.service.create(this.todo).subscribe(() =>{
      this.router.navigate(['/todolist'])
    })
  }

  cancel(){
    this.router.navigate(['/todolist'])
  }

}
