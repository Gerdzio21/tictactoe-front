import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, tap} from "rxjs";
import {User} from "./user";
import {RegisterService} from "./register.service";

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
  ) {
    this._isRegistered$.next(!!this.uid);
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
