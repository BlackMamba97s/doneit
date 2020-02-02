import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generic-board',
  templateUrl: './generic-board.component.html',
  styleUrls: ['./generic-board.component.css']
})
export class GenericBoardComponent implements OnInit {

  activatedBoard: number = 0
  constructor() { }

  ngOnInit() {
  }

  showBoard(board){
    this.activatedBoard = board
  }

}
