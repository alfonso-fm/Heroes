import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap, of, map, catchError } from 'rxjs';

import { environments } from './../../../environments/environments';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseURL = environments.baseUrl
  private user?: User
  constructor(private http: HttpClient) { }

  get currentUser(): User|undefined{
    if ( !this.user ) return undefined;
    return structuredClone(this.user);
  }

  login( email: string, password: string ): Observable<User>{
    //http.post('login', {email, password});
    return this.http.get<User>(`${ this.baseURL }/users/1`)
    .pipe(
      tap( user => this.user = user ),
      tap( user => localStorage.setItem('token', 'aduytasidasgjh') ),
    );
  }

  checkAuthentication(): Observable<boolean> {
    //Authenticate is false
    if( !localStorage.getItem('token') ) return of(false);

    const token = localStorage.getItem('token');

    return this.http.get<User>(`${ this.baseURL }/users/1`)
    .pipe(
      tap( user => this.user = user),
      map( user => !!user ),
      catchError( error  => of(false) )
    );
  }

  logout() {
    this.user = undefined;
    localStorage.removeItem('token');
  }
}
