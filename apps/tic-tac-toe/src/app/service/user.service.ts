import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../interface/user";
import {environment} from "../../environments/environment";
import {Game} from "../interface/game";
import {Move} from "../interface/move";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) { }

  createUser(nick: string): Observable<User>{
    // const headers = new Headers();
    // headers.append('Access-Control-Allow-Headers', 'Content-Type');
    // headers.append('Access-Control-Allow-Methods', 'GET');
    // headers.append('Access-Control-Allow-Origin', '*');
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<User>(`${this.baseUrl}/register`, JSON.stringify({nick: nick}),{headers: headers});
  }
  makeMove(uid: string, field: number){
    const params: Move ={
      uid: uid,
      field: field
    }
    return this.http.post(`${this.baseUrl}/game/move`, params)
  }
  getGame(uid: string): Observable<Game>{
    const params = new HttpParams().set('uid',uid);
    return this.http.get<Game>(`${this.baseUrl}/game`, {params})
  }

}
