import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { environments } from 'src/environments/environments';
import { Hero } from '../interfaces/hero';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  private baseUrl: string = environments.baseUrl;
  constructor(private http: HttpClient) { }

  getHeroes(): Observable<Hero[]>{
    return this.http.get<Hero[]>(`${ this.baseUrl }/heroes`)
  }

  getHeroById( id: String ): Observable<Hero|undefined>{
    return this.http.get<Hero>(`${ this.baseUrl }/heroes/${ id }`)
    .pipe(
      catchError( error => of ( undefined ) )
    )
  }

  getSuggestion( query: string): Observable<Hero[]>{
    return this.http.get<Hero[]>(`${this.baseUrl}/heroes?q=${query}&_limit=6`);
  }

  addHero(hero: Hero):Observable<Hero>{
    return this.http.post<Hero>(`${this.baseUrl}/heroes`, hero);
  }

  updateHero(hero: Hero): Observable<Hero>{
    if(!hero.id) throw Error('Hero id is required');
    return this.http.patch<Hero>(`${this.baseUrl}/heroes/${ hero.id}`, hero);
  }

  deleteHeroById(id: string): Observable<boolean>{
    console.log(id);
    return this.http.delete<boolean>(`${ this.baseUrl }/heroes/${ id }`)
    .pipe(
      map( resp => true ),
      catchError( err => of (false) )
    );
  }

}
