import { TodoeditComponent } from './todo/todoedit/todoedit.component';
import { TododeleteComponent } from './todo/tododelete/tododelete.component';

import { TodocreateComponent } from './todo/todocreate/todocreate.component';
import { TodolistComponent } from './todo/todolist/todolist.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'todolist', pathMatch:'full'},
  {path: "todolist", component: TodolistComponent},
  {path: 'todocreate', component: TodocreateComponent},
  {path: 'todos/tododelete/:id', component: TododeleteComponent},
  {path: 'todos/todoedit/:id', component: TodoeditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
