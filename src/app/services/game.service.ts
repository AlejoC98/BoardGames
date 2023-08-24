import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments';
import { Game } from '../interfaces/game';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private http: HttpClient) { }

  searchByName(keyword: string): Observable<Game> {
    const alterKeyWord = keyword.replace(/\s/g, '+');
    return this.http.get<Game[]>(`https://api.boardgameatlas.com/api/search?name=${alterKeyWord}&client_id=${environment.boardgameAPI}`).pipe(
      map(response => response['games'])
    )
  };
}
