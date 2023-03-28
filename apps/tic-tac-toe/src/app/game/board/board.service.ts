import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpParams} from "@angular/common/http";
import {MoveParams} from "./move-params";
import {Observable} from "rxjs";
import {GameStatus} from "./game-status";

@Injectable({
  providedIn: 'root'
})
export class BoardService {
  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {
  }

  makeMove(uid: string, field: number) {
    const body: MoveParams = {
      uid: uid,
      field: field
    }
    return this.http.post(`${this.baseUrl}/game/move`, body)
  }

  getBoard(uid: string): Observable<GameStatus> {
    const params = new HttpParams().set('uid', uid);
    return this.http.get<GameStatus>(`${this.baseUrl}/game`, {params})
  }
}
