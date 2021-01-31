import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  register(email: string, password: string,firstname:string,lastname:string):Observable<string> {
    return this.http.post<string>('localhost/user/new',{email,password,firstname,lastname}).pipe(
      map((res:string)=>{
        return res;
      })
    );
  }
}
