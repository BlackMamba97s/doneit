import { Component, OnInit } from '@angular/core';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { LoginAuthenticationService } from 'src/app/services/login-authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  private isUserLogged
  private createTodo = 0
  private home = 0
  private sidebarAction = 1 //show sidebar

  constructor(private route: ActivatedRoute, private userAuth: LoginAuthenticationService) {

  }

  ngOnInit() {

  }

  activeHome(){
    this.createTodo = 0
    this.home = 1
  }

  activeTodo(){
    this.home = 0
    this.createTodo = 1
  }

  handleSidebar(){
    this.sidebarAction === 1? this.sidebarAction = 0 : this.sidebarAction = 1
  }
}
