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




}
