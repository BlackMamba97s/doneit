import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-complete-register',
  templateUrl: './complete-register.component.html',
  styleUrls: ['./complete-register.component.css']
})
export class CompleteRegisterComponent implements OnInit {

  private url = "https://www.publicdomainpictures.net/pictures/40000/nahled/question-mark.jpg";

  constructor() { }

  ngOnInit() {
  }

  public addFile(event: any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.onload = (event: any) => {
        this.url = event.target.result;
      }
      reader.readAsDataURL(event.target.files[0]);
    }
  }

}
