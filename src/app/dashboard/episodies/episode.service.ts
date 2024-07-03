import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Episode, EpisodeResponse } from './episodie';





@Injectable({
  providedIn: 'root'
})
export class EpisodeService {

  private apiUrl = 'https://rickandmortyapi.com/api/episode';

  constructor(private http: HttpClient) {}

  getOddEpisodes(): Observable<Episode[]> {
    return this.http.get<EpisodeResponse>(this.apiUrl).pipe(
      map(response => response.results.filter((episode: Episode) => episode.id % 2 !== 0))
    );
  }

}
