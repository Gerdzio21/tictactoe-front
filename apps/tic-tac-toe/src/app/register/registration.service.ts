import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, tap} from "rxjs";
import {User} from "./user";
import {RegisterService} from "./register.service";
import {HttpErrorResponse} from "@angular/common/http";
import {GameService} from "../game/game.service";

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  private _isRegistered$ = new BehaviorSubject<boolean>(false);
  private readonly UID = 'UID';
  isRegistered$ = this._isRegistered$.asObservable();

  get uid(): any {
    return sessionStorage.getItem(this.UID);
  }

  constructor(
    private RegisterService: RegisterService,
    private gameService: GameService
  ) {
    this._isRegistered$.next(!!this.uid);
    if(this.uid != null) {
      this.gameService.deleteGame(this.uid).subscribe(response => {
      }, (error: HttpErrorResponse) => {
        //console.log(error)
      });
    }
    sessionStorage.clear();
  }

  register(nick: string): Observable<User> {
    return this.RegisterService.register(nick).pipe(
      tap((response: any) => {
        this._isRegistered$.next(true);
        sessionStorage.setItem(this.UID, response.uid);
      })
    );
  }
}
