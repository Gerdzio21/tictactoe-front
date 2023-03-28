import { Component, OnInit } from '@angular/core';
import {Game} from "../interface/game";
import {UserService} from "../service/user.service";

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
})
export class BoardComponent implements OnInit {
  squares : any[] = [];
  xIsNext?: boolean;
  isPlayerCreated?: boolean;
  winner?: string;
  game?: Game;
  //uid: string;

  constructor(private userService: UserService) {}
  ngOnInit(): void {
      this.newGame();
  }
  newGame():void {
    //this.game = this.userService.getGame(this.uid);
    this.squares = Array(9).fill(undefined);
    this.winner = undefined;
    this.xIsNext = true;
  }

  get player(){
    return this.xIsNext ? 'X' : 'O' ;
  }
  makeMove(idx:number) :void{
    if (!this.squares[idx]){
      this.squares.splice(idx,1,this.player);
      this.xIsNext=!this.xIsNext;
    }
  }
}
