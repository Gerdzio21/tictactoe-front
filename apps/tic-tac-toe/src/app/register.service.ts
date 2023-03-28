import { Injectable } from '@angular/core';
import {environment} from "../environments/environment";
import {HttpBackend, HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "./interface/user";



@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private url = environment.baseUrl;
  private httpClient: HttpClient;

  constructor(private httpBackend: HttpBackend) {
    this.httpClient = new HttpClient(httpBackend); //używamy HTTP Backend bo nie istniej token, który jest wkładany do headera przez interceptor
  }

  register(nick: string): Observable<User> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.post<User>(`${this.url}/register`, JSON.stringify({nick: nick}),{headers: headers});
  }
}
