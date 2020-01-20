import { Component, OnInit } from '@angular/core';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { LoginAuthenticationService } from 'src/app/services/login-authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  private username: string

  constructor(private route: ActivatedRoute, private userAuth: LoginAuthenticationService) {

  }

  ngOnInit() {
    this.username = sessionStorage.getItem("username")
  }



}
