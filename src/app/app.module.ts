import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TodolistComponent } from './todo/todolist/todolist.component';
import { TodoeditComponent } from './todo/todoedit/todoedit.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TodosComponent } from './todo/todos/todos.component';
import { FooterComponent } from './footer/footer.component';
import { TodocreateComponent } from './todo/todocreate/todocreate.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TodolistComponent,
    TodoeditComponent,
    TodosComponent,
    FooterComponent,
    TodocreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
