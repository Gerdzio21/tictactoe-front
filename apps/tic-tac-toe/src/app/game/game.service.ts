import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {GameStatus} from "./board/game-status";

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) { }
  getGame(uid: string): Observable<GameStatus>{
    const params = new HttpParams().set('uid',uid);
    return this.http.get<GameStatus>(`${this.baseUrl}/game`, {params})
  }
}
