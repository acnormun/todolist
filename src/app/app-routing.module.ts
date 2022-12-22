import { TodoeditComponent } from './todo/todoedit/todoedit.component';
import { TodolistComponent } from './todo/todolist/todolist.component';
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'todolist', pathMatch:'full'},
  {path: "header", component: HeaderComponent},
  {path: "todolist", component: TodolistComponent},
  {path: "todoedit", component: TodoeditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
