import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable, tap} from 'rxjs';
import {RegistrationService} from "./registration.service";

@Injectable({
  providedIn: 'root'
})
export class IsRegisteredGuard implements CanActivate {
  constructor(private registrationService: RegistrationService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.registrationService.isRegistered$.pipe(
      tap((isRegistered) => {
        if (!isRegistered) {
          this.router.navigate([`/register`]);
          //redirection
        }
      })
    );
  }

}
