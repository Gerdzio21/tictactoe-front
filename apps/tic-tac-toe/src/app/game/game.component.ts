import {Component, OnInit} from '@angular/core';
import {GameService} from "./game.service";
import {RegistrationService} from "../register/registration.service";
import {HttpErrorResponse} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
})
export class GameComponent implements OnInit {
  waitingForOponent?: boolean;
  gameExsist?: boolean;
  uid!: string;

  constructor(private gameService: GameService, private registrationService: RegistrationService, private router: Router) {
    this.waitingForOponent = true, this.gameExsist = false;
  }

  ngOnInit(): void {
    this.uid = this.registrationService.uid;
    this.findGame();

  }

  findGame() {
    this.gameService.getGame(this.uid).subscribe(
      (response) => {
        this.waitingForOponent = false;
        this.gameExsist = true;
      },
      (error: HttpErrorResponse) => {
        if (error.status === 404) {
          setTimeout(() => {
            this.findGame()
          }, 500);
        }
        if (error.status === 503) {
          this.router.navigate([`/register`])
        }
      }
    )
  }


  isWaitingForOponent() {
    return this.waitingForOponent;
  }

  isGameExsist() {
    return this.gameExsist;
  }

  newGame() {
    this.gameService.deleteGame(this.uid).subscribe(response => {
    }, (error: HttpErrorResponse) => {
      //console.log(error)
    });
    this.router.navigate([`/register`])
  }
}
