import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgForm } from '@angular/forms';
import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ErrorComponent } from './components/error/error.component';
import { RegisterComponent } from './components/register/register.component';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { TodoBoardComponent } from './components/home/todo-board/todo-board.component';
import { LogoutComponent } from './components/home/logout/logout.component';
import { HttpInterceptorService } from './services/http-interceptor.service';
import { TodoComponent } from './components/todo/todo.component';
import { ListTodoComponent } from './components/list-todo/list-todo.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodoCardComponent } from './components/todo-card/todo-card.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ErrorComponent,
    RegisterComponent,
    HomeComponent,
    TodoBoardComponent,
    LogoutComponent,
    TodoComponent,
    ListTodoComponent,
    NavbarComponent,
    FooterComponent,
    TodoCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
