import { ActivatedRoute, Router } from '@angular/router';
import { TodoserviceService } from './../../todoservice.service';
import { Todo } from './../todo';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tododelete',
  templateUrl: './tododelete.component.html',
  styleUrls: ['./tododelete.component.css']
})
export class TododeleteComponent implements OnInit{

  todo: Todo = {
    id: 0,
    conteudo:'',
    modelo: ''
  }

  constructor(
    private service: TodoserviceService,
    private router: Router,
    private route: ActivatedRoute
  ){}

  ngOnInit(): void {
      const id = this.route.snapshot.paramMap.get("id");
      this.service.search(parseInt(id!)).subscribe((todo)=>{
        this.todo = todo;
      })

      console.log(this.todo.id)
  }

  deleteTodo(){
    if(this.todo.id){
      this.service.delete(this.todo.id).subscribe(()=>{
        this.router.navigate(['/todolist'])
      })
    }
  }
  cancel(){
    this.router.navigate(['/todolist'])
  }

}
