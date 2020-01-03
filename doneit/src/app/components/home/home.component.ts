import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
  }

  handleHello() {
    this.httpClient.get("http://localhost:8080/hello").subscribe(
      result => {
        console.log(result)
      },
      error => {
        console.log(error)
      }
    )
  }

}
