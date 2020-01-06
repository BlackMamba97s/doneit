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

  constructor(private route: ActivatedRoute, private userAuth: LoginAuthenticationService) {

  }

  ngOnInit() {

  }

  selectActiveButton() {
    let currentPath = this.route.snapshot.routeConfig.path;
    switch (currentPath) {
      case "create-todo": this.createTodo = 1
        break
      case "home": this.home = 1
        break
    }
  }

  test(){
    this.selectActiveButton()
  }
}
