import { TodoserviceService } from './../../todoservice.service';
import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit{

  todoList: Todo[] = [];
  
  constructor(private service: TodoserviceService){}
  
  ngOnInit(): void {
      this.service.list().subscribe((todoList) => {
        this.todoList = todoList;
      })
  }

}
