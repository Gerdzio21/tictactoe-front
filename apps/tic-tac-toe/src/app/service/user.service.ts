import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
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
    const headers = new Headers();
    headers.append('Access-Control-Allow-Headers', 'Content-Type');
    headers.append('Access-Control-Allow-Methods', 'GET');
    headers.append('Access-Control-Allow-Origin', '*');

    return this.http.post<User>(`${this.baseUrl}/registration`, nick);
  }
  makeMove(uid: string, field: number){
    const params: Move ={
      uid: uid,
      field: field
    }
    return this.http.post(`${this.baseUrl}/game/move`, params)
  }
  getGame(uid: string): Observable<Game>{
    let params = new HttpParams().set('uid',uid);
    return this.http.get<Game>(`${this.baseUrl}/game`, {params})
  }

}
