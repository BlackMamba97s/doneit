import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ErrorComponent } from './components/error/error.component';
import { RegisterComponent } from './components/register/register.component';
import { RouteGuardService } from './services/route-guard.service';
import { HomeComponent } from './components/home/home.component';
import { TodoComponent } from './components/todo/todo.component';
import { LogoutComponent } from './components/home/logout/logout.component';
import { ListTodoComponent } from './components/list-todo/list-todo.component';
import { TodoCardComponent } from './components/todo-card/todo-card.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent },
  { path: 'update-todo/:id', component: TodoComponent, canActivate: [RouteGuardService] },
  { path: 'create-todo', component: TodoComponent, canActivate: [RouteGuardService] },
  { path: 'list-todos', component: ListTodoComponent, canActivate: [RouteGuardService] },
  { path: 'todo-card', component: TodoCardComponent },
  { path: 'logout', component: LogoutComponent, canActivate: [RouteGuardService] },
  // {path: 'register', component: RegisterComponent, canActivate: [RouteGuardService]},
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
