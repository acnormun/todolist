import { Todo } from './todo/todo';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoserviceService {

  private readonly API = 'http://localhost:3000/todo'

  constructor(private http: HttpClient) { }

  list(): Observable<Todo[]>{
    return this.http.get<Todo[]>(this.API);
  }

  create(todo:Todo): Observable<Todo>{
    return this.http.post<Todo>(this.API, todo);
  }

  search(id: number): Observable<Todo>{
    const url = `${this.API}/${id}`;
    return this.http.get<Todo>(url);
  }

  delete(id: number): Observable<Todo>{
    const url = `${this.API}/${id}`;
    return this.http.delete<Todo>(url);
  }

  edit(todo: Todo): Observable<Todo>{
    const url = `${this.API}/${todo.id}`;
    return this.http.put<Todo>(url, todo);
  }

  




}
