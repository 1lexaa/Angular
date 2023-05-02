import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable
({
  providedIn: 'root'
})

export class MovieService 
{

  private readonly apiKey = '37b1524a';

  constructor(private http: HttpClient) {}

  getMovieInfo(title: string): Observable<any>
  {
    if (!title) 
      return of(null); 
    
    return this.http.get(`http://www.omdbapi.com/?apikey=${this.apiKey}&t=${title}`); 
  }
}