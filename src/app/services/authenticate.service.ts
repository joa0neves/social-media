import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { User, isNullOrEmpty } from '../models/user';
import { map } from 'rxjs/operators';
import jwtDecode from 'jwt-decode';


@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
  private sessionUserSubject = new BehaviorSubject<User | null>(this.loadUserFromStorage());

  public get sessionUser(): User | null {
    return this.sessionUserSubject.value;
  }

  constructor(private http: HttpClient) {}

  login(email: string,password: string):Observable<User>{
    return this.http.post<string>('localhost/auth',{email,password}).pipe(
      map((res:string)=>{
        //decode token => user
        const user:User = JSON.parse(jwtDecode(res));
        /*const user:User = {
          id: decoded.id,
          email: '',
          firstName: '',
          lastName: ''};*/
        this.updateLocalStorage(user);
        return user;
      })
      );
  }

  updateLocalStorage(user: User): void {
    localStorage.setItem('sessionUser', JSON.stringify(user));
    this.sessionUserSubject.next(user);
  }

  private loadUserFromStorage(): User | null {
    const isEmpty = isNullOrEmpty(localStorage.getItem('sessionUser'));
    if (isEmpty) {
      return null;
    }

    const item = localStorage.getItem('sessionUser');

    return item ? JSON.parse(item) : null;
  }



}


