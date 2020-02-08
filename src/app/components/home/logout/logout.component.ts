import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private router: Router, private chatService: ChatService) { }

  ngOnInit() {
    this.chatService.disconnect()
    this.handleLogout()
  }

  handleLogout() {
    sessionStorage.clear()
    this.router.navigate(['login'])
  }

}
