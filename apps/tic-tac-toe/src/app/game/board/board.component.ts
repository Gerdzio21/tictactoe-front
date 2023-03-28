import {Component, OnInit} from '@angular/core';
import {BoardService} from "./board.service";
import {RegistrationService} from "../../register/registration.service";
import {GameStatus, getPlayerFromString, Player} from "./game-status";
import {interval, Observable, startWith, Subscription, switchAll, switchMap} from "rxjs";
import {HttpErrorResponse} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
})
export class BoardComponent implements OnInit {
  squares: any[] = [];
  xIsNext?: boolean;
  game?: GameStatus;
  uid!: string;
  winner?: Player | null;
  opponentSign?: string;
  timeInterval!: Subscription;

  constructor(private boardService: BoardService, private registrationService: RegistrationService, private router: Router) {
  }

  ngOnInit(): void {
    this.uid = this.registrationService.uid;
    this.winner = null;
    this.timeInterval = interval(1000).pipe(
      startWith(0),
      switchMap(() => this.boardService.getBoard(this.uid))
    ).subscribe(response => {
      this.updateBoard(response)
    }, (error: HttpErrorResponse) => {
      if (error.status === 503) {
      this.router.navigate([`/register`])
    }console.log(error)});
    this.squares = Array(9).fill(undefined);
  }

  updateBoard(response: GameStatus): void {
    this.game = response
    this.game?.mySign === "X" ? this.opponentSign = "O" : this.opponentSign = "X";
    this.winner = getPlayerFromString(this.game.winner)
    for (let idx = 0; idx < 9; idx++) {
      if (this.game.board[idx] != "EMPTY") {
        this.squares.splice(idx, 1, this.game.board[idx]);
      }
    }
  }

  makeMove(idx: number): void {
    if (this.game?.mySign === this.game?.turnSign)
      if (!this.squares[idx]) {
        this.boardService.makeMove(this.uid, idx).subscribe(response => {
          this.squares.splice(idx, 1, this.game?.turnSign);
        })

      }
  }

  amWinner() {
    if (this.isGameOver()) {
      return this.winner?.uid === this.uid
    }
    return false;
  }

  isGameOver() {
    return this.winner != null
  }

  ngOnDestroy(): void {
    this.timeInterval.unsubscribe()
  }

}
