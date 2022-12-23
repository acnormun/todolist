import { Router, ActivatedRoute } from '@angular/router';
import { TodoserviceService } from './../../todoservice.service';
import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todoedit',
  templateUrl: './todoedit.component.html',
  styleUrls: ['./todoedit.component.css']
})
export class TodoeditComponent implements OnInit{

  todo: Todo = {
    id: 0,
    conteudo: '',
    modelo: ''
  }

  constructor(
    private service: TodoserviceService,
    private router: Router,
    private route: ActivatedRoute
  ){}

  ngOnInit(): void {
      const id = this.route.snapshot.paramMap.get('id');
      this.service.search(parseInt(id!)).subscribe((todo)=>{
        this.todo = todo;
      })
  }

  editTodo(){
    this.service.edit(this.todo).subscribe(()=>{
      this.router.navigate(['/todolist'])
    })
  }

  cancel(){
    this.router.navigate(['/todolist'])
  }

}
