import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {GameStatus} from "./board/game-status";


@Injectable({
  providedIn: 'root'
})
export class GameService {
  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {
  }

  getGame(uid: string): Observable<GameStatus> {
    const params = new HttpParams().set('uid', uid);
    return this.http.get<GameStatus>(`${this.baseUrl}/game`, {params})
  }

  deleteGame(uid: string): Observable<any> {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: {
        uid: uid
      },
    };
    return this.http.delete<any>(`${this.baseUrl}/game`, options)
  }

}
